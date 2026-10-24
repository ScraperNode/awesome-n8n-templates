# 🔬 Classify documents with Gemini and organize them in Google Drive

> ⚡ **264 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this for

Accountants and office managers who want to automatically classify and organize documents in Google Drive.

## What this workflow does

Retrieves files from a Google Drive inbox folder, classifies each using Gemini 2.5 Flash OCR, then renames, moves, and logs them.

**Get inbox files** → **Loop through files** → **Download file** fetches files one by one. **Check file type** routes PDFs and images to **Convert to Base64**; unsupported formats go to **Handle unsupported format** → **Send error notification** → **Log error to sheet** for manual review.

**Gemini OCR classification** classifies the document and **Parse AI response** extracts the result. If **Classification check** passes, **Generate filename** → **Rename file** → **Move to folder** organizes the file, and **Log to spreadsheet** records it in Google Sheets. If **Has deadline?** finds a due date, **Add to calendar** creates a Google Calendar event and **Send deadline alert** sends a Gmail reminder.

## How to set up

1. Set your inbox folder ID in **Get inbox files**.
2. Add a Gemini API key as a Query Auth credential (name: `key`).
3. Set folder IDs for each document type in **Generate filename**.
4. Set your spreadsheet ID in **Log to spreadsheet** and **Log error to sheet**.
5. Set calendar and email in **Add to calendar**, **Send deadline alert**, and **Send error notification**.

## Requirements

- Google Drive, Google Sheets, Google Calendar, and Gmail accounts
- Gemini API key (Google AI Studio)

## How to customize

- Edit the prompt in **Gemini OCR classification** to change document categories.
- Adjust the confidence threshold (default: 0.6) in **Parse AI response**.
- Modify the naming pattern in **Generate filename**.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
