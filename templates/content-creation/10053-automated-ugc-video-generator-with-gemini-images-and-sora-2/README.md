# 🎬 Automated UGC video generator with Gemini images and SORA 2

> ⚡ **1,396 views** · 🎬 [Content Creation & Video](../)

## Description

![image.png](fileId:3043)
This workflow automates the creation of user-generated-content-style product videos by combining Gemini's image generation with OpenAI's SORA 2 video generation. It accepts webhook requests with product descriptions, generates images and videos, stores them in Google Drive, and logs all outputs to Google Sheets for easy tracking.

### Main Use Cases
* Automate product video creation for e-commerce catalogs and social media.
* Generate UGC-style content at scale without manual design work.
* Create engaging video content from simple text prompts for marketing campaigns.
* Build a centralized library of product videos with automated tracking and storage.

### How it works
The workflow operates as a webhook-triggered process, organized into these stages:

1. **Webhook Trigger & Input**
   * Accepts POST requests to the `/create-ugc-video` endpoint.
   * Required payload includes: product prompt, video prompt, Gemini API key, and OpenAI API key.

2. **Image Generation (Gemini)**
   * Sends the product prompt to Google's Gemini 2.5 Flash Image model.
   * Generates a product image based on the description provided.

3. **Data Extraction**
   * Code node extracts the base64 image data from Gemini's response.
   * Preserves all prompts and API keys for subsequent steps.

4. **Video Generation (SORA 2)**
   * Sends the video prompt to OpenAI's SORA 2 API.
   * Initiates video generation with specifications: 720x1280 resolution, 8 seconds duration.
   * Returns a video generation job ID for polling.

5. **Video Status Polling**
   * Continuously checks video generation status via OpenAI API.
   * If status is "completed": proceeds to download.
   * If status is still processing: waits 1 minute and retries (polling loop).

6. **Video Download & Storage**
   * Downloads the completed video file from OpenAI.
   * Uploads the MP4 file to Google Drive (root folder).
   * Generates a shareable Google Drive link.

7. **Logging to Google Sheets**
   * Records all generation details in a tracking spreadsheet:
     * Product description
     * Video URL (Google Drive link)
     * Generation status
     * Timestamp

### Summary Flow:
Webhook Request → Generate Product Image (Gemini) → Extract Image Data → Generate Video (SORA 2) → Poll Status → If Complete: Download Video → Upload to Google Drive → Log to Google Sheets → Return Response

If Not Complete: Wait 1 Minute → Poll Status Again

### Benefits:
* Fully automated video creation pipeline from text to finished product.
* Scalable solution for generating multiple product videos on demand.
* Combines cutting-edge AI models (Gemini + SORA 2) for high-quality output.
* Centralized storage in Google Drive with automatic logging in Google Sheets.
* Flexible webhook interface allows integration with any application or service.
* Retry mechanism ensures videos are captured even with longer processing times.

---
Created by [Daniel Shashko](https://www.linkedin.com/in/daniel-shashko/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
