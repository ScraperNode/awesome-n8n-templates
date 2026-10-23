# 🎬 Generate YouTube chapter timestamps and community posts using WayinVideo and GPT-4o-mini

> ⚡ **24 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Submit any YouTube tutorial or how-to video URL along with your section search query and the workflow finds all the key moments automatically. WayinVideo's Find Moments API scans the full video and returns up to 15 section timestamps, which are then sorted chronologically and sent to GPT-4o-mini in one call to complete three tasks: generate clean chapter timestamps starting with 0:00, write a 3–4 sentence video description block, and write a 100–150 word YouTube Community post with the full timestamp list embedded. Everything is saved as one row in Google Sheets with Status set to Ready — ready to copy and paste directly into YouTube. Built for YouTube creators, educators, and content teams who publish long tutorial videos and want chapter timestamps and a Community post generated automatically without manual scrubbing.

---

## What This Workflow Does

- **Finds up to 15 section moments per video** — WayinVideo's Find Moments API scans the full tutorial based on your search query and returns timestamped moments with titles and descriptions
- **Sorts all moments chronologically** — All returned moments are sorted by start time before being sent to GPT so the chapter list is always in the correct viewing order
- **Generates formatted chapter timestamps** — GPT writes clean 3–6 word chapter titles for every moment with exact MM:SS values, always starting with 0:00 Introduction
- **Writes a video description block** — A 3–4 sentence description introduces the video, mentions what viewers will learn, and includes the video URL
- **Creates a YouTube Community post with timestamps embedded** — A 100–150 word post hooks the audience, highlights 2–3 things they will learn, embeds the full chapter list, and ends with a CTA and hashtags
- **Saves everything in one Google Sheets row** — Formatted timestamps, description block, Community post, hashtags, total chapter count, total moments found, and estimated duration are all in one row per video
- **Polls automatically until moments are ready** — Waits 90 seconds then checks every 30 seconds until WayinVideo finishes scanning the video

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **Timestamp Library**)

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Find Moments** and **4. WayinVideo — Get Moments Results**)
- OpenAI API key
- Google Sheets OAuth2

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Find Moments** and **4. WayinVideo — Get Moments Results**. Missing either one will cause the workflow to fail.

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Find Moments** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Moments Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Timestamp Library** → add these 13 column headers in row 1: `Video URL`, `Video Title`, `Channel Name`, `Video Category`, `Total Chapters`, `Total Moments Found`, `Video Duration (min)`, `Formatted Timestamps`, `Video Description Block`, `Community Post`, `Hashtags`, `Generated On`, `Status`

7. **Get your Google Sheet ID** — Open your Google Sheet in a browser → copy the string between `/d/` and `/edit` in the URL — this is your Sheet ID

8. **Connect Google Sheets** — Open node **11. Google Sheets — Save Timestamp Library** → click the document field → replace `YOUR_GOOGLE_SHEET_ID` by selecting your spreadsheet or entering the Sheet ID manually → click the credential dropdown → add Google Sheets OAuth2 → authorize access

9. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Video URL + Details** → open it in a browser to submit your first video

---

## How It Works (Step by Step)

**Step 1 — Form: Video URL + Details**
You open the form URL in a browser and fill in six fields: the YouTube video URL, the video title, your channel name, the video category (e.g. SEO Tutorial, Python Course), the target audience, and the section search query. The search query is the most important field — it tells WayinVideo what kind of moments to find. For a tutorial, a good query might be "step by step tutorial section" or "topic introduction and explanation".

**Step 2 — HTTP: WayinVideo — Submit Find Moments**
The video URL and search query are sent to WayinVideo's Find Moments API. The request asks for up to 15 matching moments with export disabled. A project name is auto-generated from the video title. WayinVideo accepts the job and returns a task ID.

**Step 3 — Wait: 90 Seconds**
The workflow pauses 90 seconds before the first status check, giving WayinVideo time to scan the full video.

**Step 4 — HTTP: WayinVideo — Get Moments Results**
A GET request checks the find-moments results endpoint using the task ID from step 2. It returns the current processing status and, once complete, the full clips array with title, description, timestamp, relevance score, and tags for each matched moment.

**Step 5 — IF: Find Moments Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the moments are ready and the workflow moves forward to sorting and aggregation. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When results are not yet ready, the workflow waits 30 seconds then returns to step 4 for another check. The loop continues automatically.

**Step 7 — Code: Collect + Sort All Moments**
All moments from WayinVideo are sorted by start time in ascending order — chronological, not by relevance score — so the timestamps reflect the actual order they appear in the video. Each moment is formatted as `Moment N: [MM:SS] Title — Description` and joined into a single text block for GPT. Total moment count and estimated video duration are also calculated. This step produces one single output for GPT — not one per moment — which is what allows GPT to see all timestamps at once and generate a coherent chapter list.

**Step 8 — AI Agent: Generate Timestamps + Post**
GPT-4o-mini receives the complete sorted moments list and the full video context. It completes three tasks in one call. Task 1: generate formatted chapter timestamps using the exact MM:SS values from WayinVideo, adding 0:00 Introduction at the top, with clean 3–6 word chapter titles per line. Task 2: write a 3–4 sentence video description block that introduces the video, mentions what viewers will learn, references the chapters below, and includes the video URL. Task 3: write a 100–150 word YouTube Community post with a scroll-stopping hook, 2–3 specific learning points from the video, the full timestamp list embedded in the post body, a CTA to watch and comment, and 3–5 relevant hashtags. The output uses five labeled sections.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the three-task generation. It runs with default settings for accurate, structured output.

**Step 10 — Code: Parse Timestamps Output**
All five labeled sections are extracted from the AI output using regex: FORMATTED_TIMESTAMPS, VIDEO_DESCRIPTION_BLOCK, COMMUNITY_POST, HASHTAGS, and TOTAL_CHAPTERS. If the timestamps section is empty, the step throws a clear error. All video metadata from step 7 is also packaged for the sheet row.

**Step 11 — Google Sheets: Save Timestamp Library**
One row is appended to your Timestamp Library tab with all 13 columns: video URL, video title, channel name, video category, total chapters, total moments found, estimated duration, formatted timestamps, video description block, Community post, hashtags, generation timestamp, and Status set to Ready. All three deliverables — timestamps, description, and Community post — are available in one row ready to copy and paste.

---

## Key Features

✅ **Up to 15 moments per video** — The highest limit used across the WayinVideo workflow series — suited to longer tutorial videos with many distinct sections
✅ **Chronological sort before GPT** — All moments are sorted by start time before being sent to GPT so the chapter list is always in viewing order — not relevance order
✅ **Three outputs in one GPT call** — Chapter timestamps, video description block, and Community post are all generated together — saving API cost and ensuring they are all written from the same context
✅ **Community post includes timestamps embedded** — The Community post does not just mention the video — it includes the full chapter list inside the post body so viewers see exactly what is covered
✅ **0:00 Introduction always added** — GPT is instructed to start every chapter list with a 0:00 Introduction entry even if no moment was found at the very beginning
✅ **Total chapter count logged** — The sheet records the exact number of chapters generated so you can compare across videos without opening each timestamp block
✅ **One row per video — all deliverables in one place** — Every field you need is in a single sheet row so your team can copy timestamps, description, and Community post without switching between files

---

## Customisation Options

**Increase the number of moments returned** — In node **2. WayinVideo — Submit Find Moments**, the limit is already set to the maximum of 15 — if your video has very densely packed sections, try a more specific search query to get the most relevant moments within that limit.

**Add a retry limit to stop infinite polling** — Before node **6. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check to stop after 15 polls and send a Gmail error notification instead of looping indefinitely.

**Send the three outputs to Gmail for quick review** — After node **11. Google Sheets — Save Timestamp Library**, add a Gmail step that sends the formatted timestamps, description block, and Community post as one plain-text email so you can review and copy directly from your inbox.

**Add a Slack notification when timestamps are ready** — After node **11. Google Sheets — Save Timestamp Library**, add a Slack step that posts the video title, total chapter count, and a link to the Timestamp Library sheet to a `#youtube-content` channel so your team knows a new set of timestamps is ready.

**Use the description block to update a Google Doc** — After node **11. Google Sheets — Save Timestamp Library**, add a Google Docs append step that writes the video title, formatted timestamps, and description block to a running video notes document — building a permanent formatted archive of all your video descriptions.

---

## Troubleshooting

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — Video URL + Details** after activating — URLs copied before activation will not work
- Make sure all six fields are filled in — all are marked required

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Find Moments** is replaced with your actual API key — not the placeholder
- Confirm the same replacement was made in node **4. WayinVideo — Get Moments Results** — both steps require the key
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL or request format is invalid

**No moments found or workflow stuck in polling loop:**
- Check that the YouTube video URL is publicly accessible — private, unlisted-with-login, or removed videos will not be processed
- The section search query may be too vague — try more descriptive phrases like "tutorial step and code demo" instead of just "tutorial"
- Open the execution log of node **4. WayinVideo — Get Moments Results** and inspect the raw response — WayinVideo may have returned FAILED with a specific error
- If the loop runs indefinitely, deactivate the workflow, fix the URL or query, and resubmit

**GPT not generating all five sections:**
- Confirm the API key is connected in node **9. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **8. AI Agent — Generate Timestamps + Post** for the raw GPT output — if the FORMATTED_TIMESTAMPS section is missing, node **10. Code — Parse Timestamps Output** throws an error
- If the moments list passed to GPT is very long (15 moments with long descriptions), the combined prompt may push against token limits — this is rare but can be resolved by using a slightly shorter search query to get fewer moments

**Google Sheets not saving the row:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **11. Google Sheets — Save Timestamp Library** is replaced with your actual sheet ID from the URL
- Confirm the tab is named **Timestamp Library** exactly and all 13 column headers in row 1 match exactly
- Check that the Google Sheets OAuth2 credential is connected and not expired — re-authorize if needed

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
