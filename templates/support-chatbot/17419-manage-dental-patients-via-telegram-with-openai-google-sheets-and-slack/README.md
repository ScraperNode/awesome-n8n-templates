# 💬 Manage dental patients via Telegram with OpenAI, Google Sheets, and Slack

> ⚡ **35 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow handles dental clinic patient conversations in Telegram, using OpenAI to answer treatment-plan and general questions, logging bookings and payment plans in Google Sheets, sending automated reminder messages on a daily schedule, and posting error alerts to Slack.

## How it works
1. Triggers when a patient sends a Telegram message, extracts the chat ID, patient name, and message text, and routes the request based on keyword matching.
2. For booking requests, appends a new patient record to Google Sheets with a “Booked” status and an appointment date set to three days from today, then sends a confirmation in Telegram.
3. For treatment plan questions, sends the patient’s message to OpenAI (gpt-4o-mini) to generate a plain-language explanation, updates the matching patient row in Google Sheets, and replies with the explanation in Telegram.
4. For payment/EMI queries, calculates a 3-installment plan from a hardcoded total cost, updates the patient row in Google Sheets with a pending payment plan, and sends the proposed schedule in Telegram.
5. For all other messages, uses OpenAI (gpt-4o-mini) to generate a brief front-desk reply and sends it back to the patient in Telegram.
6. Runs daily on a schedule, reads all patient records from Google Sheets, and sends Telegram reminders for procedures happening tomorrow, follow-up care (and a review request) for procedures that happened yesterday, and a 6-month cleaning recall based on the last cleaning date.
7. Posts Slack alerts when the overall workflow fails and when either OpenAI response step errors.

## Setup
1. Create a Telegram bot and connect your Telegram Bot API credentials to the Telegram trigger and all Telegram send-message steps.
2. Add an OpenAI credential and ensure the model selection (gpt-4o-mini) is available in your OpenAI account.
3. Create a Google Sheets spreadsheet with a sheet named `DentalOS_Patients`, add columns that match the workflow mappings (for example Patient Name, Chat ID, Status, Appointment Date, Procedure Date, Last Cleaning Date), connect Google Sheets OAuth2, and replace `YOUR_GOOGLE_SHEET_ID` in each Google Sheets step.
4. Connect Slack OAuth2 credentials and replace `YOUR_SLACK_CHANNEL_ID` in all Slack alert steps with your target channel.
5. Update the hardcoded treatment cost (15000) and installment count (3) in the EMI calculation to match your clinic’s pricing and policies.
6. Activate both the Telegram trigger and the daily schedule trigger after testing with sample patient rows and dates in Google Sheets.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Telegram Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
