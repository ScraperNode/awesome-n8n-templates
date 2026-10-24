# 💬 Draft sales call follow-up emails from Fireflies with OpenAI and Gmail

> ⚡ **1 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives Fireflies meeting.transcribed webhook events, pulls the full transcript via the Fireflies GraphQL API, uses OpenAI to generate structured call notes and a follow-up email, saves the email as a Gmail draft, logs the call to Google Sheets, and emails you the notes.

## How it works
1. Receives a Fireflies webhook request for a finished transcription and ignores non-matching events or resends.
2. Fetches the transcript, attendees, and metadata from the Fireflies GraphQL API using the meeting ID.
3. Extracts call details (date, duration, contact name/email, and a plain-text transcript) and stops if there is no speech content.
4. Sends the transcript to OpenAI to produce a JSON output with a summary, open questions, next step, outcome, and a follow-up email.
5. Creates a Gmail draft for the follow-up email, using the detected contact email when available or leaving the recipient blank.
6. Appends a row with the call notes and Fireflies link to a Google Sheets log and emails you the notes and draft status via Gmail.

## Setup
1. Add a Fireflies API key as an HTTP Bearer Auth credential for the Fireflies GraphQL request and configure Fireflies to send meeting.transcribed webhooks to this workflow’s production URL.
2. Add OpenAI credentials for the chat model used to analyze the transcript.
3. Add Gmail credentials to create drafts and send the internal call-notes email.
4. Add Google Sheets credentials, create a spreadsheet for logging, and paste its URL into the settings.
5. Update the settings values (your name, business name, your email, what you sell, and optional booking link) before activating the workflow.

## Requirements
- Fireflies account with API access (the free plan works)
- OpenAI API key with credit
- Gmail account
- A blank Google Sheet
- An n8n instance Fireflies can reach (n8n Cloud works)

## Customization
- Change the outcomes, email tone or length in the Analyze Call node
- Send the notes to Slack or Telegram instead of email
- Add a CRM step such as HubSpot or Pipedrive after Log Call In Google Sheets
- Change how many days of transcript or which fields are logged in Build Log Row

## Additional info
Nothing is ever sent to the contact automatically. The follow-up is saved as a Gmail draft for you to check. Only meeting transcribed events are processed, and Fireflies resends are ignored, so you never get two drafts for one call.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
