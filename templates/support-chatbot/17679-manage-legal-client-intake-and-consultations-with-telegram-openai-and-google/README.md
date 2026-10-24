# 💬 Manage legal client intake and consultations with Telegram, OpenAI and Google

> ⚡ **60 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow handles legal client intake via Telegram, uses OpenAI (gpt-4o-mini) to classify the case and send a matching document checklist, logs cases in Google Sheets, schedules a consultation in Google Calendar, sends Telegram confirmations, and posts Slack alerts for workflow or AI classification errors.

## How it works
1. Triggers when a client sends a Telegram message to your bot and extracts the chat ID, client name, and message text.
2. Sends the message to OpenAI (gpt-4o-mini) to classify the issue as property, family, criminal, or other and parses the JSON into case type, confidence, and a one-line summary.
3. Routes the intake to the correct pre-written document checklist and sends the checklist back to the client on Telegram.
4. Appends the case details to a Google Sheets “Cases” tab with default tracking fields like fee_status and follow_up_sent.
5. Creates a next-day consultation event in Google Calendar and sends Telegram notifications with the booking details to both the lawyer and the client.
6. Runs daily at 10:00 to find Google Sheets cases with fee_status = Pending, sends Telegram payment reminders, and updates the sheet to prevent duplicate reminders.
7. Runs daily at 15:00 to find Google Sheets cases with follow_up_sent = No, sends Telegram follow-up messages, and marks them as sent in Google Sheets.
8. Posts an alert to Slack when the workflow fails, and separately posts an alert when the OpenAI classification step errors.

## Setup
1. Create and connect credentials for Telegram Bot API, OpenAI, Google Sheets (OAuth2), Google Calendar (OAuth2), and Slack (OAuth2).
2. Create a Google Sheets spreadsheet with a “Cases” tab and columns matching the fields used by the workflow (for example: name, chat_id, case_type, summary, status, fee_status, follow_up_sent), then replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes.
3. Update the Google Calendar target calendar in the consultation event step to your firm’s calendar address.
4. Set your Slack channel ID (replace YOUR_SLACK_CHANNEL_ID) for error alerts.
5. Verify the Telegram chat routing for the lawyer notification (the workflow currently uses the client chat ID for notifications) and adjust it to your lawyer/admin chat ID as needed.
6. Activate the Telegram trigger and both schedule triggers (10:00 fee reminders and 15:00 follow-ups).

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Telegram Trigger, Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
