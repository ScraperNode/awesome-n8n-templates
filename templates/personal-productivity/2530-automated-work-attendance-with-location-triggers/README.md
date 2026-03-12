# ⚡ Automated work attendance with location triggers

> ⚡ **5,640 views** · ⚡ [Personal Productivity](../)

## Description

his workflow automates time tracking using location-based triggers.

## How it works
- Trigger: It starts when you enter or exit a specified location, triggering a shortcut on your iPhone.
- Webhook: The shortcut sends a request to a webhook in n8n.
- Check-In/Check-Out: The webhook receives the request and records the time and whether it was a "Check-In" or "Check-Out" event.
- Google Sheets: This data is then logged into a Google Sheet, creating a record of your work hours.

## Set up steps
1. Google Drive: Connect your Google Drive account.
2. Google Sheets: Connect your Google Sheets account.
3. Webhook: Set up a webhook node in n8n.
4. iPhone Shortcuts: Create two shortcuts on your iPhone, one for "Check-In" and one for "Check-Out."
5. Configure Shortcuts: Configure each shortcut to send a request to the webhook with the appropriate "Direction" header.

It's easy to setup, around 5 minutes.

## 🔗 Nodes Used

Google Sheets, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
