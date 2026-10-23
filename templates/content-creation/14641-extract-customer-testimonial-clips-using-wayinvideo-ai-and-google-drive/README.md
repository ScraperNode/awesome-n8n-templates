# 🎬 Extract customer testimonial clips using WayinVideo AI and Google Drive

> ⚡ **16 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Paste any customer interview or testimonial video URL into a simple form — and the workflow handles everything from there. [WayinVideo](https://wayin.ai/api/) AI scans the full video and automatically cuts the most impactful moments into up to 5 vertical clips. Each clip is downloaded and saved directly to your Google Drive folder, named and ready to use. Built for marketing teams, agencies, and founders who collect customer stories and need polished clips for ads, websites, and social media — without video editing.

---

## What This Workflow Does

- **Form-based input** — Collects the video URL, client name, industry, and intended usage through a hosted form anyone on your team can fill out
- **AI clip detection** — Submits the testimonial video to WayinVideo, which automatically finds the highest-impact moments and creates export-ready clips
- **Vertical video output** — Generates clips in 9:16 ratio with AI reframing enabled, making them ready for Instagram Reels, TikTok, and YouTube Shorts with no editing
- **Caption generation** — Adds captions to every clip automatically using the original language and a styled caption template
- **Batch file download** — Downloads each clip as an individual video file directly from the WayinVideo export link
- **Auto-named Drive upload** — Saves every clip to your Google Drive folder using the AI-generated clip title as the filename — no manual renaming needed

---

## Setup Requirements

### Tools You'll Need

- Active n8n instance (self-hosted or n8n Cloud)
- WayinVideo account with API access (wayin.ai)
- Google account with Google Drive OAuth2 access

**Estimated Setup Time: 5–10 minutes**

---

## Step-by-Step Setup

**1. Get Your WayinVideo API Key**

WayinVideo is the AI engine that finds and extracts the best testimonial moments from your video.

- Go to [WayinVideo](https://wayin.ai/api/) and log in or create an account
- Navigate to your Dashboard → API section
- Copy your Bearer token
- Open the **2. WayinVideo — Submit Clipping Task** node in n8n
- Find the `Authorization` header value and replace `YOUR_WAYIN_API_KEY_HERE` with your token
- Open the **4. WayinVideo — Get Clip Results** node and replace the same placeholder there

&gt; ⚠️ This API key appears in **two nodes** — node 2 and node 4. You must replace it in both. If you only update one, the result-fetching step will fail with an authentication error.

**2. Connect Google Drive (OAuth2)**

- In n8n, go to **Credentials → Add Credential → Google Drive OAuth2 API**
- Follow the Google authentication flow to grant access
- Open the **7. Google Drive — Upload Clip** node
- Select your newly created credential from the dropdown

**3. Set Your Google Drive Folder ID**

- Open Google Drive in your browser and navigate to the folder where you want clips saved
- Look at the URL bar — copy the string of characters that appears after `/folders/`
- Open the **7. Google Drive — Upload Clip** node in n8n
- Replace `YOUR_GOOGLE_DRIVE_FOLDER_ID` with the ID you just copied
- Update `YOUR_FOLDER_NAME` with a recognisable label for your own reference

**4. Activate the Workflow**

- Save the workflow in n8n
- Toggle it **Active** using the switch at the top of the editor
- Open the form URL shown in the **1. Form — Testimonial Video + Details** node trigger settings
- Submit a test testimonial video URL to confirm everything runs correctly

---

## How It Works (Step by Step)

**Step 1 — Form: Collect Testimonial Details**
The workflow starts when someone fills out a hosted n8n form. You provide four pieces of information: the testimonial video URL, the client or customer name, the industry or niche, and where the clips will be used (such as ads, a website, or social media). All this data is passed automatically to the next step.

**Step 2 — Submit Clipping Task to WayinVideo**
The workflow sends your video URL to the WayinVideo API. Along with the URL, it sends settings including the client name as the project label, a target clip length of 30–60 seconds, a maximum of 5 clips, HD 720p resolution, captions turned on, and vertical 9:16 reframing enabled. WayinVideo processes these settings and returns a Job ID used to retrieve results later.

**Step 3 — Wait 90 Seconds**
The workflow pauses for 90 seconds. This gives WayinVideo time to analyse the video and generate clips before the next step attempts to retrieve them. Skipping or shortening this wait on longer videos may result in an empty response.

&gt; ⚠️ If your testimonial videos are longer than 20–30 minutes, 90 seconds may not be enough processing time. Increase the wait duration in **3. Wait — 90 Seconds** to 180 or 240 seconds to account for longer videos.

**Step 4 — Fetch Clip Results**
Using the Job ID from Step 2, the workflow calls the WayinVideo results endpoint to retrieve the completed clips. If WayinVideo has finished processing, the response contains the full list of clips with titles, export links, engagement scores, descriptions, and timestamps.

**Step 5 — Extract Each Clip**
A code step reads the clips array from the API response and splits it into individual items — one per clip. For each clip, it extracts the title, export link, score, tags, description, and start and end timestamps. Each clip then flows through the remaining steps independently.

**Step 6 — Download the Clip File**
For each clip, the workflow fetches the export link and downloads the video file as a binary attachment. This happens one clip at a time, in sequence.

**Step 7 — Upload to Google Drive**
Each downloaded clip file is uploaded to your configured Google Drive folder. The filename is set automatically using the AI-generated clip title from Step 5. Your Drive folder stays organised without any manual work.

---

## Key Features

✅ **Zero editing required** — WayinVideo selects the best moments automatically using AI engagement scoring, no timeline scrubbing needed  
✅ **Vertical-ready output** — AI reframing and 9:16 ratio are enabled by default, making every clip mobile and social media ready straight from Drive  
✅ **Auto-captioned clips** — Captions are added to every clip in the original language using a styled caption template — no subtitle software required  
✅ **Form-based submission** — Any team member can submit a testimonial video without accessing n8n or any other tool  
✅ **AI-generated filenames** — Each clip is named using the WayinVideo-generated title, so your Drive folder is always easy to browse  
✅ **Client-labelled projects** — The client name from the form is sent to WayinVideo as the project label, keeping clip jobs organised in your WayinVideo dashboard  
✅ **Batch clip processing** — All clips from a single video are downloaded and uploaded in one workflow run — no manual repeat steps  

---

## Customisation Options

**Increase the clip limit**
In the **2. WayinVideo — Submit Clipping Task** node, change `"limit": 5` to a higher number to extract more clips per video — useful for longer testimonial recordings.

**Switch to landscape output**
In the same Submit node, change `"ratio": "RATIO_9_16"` to `"RATIO_16_9"` and set `"enable_ai_reframe"` to `false` to generate widescreen clips for YouTube, website embeds, or sales decks.

**Change clip length**
Modify `"target_duration"` in node 2 from `"DURATION_30_60"` to `"DURATION_15_30"` for shorter clips suited to Instagram Stories or TikTok, or `"DURATION_60_90"` for longer testimonial segments.

**Organise clips by client in Drive**
Add a **Google Drive** node before the upload step to create a new subfolder named after the client — pulling the client name directly from the form — and point the upload to that folder instead of a single shared folder.

**Notify your team when clips are ready**
Add a **Gmail** or **Slack** node after the **7. Google Drive — Upload Clip** step to send a message with the clip title and Drive link each time a new clip is saved.

**Add a retry loop for long videos**
Replace the single 90-second wait with a loop — using a **Wait** node, an **HTTP Request** poll, and an **IF** node — so the workflow keeps checking every 60 seconds until all clips are confirmed ready, regardless of video length.

---

## Troubleshooting

**API key not working / WayinVideo returns an authentication error:**
- Confirm you have replaced `YOUR_WAYIN_API_KEY_HERE` in **both** node 2 and node 4 — not just one
- Check that the Authorization header value starts with `Bearer ` followed by your key with no extra spaces or line breaks
- Verify your WayinVideo account is active and has available processing credits

**Clip files downloading but not saving correctly to Drive:**
- Check n8n execution logs for binary data errors in the **6. HTTP — Download Clip File** step — some WayinVideo export links have a short expiry window
- If the export link has expired, rerun the workflow with the same video URL to generate a fresh set of export links

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/contact-us/](https://www.incrementors.com/contact-us/)

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
