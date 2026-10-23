# 🎬 Generate UGC ad reels from product photos with DeepSeek and kie.ai

> ⚡ **96 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Turn one product photo into a voiced, ready-to-post UGC ad video in minutes. Writes the script with DeepSeek, generates a talking vertical video with kie.ai, saves it to Drive before the link expires, and logs every result to Sheets — no camera, no actor, no editor needed.

## How it works
1. Receives a new request from an n8n form submission containing a product photo, ad prompt, brand name, and target language.
2. Uploads the product photo to Google Drive, makes the file publicly accessible, and builds a direct-download image URL for external use.
3. Sends the brand, language, and ad prompt to DeepSeek Chat Completions to generate a 15–20 second spoken ad script.
4. Submits the script and the public image URL to kie.ai to create a Seedance 2 Mini video generation task with audio enabled.
5. Polls kie.ai at 20-second intervals until the task returns a success or failure state.
6. On success, downloads the generated video, uploads it to Google Drive, and appends a “Success” row (including the Drive link) to a Google Sheets log.
7. On failure, captures the provider error message and appends a “Failed” row to the same Google Sheets log.

## Setup
1. Connect Google Drive OAuth2 credentials and choose the Drive/folder where uploaded photos and generated videos should be stored.
2. Create a Google Sheet with a tab named `UGC_Ad_Library`, connect Google Sheets OAuth2 credentials, and replace `YOUR_UGC_LIBRARY_SHEET_ID` with your document ID.
3. Add a DeepSeek API key as an HTTP Header Auth credential (Bearer token) for the script generation request.
4. Add a kie.ai API key as an HTTP Header Auth credential for creating tasks and checking status.
5. Replace the placeholder `callBackUrl` (`https://example.com/callback`) with a valid URL expected by kie.ai (even if you rely on polling).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
