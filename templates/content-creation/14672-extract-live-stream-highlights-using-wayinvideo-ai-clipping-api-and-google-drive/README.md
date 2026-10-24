# 🎬 Extract live stream highlights using WayinVideo AI Clipping API and Google Drive

> ⚡ **652 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Paste your live stream recording URL into a simple form — and this workflow automatically finds the most viral moments and turns them into ready-to-upload short clips. [WayinVideo](https://wayin.ai/api/) AI analyzes the full stream, extracts the best highlights, and uploads each clip directly to your Google Drive folder. Built for streamers, content teams, and social media managers who want to repurpose long streams into shareable content without watching hours of footage.

---

## What This Workflow Does

- **Form-triggered entry** — Accepts a stream URL, channel name, category, and clip count via a clean web form — no chat interface or code needed
- **AI clip extraction** — Sends the stream to WayinVideo AI which automatically identifies the most viral and exciting moments
- **Automated waiting** — Pauses 90 seconds after submission to give the API time to process before fetching results
- **Smart clip parsing** — Extracts each clip's title, score, tags, description, and timestamps from the API response
- **Batch downloading** — Downloads every clip file automatically, one by one, in sequence
- **Auto-named uploads** — Saves each clip to Google Drive using the AI-generated clip title as the filename — no manual renaming needed

---

## Setup Requirements

### Tools You'll Need
- n8n instance (self-hosted or n8n Cloud)
- WayinVideo account with API access
- Google account with Google Drive OAuth2 credentials in n8n

**Estimated Setup Time: 5–10 minutes**

---

## Step-by-Step Setup

**1. Get your WayinVideo API key**
Go to [WayinVideo](https://wayin.ai/api/), log in, and navigate to your Dashboard → API section. Copy your Bearer token.

**2. Add the API key to node 2**
Open **2. WayinVideo — Submit Clipping Task**. Find the Authorization header. Replace `YOUR_WAYIN_API_KEY_HERE` with your token.

**3. Add the API key to node 4**
Open **4. WayinVideo — Get Clips Result**. Find the Authorization header again. Replace `YOUR_WAYIN_API_KEY_HERE` with the same token.

&gt; ⚠️ The API key appears in **2 nodes** — nodes 2 and 4. Replace it in both or the workflow will fail.

**4. Connect Google Drive**
In n8n, go to Credentials → Add Credential → Google Drive OAuth2. Complete the Google authentication flow.

**5. Set your Drive folder ID**
Open **7. Google Drive — Upload Clip**. Find the `folderId` field. Replace `YOUR_GOOGLE_DRIVE_FOLDER_ID_HERE` with your actual folder ID.

&gt; 💡 To find your folder ID: open the target folder in Google Drive, look at the URL bar — copy the long string of letters and numbers after `/folders/`.

**6. Select your Drive credential**
In the same node (**7. Google Drive — Upload Clip**), select your connected Google Drive credential from the dropdown.

**7. Activate the workflow**
Toggle the workflow to **Active** at the top of the n8n canvas. Copy the Form URL and share it with your team or streamers.

---

## How It Works (Step by Step)

**Step 1 — Form Trigger**
A streamer or team member opens the form and fills in four fields: the stream recording URL, the channel name, the stream category, and how many highlight clips they want. The moment they submit, the workflow starts automatically.

**Step 2 — WayinVideo — Submit Clipping Task**
The workflow sends a POST request to the WayinVideo AI Clipping API with the stream URL and your settings. It requests 9:16 vertical clips (ideal for Shorts and Reels), 30–60 seconds long, with captions enabled, an AI-generated hook at the beginning, and auto-reframing applied. The API returns a Job ID to track the task.

**Step 3 — Wait 90 Seconds**
The workflow pauses for 90 seconds. This gives WayinVideo enough time to begin processing the stream before the next step checks for results.

&gt; ⚠️ For streams longer than 90 minutes, this wait may not be long enough. If clips come back empty, increase this wait to 180–300 seconds.

**Step 4 — WayinVideo — Get Clips Result**
Using the Job ID from Step 2, the workflow calls the WayinVideo results endpoint to fetch the completed clips. Each clip in the response includes a title, export link, virality score, tags, description, and start/end timestamps.

**Step 5 — Code — Extract Clip Data**
A JavaScript code block loops through all the clips returned by the API and separates them into individual items. Each item carries its own title, export link, score, tags, description, and timestamps — ready to be processed one by one.

**Step 6 — HTTP — Download Clip**
For each clip, the workflow downloads the actual video file from the WayinVideo export link. The file is held in memory and passed directly to the next step.

**Step 7 — Google Drive — Upload Clip**
Each downloaded clip is uploaded to your specified Google Drive folder. The filename is automatically set to the AI-generated clip title — so your Drive stays organized without any manual work.

---

## Key Features

✅ **No-code form trigger** — Anyone on your team can submit a stream URL without touching n8n  
✅ **AI virality scoring** — Each clip comes with a score so you know which moments hit hardest  
✅ **Vertical format output** — Clips are auto-generated in 9:16 ratio, ready for TikTok, Reels, and Shorts  
✅ **Auto-captions included** — WayinVideo adds captions to every clip automatically during processing  
✅ **AI hook generation** — An AI-written hook is added to the beginning of each clip to boost retention  
✅ **Smart auto-naming** — Drive uploads use the AI clip title, keeping your folder clean and searchable  
✅ **Batch processing** — Handles multiple clips in one run — no manual looping or repeat submissions  
✅ **Timestamp metadata** — Each clip carries exact start and end timestamps for future reference or logging

---

## Customisation Options

**Change clip length** — In **2. WayinVideo — Submit Clipping Task**, change `target_duration` from `DURATION_30_60` to `DURATION_15_30` for shorter Reels or `DURATION_60_90` for longer YouTube clips.

**Switch to horizontal format** — Change `ratio` from `RATIO_9_16` to `RATIO_16_9` in the same node for YouTube landscape highlights.

**Change caption language** — Update `target_lang` in node 2 from `en` to `hi`, `es`, `fr`, or `de` to generate captions in a different language.

**Log clips to Google Sheets** — Add a Google Sheets node after **7. Google Drive — Upload Clip** to automatically record each clip's title, score, Drive link, and timestamps in a spreadsheet for reporting.

**Send a Slack or email notification** — Add a Gmail or Slack node at the end to ping your team when all clips are uploaded and ready to review.

**Dynamic Drive folder by streamer** — Modify the folder ID in node 7 using an expression based on the Streamer / Channel Name field from the form, so each creator gets their own organized subfolder automatically.

---

## Troubleshooting

**API returns empty or no clips:**
- Confirm your WayinVideo API key is correct in **both** node 2 and node 4
- Check your WayinVideo account has active credits or an active subscription
- Make sure the stream URL is publicly accessible — private, unlisted, or age-restricted videos won't work
- Test with a shorter video first (under 30 minutes) to isolate the issue

**Clips missing after the wait:**
- The 90-second wait may not be enough for long streams — open **3. Wait — 90 Seconds** and increase the amount to 180 or 300
- Check your WayinVideo dashboard to see if the job is still processing

**Google Drive upload failing:**
- Re-authenticate your Google Drive OAuth2 credential in n8n Credentials
- Double-check that the folder ID in node 7 is correct — open the target folder in Drive and copy the ID from the URL
- Make sure the credential has write access to the target folder

**Form not triggering the workflow:**
- Make sure the workflow is toggled **Active** — inactive workflows do not run
- Copy the Form URL from the trigger node and test it in a fresh browser tab

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
