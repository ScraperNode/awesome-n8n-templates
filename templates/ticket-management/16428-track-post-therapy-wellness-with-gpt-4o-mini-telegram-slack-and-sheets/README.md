# 🎫 Track post-therapy wellness with GPT-4o-mini, Telegram, Slack and Sheets

> ⚡ **58 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow uses Google Sheets, OpenAI, Telegram, and Slack to send post-therapy check-in messages, analyze patient replies for sentiment and risk, alert therapists to at-risk responses, and log non-urgent replies for ongoing wellness tracking.

## How it works
1. Runs every hour on a schedule trigger.
2. Reads session records from Google Sheets and keeps only sessions that have a session date and have not been marked as check-in sent.
3. Uses OpenAI (gpt-4o-mini) to generate a personalized, non-clinical Telegram check-in message from the patient’s session details.
4. Sends the check-in to the patient via Telegram and updates the Google Sheets session row to store the message and mark the check-in as sent.
5. Triggers on incoming Telegram messages, looks up the patient in a Google Sheets master list by Telegram ID, and selects the most relevant recent session to provide context.
6. Sends the patient reply and session context to OpenAI for JSON-formatted sentiment classification and parses the result into structured fields.
7. If the sentiment is classified as at-risk, posts an urgent alert to a Slack channel; otherwise, appends the reply and sentiment details to a Google Sheets wellness log.

## Setup
1. Connect Google Sheets OAuth credentials and update the spreadsheet document ID and sheet names for Sessions, Patients_Master, and Wellness_Log.
2. Create and connect a Telegram bot credential, set up the Telegram trigger webhook, and ensure patient Telegram chat IDs are stored in Google Sheets.
3. Add an OpenAI API key credential and confirm the selected model (gpt-4o-mini) meets your requirements.
4. Connect Slack OAuth credentials and replace the placeholder Slack channel ID used for therapist alerts, and confirm the error-alert channel is set correctly.
5. Verify your Google Sheets columns match the workflow’s expected fields (for example session_id, checkin_sent, checkin_message_sent, therapist_slack_id) before activating.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Telegram Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
