# 🧾 Classify Gmail invoice attachments with Google Gemini and forward to freee

> ⚡ **39 views** · 🧾 [Invoice Processing](../)

## Description

## Classify and forward Gmail invoice attachments to freee with Google Gemini

Automatically analyze email attachments with AI and forward invoices/receipts to freee's File Box.

## How it works

1. Polls Gmail for new emails with attachments every minute
2. Extracts text from PDF attachments and sends it to Google Gemini for classification
3. If Gemini identifies the document as an invoice or receipt, re-fetches the attachment and forwards it to freee's File Box email address

## Setup steps

1. **Get freee receiving email**: freee Accounting → File Box → Settings
2. **Set environment variable**: Set `FREEE_FORWARDING_EMAIL` to freee's receiving address
3. **Configure Credentials**:
   - Gmail OAuth2 (read + send permissions)
   - Google Gemini API
4. **Activate the workflow**

## 🔗 Nodes Used

Gmail, Gmail Trigger, Extract from File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
