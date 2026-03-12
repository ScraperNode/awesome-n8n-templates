# 🎯 Categorize and track company emails with OpenRouter AI and Google Sheets

> ⚡ **48 views** · 🎯 [AI Summarization & Classification](../)

## Description

**How it works**

* Watches inbox for new emails via IMAP.
* Fetches existing categories and requests from Google Sheets.
* Uses AI to analyze subject and body, then assigns a category and request type.
* Checks if the same category/request already exists in the sheet.
* If found, increments the request count for that row.
* If new, adds a fresh row with category, request, and count set to 1.

**Set up steps**

* Connect IMAP email account for inbox access.
* Connect Google Sheets account and link to the target sheet.
* Connect AI service account (OpenRouter).
* Import workflow into automation platform and map credentials.
* Test once with a sample email to verify classification and sheet update.
* Estimated setup time: \~15–20 minutes with accounts ready.

## 🔗 Nodes Used

Email Trigger (IMAP), Google Sheets, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
