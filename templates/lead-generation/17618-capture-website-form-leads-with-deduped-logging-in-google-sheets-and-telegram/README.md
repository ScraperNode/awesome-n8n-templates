# 🎣 Capture website form leads with deduped logging in Google Sheets and Telegram

> ⚡ **17 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives website form submissions via webhook, normalizes lead fields, detects duplicates using a phone/email dedupe key, and writes the lead to Google Sheets as a new row or an update. It then sends a Telegram alert with different messaging for new versus repeat enquiries.

## How it works
1. Receives a POST request from your website form through an n8n webhook and immediately returns a JSON confirmation response.
2. Normalizes incoming fields (name, phone, email, message, source), formats phone numbers consistently, and builds a dedupe key from phone digits or a lowercased email.
3. Searches the Google Sheets “Leads” sheet for an existing row that matches the dedupe key.
4. If a match is found, updates the existing row’s last enquiry timestamp, message/source, and increments the enquiry count.
5. If no match is found, appends the normalized lead as a new row in Google Sheets.
6. Sends a Telegram message to your specified chat with the lead details, using one message format for new leads and another for repeat enquiries.

## Setup
1. Create a Google Sheet with a tab named “Leads” and headers matching: received_at, last_enquiry_at, full_name, phone, dedupe_key, email, message, source, enquiry_count.
2. Add Google Sheets OAuth credentials in n8n and replace `REPLACE_WITH_YOUR_SPREADSHEET_ID` with your spreadsheet ID in the Google Sheets nodes.
3. Add a Telegram credential (bot token) and replace `REPLACE_WITH_YOUR_CHAT_ID` with your Telegram chat ID in both Telegram message steps.
4. Copy the production webhook URL from the webhook trigger and configure your form tool (or website code) to POST submissions to it.
5. Update the field alias list in the normalization code if your form uses different input names than the defaults.

## Requirements
- A Google account with the Google Sheets API and Google Drive API enabled in a Google Cloud project
- A spreadsheet with a sheet named Leads and these headers in row 1: received_at, last_enquiry_at, full_name, phone, dedupe_key, email, message, source, enquiry_count
- A Telegram bot token and chat ID for alerts, or another messaging node in its place
- An n8n instance reachable from the public internet, since the web form posts straight to the webhook
- The Google OAuth consent screen must be published rather than left in testing, otherwise the refresh token expires after seven days

## Customization
- Add your own form field names to the ALIASES block at the top of Normalize Lead Fields if your form uses unusual names
- Switch the dedupe key in Normalize Lead Fields to match on email instead of phone, or require both
- Replace the Telegram nodes with Slack, Gmail or Microsoft Teams so alerts land where the team already works
- Add a Twilio or Gmail node after Add New Lead to send the lead an automatic acknowledgement
- Add extra columns such as job type or postcode to the sheet and to the output of Normalize Lead Fields, and they map across automatically

## Additional info
In the Update Existing Lead node, select dedupe_key under Column to Match On. This field resets whenever the document is re-selected, and the node fails without it.

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
