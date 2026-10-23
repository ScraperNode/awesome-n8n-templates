# 🎫 Filter WhatsApp messages using a Google Sheets blacklist and rate limiting

> ⚡ **33 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow validates an incoming WhatsApp-style message by normalizing the sender phone number, checking it against a Google Sheets blacklist, and applying a per-minute rate limit before passing approved messages onward.

## How it works
1. Runs manually for testing and generates a mock WhatsApp payload containing a phone number and message.
2. Sanitizes the sender phone number by stripping non-numeric characters.
3. Fetches blacklist entries from Google Sheets and sanitizes each listed phone number.
4. Compares the sender’s sanitized phone number to the sanitized blacklist and marks the message as blocked when a match is found.
5. Stops processing for blacklisted numbers, otherwise attaches a configurable messages-per-minute threshold.
6. Logs the request in workflow static data and evaluates whether the sender exceeds the rate limit within a 60-second window.
7. Stops processing when the rate limit is exceeded, otherwise outputs a clean payload (phoneNumber, cleanPhone, message) for downstream processing.

## Setup
1. Connect Google Sheets OAuth2 credentials and update the Google Sheets document and sheet name that contain your blacklist.
2. Ensure the blacklist sheet has columns for the phone number (e.g. `phone`) and an optional block reason (e.g. `reason`).
3. Replace the manual trigger and mock input with your WhatsApp (or messaging) trigger that provides `phoneNumber` and `message` fields.
4. Set the allowed request volume by updating the `limitThreshold` value (default: 30 messages per minute).
5. Remove the flood-simulation step used for testing so rate limiting reflects real traffic only.

## Customization
- Replace Google Sheets with any database — Airtable, PostgreSQL, or a hardcoded array for simpler deployments
- Adjust the rate limit threshold by changing limitThreshold in the "Set — Config" node (default: 30 msgs/min)
- Modify the rate limit time window by changing 60000 (ms) in Code — Rate Limiter Engine
- Add auto-reply nodes on both blocked branches to notify the user
- Connect a logging database or Telegram alert for security monitoring

## Additional info
Rate limiting uses n8n's native workflow static data ($getWorkflowStaticData) — 
no external Redis or database required. Phone numbers are sanitized before 
comparison to handle formatting variations (+52 181..., 52181..., etc.).

The "Code — Mock Review Flood" node simulates 31 rapid messages to force 
a rate limit breach during testing. Delete it before deploying to production.

Built from a real production multi-tenant WhatsApp AI system handling 
live customer conversations.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
