# 🔬 Llama AI model for Google Sheets tracking

> ⚡ **372 views** · 🔬 [Document Extraction & Analysis](../)

## Description

How it works:

- Accesses a target website, searches for new PDFs, and downloads them automatically.
- Extracts content from each PDF and sends it to an AI for summarization.
- Delivers the AI-generated summary directly to a Discord channel.
- Marks processed URLs in Google Sheets to avoid duplicates.

Set up steps:

- Configure the website URL in the HTTP Request node.
- Connect to Google Cloud API (enable Drive & Sheets) and link your spreadsheet.
- Set up an OpenRouter API key and choose your preferred AI model.
- Create a Discord webhook for notifications.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Discord, Schedule Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
