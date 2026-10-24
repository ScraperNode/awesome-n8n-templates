# 🎬 Generate bulk Veo 3 videos from Google Sheets via Vertex AI

> ⚡ **346 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### 🎬 What This Workflow Does

This workflow turns your Google Sheet into a **fully automated AI video factory** powered by **Google Veo 3 via Vertex AI**. Simply fill in your prompts, choose your video settings, tick a checkbox — and walk away. The workflow handles everything: sending the prompt to Veo 3, waiting for the video to generate, downloading it, uploading it to Google Drive, and writing the link back to your sheet automatically.

No manual downloading. No checking APIs. No copy-pasting links. Just tick and go.

Whether you need 5 videos or 500, this workflow runs each one through the same reliable pipeline — with full error handling so you always know what succeeded and what failed, and exactly why.

---

### 🧠 Why This Workflow Exists

Google Veo 3 is one of the most powerful AI video generation models in the world — but the Google Cloud console only lets you generate videos one at a time. If you have a client who needs 50 product videos, or a content team producing videos at scale, doing it manually through the UI is completely impractical.

This workflow solves that. It gives you a **spreadsheet-driven production pipeline** for Veo 3 — where each row is one video job, fully configurable with its own prompt, resolution, aspect ratio, and duration.

---

### ✅ What You Get

- ✅ Checkbox trigger — tick a row in Google Sheets to start generation
- ✅ Per-row settings — each video can have its own resolution, aspect ratio, and duration
- ✅ Smart polling loop — automatically checks every 60 seconds until the video is ready
- ✅ Google Drive upload — finished videos land in your Drive folder automatically
- ✅ Sheet auto-update — Drive link written back to the exact row when done
- ✅ Full error handling — content blocks and API errors are logged to the sheet with the exact reason
- ✅ No wasted credits — validation gate blocks empty or incomplete rows before any API call is made

---

### 🗂️ Google Sheet Template

Use this ready-made Google Sheet template to get started immediately:
👉 **[Click here to open the Google Sheet Template](https://docs.google.com/spreadsheets/d/1E3ujHxOFXvokfDnEMK7wcxy21F3YZgKLL_rAIvcZrkI/edit?usp=sharing)** *(File → Make a copy)*

Your sheet must have these columns in this exact order:

| Column | Description |
|---|---|
| `prompt` | Your video description — what Veo 3 should generate |
| `resolution` | Video quality: `720p` or `1080p` |
| `aspectRatio` | `16:9` for landscape, `9:16` for portrait/vertical |
| `durationSeconds` | Video length: `4`, `6`, or `8` seconds only |
| `send_for_generation` | Checkbox column — tick this to trigger the workflow |
| `video_drive_link` | Auto-filled — Drive link on success, error reason on failure |
| `row_number` | Auto-filled by Apps Script — do not edit manually |

---

### ⚙️ Full Setup Guide — Step by Step

---

#### STEP 1 — Create a Google Cloud Project & Enable Vertex AI

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Click the project dropdown at the top → **New Project**
3. Give it a name (e.g. `veo-automation`) → click **Create**
4. Once created, make sure this project is selected
5. In the left menu go to **APIs & Services → Library**
6. Search for **Vertex AI API** → click it → click **Enable**
7. Now go to **Billing** in the left menu
8. Link a billing account to your project — Vertex AI requires billing to be enabled even if you're within free tier limits

---

#### STEP 2 — Get Your Vertex AI API Key

1. go on this url https://console.cloud.google.com/vertex-ai/studio in the vertex ai studio create the api key
2. Save the key somewhere safe — you will paste it into the **Data Collection** node in n8n

---

#### STEP 3 — Get Your Project ID

1. In Google Cloud Console, look at the top bar — your **Project ID** is shown next to the project name
2. It looks like: `project-xxxxxxx-xxxx-xxxx-ada` or similar
3. Copy this — you will paste it into the **Data Collection** node in n8n

---

#### STEP 4 — Set Up n8n Credentials

In n8n you need two Google credential connections:

**Google Sheets OAuth2**
1. In n8n go to **Settings → Credentials → New**
2. Search for **Google Sheets OAuth2 API**
3. Follow the OAuth flow to connect your Google account
4. This credential is used by the **Update video Link in sheet** and **Update Error in Sheet** nodes

**Google Drive OAuth2**
1. Same process — search for **Google Drive OAuth2 API**
2. Connect the same or a different Google account
3. This credential is used by the **Upload Video to Drive** node

---

#### STEP 5 — Configure the Data Collection Node

Open the **Data Collection** node in n8n and update these values:

| Field | What to put |
|---|---|
| `project_id` | Your Google Cloud Project ID from Step 3 |
| `vertex_api` | Your Vertex AI API Key from Step 2 |
| `veo_3_model` | `veo-3.0-generate-preview` (or newer model if available) |
| `api_endpoint` | Leave as `us-central1-aiplatform.googleapis.com` |
| `region` | Leave as `us-central1` |

---

#### STEP 6 — Set Up the Google Drive Folder

1. Go to [drive.google.com](https://drive.google.com)
2. Create a new folder where your videos will be saved (e.g. `Veo Generated Videos`)
3. Open the folder — copy the folder ID from the URL:
   - URL looks like: `https://drive.google.com/drive/folders/xxxxxxxxxxxxxx-xxxxxxxxxxx`
   - The folder ID is the last part: `xxxxxxxxx-xxxxxxxxx`
4. Paste this into the **Upload Video to Drive** node → Folder ID field

---

#### STEP 7 — Connect Your Google Sheet

1. Open the **Update video Link in sheet** node
2. Click the Document field → select your copy of the Google Sheet template
3. Make sure the sheet tab selected is `VEO_3`
4. Do the same in the **Update Error in Sheet** node

---

Here is the full rewritten section in clean markdown without any code blocks around the URL:

---

### STEP 8 — Set Up the Apps Script Webhook Trigger

This is what connects your Google Sheet checkbox to n8n. Without this, ticking the checkbox does nothing.

📄 **[Download the Apps Script file here](https://docs.google.com/document/d/11S2YIm-1FE31ztlyv2PK9AjbjArTW7r-__kfmtd7z1Q/edit?usp=sharing)**

**How to install it:**

1. Open your Google Sheet
2. Click **Extensions → Apps Script**
3. Delete any existing code in the editor
4. Paste the entire Apps Script code provided with this template
5. Find the url field in the config block and replace YOUR_N8N_WEBHOOK_URL_HERE with your n8n webhook URL — found in the **Google Sheet Trigger** node in n8n. Use the **Production URL**, not the test URL.
6. Click **Save** (floppy disk icon at the top)

**Now add the installable trigger — this step is critical:**

7. In Apps Script, click the **clock icon** on the left sidebar (Triggers)
8. Click **+ Add Trigger** in the bottom right corner
9. Set these exact options:
   - Choose which function to run: **handleEdit**
   - Choose which deployment to run: **Head**
   - Select event source: **From spreadsheet**
   - Select event type: **On edit**
10. Click **Save**
11. Google will ask you to authorise the script — click through and allow all permissions
12. Go back to your sheet and tick a checkbox in column E to test — open Apps Script **Executions** tab to confirm it fired successfully

⚠️ **Why the installable trigger is required:** The basic onEdit function that Google runs automatically does NOT have permission to make external HTTP requests. The installable trigger runs under your Google account permissions and can call external URLs like your n8n webhook. This is a Google limitation — not an n8n one.

---

### STEP 9 — Activate the Workflow in n8n

1. In n8n open the workflow
2. Toggle the workflow to **Active** using the switch in the top right corner
3. Copy the **Production webhook URL** from the Google Sheet Trigger node
4. Paste it into your Apps Script config in Step 8 where it says YOUR_N8N_WEBHOOK_URL_HERE

---

### 🔄 How the Workflow Runs — Full Flow Explained

### 🔄 How the Workflow Runs — Full Flow Explained

```
Google Sheet checkbox ticked
        ↓
Apps Script fires webhook → n8n
        ↓
Validation Gate (If node)
— checks prompt, resolution, aspectRatio are all filled
— if anything missing → workflow stops, no API call made
        ↓
Data Collection node
— bundles all settings into one clean item
        ↓
Vertex AI — Send for Generation
— POST to predictLongRunning endpoint
— returns an operation name (like a tracking number)
        ↓
Wait 60 seconds
        ↓
Fetch / Check Video
— POST to fetchPredictOperation
— checks if done: true
        ↓
IF raiMediaFilteredCount === 0
  → TRUE: video exists
      → Convert Base64 to MP4 file
      → Upload to Google Drive
      → Write Drive link to sheet ✅
  → FALSE: check for error
      → IF raiMediaFilteredCount &gt; 0 OR error exists
          → Write error reason to sheet ❌
      → ELSE: still processing
          → Wait 60 seconds → check again ⏳
```


⚙️ Video Settings Reference
Resolution

720p — standard quality, faster, lower cost
1080p — high quality, uses more credits

Aspect Ratio

16:9 — landscape (YouTube, ads, presentations)
9:16 — vertical (Instagram Reels, TikTok, YouTube Shorts)

Duration

4, 6, or 8 seconds — Veo 3 only accepts these exact values, no other numbers

---

### ❌ Error Handling — What Gets Logged

If a video fails, the exact reason is written to the `video_drive_link` column:

 Prompt violates Veo safety policy,| Full AI reason from Google ||

This means your client can see exactly which rows failed and why — without needing to check any logs.

---

### 💡 Tips for Best Results

- Keep prompts on a single line — multi-line prompts are handled automatically by the workflow
- Use descriptive cinematic prompts: *"Slow motion close-up of ocean waves at sunset, golden hour, 4K"*
- Start with `720p` to test — switch to `1080p` for final production runs
- Use `9:16` for Instagram Reels, TikTok, YouTube Shorts
- Use `16:9` for YouTube, presentations, ads

---

### 🔧 Requirements

- n8n (self-hosted or cloud) — version 1.0+
- Google Cloud account with billing enabled
- Vertex AI API enabled on your project
- Google Sheets + Google Drive OAuth credentials in n8n
- Google Apps Script access on your sheet

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
