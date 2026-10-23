# 💬 Manage dental patient chat, bookings, and reminders with Telegram, OpenAI and Sheets

> ⚡ **74 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow manages dental clinic patient conversations and reminders by handling Telegram messages, using OpenAI to answer treatment and general queries, storing patient details in Google Sheets, sending automated appointment and follow-up messages, and posting error alerts to Slack.

## How it works
1. Triggers when a patient sends a Telegram message to your clinic bot.
2. Extracts the patient chat ID, name, and message text, then routes the message based on keywords for booking, treatment plans, payments, or general questions.
3. For booking requests, appends a new patient booking to Google Sheets with an appointment date set three days ahead and sends a confirmation via Telegram.
4. For treatment-plan questions, uses OpenAI (gpt-4o-mini) to generate a plain-language explanation, saves it back to the matching patient row in Google Sheets, and replies on Telegram.
5. For payment questions, calculates a 3-installment EMI plan from a fixed total cost, updates the patient’s payment status in Google Sheets, and sends the installment schedule on Telegram.
6. Runs daily on a schedule to read all patients from Google Sheets and sends Telegram reminders for tomorrow’s procedures, yesterday’s post-care follow-up (plus a review request), and six-month cleaning recalls.
7. Posts Slack alerts when the workflow fails globally or when either OpenAI step errors.

## Setup
1. Add credentials for Telegram Bot API, OpenAI, Google Sheets OAuth2, and Slack OAuth2.
2. Create a Google Sheets spreadsheet with a “DentalOS_Patients” sheet and columns matching the workflow fields (for example Patient Name, Chat ID, Appointment Date, Procedure Date, and Last Cleaning Date).
3. Replace `YOUR_GOOGLE_SHEET_ID` in all Google Sheets nodes and set `YOUR_SLACK_CHANNEL_ID` in the Slack alert nodes.
4. Update the hardcoded EMI total cost (15000) and installment count (3) in the installment calculation step to match your clinic’s pricing and policy.
5. Configure the Telegram bot with BotFather and activate the workflow so the Telegram trigger and the daily schedule run in production.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Telegram Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
