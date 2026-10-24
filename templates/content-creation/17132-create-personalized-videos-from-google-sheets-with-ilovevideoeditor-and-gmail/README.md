# 🎬 Create personalized videos from Google Sheets with iLoveVideoEditor and Gmail

> ⚡ **7 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow watches Google Sheets for new rows, renders a personalized video with iLoveVideoEditor using the row data, uploads the finished MP4 to Google Drive, writes the Drive link back to the same sheet row, and emails the link to the recipient via Gmail.

## How it works
1. Triggers on a schedule when a new row is added to a specified Google Sheets worksheet.
2. Skips rows where the Title field is empty.
3. Starts a video render in iLoveVideoEditor from the cinematic-title template using the row’s Title and Subtitle as template variables.
4. Polls iLoveVideoEditor every 60 seconds (up to 20 attempts) until the render status becomes completed, or stops early if the status becomes failed.
5. When completed, downloads the MP4 from the render URL, uploads it to a specified Google Drive folder, and generates a shareable Drive view link.
6. Updates the original Google Sheets row (matched by ID) with the Video URL and sends the Drive link to the row’s Email address via Gmail.
7. If the render fails, times out, or errors, sends a failure alert email via Gmail with the row details.

## Setup
1. Install the community node n8n-nodes-ilovevideoeditor (required for self-hosted n8n) and add your iLoveVideoEditor API key credential.
2. Add Google Sheets OAuth2 credentials and set the correct Google Sheet document ID and sheet name in both the trigger and the update step.
3. Add Google Drive OAuth2 credentials and replace the target Drive folder ID used for the MP4 upload.
4. Add Gmail OAuth2 credentials, ensure the sheet has an Email column for recipients, and set the alert recipient address for failure notifications.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
