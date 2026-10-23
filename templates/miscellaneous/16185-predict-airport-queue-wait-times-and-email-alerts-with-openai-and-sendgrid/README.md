# 🔧 Predict airport queue wait times and email alerts with OpenAI and SendGrid

> ⚡ **36 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow accepts traveler flight details via webhook or runs every 5 minutes, predicts airport queue wait times with a custom JavaScript model, generates an alert message using OpenAI, emails the traveler via SendGrid, and logs the prediction to Google Sheets.

## How it works
1. Receives a POST request to a webhook with traveler/flight details or runs on a 5-minute schedule.
2. Normalizes the incoming data into a consistent context (flight, airport/terminal, traveler contact details, and live queue inputs).
3. Waits briefly to throttle processing, then calculates predicted security, immigration, and boarding wait times plus risk flags and an optimal arrival time.
4. Sends the prediction to OpenAI to generate a short, traveler-friendly alert message.
5. Formats the final alert payload (alert level, email subject/body) and prepares a row for tracking.
6. Sends the alert email through the SendGrid Mail Send API and appends the prediction record to a Google Sheets tab.

## Setup
1. Configure the webhook URL in the system that submits traveler requests (POST to `/airport-queue-check`) or enable the schedule trigger for proactive runs.
2. Add OpenAI credentials and select the chat model used to generate the traveler message.
3. Add Google Sheets OAuth2 credentials and replace `YOUR_SHEET_ID` and the target range (for example, `Predictions!A1:append`) in the Google Sheets request URL.
4. Add your SendGrid API key by replacing `YOUR_SENDGRID_API_KEY` in the Authorization header, and update the sender/recipient fields (including ensuring `travelerEmail` is provided by the trigger payload).

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
