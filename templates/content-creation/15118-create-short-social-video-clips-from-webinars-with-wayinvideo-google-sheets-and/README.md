# 🎬 Create short social video clips from webinars with WayinVideo, Google Sheets and Gmail

> ⚡ **149 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Submit any YouTube, Vimeo, or Zoom webinar URL using a simple form and the workflow handles everything from there. It runs a two-phase pipeline: first identifying the top viral moments in your video without rendering anything, then exporting only the best clips as ready-to-post 9:16 vertical videos with animated captions, an AI hook, and AI subject reframing. Every clip is logged to Google Sheets and a Gmail digest with direct download links arrives in your inbox when all clips are ready. Built for content marketers and social media teams who want to turn a 1–2 hour webinar into short video content without any manual editing.

---

## What This Workflow Does

- **Identifies viral moments first, renders second** — Phase 1 scans the entire video and ranks all potential clips by viral score before any rendering happens, so you only pay to export the best ones
- **Exports clips as 9:16 vertical video** — Renders each selected clip in portrait format with animated captions, an AI-generated hook, and AI subject reframing — ready to post on TikTok, Reels, or Shorts
- **Runs two independent polling loops** — Waits patiently for both the identification phase (up to 25 minutes) and the rendering phase (up to 20 minutes) with hard timeouts to prevent indefinite hanging
- **Sorts clips by viral score** — Picks only the highest-scoring clips up to your chosen maximum so the best content always gets exported first
- **Logs every clip to Google Sheets** — Appends one row per clip with title, duration, viral score, tags, description, and download link for your content library
- **Sends a Gmail digest with download links** — Delivers all clip details and direct download links in one email after all clips are logged — with a 24-hour expiry warning so you download immediately

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- Google Sheets (one sheet with a tab named **Social Media Clips**)
- Gmail account (the account you want to receive the digest)

### Credentials Required
- WayinVideo API key (pasted into **2. Set — Config Values**)
- Google Sheets OAuth2
- Gmail OAuth2

**Estimated Setup Time: 10–15 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to your account or API settings dashboard → copy your API key

3. **Fill in Config Values** — Open node **2. Set — Config Values** → replace all placeholders:

| Field | What to enter |
|---|---|
| `YOUR_WAYINVIDEO_API_KEY` | Your WayinVideo API key from step 2 |
| `YOUR_GOOGLE_SHEET_ID` | The ID from your Google Sheet URL (the string between `/d/` and `/edit`) |
| `Social Media Clips` | Leave as-is, or change to match your sheet tab name exactly |
| `you@yourcompany.com` | The email address where the Gmail digest should be sent |
| `YOUR NAME` | Your name for the email sign-off |
| `targetDuration` | Leave as `DURATION_30_60` for 30–60 second clips, or change to match WayinVideo's supported duration options |
| `exportRatio` | Leave as `RATIO_9_16` for vertical video, or change if you want a different aspect ratio |
| `exportResolution` | Leave as `HD_720` or change to a higher resolution if your WayinVideo plan supports it |

4. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Social Media Clips** → add these 10 column headers in row 1: `Date`, `Video Title`, `Clip #`, `Clip Title`, `Duration (sec)`, `Viral Score`, `Tags`, `Description`, `Export Link`, `Logged At`

5. **Connect Google Sheets** — Open node **19. Google Sheets — Log Clips** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access

6. **Connect Gmail** — Open node **22. Gmail — Send Clips Digest** → click the credential dropdown → add Gmail OAuth2 → sign in with the Gmail account that matches `recipientEmail` → authorize access

7. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Enter Video URL** → open it in a browser to submit your first video

---

## How It Works (Step by Step)

**Step 1 — Form: Enter Video URL**
You open the form URL in a browser and fill in four fields: the video URL (YouTube, Vimeo, or Zoom), a title for the video, your name, and how many clips you want (maximum 5). Submitting the form kicks off the entire workflow automatically.

**Step 2 — Set: Config Values**
Your WayinVideo API key, Google Sheet ID, sheet tab name, recipient email, sender name, export settings, and all four form inputs are stored here. The clip count is automatically capped at 5 even if a higher number is entered. A submission timestamp is also generated.

**Step 3 — HTTP: Submit AI Clipping Task**
The video URL and title are submitted to the WayinVideo API with `enable_export: false`. This tells WayinVideo to analyze the video and identify all viral clip candidates without rendering any videos yet. WayinVideo returns a project ID confirming the job was accepted.

**Step 4 — Code: Save Clipping Project ID**
The project ID is saved along with all config values. A poll counter is initialized at zero to track how many times Phase 1 has been checked.

**Step 5 — Wait: 60 Seconds**
The workflow pauses for 60 seconds before checking the Phase 1 status for the first time, giving WayinVideo time to begin processing.

**Step 6 — HTTP: Poll Clipping Results**
A GET request checks the WayinVideo results endpoint using the project ID. It returns the current status and, once complete, the full list of identified clips with their viral scores, titles, descriptions, timestamps, and tags.

**Step 7 — Code: Check Clipping Status**
The poll counter is incremented and the status is evaluated. SUCCEEDED sets `isReady` to true. FAILED throws an error and stops. Still processing continues. If 25 polls pass without success (approximately 25 minutes), the workflow times out with an error.

**Step 8 — IF: Clips Ready?**
Phase 1 gate check. If clips are identified (YES path), the workflow moves to select the top clips for export. If still processing (NO path), the workflow routes to **9. Set — Still Clipping** which loops back to **5. Wait — 60 Seconds** for another cycle.

**Step 9 — Set: Still Clipping**
Handles the still-processing case for Phase 1. Sets a brief in-progress message and loops back to the 60-second wait.

**Step 10 — Code: Select Top Clips for Export**
All identified clips are sorted by viral score from highest to lowest. The top clips up to your chosen maximum are selected. Their index numbers are extracted and packaged as the `clipIndices` list needed for the export API call.

**Step 11 — HTTP: Submit Export Task**
The selected clip indices are submitted to the WayinVideo export API. The export is configured with: animated captions in original style using caption template `temp-7`, an AI-generated hook in excited style placed at the beginning, AI subject reframing, 9:16 aspect ratio, and HD 720p resolution. WayinVideo returns an export task ID.

**Step 12 — Code: Save Export Task ID**
The export task ID is saved and the export poll counter is reset to zero for the Phase 2 polling loop.

**Step 13 — Wait: 60 Seconds (Export)**
The workflow pauses for 60 seconds before checking the Phase 2 rendering status for the first time.

**Step 14 — HTTP: Poll Export Results**
A GET request checks the WayinVideo export endpoint using the export task ID. It returns the rendering status and, once complete, the list of exported clips with their download links.

**Step 15 — Code: Check Export Status**
The export poll counter is incremented and the status is evaluated. SUCCEEDED sets `isExportReady` to true. FAILED throws an error. Still rendering continues. If 20 polls pass without success (approximately 20 minutes), the workflow times out.

**Step 16 — IF: Export Ready?**
Phase 2 gate check. If rendering is complete (YES path), the workflow moves to build sheet rows and send the email. If still rendering (NO path), the workflow routes to **17. Set — Still Exporting** which loops back to **13. Wait — 60 Seconds (Export)**.

**Step 17 — Set: Still Exporting**
Handles the still-rendering case for Phase 2. Sets a brief in-progress message and loops back to the 60-second export wait.

**Step 18 — Code: Build Sheet Rows**
The exported clips with download links are matched to the original clip metadata by index. Duration in seconds is calculated. Each clip is assembled into a complete sheet row. An `isLastRow` flag is set on the final clip. All clip details are also assembled for the Gmail digest.

**Step 19 — Google Sheets: Log Clips**
Each clip is appended as one row to your Social Media Clips tab with all 10 columns populated: date, video title, clip number, clip title, duration, viral score, tags, description, download link, and logged-at timestamp.

**Step 20 — IF: Last Row?**
After each row is written, this check reads the `isLastRow` flag. If true (YES path — final clip logged), the Gmail digest is built and sent. If false (NO path — more clips to log), the workflow routes to **23. Set — More Rows** and continues logging.

**Step 21 — Code: Build Gmail Digest**
The email subject and body are assembled. The body includes a greeting, video title, total clips found, export count, format summary, and a full breakdown of each clip with title, duration, viral score, tags, description, and download link. A clear 24-hour download link expiry warning is included.

**Step 22 — Gmail: Send Clips Digest**
The digest email is sent to your recipient email. All clips, their details, and download links arrive in one clean message.

---

## Key Features

✅ **Two-phase pipeline** — Phase 1 identifies all clips first; Phase 2 renders only the top ones — avoiding wasted rendering time and API cost on low-scoring clips
✅ **Viral score sorting** — Clips are ranked by WayinVideo's viral score before export so your highest-quality content always gets selected first
✅ **Two independent retry loops with hard timeouts** — Phase 1 retries up to 25 times and Phase 2 retries up to 20 times — long videos never hang indefinitely
✅ **9:16 vertical video with captions and AI hook** — Every exported clip is fully production-ready for TikTok, Reels, and Shorts with no manual editing needed
✅ **Gmail fires once after all clips are logged** — The `isLastRow` flag ensures you receive one clean email digest, not one email per clip
✅ **24-hour expiry warning in the email** — The digest explicitly warns you to download immediately, preventing lost clips due to expired links
✅ **Configurable clip count from the form** — You set how many clips you want per submission directly in the form — no need to edit the workflow between videos
✅ **Permanent clip library in Google Sheets** — Every clip from every webinar is logged with its viral score and download link so you can build a searchable content archive

---

## Customisation Options

**Change the clip duration range** — In node **2. Set — Config Values**, update `targetDuration` from `DURATION_30_60` to a longer or shorter WayinVideo duration option to generate clips of a different length for different platforms.

**Change the caption style** — In node **11. HTTP — Submit Export Task**, edit `cc_style_tpl` from `temp-7` to a different WayinVideo caption template ID to change the visual style of the animated captions on your clips.

**Send to Slack instead of or alongside Gmail** — After node **21. Code — Build Gmail Digest**, add a Slack node that posts a short summary (video title, number of clips, and the first download link) to a `#content-team` channel so your social media team sees the clips immediately without checking email.

**Increase the Phase 1 timeout for very long webinars** — In node **7. Code — Check Clipping Status**, change `pollCount &gt;= 25` to `pollCount &gt;= 40` to allow up to approximately 40 minutes for identification on 2+ hour recordings that take longer to process.

**Log clips to a different sheet per month** — In node **2. Set — Config Values**, make `sheetName` dynamic using the current month (e.g. `Social Media Clips — April 2026`) so clips are automatically organized into monthly tabs without any manual file management.

---

## Troubleshooting

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — Enter Video URL** after activating — test URLs generated before activation will not work
- Make sure the Video URL field is filled in correctly — the URL must be a direct link to a publicly accessible video

**WayinVideo API returning an error or no project ID:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. Set — Config Values** is replaced with your actual key — not the placeholder text
- Check the execution log of node **3. HTTP — Submit AI Clipping Task** for the exact error response from WayinVideo
- Ensure the video URL is publicly accessible — private or password-protected videos cannot be processed by WayinVideo

**Phase 1 or Phase 2 polling loop timing out:**
- If the loop times out, check your WayinVideo dashboard to see if the job is still processing or failed on their end
- For very long recordings (2+ hours), increase the timeout in **7. Code — Check Clipping Status** or **15. Code — Check Export Status** by raising the poll limit from 25 or 20 to a higher number
- Check the poll count in the execution log to see how many attempts ran before timeout

**Google Sheets not logging rows:**
- Confirm the Google Sheets OAuth2 credential in node **19. Google Sheets — Log Clips** is connected and not expired — re-authorize if needed
- Check that `YOUR_GOOGLE_SHEET_ID` in node **2. Set — Config Values** is the ID from the sheet URL, not the full URL
- Confirm the tab is named **Social Media Clips** exactly and all 10 column headers in row 1 match exactly

**Gmail digest not arriving:**
- Confirm the Gmail OAuth2 credential in node **22. Gmail — Send Clips Digest** is connected and authorized
- Check that `you@yourcompany.com` in node **2. Set — Config Values** is replaced with your actual email address
- Check your spam or promotions folder — automated Gmail OAuth2 messages sometimes land there on first send
- Check the execution log of node **22** for any Gmail API error message

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
