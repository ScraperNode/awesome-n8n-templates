# 🔬 Receipt scanning & analysis workflow

> ⚡ **15,186 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### How it works:
- Automatically detects when a new receipt is uploaded to Google Drive.
- Extracts text from the receipt using OCR.
- Uses an AI Agent to analyze the extracted data and structure it (e.g., vendor, date, total, tax).
- Saves the organized receipt data into a Google Sheet for easy tracking.

### Set up steps:
- Setup takes around 15–20 minutes.
- You'll need a Google Drive folder for receipts and a Google Sheet to store results.
- Configure your Google Drive Trigger, OCR extraction, AI Agent, and Google Sheets connection.

Detailed instructions and explanations are included in [this n8n Starter Session tutorial series](https://www.youtube.com/playlist?list=PLWYu7XaUG3XOJwOOGiX89SQ_w67vw3dq7).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
