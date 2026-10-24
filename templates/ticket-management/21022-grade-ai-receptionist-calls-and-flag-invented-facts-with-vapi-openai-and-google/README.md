# 🎫 Grade AI receptionist calls and flag invented facts with Vapi, OpenAI and Google Sheets

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Your voice agent posts each finished call (Vapi report or plain JSON). OpenAI grades the transcript against your business facts so invented prices and hours are caught. Penalties are fixed in code, bad calls reach you by email or text, and Monday brings coaching.

## How it works
1. Receives a webhook POST when an AI receptionist call ends, or runs weekly on Monday at 7am, or runs manually to create the required spreadsheet.
2. For call events, parses the end-of-call report to extract transcript, caller, duration, and recording URL, and skips grading for empty or too-short calls.
3. Optionally downloads the call recording and saves it to a specified Google Drive folder when a recording URL and folder ID are provided.
4. Reads the “Business facts” tab from Google Sheets and sends the transcript plus facts to OpenAI to produce a structured scorecard (outcome, captured details, invented facts, rule breaks, and summary).
5. Applies fixed penalties to calculate a final score and grade, appends the scorecard (or skipped call log) to the “Calls” sheet, and appends any required action to the “Follow-ups” sheet.
6. When a call needs attention, emails the owner a formatted report via Gmail and optionally sends an SMS alert via Twilio.
7. For the weekly run, summarizes the last 7 days of calls and open follow-ups, asks OpenAI for up to three prompt improvements, and emails the weekly report via Gmail.

## Setup
1. Create credentials for OpenAI (Chat), Google Sheets, and Gmail, and optionally add Google Drive and Twilio credentials if you want recording storage and SMS alerts.
2. Run the manual “Create my spreadsheet” path once to create the Google Sheet tabs (Calls, Follow-ups, Business facts), then replace the example Business facts with your real hours, services, pricing, and rules.
3. Copy the created spreadsheet ID into the workflow settings, set the owner email (and optionally Twilio phone numbers, recording folder ID, time zone, and scoring thresholds), and configure Vapi (or your voice agent) to POST end-of-call reports to the webhook URL.

## Requirements
- An AI voice agent that can POST a transcript when a call ends (Vapi works unchanged), plus OpenAI, Google Sheets and Gmail credentials in n8n

## Customization
- Edit the Business facts tab (hours, area, prices, must-collect and never-say rules), and set the pass score and minimum call length in Your settings

## 🔗 Nodes Used

Google Sheets, HTTP Request, Twilio, Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
