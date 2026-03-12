# 🔬 OCR document processing from LINE/Gmail using GPT-4o to Google Workspace

> ⚡ **75 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Who this is for**

Users who frequently receive images or documents via LINE or email

Teams needing automatic OCR + AI summarization

Anyone who wants hands-free document processing and structured storage

**How it works**

Triggers: LINE Webhook and Gmail IMAP Trigger capture incoming messages or emails.

Source Tagging: Inputs are tagged as LINE or EMAIL for later branching.

File Handling: Files are uploaded to Google Drive and converted for analysis.

OCR: An AI vision model extracts all readable text from the document image.

AI Summarization: A text model produces a concise summary.

Logging: The summary is appended to Google Sheets for record-keeping.

Email Drafting: A Gmail Draft is generated containing the OCR text and summary.

**How to set up**

Connect your LINE, Gmail, OpenAI, and Google Drive/Sheets credentials.

Update folder IDs, sheet names, and authentication fields as needed.

Optional: customize summarization instructions.

**Customization ideas**

Add translation or classification steps

Modify output format for Slack/Notion

Store files in date-based Drive folders

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
