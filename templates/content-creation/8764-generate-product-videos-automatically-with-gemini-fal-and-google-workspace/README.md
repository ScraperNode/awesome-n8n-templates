# 🎬 Generate product videos automatically with Gemini, FAL and Google Workspace

> ⚡ **792 views** · 🎬 [Content Creation & Video](../)

## Description

## 📄 What this workflow does
 This workflow turns your n8n into an automated product-video generator powered by Google Sheets. When a new row is added with status = run, it:

- Downloads the product image from Google Drive.
- Converts the image to base64 and sends it to Gemini, which creates a branded ad-style variant.
- Saves the generated image back into a designated Google Drive folder.
- Sends the image to FAL (image-to-video) to generate a short promotional video clip.
- Polls FAL’s response_url until the video is ready.
- Uploads the video to Google Drive (videos folder).
- Updates the original Google Sheet row with the video link and sets status = finished.
- Handles API latency via wait/polling and logs failures into the sheet if needed.


## 👤 Who is this for
- Marketing teams automating creative asset production.
- E-commerce businesses needing quick product promo videos.
- Agencies creating branded ad content at scale.


## ✅ Requirements
- An n8n instance.
- A Google Sheet with at least these columns: STT, link_image, note, status, link_video.
- Google Sheets & Google Drive OAuth2 credentials connected in n8n.
- Gemini API key (for ad-style image generation).
- FAL API key (for image-to-video).


⚙️ How to set up
1. Import the provided workflow JSON into n8n.
2. Connect Google Sheets credentials and point to your sheet (documentId + gid).
3. Connect Google Drive credentials and update folder IDs in the two Upload File nodes (images/videos).
4. Add Gemini and FAL API keys in the respective HTTP Request headers (via Credentials).
5. Test: add a row with link_image, note, and status = run. The workflow should generate and save a video, then update the sheet with the link.


🔁 How it works
- Trigger → Google Sheets Trigger fires on rowAdded where status = run.
- Pre-processing → Download the product image from Google Drive → extract base64.
- LLM Image Generation → Gemini generates an ad-style variant based on note.
- Storage → Upload the generated image into the “images” Drive folder.
- Video Creation → FAL converts the branded image into a short video.
- Polling → Wait node + HTTP Request check job status until video is completed.
- Write-back → Upload final video into the “videos” Drive folder, update the sheet with the link_video, and set status = finished.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Sheets Trigger, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
