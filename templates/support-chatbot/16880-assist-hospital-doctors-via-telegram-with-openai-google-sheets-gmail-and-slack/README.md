# 💬 Assist hospital doctors via Telegram with OpenAI, Google Sheets, Gmail and Slack

> ⚡ **48 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow combines a Telegram doctor bot, OpenAI, Google Sheets, Gmail, Slack, and a webhook to summarize PDF reports, generate and email discharge summaries, analyze lab values, report bed availability, send daily patient follow-ups, and post error alerts.

## How it works
1. Runs every day at 9:00 AM to read patient records from Google Sheets, filter those due for follow-up today with a Pending status, send each patient a Telegram check-in, and mark the follow-up as Sent.
2. Triggers when a doctor sends a Telegram message and routes it based on whether it includes a document or a supported command.
3. If a PDF is attached, downloads it from Telegram, extracts the text, uses OpenAI (gpt-4o-mini) to create a short clinical summary, logs the result to a Google Sheets Reports tab, and replies to the doctor on Telegram.
4. If the message starts with "/discharge PATIENTID", extracts the patient ID, looks up the patient in the Google Sheets Patients tab, uses OpenAI (gpt-4o-mini) to generate a discharge summary, saves it back to Google Sheets, emails it to the patient via Gmail, and confirms completion on Telegram.
5. If the message starts with "/labs", sends the provided lab values to OpenAI (gpt-4o-mini) for out-of-range flagging and plain-language explanations, then returns the analysis on Telegram.
6. If the message starts with "/beds", reads ward capacity from the Google Sheets Beds tab, formats a ward-by-ward availability summary, and sends it to the doctor on Telegram.
7. Receives bed-count updates via an HTTP POST webhook and updates the corresponding ward row in the Google Sheets Beds tab.
8. Posts a Slack alert with execution details whenever the workflow encounters an error.

## Setup
1. Create credentials for Telegram Bot API, OpenAI, Google Sheets OAuth2, Gmail OAuth2, and Slack OAuth2, then connect them to the corresponding nodes.
2. Create a Google Sheets spreadsheet with tabs named Patients, Reports, and Beds, and ensure the column names match those referenced in the workflow (for example, Patient ID, Follow-up Date, Follow-up Status, Telegram Chat ID, and ward bed fields).
3. Replace YOUR_GOOGLE_SHEET_ID in every Google Sheets node with your spreadsheet ID.
4. Update the Slack channel selection by replacing YOUR_SLACK_CHANNEL_ID with your target alerts channel.
5. Copy the Webhook - Update Bed Count URL and configure your hospital management system to POST JSON with wardName and occupiedBeds to that endpoint.
6. Ensure each patient row includes a valid Telegram Chat ID and Email so follow-ups and discharge emails reach the right recipients.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Telegram, Telegram Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
