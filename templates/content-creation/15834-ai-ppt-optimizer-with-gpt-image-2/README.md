# 🎬 AI PPT Optimizer with gpt-image-2

> ⚡ **82 views** · 🎬 [Content Creation & Video](../)

## Description

What it does:
1. Initializes Google Sheets tabs: jobs, slides, events
2. Creates a Google Drive root folder for optimizer jobs
3. Reads slide images from a Google Drive input folder
4. Sends each image to gpt-image-2. Converts base64 image results to binary
6. Uploads edited images to Google Drive
7. Tracks status per slide in Google Sheets
8. Retries only failed or timeout slides

Requirements:
- Google Drive OAuth2 credential
- Google Sheets OAuth2 credential
- WisGateAI/OpenAI API key
- Source slides must already be exported as images

Webhook inputs:
- spreadsheetId
- driveRootFolderId
- inputFolderId
- jobName
- timeoutMs
- waitSeconds
- basePrompt

Limitations:
- Does not convert PPTX/PDF to images
- Does not export PPTX/PDF
- Output is a Google Drive folder containing generated slide images

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
