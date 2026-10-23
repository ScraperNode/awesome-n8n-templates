# 🎬 Convert podcasts to LinkedIn articles with WayinVideo and GPT-4o-mini

> ⚡ **22 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Submit your podcast or video URL using a simple form and the workflow automatically transcribes the full episode with speaker labels and timestamps. GPT-4o-mini then reads the transcript and writes a complete LinkedIn newsletter article — headline, 400–600 word body, five key takeaways, and hashtags — following seven LinkedIn readability rules. The finished draft is saved to Google Sheets with a Status of "Draft" so you can review and publish when ready. Built for podcast hosts, content marketers, and personal brand builders who want to turn every episode into a LinkedIn article without writing from scratch.

---

## What This Workflow Does

- **Transcribes your podcast with speaker labels** — [WayinVideo](https://wayin.ai/api/) processes the full episode and returns each segment attributed to the correct speaker with timestamps
- **Polls automatically until transcription is complete** — Waits 60 seconds then checks the status repeatedly every 30 seconds until the transcript is ready, with no manual monitoring needed
- **Formats the transcript for AI analysis** — Structures every segment as speaker name with timestamp so GPT understands who said what and when
- **Writes a complete LinkedIn article** — GPT-4o-mini produces a headline, full 400–600 word article body, five key takeaways starting with action verbs, and 5–8 relevant hashtags
- **Applies LinkedIn readability rules** — The AI follows seven specific rules: short paragraphs, strong opening hook, human conversational tone, no filler, consistent tone throughout, and a closing CTA
- **Saves the draft to Google Sheets** — Appends a row with headline, article, key takeaways, hashtags, word count, episode duration, and Status set to "Draft" — ready for your review before publishing

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **LinkedIn Drafts**)

### Credentials Required
- WayinVideo API key (pasted directly into **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**)
- OpenAI API key
- Google Sheets OAuth2

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**. Missing either one will cause the workflow to fail.

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Transcription** → find the `Authorization` header value that says `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Transcript Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` again with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **LinkedIn Drafts** → add these 10 column headers in row 1: `Podcast Title`, `Video URL`, `Episode Duration (min)`, `LinkedIn Headline`, `LinkedIn Article`, `Key Takeaways`, `Hashtags`, `Word Count`, `Generated On`, `Status`

7. **Connect Google Sheets** — Open node **11. Google Sheets — Save LinkedIn Draft** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access

8. **Update the Sheet ID in node 11** — In node **11. Google Sheets — Save LinkedIn Draft**, the document ID currently says `YOUR_GOOGLE_SHEET_ID` → click the document field → select your actual spreadsheet from the list, or manually replace the ID with the string between `/d/` and `/edit` in your Sheet URL

9. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Podcast URL + Details** → open it in a browser to submit your first episode

---

## How It Works (Step by Step)

**Step 1 — Form: Podcast URL + Details**
You open the form URL in a browser and fill in five fields: the podcast or video URL (YouTube, Zoom, Vimeo, or any direct link), the episode title, the host and guest name, the target audience, and optionally your preferred LinkedIn tone. Tone defaults to "Professional and insightful" if left blank. Submitting the form starts the workflow.

**Step 2 — HTTP: WayinVideo — Submit Transcription**
The podcast URL is sent to the WayinVideo API with the target language set to English. WayinVideo accepts the job and returns a task ID confirming transcription has started.

**Step 3 — Wait: 60 Seconds**
The workflow pauses for 60 seconds before checking the transcription status for the first time. This gives WayinVideo time to begin processing the audio before the first poll.

**Step 4 — HTTP: WayinVideo — Get Transcript Results**
A GET request checks the WayinVideo results endpoint using the task ID from step 2. It returns the current processing status and, once complete, the full transcript with speaker labels, timestamps, and text for each segment.

**Step 5 — IF: Transcription Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the transcript is ready and the workflow moves forward to formatting. If the status is anything else (NO path — still processing), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4 to check again. This repeats automatically until transcription succeeds.

**Step 6 — Wait: 30 Seconds Retry**
This step handles the not-yet-complete case. The workflow pauses 30 seconds then returns to step 4 for another status check. The loop continues until WayinVideo returns SUCCEEDED.

**Step 7 — Code: Format Transcript**
Each transcript segment is formatted as `[Speaker Name | MM:SS] text` so GPT receives a structured, readable conversation. Total episode duration in minutes is calculated from the last segment's end time. Unique speaker names are collected. Word count is calculated. All form inputs (episode title, host/guest name, target audience, tone, video URL) are also packaged here for the AI prompt.

**Step 8 — AI Agent: Write LinkedIn Newsletter**
GPT-4o-mini receives the formatted transcript as the user message and a detailed system prompt as context. The system prompt provides episode details, specifies seven writing rules (short paragraphs, hook-first, human tone, no filler, consistent tone, CTA at the end, and only use content from the transcript), and specifies the exact output format with labeled sections: HEADLINE, ARTICLE, KEY TAKEAWAYS, and HASHTAGS.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the article writing. It runs with default temperature settings and no custom token cap — the article length is controlled by the prompt instructions (400–600 words for the body).

**Step 10 — Code: Parse AI Output**
The AI output text is parsed using regex to extract each labeled section. The HEADLINE, ARTICLE, KEY TAKEAWAYS, and HASHTAGS sections are each extracted individually. Word count of the final article is calculated. All fields are packaged with the episode title, video URL, and duration for the sheet row.

**Step 11 — Google Sheets: Save LinkedIn Draft**
One row is appended to your LinkedIn Drafts tab with all 10 columns populated: podcast title, video URL, episode duration in minutes, LinkedIn headline, full article, key takeaways, hashtags, word count, generation timestamp, and Status set to "Draft". The draft is now ready for you to open, review, and publish to LinkedIn.

---

## Key Features

✅ **Speaker-labeled transcript** — WayinVideo attributes every sentence to the correct speaker so GPT understands the conversation structure and can reference who said what
✅ **Automatic retry polling** — The workflow checks every 30 seconds after the initial 60-second wait — no manual monitoring needed regardless of episode length
✅ **Seven LinkedIn writing rules enforced** — Short paragraphs, hook-first structure, human tone, no filler, consistent voice, facts only from the transcript, and a closing CTA are all built into the prompt
✅ **Timestamped transcript for context** — Each segment includes the MM:SS timestamp so GPT understands the flow and can reference specific moments in the article
✅ **Draft status in Google Sheets** — Every article saves with Status = Draft so you have a review stage before publishing — nothing goes live without your approval
✅ **Five action-verb takeaways** — The prompt requires exactly five key takeaways each starting with an action verb, making them ready to use as pull quotes or bullet points on LinkedIn
✅ **Tone personalization per episode** — Your chosen LinkedIn tone (professional, casual, data-driven, etc.) is passed to the AI and applied consistently throughout the article

---

## Customisation Options

**Change the retry wait time for longer podcasts** — In node **6. Wait — 30 Seconds Retry**, change the wait duration from 45 seconds (the current value) to 60 or 90 seconds for very long podcasts that take more time to process, reducing unnecessary API calls.

**Add a Gmail notification when the draft is saved** — After node **11. Google Sheets — Save LinkedIn Draft**, add a Gmail step that sends you a brief email with the episode title, headline, and a link to your LinkedIn Drafts sheet so you know when a new draft is ready.

**Save to Google Docs instead of Sheets** — Replace node **11. Google Sheets — Save LinkedIn Draft** with a Google Docs create step that saves the headline and article as a formatted editable document — giving you a word-processor-ready draft alongside the sheet log.

**Add a Slack notification for your content team** — After node **11. Google Sheets — Save LinkedIn Draft**, add a Slack step that posts the episode title, the LinkedIn headline, and today's date to a `#content-drafts` channel so your team knows a new article is ready for review.

**Extract quotes for social media posts** — In node **8. AI Agent — Write LinkedIn Newsletter**, add a sixth output section to the prompt: `PULL QUOTES: List 3 direct quotes from the transcript that would work as standalone social posts, each under 25 words` — then extend the regex in node **10** to capture this section.

---

## Troubleshooting

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Transcription** is replaced with your actual API key — not the placeholder text
- Also confirm the same replacement was made in node **4. WayinVideo — Get Transcript Results** — both nodes require the key
- Check the execution log of node 2 for the exact API error response — a 401 means wrong key, a 422 means the URL format is not supported

**Workflow stuck in the retry loop:**
- Check that the podcast URL is publicly accessible — private, password-protected, or region-blocked videos will not be processed by WayinVideo
- Open the execution log of node **4. WayinVideo — Get Transcript Results** and check the raw response — WayinVideo may have returned a FAILED status with an error message
- If the loop runs indefinitely, deactivate the workflow, fix the video URL, and resubmit

**Transcript is empty after SUCCEEDED:**
- Node **7. Code — Format Transcript** throws an error if the segments array is empty — this means WayinVideo succeeded but returned no transcript data
- Check that the podcast has clear spoken audio — low-quality audio, background music-heavy recordings, or music-only content will not produce usable transcripts
- Try a shorter, clearer clip first to verify the API connection is working correctly

**OpenAI not generating the article:**
- Confirm the API key is connected in node **9. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **8. AI Agent — Write LinkedIn Newsletter** for the raw GPT response
- If the output is missing labeled sections (HEADLINE, ARTICLE, etc.), the regex in node **10. Code — Parse AI Output** will fail to extract the fields — check that the system prompt text in node 8 is intact and has not been accidentally edited

**Google Sheets not logging the draft:**
- Confirm the Google Sheets OAuth2 credential in node **11. Google Sheets — Save LinkedIn Draft** is connected and not expired — re-authorize if needed
- Confirm `YOUR_GOOGLE_SHEET_ID` in node 11 has been replaced with your actual sheet ID — or select your spreadsheet from the document dropdown
- Confirm the tab is named **LinkedIn Drafts** exactly — capitalization and spacing must match

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
