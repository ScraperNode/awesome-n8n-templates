# 🎫 Route Typeform responses to Google Sheets, Slack, and Gmail with confirmations

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

**How it works**

- Receives form submissions via a webhook endpoint.
- Extracts the name, email, and message from each submission.
- Logs every submission to a Google Sheets spreadsheet with a timestamp.
- Sends a confirmation email to the submitter via Gmail.
- Returns a JSON success response to your frontend.

A simple way to handle contact forms without building a backend.

**Setup steps**

- **Estimated setup time:** 5 minutes
- Set your webhook path in the trigger node.
- Connect your Google Sheets account and set the spreadsheet ID.
- Create a "Submissions" sheet with columns: name, email, message, submitted_at.
- Connect your Gmail account for sending confirmation emails.
- Point your form's action URL to the webhook and activate.

## 🔗 Nodes Used

Google Sheets, Slack, Typeform Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
