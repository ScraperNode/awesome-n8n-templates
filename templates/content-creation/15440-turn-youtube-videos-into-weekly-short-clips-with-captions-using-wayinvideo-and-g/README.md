# 🎬 Turn YouTube videos into weekly short clips with captions using WayinVideo and GPT-4o-mini

> ⚡ **551 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Add your old YouTube video URLs to a Google Sheet once and every Monday at 9AM the workflow automatically processes each one end to end. [WayinVideo](https://wayin.ai/api/) runs two sequential APIs — first Summarization to extract structured highlights and tags, then AI Clipping to produce up to 3 viral short-form clips with 9:16 reframe, animated captions, and HD quality. GPT-4o-mini then writes platform-specific captions for TikTok, Facebook, and LinkedIn for each clip. Every clip is downloaded from WayinVideo and uploaded to Google Drive before the export link expires, all captions and Drive links are saved to a Content Calendar sheet, and the video row is marked Processed. Built for content creators, social media managers, and agencies who want to automatically repurpose their existing video library into short-form content every week without touching a single tool.

---

## What This Workflow Does

- **Runs two WayinVideo APIs per video sequentially** — First Summarization extracts structured highlights and tags, then AI Clipping produces up to 3 vertical clips with 9:16 reframe and animated captions
- **Writes three platform captions per clip** — GPT-4o-mini produces a TikTok caption (max 150 characters), a Facebook post (100–200 words), and a LinkedIn post (150–250 words) for every clip
- **Downloads clips before export links expire** — Each clip is downloaded from WayinVideo immediately and uploaded to Google Drive so you never lose access
- **Logs 16 fields per clip to the Content Calendar sheet** — Video summary, clip title, score, timestamp, WayinVideo export link, Google Drive link, all three captions, hashtags, and status are all saved in one row
- **Marks each video as Processed automatically** — After all clips are saved, the Video List row is updated with Processed status and today's date so it is never processed again
- **Runs two independent retry loops** — One loop handles summarization polling, another handles clipping polling — each retrying every 30 seconds independently until SUCCEEDED
- **Processes all pending videos every Monday** — Every video in the sheet with a pending status is picked up and run through the full pipeline in one automated weekly run

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Google Sheets (two tabs: **Video List** and **Content Calendar**)
- Google Drive (one folder for clips)

### Credentials Required
- WayinVideo API key (pasted into **3. WayinVideo — Submit Summarization**, **5. WayinVideo — Get Summary Results**, **9. WayinVideo — Submit AI Clipping**, and **11. WayinVideo — Get Clip Results**)
- OpenAI API key
- Google Sheets OAuth2 (used in **2. Google Sheets — Read Pending Videos**, **20. Google Sheets — Save to Content Calendar**, and **21. Google Sheets — Mark Video as Processed**)
- Google Drive OAuth2

&gt; ⚠️ **WayinVideo API key appears in 4 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in all four: **3. WayinVideo — Submit Summarization**, **5. WayinVideo — Get Summary Results**, **9. WayinVideo — Submit AI Clipping**, and **11. WayinVideo — Get Clip Results**. Missing any one will cause the workflow to fail.

&gt; ⚠️ **Two separate Google Sheet IDs are used** — replace `YOUR_VIDEO_LIST_SHEET_ID` in **2. Google Sheets — Read Pending Videos** and **21. Google Sheets — Mark Video as Processed**, and replace `YOUR_CONTENT_CALENDAR_SHEET_ID` in **20. Google Sheets — Save to Content Calendar**.

**Estimated Setup Time: 25–30 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 3** — Open node **3. WayinVideo — Submit Summarization** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace the placeholder with your actual key

4. **Add your WayinVideo API key to node 5** — Open node **5. WayinVideo — Get Summary Results** → find the same `Authorization` header → replace the placeholder with the same key

5. **Add your WayinVideo API key to node 9** — Open node **9. WayinVideo — Submit AI Clipping** → find the `Authorization` header → replace the placeholder

6. **Add your WayinVideo API key to node 11** — Open node **11. WayinVideo — Get Clip Results** → find the same `Authorization` header → replace the placeholder

7. **Connect OpenAI** — Open node **16. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

8. **Create your Video List sheet** — Open your Google Sheet → add a tab named exactly **Video List** → add these 5 column headers in row 1: `Video URL`, `Video Title`, `Niche / Category`, `Status`, `Last Processed Date` → add your first video URLs in the rows below, leaving Status blank

9. **Create your Content Calendar sheet** — In the same spreadsheet or a separate one → add a tab named exactly **Content Calendar** → add these 16 column headers: `Video URL`, `Video Title`, `Niche`, `Video Summary`, `Clip Number`, `Clip Title`, `Clip Score`, `Clip Timestamp`, `WayinVideo Export Link`, `Google Drive Link`, `TikTok Caption`, `Facebook Caption`, `LinkedIn Caption`, `Hashtags`, `Processed On`, `Status`

10. **Get your Video List Sheet ID** — Open the Google Sheet containing the Video List tab in a browser → copy the string between `/d/` and `/edit` in the URL

11. **Connect Google Sheets for reading and marking** — Open node **2. Google Sheets — Read Pending Videos** → click the document field → replace `YOUR_VIDEO_LIST_SHEET_ID` with your actual Sheet ID → connect Google Sheets OAuth2 → repeat the same Sheet ID replacement in node **21. Google Sheets — Mark Video as Processed**

12. **Get your Content Calendar Sheet ID** — If it is a separate spreadsheet, open it and copy the Sheet ID from the URL; if it is the same spreadsheet, use the same Sheet ID

13. **Connect Google Sheets for content calendar** — Open node **20. Google Sheets — Save to Content Calendar** → replace `YOUR_CONTENT_CALENDAR_SHEET_ID` with the correct Sheet ID → confirm Google Sheets OAuth2 is connected

14. **Get your Google Drive folder ID** — Open your target Google Drive folder in a browser → the folder ID is the string at the end of the URL after `/folders/`

15. **Connect Google Drive** — Open node **19. Google Drive — Upload Clip** → click the credential dropdown → add Google Drive OAuth2 → authorize access → replace `YOUR_GOOGLE_DRIVE_FOLDER_ID` in the folder field with your actual folder ID

16. **Activate the workflow** — Toggle the workflow to Active — it will run automatically every Monday at 9AM. To test immediately, click on node **1. Schedule — Every Monday 9AM** and use the manual Execute option.

---

## How It Works (Step by Step)

**Step 1 — Schedule: Every Monday 9AM**
The workflow fires automatically every Monday at 9AM using the cron expression `0 9 * * 1`. No manual trigger is needed once the workflow is active.

**Step 2 — Google Sheets: Read Pending Videos**
All rows from your Video List tab are read. Each row contains a video URL, title, and niche. Every unprocessed video is picked up and run through the full pipeline.

**Step 3 — HTTP: WayinVideo — Submit Summarization**
The video URL is sent to WayinVideo's Summarization API. WayinVideo processes the video and returns a task ID confirming the summarization job has started.

**Step 4 — Wait: 90 Seconds Summary**
The workflow pauses 90 seconds before checking the summarization status, giving WayinVideo time to process the video.

**Step 5 — HTTP: WayinVideo — Get Summary Results**
A GET request checks the summarization results endpoint using the task ID. It returns the current status and, once complete, the summary text, highlights array, and tags array.

**Step 6 — IF: Summary Complete?**
This is the first polling gate. If the status equals `SUCCEEDED` (YES path), the summary is ready and the workflow moves forward to extract the data. If still processing (NO path), the workflow routes to **7. Wait — 30 Seconds Summary Retry** which pauses 30 seconds then loops back to step 5. This repeats until SUCCEEDED.

**Step 7 — Wait: 30 Seconds Summary Retry**
When the summary is not yet ready, the workflow waits 30 seconds then returns to step 5 for another check.

**Step 8 — Code: Store Summary Data**
The completed summary data is extracted: the summary text, highlights joined as a pipe-separated string, and tags as a comma-separated string. The video URL, title, and niche from the sheet row are also packaged here. All five fields are carried forward to both the caption writing and the content calendar log.

**Step 9 — HTTP: WayinVideo — Submit AI Clipping**
The same video URL is submitted to WayinVideo's AI Clipping API. The request specifies: clips between 30 and 60 seconds, up to 3 clips, HD 720 resolution, animated captions in the original language using caption template `temp-7`, AI reframe to 9:16 vertical format, and export enabled so download links are generated. WayinVideo returns a task ID for the clipping job.

**Step 10 — Wait: 90 Seconds Clips**
The workflow pauses another 90 seconds before checking the clipping status. AI clipping takes longer than summarization because video editing is involved.

**Step 11 — HTTP: WayinVideo — Get Clip Results**
A GET request checks the clipping results endpoint using the clipping task ID. It returns the current status and, once complete, the clips array with title, description, score, timestamps, and export download link for each clip.

**Step 12 — IF: Clips Complete?**
This is the second polling gate. If the status equals `SUCCEEDED` (YES path), the clips are ready. If still processing (NO path), the workflow routes to **13. Wait — 30 Seconds Clips Retry** which pauses 30 seconds then loops back to step 11. This second loop runs independently from the summarization loop.

**Step 13 — Wait: 30 Seconds Clips Retry**
When clips are not yet ready, the workflow waits 30 seconds then returns to step 11 for another check.

**Step 14 — Code: Extract Clips Array**
The clips array is split into individual rows — one per clip. Millisecond timestamps are converted to MM:SS format. All summary data from step 8 is merged into each clip row so every downstream step has the full video context alongside the clip-specific data.

**Step 15 — AI Agent: Write Platform Captions**
GPT-4o-mini receives the clip description, title, viral score, clip tags, the full video summary, highlights, tags, video title, and niche. It writes four labeled sections: a TikTok caption under 150 characters with a scroll-stopping hook, a Facebook caption of 100–200 words with storytelling and a CTA, a LinkedIn caption of 150–250 words framed as a thought leadership post, and 5–8 universal hashtags for use across all platforms.

**Step 16 — OpenAI: GPT-4o-mini Model**
This is the language model powering the caption writing. It runs with default settings for natural, platform-matched output.

**Step 17 — Code: Parse Caption Output**
All four labeled sections (TIKTOK_CAPTION, FACEBOOK_CAPTION, LINKEDIN_CAPTION, HASHTAGS) are extracted from the AI output using regex. All clip metadata and caption text are packaged for the download and logging steps.

**Step 18 — HTTP: Download Clip File**
The WayinVideo export link for this clip is fetched and the .mp4 file is downloaded as a binary file. This step happens immediately so the export link does not expire before the file is saved.

**Step 19 — Google Drive: Upload Clip**
The downloaded clip is uploaded to your specified Google Drive folder. The filename is auto-generated as `Video Title — Clip N — Clip Title.mp4`. Google Drive returns the file's web view link which is passed to the sheet log.

**Step 20 — Google Sheets: Save to Content Calendar**
One row is appended to your Content Calendar tab with all 16 columns: video URL, video title, niche, video summary, clip number, clip title, viral score, timestamp range, WayinVideo export link, Google Drive web view link, TikTok caption, Facebook caption, LinkedIn caption, hashtags, processed timestamp, and Status set to Ready to Post.

**Step 21 — Google Sheets: Mark Video as Processed**
The Video List row matching this video URL is updated with Status set to Processed and the current date in the Last Processed Date column. This prevents the same video from being picked up in future Monday runs.

---

## Key Features

✅ **Two WayinVideo APIs per video — Summarization then Clipping** — The workflow runs both APIs sequentially per video, using the summary data to enrich captions and the clipping API to produce ready-to-post vertical clips
✅ **Two independent retry loops** — Summarization and clipping each have their own 30-second polling loop — one never blocks the other
✅ **9:16 vertical reframe built in** — Every clip is automatically reframed to 9:16 aspect ratio with animated captions in the same WayinVideo request — no manual editing needed
✅ **Clips downloaded before links expire** — WayinVideo export links have a limited lifespan — the workflow downloads and uploads to Drive immediately after clipping completes
✅ **Three platform captions per clip in one GPT call** — TikTok, Facebook, and LinkedIn are all written in one request with platform-specific rules enforced in the prompt
✅ **Structured Drive filename per clip** — Files are named as `Video Title — Clip N — Clip Title.mp4` so your Drive folder is organized and scannable without opening files
✅ **Status tracking prevents double-processing** — Videos marked Processed in the Video List are skipped on all future Monday runs — add new videos any time and they will be picked up automatically
✅ **Runs fully unattended every Monday** — Once activated, you only need to add video URLs to the sheet — the entire pipeline runs without any manual intervention

---

## Customisation Options

**Change the weekly run day or time** — In node **1. Schedule — Every Monday 9AM**, edit the cron expression from `0 9 * * 1` to run on a different day — for example `0 9 * * 3` for Wednesday at 9AM or `0 7 * * 1` for Monday at 7AM.

**Increase the number of clips per video** — In node **9. WayinVideo — Submit AI Clipping**, change `"limit": 3` to a higher number such as `5` to generate more clips per video — useful for longer videos with more shareable moments.

**Change the clip duration range** — In node **9. WayinVideo — Submit AI Clipping**, change `"target_duration": "DURATION_30_60"` to `"DURATION_15_30"` for shorter TikTok-style clips or `"DURATION_60_90"` for slightly longer content.

**Add a Slack notification when a video is fully processed** — After node **21. Google Sheets — Mark Video as Processed**, add a Slack step that posts the video title and the number of clips generated to a `#content-team` channel so your team knows new clips are ready in Drive without checking the sheet.

**Send a weekly digest email** — After node **21. Google Sheets — Mark Video as Processed** (on the last video processed each Monday run), add a Gmail step that lists all videos processed that week, how many clips were generated, and a link to the Content Calendar sheet.

---

## Troubleshooting

**Workflow not triggering on Monday:**
- Confirm the workflow is Active — inactive workflows do not run on a schedule
- Check that your n8n instance is running at 9AM Monday — self-hosted instances that are off will not fire scheduled workflows
- To test immediately, click on node **1. Schedule — Every Monday 9AM** and use the manual Execute option — do not wait for the scheduled run to verify setup

**WayinVideo API key errors:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` is replaced in all four steps: **3. WayinVideo — Submit Summarization**, **5. WayinVideo — Get Summary Results**, **9. WayinVideo — Submit AI Clipping**, and **11. WayinVideo — Get Clip Results** — missing any one causes that step to fail with a 401 error
- Check execution logs for the specific node that failed — the raw API error will show which step the key is missing from

**Either polling loop stuck and not completing:**
- Check that the video URL in your Video List sheet is publicly accessible — private YouTube videos, unlisted videos with login walls, or expired links will not be processed by WayinVideo
- Open the execution log of node **5** or **11** for the raw response — WayinVideo may have returned FAILED with a specific error message
- The summarization and clipping loops are independent — if summarization gets stuck, clipping never starts. Fix the URL and resubmit.

**Google Drive upload failing:**
- Confirm the Google Drive OAuth2 credential in node **19. Google Drive — Upload Clip** is connected and not expired — re-authorize if needed
- Confirm `YOUR_GOOGLE_DRIVE_FOLDER_ID` is replaced with just the folder ID from the URL — not the full Drive URL
- If the clip download in step 18 returned an empty or failed file, the upload in step 19 will also fail — check step 18's execution log for the HTTP status of the WayinVideo export link

**Content Calendar not logging or Video List not updating:**
- Confirm `YOUR_CONTENT_CALENDAR_SHEET_ID` in node **20** and `YOUR_VIDEO_LIST_SHEET_ID` in nodes **2** and **21** are all replaced with the correct Sheet IDs
- Confirm the tab names match exactly: **Content Calendar** and **Video List** — including capitalization and spacing
- Check that the Google Sheets OAuth2 credential is connected in all three sheet steps — it is easy to connect it in node 2 but forget to connect it in nodes 20 and 21

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email:[info@isawow.com](info@isawow.com)
🌐 Website:[https://isawow.com](https://isawow.com)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
