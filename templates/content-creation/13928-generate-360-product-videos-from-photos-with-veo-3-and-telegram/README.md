# 🎬 Generate 360° product videos from photos with Veo 3 and Telegram

> ⚡ **317 views** · 🎬 [Content Creation & Video](../)

## Description

Generate 360° product videos from a single photo using Google Veo 3 and Telegram

---

📌 Overview
This workflow turns any product photo into a cinematic 360° orbit video using 
Google Vertex AI (Veo 3) — fully automated and delivered straight to Telegram.

Send a product image to your Telegram bot and the workflow handles everything: 
image validation, Google Cloud authentication, AI video generation, and delivery. 
No manual steps, no dashboard — just send a photo and receive a professional video.

Built for e-commerce sellers, product photographers, and marketers who want 
studio-quality 360° product videos without expensive equipment or editing software.

---

⚙️ How it works

1. User sends a product photo to the Telegram bot
2. The workflow validates the image (minimum 480px resolution)
3. A Service Account stored in Google Sheets is used to authenticate with 
   Google Cloud and generate a short-lived OAuth token
4. The image is sent to Vertex AI Veo 3 with a cinematic 360° orbit camera prompt
5. The workflow polls every 2 minutes until the video is ready (up to 10 minutes)
6. The finished video is delivered back to the user in Telegram

---

🛠️ Setup steps

1. Create a Telegram bot via @BotFather and add the bot credentials in n8n
2. Enable the Vertex AI API in your Google Cloud project
3. Request access to the Veo 3 preview model in Google Cloud Console
4. Create a Google Service Account with the role roles/aiplatform.user
5. Download the Service Account JSON key
6. Create a Google Sheet (Sheet1) with these columns:
   client_email | private_key | project_id | scope
7. Paste your Service Account JSON values into the sheet
8. Update the 1. Get Service Account Details node with your Google Sheet ID
9. Connect your Google Sheets and Telegram credentials in n8n
10. Activate the workflow and send a product photo to your bot

---

🚀 Features

AI-powered video generation
- Generates cinematic 360° orbit product videos from a single photo
- Uses Google Veo 3 (latest AI video generation model)
- Adds studio lighting and clean white background automatically
- Supports optional product caption as additional AI context
- Audio generation included by default

Smart error handling
- Validates image resolution before processing (minimum 480px)
- Catches and reports image conversion failures
- Timeout protection after 10 minutes with user-friendly error message
- All errors are sent back to the user as Telegram messages

Secure authentication
- Service Account credentials stored safely in Google Sheets
- JWT signed locally — no third-party auth services required
- Fresh OAuth token generated on every request

---

📋 Requirements

- n8n (self-hosted or cloud)
- Telegram Bot (via @BotFather)
- Google Cloud project with Vertex AI API enabled
- Google Veo 3 preview access (request via Google Cloud Console)
- Google Service Account with roles/aiplatform.user
- Google Sheets (to store Service Account credentials)

---

🎯 Benefits

- No expensive equipment or video editing software needed
- Fully automated — send a photo, receive a video
- Works for any physical product
- Scales to multiple users via Telegram
- Videos ready in 3–5 minutes on average

---

👨‍💻 Author

BytezTech Pvt Ltd

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
