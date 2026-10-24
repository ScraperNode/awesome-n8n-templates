# 🎬 Generate YouTube SEO descriptions, chapters, and tags with WayinVideo and GPT-4o-mini

> ⚡ **91 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Submit any YouTube video URL along with your video title, channel name, niche, focus keyword, and a section query for timestamps and the workflow runs two AI processes simultaneously. WayinVideo's Summarization API and Find Moments API both start at the same time — one generating a structured video summary and the other finding chapter transition moments — each with its own independent polling loop. Once both complete, a merge step combines everything and GPT-4o-mini writes a complete YouTube SEO package in one call: an 800–1000 character description with chapters embedded, a standalone chapter list, 15 keyword tags, 6 hashtags, the above-the-fold hook, and SEO notes. Everything is saved to Google Sheets as one row — Status set to Ready — ready to paste directly into YouTube Studio. Built for YouTube creators, video agencies, and content managers who publish regularly and want a complete SEO package generated automatically without writing descriptions manually after every upload.

---

## What This Workflow Does

- **Runs Summarization and Find Moments APIs simultaneously** — Both [WayinVideo](https://wayin.ai/api/) APIs start at the same time from the form submission — not sequentially — so the total processing time is the same as running one
- **Uses two independent polling loops** — Each API has its own 90-second initial wait and 30-second retry loop — neither blocks the other if one takes longer to complete
- **Sorts chapters chronologically and prepends 0:00 Introduction** — All found moments are sorted by start time and a 0:00 Introduction line is added automatically if the first moment does not start at the beginning
- **Generates a full YouTube description with chapters embedded** — The description follows YouTube best practices: focus keyword in the first 100 characters, hook above the fold, bullet points of what viewers will learn, chapters embedded in the body
- **Produces exactly 15 keyword tags and 6 hashtags** — The tag list mixes exact keyword, broad niche, long-tail, and channel-related terms; hashtags include the focus keyword, niche, and discovery hashtags
- **Saves the above-the-fold hook separately** — The first two lines of the description are extracted and saved in their own column so you can check the preview without opening the full description
- **Tracks description character count and tag count** — Both are logged in the sheet so you can verify against YouTube's limits before publishing

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **YouTube SEO**)

### Credentials Required
- WayinVideo API key (pasted into **2a. WayinVideo — Submit Summarization**, **2b. WayinVideo — Submit Find Moments**, **4a. WayinVideo — Get Summary Results**, and **4b. WayinVideo — Get Moments Results**)
- OpenAI API key
- Google Sheets OAuth2

&gt; ⚠️ **WayinVideo API key appears in 4 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in all four: **2a. WayinVideo — Submit Summarization**, **2b. WayinVideo — Submit Find Moments**, **4a. WayinVideo — Get Summary Results**, and **4b. WayinVideo — Get Moments Results**. Missing any one will cause that branch to fail.

**Estimated Setup Time: 20–25 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2a** — Open node **2a. WayinVideo — Submit Summarization** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace the placeholder with your actual key

4. **Add your WayinVideo API key to node 2b** — Open node **2b. WayinVideo — Submit Find Moments** → find the same `Authorization` header → replace the placeholder with the same key

5. **Add your WayinVideo API key to node 4a** — Open node **4a. WayinVideo — Get Summary Results** → find the `Authorization` header → replace the placeholder with your key

6. **Add your WayinVideo API key to node 4b** — Open node **4b. WayinVideo — Get Moments Results** → find the same `Authorization` header → replace the placeholder with your key

7. **Connect OpenAI** — Open node **8. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

8. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **YouTube SEO** → add these 16 column headers in row 1: `Video URL`, `Video Title`, `Channel`, `Niche`, `Focus Keyword`, `Description Hook`, `YouTube Description`, `Description Char Count`, `Chapter Timestamps`, `Total Chapters`, `YouTube Tags`, `Tag Count`, `Hashtags`, `SEO Notes`, `Generated On`, `Status`

9. **Get your Google Sheet ID** — Open your Google Sheet in a browser → copy the string between `/d/` and `/edit` in the URL

10. **Connect Google Sheets** — Open node **10. Google Sheets — Save YouTube SEO Package** → click the document field → replace `YOUR_GOOGLE_SHEET_ID` by selecting your spreadsheet or entering the Sheet ID manually → click the credential dropdown → add Google Sheets OAuth2 → authorize access

11. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Video URL + SEO Details** → open it in a browser to submit your first video

---

## How It Works (Step by Step)

**Step 1 — Form: Video URL + SEO Details**
You open the form URL and fill in seven fields: the YouTube video URL, the video title, the channel name, the content niche, the focus keyword (e.g. "SEO tutorial for beginners"), the section query for timestamps (4–6 descriptive words like "step by step tutorial section transition"), and an optional channel or website link. Submitting the form triggers both API submissions simultaneously.

**Steps 2a and 2b — HTTP: WayinVideo Parallel Submissions**
The form submission triggers two separate API calls at the same time. **2a. WayinVideo — Submit Summarization** sends the video URL to WayinVideo's Summarization API and receives a task ID. **2b. WayinVideo — Submit Find Moments** sends the same URL along with your section query to WayinVideo's Find Moments API with a limit of 12 moments, and receives a separate task ID. Both run independently from this point forward.

**Steps 3a and 3b — Wait: 90 Seconds (Independent)**
Each branch pauses for 90 seconds independently. **3a. Wait — 90 Seconds (Summary)** waits for the summarization branch. **3b. Wait — 90 Seconds (Moments)** waits for the moments branch. Neither branch waits for the other.

**Steps 4a and 4b — HTTP: WayinVideo Results Polling**
**4a. WayinVideo — Get Summary Results** checks the summarization results endpoint using the task ID from step 2a. **4b. WayinVideo — Get Moments Results** checks the find-moments results endpoint using the task ID from step 2b. Each returns its own status and data independently.

**Steps 5a and 5b — IF: Status Checks**
Each branch has its own polling gate. **5a. IF — Summary Complete?** checks whether the summarization status equals `SUCCEEDED`. If YES, the summary branch passes its data to the merge step. If NO, it routes to **5c. Wait — 30 Seconds Retry (Summary)** which pauses 30 seconds then loops back to step 4a. **5b. IF — Moments Complete?** works identically for the moments branch — YES passes to merge, NO routes to **5d. Wait — 30 Seconds Retry (Moments)** which loops back to step 4b. Both loops run independently — if one API finishes before the other, that branch waits at the merge step until the other arrives.

**Steps 5c and 5d — Wait: 30 Seconds Retry (Independent)**
**5c. Wait — 30 Seconds Retry (Summary)** is the summary branch retry. **5d. Wait — 30 Seconds Retry (Moments)** is the moments branch retry. Each loops back only to its own polling step.

**Step 6 — Code: Merge + Format API Results**
This step reads from both completed branches — the summarization data from step 4a and the moments clips array from step 4b — and combines them. The moments clips are sorted chronologically by start time. If the first moment does not start at 0:00, a `0:00 Introduction` line is prepended. All form inputs are also packaged. The combined output is one clean object ready for GPT: the video summary, numbered highlights, WayinVideo tags, formatted chapter list with total count, and all form metadata.

**Step 7 — AI Agent: Write YouTube SEO Package**
GPT-4o-mini receives the summary, highlights, chapter timestamps, and WayinVideo tags as the main input, and the full video context in the system prompt. It generates six labeled sections: YOUTUBE_DESCRIPTION (800–1000 characters with chapters embedded and hashtags at the end, focus keyword in the first 100 characters), CHAPTERS_STANDALONE (clean chapter list for copy-paste), YOUTUBE_TAGS (exactly 15 comma-separated lowercase tags), HASHTAGS (exactly 6 hashtags), DESCRIPTION_HOOK (just the first two lines), and SEO_NOTES (2–3 specific tips for this video's niche).

**Step 8 — OpenAI: GPT-4o-mini Model**
This is the language model powering the SEO package generation.

**Step 9 — Code: Parse SEO Output**
All six labeled sections are extracted from the GPT output using regex. The tag count is calculated by splitting the tags string on commas. The description character count is measured. If the YouTube description or tags are missing, the step throws a clear error. All metadata from the merge step is also packaged for the sheet row.

**Step 10 — Google Sheets: Save YouTube SEO Package**
One row is appended to your YouTube SEO tab with all 16 columns: video URL, video title, channel, niche, focus keyword, description hook, full YouTube description, character count, chapter timestamps, total chapters, YouTube tags, tag count, hashtags, SEO notes, generation timestamp, and Status set to Ready.

---

## Key Features

✅ **Two WayinVideo APIs run simultaneously** — Summarization and Find Moments both start from the form submission at the same time — saving time compared to running them sequentially
✅ **Two fully independent polling loops** — Each API has its own retry loop so if one takes longer than the other, they never block each other
✅ **0:00 Introduction auto-prepended** — The merge step checks whether the first found moment is at the very start — if not, a 0:00 Introduction line is added automatically
✅ **YouTube description character count tracked** — The sheet logs the exact character length of the description so you can verify it falls within YouTube's recommended range before publishing
✅ **Above-the-fold hook saved separately** — The first two lines of the description are extracted into their own column so you can quickly check what viewers see before clicking "more"
✅ **Exactly 15 tags and 6 hashtags enforced** — GPT is instructed to generate exactly these counts per YouTube SEO best practice — not a variable number
✅ **SEO notes specific to the niche** — The SEO_NOTES section gives 2–3 actionable tips tailored to the video's specific topic and niche — not generic YouTube advice

---

## Customisation Options

**Increase the number of chapter moments returned** — In node **2b. WayinVideo — Submit Find Moments**, change `"limit": 12` to a higher number such as `15` to find more chapter transitions — useful for longer videos with many distinct sections.

**Add a retry limit to stop infinite loops on either branch** — Before nodes **5c. Wait — 30 Seconds Retry (Summary)** and **5d. Wait — 30 Seconds Retry (Moments)**, add Set steps that increment separate poll counters, then add second IF checks on each to stop after 15 polls and send a Gmail error notification rather than looping indefinitely.

**Send the SEO package to Gmail for review** — After node **10. Google Sheets — Save YouTube SEO Package**, add a Gmail step that sends the video title, description hook, all 15 tags, and a link to the YouTube SEO sheet so you can review the package in your inbox without opening the sheet.

**Add a Slack notification when the package is ready** — After node **10. Google Sheets — Save YouTube SEO Package**, add a Slack step that posts the video title, focus keyword, total chapters, and a sheet link to a `#youtube-content` channel so your team knows a new package is ready.

**Change the chapter query for different video styles** — The Section Query for Timestamps field in the form directly drives what moments WayinVideo finds — try "main topic introduction and explanation" for educational videos or "demonstration and example section" for tutorial-style content.

---

## Troubleshooting

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — Video URL + SEO Details** after activating
- Make sure all six required fields are filled in — the Channel / Website Link field is optional

**WayinVideo API key errors on either branch:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` is replaced in all four steps: **2a. WayinVideo — Submit Summarization**, **2b. WayinVideo — Submit Find Moments**, **4a. WayinVideo — Get Summary Results**, and **4b. WayinVideo — Get Moments Results** — each branch has two steps and missing either one on that branch causes it to fail independently
- Check the execution log of whichever step failed — a 401 means wrong key, a 422 means invalid URL or request format
- Confirm your WayinVideo account is active and the key has not expired

**Either polling loop stuck and not completing:**
- Check that the YouTube video URL is publicly accessible — private videos, unlisted videos requiring login, or unavailable videos will cause WayinVideo to fail on that branch
- Open the execution log of the failing step (**4a** or **4b**) and check the raw response — WayinVideo may have returned FAILED with a specific reason
- The two branches are independent — if only one gets stuck, the other will complete and wait at the merge step; identify which branch failed and fix it specifically

**GPT not generating all six sections:**
- Confirm the API key is connected in node **8. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **7. AI Agent — Write YouTube SEO Package** for the raw output — if the YOUTUBE_DESCRIPTION or YOUTUBE_TAGS sections are missing, node **9. Code — Parse SEO Output** throws a clear error
- If the video summary is very short or the moments list is empty, GPT may produce a thinner output — confirm that both APIs returned data in step 6's execution log

**Google Sheets not saving the row:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **10. Google Sheets — Save YouTube SEO Package** is replaced with your actual Sheet ID
- Confirm the tab is named **YouTube SEO** exactly and all 16 column headers in row 1 match exactly
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
