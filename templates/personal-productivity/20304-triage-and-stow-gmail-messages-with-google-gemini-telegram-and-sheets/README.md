# ⚡ Triage and stow Gmail messages with Google Gemini, Telegram, and Sheets

> ⚡ **1 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow monitors Gmail for new messages, uses Google Gemini to classify and summarize them as emails or calendar invites, assesses urgency, and notifies you in Telegram. It stows non-urgent items in Google Sheets, supports replying/RSVPing from Telegram, and provides a daily stowed-items review.

## How it works
1. Polls Gmail every minute for new messages and loops through each email.
2. Uses Google Gemini to detect whether the message contains a real calendar invite and generates a short summary (and start/end times when applicable).
3. Uses Google Gemini again to classify the item’s urgency (urgent, today, or later) with a reason, then normalizes the fields for downstream handling.
4. For urgent items, sends an urgent Telegram notification and waits for you to choose whether to respond immediately or act later.
5. If you respond immediately, it collects your reply text in Telegram and replies to the Gmail thread, or (for calendar invites) asks you to accept/decline and updates your Google Calendar attendee response via the Google Calendar API.
6. For today/later items (and urgent items you defer), it marks the email read, removes it from the inbox, adds a “stowed” Gmail label, and appends/updates the item in a Google Sheets log.
7. Every day at 08:45, it pulls all stowed items from Google Sheets, optionally walks you through them in Telegram (including availability checks for events via Google Calendar), and can mark reviewed items as done in the sheet.

## Setup
1. Connect credentials for Gmail OAuth2, Google Sheets OAuth2, Google Calendar OAuth2, a Telegram bot, and a Google Gemini (PaLM) API key.
2. Update the Telegram chat ID used for notifications and approvals to your own chat.
3. Create (or select) a Gmail label for “stowed” messages and replace the label ID used for adding/removing labels.
4. Set the target Google Sheets document and ensure it has columns matching the workflow fields (id, type, from, title, status, urgency, urgency_reason, additional_data, summary, body).
5. Verify the schedule time (08:45) and adjust it to your timezone and preferred daily review time.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Calendar, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
