# 🎬 Auto-edit images from Google Drive with Nano Banana and send via Gmail

> ⚡ **1,341 views** · 🎬 [Content Creation & Video](../)

## Description

Auto-Edit Images from Google Drive with (Wavespeed) Nano Banana and Send via Gmail

When a new image is uploaded to a specific Google Drive folder, this workflow sends it to Wavespeed’s Google Nano Banana image editing API, waits for the edited version, and then emails the result automatically. Perfect for creators, marketers, and ops teams who want hands-off, consistent image edits with instant delivery to a stakeholder inbox.

👉 Watch step-by-step video tutorials of workflows like these on: www.youtube.com/@automatewithmarc

Highlights

Google Drive trigger detects new image uploads

Wavespeed API (Google Nano Banana) performs automated image editing

Polling loop checks job status until complete

Gmail auto-sends the edited image to your chosen recipient

Great for social media pipelines, product photo retouching, or team approvals


Apps & Nodes Used

Trigger: Google Drive Trigger (fileCreated in folder)

HTTP Request: POST to Wavespeed (submit edit job)

Wait: Delay before first status check (15s)

HTTP Request: GET result (poll prediction status)

IF: Status == completed → proceed, else wait & recheck

Gmail: Send edited image output to recipient

Prerequisites

n8n account (Cloud or Self-hosted)

Google Drive folder for uploads

Wavespeed API key (HTTP Header Auth)

Gmail account with OAuth2 connected to n8n

Configuration (5 Steps)

Google Drive Trigger – set to your image upload folder.

POST Image Edit Request – sends file URL + prompt (default: “Change the lighting to night scene”).

Wait 15s – lets the job start.

GET Image Edit Request – checks prediction status/result.

IF → Gmail – once status = completed, send edited image to your chosen email.

Customization

Change the prompt (e.g., “remove background”, “enhance product lighting”).

Set Gmail recipient dynamically or statically.

Adjust polling wait times based on job length.

Save results to Drive/S3 instead of email if needed.

Error Handling

Add IF nodes to catch API errors.
Set a retry limit to avoid infinite loops.
Use Drive “Share File” if API can’t access the uploaded file link.

## 🔗 Nodes Used

HTTP Request, Gmail, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
