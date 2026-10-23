# 📊 Analyze YouTube videos with GPT-4o-mini and get relevance-ranked insights

> ⚡ **53 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Submit up to 3 YouTube video URLs using a simple form and the workflow handles everything automatically. It fetches each video's title, channel, views, and duration from YouTube, submits each video to WayinVideo for accurate speaker-labeled transcription, then sends the transcript to GPT-4o-mini for a 6-field analysis tailored to your niche. Every video is logged to Google Sheets and a single Gmail report arrives sorted by relevance score when all videos are processed. Built for content marketers, SEO strategists, and research teams who want structured intelligence from YouTube videos — not just auto-captions.

---

## What This Workflow Does

- **Fetches real YouTube metadata** — Pulls title, channel name, view count, duration, and publish date from the YouTube Data API for each video submitted
- **Transcribes with speaker labels** — Submits each video to WayinVideo for accurate transcription grouped by speaker, not just a flat block of auto-captions
- **Falls back to video description** — If the transcript is empty or too short, the workflow automatically uses the video description so the analysis never fails silently
- **Scores each video for your niche** — GPT-4o-mini rates every video from 1–10 on relevance to your specific industry so you know which videos are worth acting on
- **Identifies competitor content gaps** — For every video, GPT surfaces one thing the video did not cover that would make it more useful for your niche — ready to use as a content brief
- **Logs every video to Google Sheets** — Appends a 15-column row per video with metadata, summary, key topics, best quote, target audience, and relevance score
- **Sends one Gmail report sorted by relevance** — All analyzed videos arrive in a single email ranked from most to least relevant to your niche

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Google Cloud account with YouTube Data API v3 enabled
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Google Sheets (one sheet with a tab named **YouTube Intelligence**)
- Gmail account (the account you want to receive the report)

### Credentials Required
- YouTube Data API key (pasted into **2. Set — Config Values**)
- WayinVideo API key (pasted into **2. Set — Config Values**)
- OpenAI API key
- Google Sheets OAuth2
- Gmail OAuth2

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your YouTube Data API key** — Go to console.cloud.google.com → create or open a project → enable the YouTube Data API v3 → go to Credentials → Create API Key → copy the key

3. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

4. **Fill in Config Values** — Open node **2. Set — Config Values** → replace all placeholders:

| Field | What to enter |
|---|---|
| `PASTE_YOUR_YOUTUBE_DATA_API_KEY_HERE` | Your YouTube Data API key from step 2 |
| `PASTE_YOUR_WAYINVIDEO_API_KEY_HERE` | Your WayinVideo API key from step 3 |
| `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` | The ID from your Google Sheet URL (the string between `/d/` and `/edit`) |
| `PASTE_YOUR_EMAIL_HERE` | The email address where the Gmail report should be sent |
| `PASTE_YOUR_NAME_HERE` | Your name for the email greeting and sign-off |
| `yourNiche` | Your industry or focus area (default: `SEO and digital marketing`) — change to match your niche e.g. `personal injury law`, `medical aesthetics`, `e-commerce` |

5. **Connect OpenAI** — Open node **14. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **YouTube Intelligence** → add these 15 column headers in row 1: `Date`, `Video URL`, `Title`, `Channel`, `Views`, `Duration`, `Published`, `Summary`, `Key Topics`, `Best Quote`, `Target Audience`, `Relevance Score`, `Content Gap`, `Submitted By`, `Logged At`

7. **Connect Google Sheets** — Open node **17. Google Sheets — Log Video Analysis** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access

8. **Connect Gmail** — Open node **20. Gmail — Send Intelligence Report** → click the credential dropdown → add Gmail OAuth2 → sign in with the Gmail account that matches your email address → authorize access

9. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — YouTube Video Intelligence** → open it in a browser to submit your first videos

---

## How It Works (Step by Step)

**Step 1 — Form: YouTube Video Intelligence**
You open the form URL in a browser and paste up to 3 YouTube video URLs. Only Video 1 is required — Videos 2 and 3 can be left blank. Your name is optional. Submitting the form starts the workflow.

**Step 2 — Set: Config Values**
Your YouTube API key, WayinVideo API key, Google Sheet ID, recipient email, sender name, niche, and all three video URLs are stored here. Today's date is auto-generated. Your name is also captured from the form.

**Step 3 — Code: Extract Video IDs**
The three URL fields are filtered — any blank entries or non-YouTube links are removed. Valid YouTube URLs (both `youtube.com/watch?v=` and `youtu.be/` formats) are parsed to extract the video ID. Each valid video becomes its own separate entry so the rest of the workflow processes each video independently. If no valid YouTube URLs are found, the workflow stops with a clear error.

**Step 4 — HTTP: Fetch YouTube Metadata**
A request is sent to the YouTube Data API v3 for each video ID. It retrieves the video's snippet (title, channel, description, publish date), statistics (view count), and content details (duration in ISO 8601 format). If the video is private or does not exist, the workflow stops with an error for that video.

**Step 5 — Code: Process Video Metadata**
The ISO 8601 duration (e.g. `PT1H23M45S`) is converted into a readable format (e.g. `1h 23m 45s`). The view count is formatted with comma separators (e.g. `1,234,567`). The publish date is formatted as day-month-year. All metadata is packaged for the transcription step.

**Step 6 — HTTP: Submit Transcription Task**
Each video URL is submitted to the WayinVideo transcription API with the target language set to English. WayinVideo returns a task ID confirming the transcription job was accepted and is processing.

**Step 7 — Code: Save Transcript Task ID**
The WayinVideo task ID is saved along with all video metadata. A poll counter is initialized at zero to track how many times the transcript status has been checked.

**Step 8 — Wait: 45 Seconds**
The workflow pauses for 45 seconds before checking the transcription status for the first time, giving WayinVideo time to begin processing.

**Step 9 — HTTP: Poll Transcript Results**
A GET request checks the WayinVideo results endpoint using the task ID. It returns the current status and, once complete, the full transcript with speaker labels and text segments.

**Step 10 — Code: Check Transcript Status**
The poll counter is incremented and the status is evaluated. If SUCCEEDED, the transcript segments are grouped by speaker into readable text (e.g. `Speaker A: text here`). The transcript is capped at 5,000 characters. If the transcript is empty or under 50 characters, the workflow uses the video description as a fallback with a clear label. FAILED throws an error and stops. Still processing continues the loop. If 15 polls pass without success (approximately 11 minutes), the workflow times out.

**Step 11 — IF: Transcript Ready?**
This is the transcription gate. If the transcript is ready (YES path), the workflow moves to AI analysis. If still processing (NO path), the workflow routes to **12. Set — Still Processing Loop Back** which carries all the video data forward and loops back to **8. Wait — 45 Seconds** for another cycle.

**Step 12 — Set: Still Processing Loop Back**
This step preserves all video metadata and config values while looping back to the wait step. This is necessary because the wait step resets the context — all fields are explicitly re-set here so nothing is lost between polling cycles.

**Step 13 — AI Agent: Analyze Video**
GPT-4o-mini receives the video metadata and transcript. It returns six structured fields: a 3–4 sentence summary of what the video covers, an array of 5 key topics, the single most memorable quote from the transcript, a one-sentence description of who the video is best for, a relevance score from 1–10 for your specific niche, and one content gap the video missed that would be valuable for your niche audience.

**Step 14 — OpenAI: GPT-4o-mini Model**
This is the language model powering the analysis. It runs at temperature 0.2 for consistent, factual output and is capped at 600 tokens to keep analyses concise and costs low.

**Step 15 — Parser: Structured Video Analysis**
This step enforces the exact six-field schema GPT-4o-mini must return. It validates that all required fields are present and correctly typed before results move forward.

**Step 16 — Code: Prepare Results**
The AI output is merged with all video metadata. The relevance score is formatted as "X out of 10 — High/Medium/Low" using the labels High (8–10), Medium (5–7), and Low (1–4). The key topics array is joined as a comma-separated string for the sheet column. A logged-at timestamp is generated.

**Step 17 — Google Sheets: Log Video Analysis**
One row is appended to your YouTube Intelligence tab with all 15 columns populated.

**Step 18 — IF: Last Video?**
After each video is logged, this check reads the `isLastVideo` flag. If true (YES path — all videos processed), the workflow moves to build and send the Gmail report. If false (NO path — more videos still processing), the workflow routes to **21. Set — More Videos** and continues.

**Step 19 — Code: Build Gmail Report**
All processed video results are collected and sorted by relevance score from highest to lowest. The email subject includes the number of videos analyzed and today's date. The body includes a full breakdown for each video: title, channel, view count, duration, publish date, URL, relevance score, summary, key topics, best quote, target audience, and content gap.

**Step 20 — Gmail: Send Intelligence Report**
The complete report is sent to your email address. One email covers all videos, sorted by relevance, with no attribution footer.

---

## Key Features

✅ **Real YouTube metadata** — Title, channel, views, duration, and publish date are pulled directly from the YouTube Data API — not scraped or guessed
✅ **Speaker-labeled transcription** — WayinVideo groups the transcript by speaker so GPT receives structured dialogue, not a wall of undifferentiated text
✅ **Transcript fallback to description** — If WayinVideo returns an empty transcript, the video description is used automatically so no video analysis ever fails silently
✅ **Niche-specific relevance scoring** — You set your niche once in Config Values and every video is scored on how useful it is specifically for that industry
✅ **Content gap per video** — Every analysis includes one thing the video missed — ready to use as a content brief or competitive edge
✅ **Retry loop with 11-minute timeout** — The workflow polls every 45 seconds for up to 15 attempts before stopping — long videos never hang the workflow indefinitely
✅ **Gmail report sorted by relevance** — All videos arrive ranked from most to least relevant so you always know which one to act on first
✅ **Permanent research library in Sheets** — Every video you submit is logged permanently — over time you build a searchable database of analyzed YouTube content sorted by niche relevance

---

## Customisation Options

**Change your niche between submissions** — In node **2. Set — Config Values**, update `yourNiche` before each batch submission to score videos against a different industry — useful for agencies analyzing videos for multiple client verticals in one workflow instance.

**Increase the polling timeout for very long videos** — In node **10. Code — Check Transcript Status**, change `pollCount &gt;= 15` to `pollCount &gt;= 25` to allow up to approximately 19 minutes for transcription — useful for videos over 60 minutes long.

**Add a Slack notification when the report is ready** — After node **20. Gmail — Send Intelligence Report**, add a Slack step that posts the top-scoring video title, relevance score, and the content gap to a `#content-team` or `#research` channel so your team sees the headline insight immediately.

**Filter to only high-relevance videos in the email** — In node **19. Code — Build Gmail Report**, add a filter before sorting: `const sorted = [...allItems].filter(v =&gt; v.rawScore &gt;= 7).sort(...)` to include only videos scoring 7 or above in the email — keeping the report focused on the most actionable content.

**Log to a separate sheet tab per niche** — In node **2. Set — Config Values**, make `sheetName` dynamic by appending your niche value (e.g. `YouTube Intelligence — SEO`) so different niche batches automatically log to their own dedicated tabs.

---

## Troubleshooting

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — YouTube Video Intelligence** after activating
- Make sure at least one URL is a valid YouTube link — node **3. Code — Extract Video IDs** filters out any URL that does not contain `youtube.com` or `youtu.be`

**YouTube API returning no video data:**
- Confirm `PASTE_YOUR_YOUTUBE_DATA_API_KEY_HERE` in node **2. Set — Config Values** is replaced with your actual API key
- Make sure the YouTube Data API v3 is enabled in your Google Cloud project — go to console.cloud.google.com → APIs and Services → Library → search YouTube Data API v3 → Enable
- Private, unlisted, or deleted videos will return no results — the workflow throws an error for these and stops cleanly

**WayinVideo transcription timing out or failing:**
- If the polling loop times out after 15 polls (approximately 11 minutes), check your WayinVideo dashboard to see if the job is still processing or failed on their end
- Confirm `PASTE_YOUR_WAYINVIDEO_API_KEY_HERE` in node **2. Set — Config Values** is your actual WayinVideo API key
- Very long videos (over 90 minutes) may exceed the 11-minute timeout — increase the poll limit in node **10. Code — Check Transcript Status** from 15 to 20 for longer content

**OpenAI not generating the analysis:**
- Confirm the API key is connected in node **14. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **13. AI Agent — Analyze Video** for the raw GPT response
- If the schema parser in node **15. Parser — Structured Video Analysis** is throwing errors, GPT returned an unexpected format — re-run the submission to see if the issue is consistent

**Google Sheets not logging rows or Gmail not arriving:**
- Confirm the Google Sheets OAuth2 credential in node **17. Google Sheets — Log Video Analysis** is connected and not expired
- Check that `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` is replaced with the actual sheet ID from the URL — not the full URL
- Confirm the tab is named **YouTube Intelligence** exactly and all 15 column headers in row 1 match exactly
- For Gmail, confirm the OAuth2 credential in node **20. Gmail — Send Intelligence Report** is connected and check your spam folder on the first send

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
