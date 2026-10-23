# 🎬 Create a virtual outfit try-on Telegram bot with async polling and Google Sheets

> ⚡ **1,298 views** · 🎬 [Content Creation & Video](../)

## Description

# 👗 Virtual Try-On Telegram Bot — AI Outfit Try-On via Telegram with Async Job Polling

Try on any outfit virtually - right inside Telegram. A user sends a **person photo**, then a **garment photo** (captioned `garment`), and the bot replies with an AI-generated try-on result image using a dedicated Virtual Try-On API. No app. No frontend. Just a Telegram chat.


## 🎯 Who Is This For?

- **Fashion e-commerce brands** wanting to offer a try-before-you-buy experience via a simple chat interface
- **Telegram bot developers** looking for a real-world async API polling pattern with state management
- **AI product builders** who want a plug-and-play virtual fitting room for their audience
- **Boutiques & clothing stores** wanting to let customers preview outfits before ordering

## ⚙️ What This Workflow Does

1. **Receives a Telegram message** and checks if it contains a photo
2. **Person photo** (sent without caption) → saves `chat_id` + `file_id` to Google Sheets as session state
3. **Garment photo** (sent with caption `garment`) → looks up the saved person photo, resolves both Telegram file URLs, downloads both images, and submits a try-on job to the API
4. **Async polling loop** → waits 15 seconds, checks job status, loops until `completed` or `failed`
5. **Sends the result** back to the user as a photo in Telegram, then cleans up the sheet row

## 🔑 Credentials & APIs Required

| Service | Purpose | Where to Get It |
|---|---|---|
| **Telegram Bot Token** | Receive messages & send results | Create a bot via [@BotFather](https://t.me/botfather) on Telegram → `/newbot` |
| **Virtual Try-On API Key** | Submit and poll try-on jobs | Sign up at your Try-On API provider (e.g. [try-on api](https://tryon-api.com/) or your own deployment) |
| **Google Sheets OAuth2** | Store per-user session state between messages | Connect via n8n's built-in Google Sheets OAuth2 credential |

&gt; 💡 **Why Google Sheets for state?** Each Telegram message triggers a separate workflow execution - there's no shared memory between runs. Google Sheets acts as a lightweight session store using `chat_id` as the unique key.

## 🛠️ Setup Instructions

### Step 1 - Telegram Bot
1. Open Telegram and message [@BotFather](https://t.me/botfather)
2. Run `/newbot`, follow the prompts, copy your **Bot Token**
3. Paste the token into the **⚙️ Config** node under `botToken`

### Step 2 - Google Sheet
1. Create a new Google Sheet
2. Add a tab named exactly **`tryon-state`**
3. Add two column headers in row 1: **`chat_id`** and **`person_file_id`**
4. Copy the Sheet ID from the URL (`docs.google.com/spreadsheets/d/**{THIS_PART}**/edit`)
5. Paste it into the **⚙️ Config** node under `sheetId`

### Step 3 - Try-On API
1. Obtain your API key from your Virtual Try-On provider
2. Set `tryonApiKey` in the **⚙️ Config** node
3. If your API base URL differs, also update `tryonApiBase`
4. Verify the API accepts `POST /api/v1/tryon` with `multipart/form-data` fields `person_images` and `garment_images`, and returns `{ jobId, statusUrl }` - adjust the **Submit Try-On Job** and **Check Job Status** nodes if your provider's schema differs

### Step 4 - n8n Credentials
- Assign your **Telegram credential** to all Telegram nodes (Trigger + all send nodes)
- Assign your **Google Sheets OAuth2 credential** to all Google Sheets nodes
- **Activate** the workflow - the Telegram Trigger only works when the workflow is active

## 🔄 How the Polling Loop Works

The Try-On API is asynchronous - submitting a job returns a `jobId`, not the result immediately. The workflow:

1. Submits the job → gets `jobId`
2. Waits **15 seconds**
3. Calls the status endpoint: `GET /api/v1/tryon/status/{jobId}`
4. If `status === "completed"` → downloads and sends the result image
5. If `status === "failed"` → sends an error message to the user
6. Otherwise → loops back to the wait step

**Typical total wait:** 15–60 seconds depending on the API and queue load.

## 🎨 How to Customize

- **Change the garment trigger keyword** → Edit the caption check in **Is Garment Photo?** node from `garment` to anything you like (e.g. `outfit`, `try`, `wear`)
- **Add a category/garment type input** → Extend the caption parsing to accept values like `top`, `dress`, `jacket` and pass them as an extra field to your Try-On API if supported
- **Use a different state store** → Swap Google Sheets for Airtable, Supabase, or Redis if you have higher traffic needs; just replace the **Save Person to Sheet** and **Lookup Person from Sheet** nodes
- **Add a paid/subscription gate** → Before saving the person photo, check a users sheet or database to see if the `chat_id` has remaining credits
- **Support multiple garments in one session** → Instead of deleting the person row after each try-on, keep it for 24 hours so users can try multiple garments without re-uploading the person photo
- **Add a result watermark** → Insert an n8n Code node after **HTTP Request** (result download) to overlay your brand logo before sending

## 📋 Workflow Nodes Overview

| Node | Role |
|---|---|
| Telegram Trigger | Listens for incoming messages |
| Extract Message Info | Pulls out `chat_id`, `caption`, `hasPhoto`, `fileId` |
| ⚙️ Config | Single place for all configurable values — edit this first |
| Has Photo? | Routes messages that contain a photo |
| Is Garment Photo? | Checks if caption equals `garment` |
| Save Person to Sheet | Stores person `file_id` keyed by `chat_id` |
| Lookup Person from Sheet | Retrieves saved person photo when garment arrives |
| Has Person Saved? | Guards against out-of-order photos |
| Collect IDs | Bundles all required IDs for downstream nodes |
| Get Person/Garment File Path | Resolves Telegram `file_id` → `file_path` via `getFile` API |
| Download Person/Garment Image | Downloads actual image binary from Telegram CDN |
| Submit Try-On Job | POSTs both images to the Try-On API |
| Wait 15 Seconds | Gives the API time before first status check |
| Check Job Status | Polls job status endpoint |
| Is Job Complete? / Is Job Failed? | Routes to success or error path |
| HTTP Request (result download) | Downloads the result image as binary |
| Send Result Photo | Sends the AI try-on image back to the user |
| Delete Row from Sheet | Cleans up session state after successful result |

## ⚠️ Notes & Gotchas

- **Telegram file URLs expire** - the workflow resolves and downloads images immediately; never store Telegram download URLs for later use
- **The bot must be activated** for the Telegram webhook to register - n8n does not receive messages while the workflow is inactive
- **Google Sheets appendOrUpdate** uses `chat_id` as the matching key, so a user can retake their person photo any time and it will overwrite the old entry
- **Pinned test data** is included in `Submit Try-On Job` and `Merge State` nodes for local testing — remove or disable these pins before going live

## 🔗 Useful Links

- [Telegram BotFather — Create your bot](https://t.me/botfather)
- [n8n Telegram node docs](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/)
- [n8n Google Sheets node docs](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/)
- [n8n HTTP Request node docs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/)
- [n8n Wait node docs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/)
- [n8n Community Forum](https://community.n8n.io/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
