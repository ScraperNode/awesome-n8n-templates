# 🎬 Create lead nurture video clips from webinar recordings using WayinVideo AI and Google Drive

> ⚡ **69 views** · 🎬 [Content Creation & Video](../)

## Description

Paste your webinar recording URL into a simple form — and this workflow does the rest automatically. [WayinVideo](https://wayin.ai/api/) AI scans the full recording and extracts the most engaging clip segments, ready for your lead nurture campaigns. Each clip is downloaded and saved directly to your Google Drive folder with no manual effort. Built for marketers, agencies, and growth teams who run webinars and want to repurpose content at scale without editing software.

---

## What This Workflow Does

- **Form-triggered input** — Collects the recording URL, webinar topic, brand name, and clip limit from a clean hosted form before any processing begins
- **AI-powered clip extraction** — Submits the webinar video to WayinVideo, which identifies and cuts the highest-engagement moments automatically
- **Smart polling loop** — Waits 45 seconds and checks for results repeatedly until clips are ready — no manual checking needed
- **Per-clip file download** — Downloads every generated clip as an individual video file directly from the WayinVideo export link
- **Automatic Google Drive upload** — Saves each clip to your chosen Drive folder with the AI-generated clip title as the filename
- **Batch processing** — Handles multiple clips in a single run — all clips are downloaded and uploaded one by one without any extra configuration

---

## Setup Requirements

### Tools You'll Need

- Active n8n instance (self-hosted or n8n Cloud)
- WayinVideo account with API access (wayin.ai)
- Google account with Google Drive OAuth2 access in n8n

**Estimated Setup Time: 5–10 minutes**

---

## Step-by-Step Setup

**1. Get Your WayinVideo API Key**

WayinVideo is the AI engine that finds and clips the best moments from your webinar.

- Go to [WayinVideo](https://wayin.ai/api/) and log in or create an account
- Navigate to your Dashboard → API section
- Copy your Bearer token
- Open the **2. WayinVideo — Submit Clipping Task** node in n8n
- Find the `Authorization` header and replace `YOUR_WAYINVIDEO_API_KEY` with your token
- Open the **4. WayinVideo — Poll Clip Results** node and replace the same placeholder there

&gt; ⚠️ This API key appears in **two nodes** — Submit (node 2) and Poll (node 4). Replace it in both or the workflow will fail on the polling step.

**2. Connect Google Drive (OAuth2)**

- In n8n, go to **Credentials → Add Credential → Google Drive OAuth2 API**
- Complete the Google authentication flow
- Open the **8. Google Drive — Upload Clip** node
- Select your new credential from the dropdown

**3. Set Your Google Drive Folder ID**

- Open Google Drive and navigate to the folder where you want clips saved
- Look at the URL bar — copy the string after `/folders/`
- In the **8. Google Drive — Upload Clip** node, replace `YOUR_GOOGLE_DRIVE_FOLDER_ID` with that string
- Update `YOUR_FOLDER_NAME` with a recognisable label for your own reference

**4. Activate the Workflow**

- Save the workflow
- Toggle it **Active** at the top of the editor
- Open the form URL (shown in the **1. Form — Webinar URL + Details** node) and submit a test recording

---

## How It Works (Step by Step)

**Step 1 — Form: Collect Webinar Details**
The workflow starts when you fill out a hosted n8n form. You provide four things: the webinar recording URL, the topic or title, your company name, and the maximum number of clips you want generated. Once submitted, all this data is passed to the next step.

**Step 2 — Submit Clipping Task to WayinVideo**
The workflow sends your recording URL to the WayinVideo API using a POST request. It also sends the project name, clip limit, resolution setting (HD 720p), and caption preferences. WayinVideo returns a Job ID that is used to track the processing status in the next steps.

**Step 3 — Wait 45 Seconds**
The workflow pauses for 45 seconds. This gives WayinVideo time to begin processing the video before the first status check. Checking too early would return an empty result.

**Step 4 — Poll for Clip Results**
Using the Job ID from Step 2, the workflow calls the WayinVideo results endpoint to check if the clips are ready. The response either contains completed clip data or an empty result.

**Step 5 — Clips Ready? (Smart Retry Loop)**
The workflow checks whether the result data is populated:

- **YES (clips are ready)** — moves forward to extract and download each clip
- **NO (still processing)** — loops back to the 45-second wait and checks again

&gt; This retry loop runs every 45 seconds until WayinVideo finishes. For longer webinars (60+ minutes) this may take several cycles — this is completely normal.

**Step 6 — Extract Each Clip**
A Code step splits the clips array into individual items. For each clip it extracts the title, export link, engagement score, tags, description, and start/end timestamps. Each clip then flows through the next steps independently.

**Step 7 — Download the Clip File**
For each clip, the workflow fetches the export link from WayinVideo and downloads the video file directly as a binary file attachment.

**Step 8 — Upload to Google Drive**
Each downloaded clip file is uploaded to your configured Google Drive folder. The filename is set automatically using the AI-generated clip title from Step 6 — so your Drive folder stays organised without any manual renaming.

---

## Key Features

✅ **No editing software needed** — WayinVideo selects the best clips automatically using AI engagement scoring  
✅ **Form-based entry point** — Anyone on your team can submit a webinar without touching n8n  
✅ **Automatic retry loop** — Polling continues every 45 seconds until processing is done — no babysitting required  
✅ **Per-clip Drive organisation** — Each clip is saved as a separate file with its AI-generated title as the filename  
✅ **Engagement scoring** — The API returns a score for each clip so you can prioritise the highest-impact segments  
✅ **Caption support** — Captions are enabled by default, making clips ready for social media with no extra steps  
✅ **Configurable clip count** — Set the max number of clips per webinar directly in the form — no code changes needed  
✅ **Scalable batch processing** — Multiple clips are processed and uploaded in a single workflow run automatically  

---

## Customisation Options

**Change clip length for social media**
In the **2. WayinVideo — Submit Clipping Task** node, change `target_duration` from `DURATION_30_60` to `DURATION_15_30` to generate shorter clips optimised for Instagram Reels or YouTube Shorts.

**Enable vertical video reframing**
In the same Submit node, set `enable_ai_reframe` to `true` to let WayinVideo automatically crop and reframe clips to a vertical 9:16 format — ready for mobile-first platforms without any editing.

**Change output language**
Set `target_lang` in the Submit node to `hi`, `es`, `fr`, or `de` to receive captions and AI output in a different language — useful for international webinars.

**Organise clips by client or campaign**
Add a **Set** node before the Google Drive upload step to dynamically build a folder path based on the brand name submitted in the form. This keeps clips from different clients separated automatically.

**Send clip links by email after upload**
Add a **Gmail** node after the **8. Google Drive — Upload Clip** step to email the Google Drive link of each clip to your team or client as soon as the upload is complete.

**Add a Slack notification when done**
Place a **Slack** node at the end of the workflow to send a summary message to a channel once all clips are uploaded — including the clip titles and Drive links — so your team knows when new content is ready.

---

## Troubleshooting

**API key not working / WayinVideo returns an error:**
- Double-check that `YOUR_WAYINVIDEO_API_KEY` has been replaced in **both** node 2 and node 4
- Confirm your WayinVideo account is active and has available processing credits
- Make sure the Authorization header value starts with `Bearer ` followed by your key with no extra spaces

**Workflow stuck in the polling loop:**
- Long webinars (90+ minutes) can take 5–10 minutes to process — multiple retry cycles are expected
- Open your WayinVideo dashboard to check if the job is still running or has failed
- If the loop runs for more than 20 minutes with no result, the recording URL may be unsupported or behind a login wall

**Clips not uploading to Google Drive:**
- Re-authenticate your Google Drive OAuth2 credential in n8n (credentials can expire)
- Verify the folder ID in node 8 is correct — copy it fresh from the Drive URL
- Check that your Google account has write access to the target folder

**Form not submitting / workflow not starting:**
- Make sure the workflow is toggled **Active** — inactive workflows do not accept form submissions
- Use the exact form URL shown in the **1. Form — Webinar URL + Details** node trigger settings
- Confirm the webinar URL is publicly accessible — password-protected Zoom recordings will not be processed

**Clip files downloading but not uploading correctly:**
- Confirm the Google Drive credential is selected in the **8. Google Drive — Upload Clip** node (not left as unconfigured)
- Check n8n execution logs for any binary data errors in the download step — some export links may expire quickly after generation

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
