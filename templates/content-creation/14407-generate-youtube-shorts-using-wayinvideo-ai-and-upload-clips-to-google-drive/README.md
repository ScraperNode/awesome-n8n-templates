# 🎬 Generate YouTube shorts using WayinVideo AI and upload clips to Google Drive

> ⚡ **852 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description

Paste any video URL in chat — YouTube, podcast, webinar, anything — and this n8n workflow automatically finds the best short clips using [WayinVideo](https://wayin.ai/api/) AI, adds captions, reframes to 9:16 vertical format, and uploads everything directly to your Google Drive. No editing software, no manual work. Just paste and done.

Built for content creators, marketers, and agencies who want to repurpose long-form video into viral short clips on autopilot.

---

## What This Workflow Does

This automation handles your complete video-to-clips pipeline:

- **Chat-triggered** — User pastes any video URL and the workflow starts instantly
- **AI clip detection** — WayinVideo AI finds the most engaging moments automatically
- **Auto-captions** — Adds styled captions to every clip without manual effort
- **Smart reframing** — Converts horizontal video to 9:16 vertical (perfect for Reels, Shorts, TikTok)
- **Smart polling loop** — Waits and retries every 30 seconds until processing is complete
- **Batch download** — Downloads all generated clips automatically
- **Google Drive upload** — Saves every clip with its title directly to your chosen folder

---

## Setup Requirements

**Tools You'll Need:**

- Active n8n instance (self-hosted or n8n Cloud)
- WayinVideo account with API access
- Google Drive with OAuth2 access

**Estimated Setup Time:** 10–15 minutes

---

## Step-by-Step Setup

### 1. Get Your WayinVideo API Key

WayinVideo is the AI engine that generates short clips from your videos.

1. Go to [WayinVideo](https://wayin.ai/) and create a free/paid account
2. Navigate to **Dashboard → API** section
3. Copy your **Bearer API token**
4. Open the **"🎬 Submit Video to WayinVideo API"** node in n8n
5. Replace `YOUR_WAYINVIDEO_API_KEY` with your actual token (in the Authorization header)
6. Do the same in the **"🔄 Poll for Clip Results"** node — replace the same placeholder there too

&gt; ⚠️ The API key appears in **two places** — Submit node and Poll node. Replace both!

---

### 2. Connect Google Drive

1. In n8n: Go to **Credentials → Add Credential → Google Drive OAuth2 API**
2. Complete the Google OAuth authentication
3. Open the **"☁️ Upload Clip to Google Drive"** node
4. Select your Google Drive credential
5. Replace `YOUR_GOOGLE_DRIVE_FOLDER_ID` with your actual folder ID

**How to find your Google Drive Folder ID:**
- Open Google Drive in browser
- Navigate to your target folder
- Look at the URL: `drive.google.com/drive/folders/`**`THIS_IS_YOUR_FOLDER_ID`**
- Copy just that last part and paste it in the node

---

### 3. Configure the Chat Trigger

This workflow is triggered when a user sends a video URL in the n8n chat interface.

- The trigger node receives `$json.chatInput` — this is the video URL the user pastes
- Make sure your n8n instance has the chat trigger enabled
- No additional setup needed — it works out of the box

---

### 4. Customise Clip Settings (Optional)

Open the **"🎬 Submit Video to WayinVideo API"** node to customise:

| Parameter | Default Value | What It Does |
|---|---|---|
| `target_duration` | `DURATION_30_60` | Clip length (30–60 seconds) |
| `limit` | `3` | Number of clips to generate |
| `resolution` | `HD_720` | Video quality (720p) |
| `ratio` | `RATIO_9_16` | Vertical format (for Reels/Shorts) |
| `enable_caption` | `true` | Auto-captions on/off |
| `caption_display` | `original` | Caption language/style |
| `cc_style_tpl` | `temp-7` | Caption design template |
| `enable_ai_reframe` | `true` | Auto-reframe to vertical |

**To change clip length options:**
- `DURATION_15_30` → 15 to 30 second clips
- `DURATION_30_60` → 30 to 60 second clips (default)
- `DURATION_60_90` → 60 to 90 second clips

**To change ratio:**
- `RATIO_9_16` → Vertical (TikTok, Reels, Shorts)
- `RATIO_16_9` → Horizontal (YouTube, LinkedIn)
- `RATIO_1_1` → Square (Instagram feed)

**To change resolution:**
- `HD_720` → 720p (faster processing)
- `FULL_HD_1080` → 1080p (higher quality)

---

### 5. Test & Activate

1. Open n8n and go to this workflow
2. Click **"Chat"** button to open the chat interface
3. Paste any YouTube video URL and press send
4. Watch the workflow run step by step in the execution view
5. Check your Google Drive folder — clips should appear within 1–5 minutes
6. Once confirmed, toggle the workflow **Active** at the top ✅

---

## How It Works (Step by Step)

### Step 1 — Chat Trigger
User pastes a video URL in the n8n chat. The URL is captured as `$json.chatInput` and passed to the next node.

### Step 2 — Submit Video to WayinVideo API
The workflow sends a `POST` request to the WayinVideo API (`/api/v2/clips`) with:
- The video URL
- All your clip preferences (duration, ratio, captions, resolution)
- A project name auto-generated with today's date (e.g., `Podcast Clips - 2025-01-15`)

The API returns a **Job ID** which is used to track processing status.

### Step 3 — Wait 30 Seconds
The workflow pauses for 30 seconds to give WayinVideo time to start processing. This avoids hitting the API too early with an empty response.

### Step 4 — Poll for Clip Results
Using the Job ID from Step 2, the workflow calls:
```
GET /api/v2/clips/results/{job_id}
```
to check if clips are ready.

### Step 5 — Clips Ready? (Smart Loop)
The IF node checks if the `clips` array in the response is non-empty:

- **YES (clips ready)** → Moves forward to extract clip details
- **NO (still processing)** → Loops back to "Wait 30 Seconds" and tries again

&gt; This smart retry loop runs automatically every 30 seconds until your clips are done. No manual retries needed.

### Step 6 — Extract Clip Details
The Code node loops through all generated clips and extracts:
- `title` — AI-generated clip title
- `export_link` — Direct download URL for the clip
- `score` — AI virality/engagement score
- `tags` — Topic tags for the clip
- `desc` — Short clip description
- `begin_ms` / `end_ms` — Timestamp of the clip in the original video

Each clip becomes a separate item for parallel processing.

### Step 7 — Download Clip File
For each clip, the workflow downloads the video file from the `export_link` URL. The file is stored as binary data (`responseFormat: file`) ready for upload.

### Step 8 — Upload to Google Drive
Each downloaded clip is uploaded to your specified Google Drive folder. The file is named using the clip's AI-generated title automatically.

---

## Key Features

✅ **Zero manual editing** — AI handles clip selection, captions, and reframing  
✅ **Smart polling loop** — Auto-retries every 30s, no timeout issues  
✅ **Batch processing** — Handles multiple clips from one video in one run  
✅ **AI virality scoring** — Each clip comes with an engagement score  
✅ **Auto-named files** — Clips saved with meaningful AI-generated titles  
✅ **Flexible formats** — Supports 9:16, 16:9, and 1:1 ratios  
✅ **Caption support** — Multiple caption style templates available  
✅ **Google Drive ready** — Organised storage with zero manual uploads  

---

## Customisation Options

**Generate more clips per video:**
Change `limit` from `3` to `5` or `10` in the Submit node.

**Sort clips by score before uploading:**
Add a Sort node after "Extract Clip Details" and sort by `score` descending — this ensures your best clips are uploaded first.

**Save clip metadata to Google Sheets:**
Add a Google Sheets node after "Extract Clip Details" to log the title, score, tags, and timestamp of each clip for tracking.

**Add a response message back to chat:**
Add a "Respond to Webhook" node at the end to send a confirmation message like: `"✅ 3 clips have been uploaded to your Google Drive!"`

**Process multiple videos in batch:**
Modify the chat trigger to accept comma-separated URLs and add a Split node to process each video sequentially.

---

## Troubleshooting

**Clips not generating / API returns empty:**
- Verify your WayinVideo API key is correct in **both** the Submit and Poll nodes
- Check your WayinVideo account has active credits
- Ensure the video URL is publicly accessible (private YouTube videos won't work)
- Try with a shorter video first (under 20 minutes)

**Workflow stuck in polling loop:**
- Very long videos (1+ hour) can take 5–10 minutes to process — this is normal
- Check WayinVideo dashboard to see if your job is still running
- If stuck for more than 15 minutes, check API status at wayinvideo.com

**Google Drive upload failing:**
- Re-authenticate your Google Drive OAuth credential
- Verify the Folder ID is correct (copy directly from the URL)
- Check that your Google account has write access to that folder
- Ensure the folder is not inside a Shared Drive (use My Drive for simplest setup)

**Video URL not accepted:**
- Make sure you paste only the URL with no extra text
- YouTube Shorts URLs work — use full URL format: `https://www.youtube.com/watch?v=...`
- Some region-locked videos may not be accessible

**Clips uploading with wrong names:**
- The file name comes from `clip.title` in the Extract node
- If titles look odd, you can add a Code node to clean/rename them before upload

---

## Support

Need help setting this up or want a custom version for your use case?

📧 **Email:** [info@isawow.com](info@isawow.com)  
🌐 **Website:** [https://isawow.com](https://isawow.com)

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
