# 🎬 Generate podcast show notes and timestamps with WayinVideo and GPT-4o-mini

> ⚡ **68 views** · 🎬 [Content Creation & Video](../)

## Description

### Description

Submit any podcast episode recording URL along with the episode number, podcast name, host name, episode topic, niche, and CTA link — and optionally a guest name and title if it is an interview episode — and the workflow transcribes and analyzes the full episode automatically. WayinVideo's Transcription API returns a speaker-labeled, timestamped transcript which GPT-4o-mini reads to write eight labeled show notes sections — episode title, SEO description, key takeaways, resources mentioned, timestamped highlights, guest bio, CTA block, and a fully compiled show notes document ready to paste. The GPT prompt adapts automatically for interview episodes versus solo episodes based on whether you provided a guest name. Everything is saved to Google Sheets as one row with Status set to Draft — ready to copy directly into Spotify for Podcasters, Apple Podcasts, or your episode page. Built for podcast producers, solo hosts, and content teams who spend 30–60 minutes per episode writing show notes manually.

---

## What This Workflow Does

- **Transcribes the full episode with speaker labels and timestamps** — [WayinVideo](https://wayin.ai/api/) returns every spoken word with the speaker name and MM:SS timestamp so GPT can extract highlights and quotes from the actual episode content
- **Detects interview vs solo format automatically** — If you provide a guest name in the form, the prompt adapts to write a guest bio and frame the show notes as an interview — if you leave it blank, it treats the episode as solo
- **Generates a compiled FULL_SHOW_NOTES section** — All eight sections are assembled into one complete, copy-paste-ready show notes document — the full block is saved in its own column so you can paste it directly into Spotify, Apple, or a website without reassembling it manually
- **Extracts timestamped highlights from the actual transcript** — GPT picks 6–8 of the most interesting moments from the episode using exact MM:SS timestamps from the transcript — not approximate or invented times
- **Writes an SEO episode description with keyword in the first sentence** — The 150–200 word description follows podcast platform SEO best practice so your episode is discoverable in search
- **Logs only real resources mentioned in the episode** — GPT is instructed to extract only resources, links, or tools that were explicitly named in the recording — no invented or generic resources
- **Saves 19 fields per episode to Google Sheets** — All eight content sections plus episode metadata, word count, duration, recording URL, and CTA link are saved in one row per episode

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **Show Notes Library**)

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**)
- OpenAI API key
- Google Sheets OAuth2

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**. Missing either one will cause the workflow to fail.

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Transcription** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Transcript Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Show Notes Library** → add these 19 column headers in row 1: `Episode Number`, `Episode Title`, `Podcast Name`, `Host`, `Guest`, `Topic`, `Duration`, `Recording URL`, `SEO Description`, `Key Takeaways`, `Resources Mentioned`, `Timestamped Highlights`, `Guest Bio`, `CTA Block`, `Full Show Notes`, `Word Count`, `CTA Link`, `Generated On`, `Status`

7. **Get your Google Sheet ID** — Open your Google Sheet in a browser → copy the string between `/d/` and `/edit` in the URL

8. **Connect Google Sheets** — Open node **11. Google Sheets — Save Show Notes Library** → click the document field → replace `YOUR_GOOGLE_SHEET_ID` by selecting your spreadsheet or entering the Sheet ID manually → click the credential dropdown → add Google Sheets OAuth2 → authorize access

9. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Episode Recording + Details** → open it in a browser to submit your first episode

---

## How It Works (Step by Step)

**Step 1 — Form: Episode Recording + Details**
You open the form URL and fill in up to nine fields. Five are required for all episodes: the recording URL, episode number, podcast name, host name, episode main topic, podcast niche, and CTA or subscribe link. Two are optional: Guest Name and Guest Title / Company — leave these blank for solo episodes and fill them in for interview episodes. The workflow uses whether you provided a guest name to decide how to frame the show notes.

**Step 2 — HTTP: WayinVideo — Submit Transcription**
The episode recording URL is sent to WayinVideo's Transcription API using the `/v2/transcripts` endpoint. WayinVideo accepts the job and returns a task ID. The transcription returns speaker-labeled segments — each with a speaker name, start time, end time, and spoken text.

**Step 3 — Wait: 90 Seconds**
The workflow pauses 90 seconds before the first status check, giving WayinVideo time to transcribe the full episode. Longer episodes may need more polling cycles after this initial wait.

**Step 4 — HTTP: WayinVideo — Get Transcript Results**
A GET request checks the transcription results endpoint using the task ID from step 2. It returns the current status and, once complete, the full transcript array.

**Step 5 — IF: Transcription Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the transcript is ready and the workflow moves forward to formatting. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When the transcript is not yet ready, the workflow waits 30 seconds then returns to step 4 for another check.

**Step 7 — Code: Format Transcript**
Each transcript segment is formatted as `[Speaker | MM:SS] Spoken text` and joined into a single readable block. Total episode duration is calculated and formatted as `MM:SS`. A word count of the transcript and unique speakers list are also extracted. An `isInterviewEpisode` flag is set to true if the Guest Name field was filled in — this flag is passed to the GPT prompt so it knows whether to write a guest bio or a solo note. All nine form inputs are packaged alongside the formatted transcript.

**Step 8 — AI Agent: Write Show Notes**
GPT-4o-mini receives the full formatted transcript as the main input and the episode context in the system prompt. The system prompt includes an inline conditional — if `isInterviewEpisode` is true, the guest name and title are shown; if false, it shows "Format: Solo Episode". GPT writes eight labeled sections: EPISODE_TITLE (60–70 characters with the main keyword), SEO_DESCRIPTION (150–200 words with keyword in the first sentence), KEY_TAKEAWAYS (5–8 specific actionable bullets), RESOURCES_MENTIONED (only things explicitly mentioned in the recording), TIMESTAMPED_HIGHLIGHTS (6–8 moments with exact MM:SS from the transcript), GUEST_BIO (2–3 sentences based only on what was said, or "Solo episode — no guest"), CTA_BLOCK (3–4 line subscribe and review prompt with the CTA link), and FULL_SHOW_NOTES (all sections compiled into one complete copy-paste block).

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the show notes generation.

**Step 10 — Code: Parse Show Notes Output**
All eight labeled sections are extracted from the GPT output using regex. If EPISODE_TITLE, SEO_DESCRIPTION, or FULL_SHOW_NOTES are missing, the step throws a clear error. Word count is calculated from the FULL_SHOW_NOTES section. All episode metadata from step 7 is also packaged for the sheet row.

**Step 11 — Google Sheets: Save Show Notes Library**
One row is appended to your Show Notes Library tab with all 19 columns: episode number, episode title, podcast name, host, guest, topic, duration, recording URL, SEO description, key takeaways, resources mentioned, timestamped highlights, guest bio, CTA block, full show notes, word count, CTA link, generation timestamp, and Status set to Draft.

---

## Key Features

✅ **Adapts automatically for interview vs solo episodes** — The workflow detects whether a guest name was provided and adjusts the GPT prompt accordingly — no separate workflow needed for different episode formats
✅ **FULL_SHOW_NOTES compiled in one step** — All eight sections are assembled into a single copy-paste-ready document — saved in its own column so you can paste the entire thing into Spotify or your website without reassembling
✅ **Exact timestamps extracted from the transcript** — Highlights use the real MM:SS values from the transcript — GPT is instructed not to invent or approximate timestamps
✅ **Resources only extracted from what was actually said** — The prompt explicitly forbids adding generic or invented resources — you only get links and tools the host or guest mentioned in the recording
✅ **Episode duration calculated and formatted** — The total episode length in MM:SS is computed from the last transcript segment and logged in the sheet — useful for show notes headers and episode descriptions
✅ **Word count logged per episode** — The full show notes word count is saved in the sheet so you can verify length before publishing
✅ **Guest bio based only on transcript content** — If it is an interview episode, GPT writes the bio from what was actually said in the recording — not invented credentials

---

## Customisation Options

**Add a retry limit to stop infinite polling** — Before node **6. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check to stop after 15 polls and send a Gmail error notification to the host instead of looping indefinitely.

**Send the show notes to Gmail for review** — After node **11. Google Sheets — Save Show Notes Library**, add a Gmail step that sends the episode title, SEO description, key takeaways, and the full show notes body to a review email address so the host can check before publishing.

**Add a Slack notification when show notes are ready** — After node **11. Google Sheets — Save Show Notes Library**, add a Slack step that posts the episode number, title, guest name (or "Solo"), and a link to the Show Notes Library sheet to a `#podcast-team` channel.

**Increase the number of timestamped highlights** — In the system prompt of node **8. AI Agent — Write Show Notes**, change `6-8 key moments` to `8-10 key moments` for longer episodes with more discussion points worth highlighting.

**Change the SEO description length** — In the system prompt of node **8. AI Agent — Write Show Notes**, change `150-200 word episode description` to a different range — for example `200-250 words` for more detailed descriptions or `100-150 words` for shorter platform-style summaries.

---

## Troubleshooting

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — Episode Recording + Details** after activating
- Make sure all required fields are filled in — Guest Name and Guest Title / Company are optional; all other fields are required

**WayinVideo API key errors:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Transcription** is replaced with your actual key — this workflow uses `/v2/transcripts`, confirm the URL in node 2 is correct
- Confirm the same replacement was made in node **4. WayinVideo — Get Transcript Results** — both steps require the key
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL format is not supported by WayinVideo

**Workflow stuck in the polling loop:**
- Check that the recording URL is publicly accessible — private Zoom links, expired recordings, or login-required videos will not be transcribed
- Open the execution log of node **4. WayinVideo — Get Transcript Results** and check the raw response status — WayinVideo may have returned FAILED with a specific reason
- Long episodes (over 60 minutes) may require many polling cycles before completing — this is expected; the loop continues automatically

**GPT not generating all eight sections or show notes missing:**
- Confirm the API key is connected in node **9. OpenAI — GPT-4o-mini Model** and your account has available credits
- If EPISODE_TITLE, SEO_DESCRIPTION, or FULL_SHOW_NOTES are empty, node **10. Code — Parse Show Notes Output** throws a clear error — check the execution log of node **8. AI Agent — Write Show Notes** for the raw GPT output to see which section is missing
- For very long episodes with dense transcripts, the input may approach GPT's token limit — this is rare but can be resolved by shortening the transcript in step 7

**Google Sheets not saving the row:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **11. Google Sheets — Save Show Notes Library** is replaced with your actual Sheet ID
- Confirm the tab is named **Show Notes Library** exactly and all 19 column headers in row 1 match exactly
- Check that the Google Sheets OAuth2 credential is connected and not expired — re-authorize if needed

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com](https://isawow.com)

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
