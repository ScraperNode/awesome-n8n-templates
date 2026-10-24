# ⚡ Turn Zoom coaching sessions into recap emails, homework, and nudges with OpenAI and Google Sheets

> ⚡ **21 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow turns completed Zoom coaching recordings into AI-generated session recaps and homework action plans, logs everything to Google Sheets, emails clients via Gmail, and runs daily to send OpenAI-written nudge emails for upcoming or overdue tasks.

## How it works
1. Receives Zoom webhook events for endpoint validation and recording completion, returning the required validation response or immediately acknowledging recording events.
2. Extracts recording metadata and downloads the Zoom transcript when available, otherwise downloads the session audio and transcribes it with OpenAI Whisper.
3. Looks up the client in Google Sheets using the Zoom meeting ID or the meeting topic, and skips inactive clients or sessions already logged.
4. Sends the transcript plus client context to OpenAI (GPT-4o-mini) to generate a JSON action plan with a recap, wins, insights, homework tasks with due dates, and a progress score.
5. Builds an HTML recap email, sends it to the client via Gmail (CC’ing the coach), appends the session to the Google Sheets Session Log, and appends each homework task to the Homework Tracker.
6. Runs ежедневно at 10:00, reads the Homework Tracker in Google Sheets, groups tasks that are due soon or slightly overdue per client, and drafts one concise check-in email per client using OpenAI.
7. Sends the nudge emails via Gmail and updates each affected task row in Google Sheets with the incremented nudge count and last nudge date.

## Setup
1. Create a Zoom Marketplace webhook app, subscribe to recording completion events, enable recording download tokens, and configure it to call this workflow’s webhook URL.
2. Replace the Zoom webhook secret in the HMAC step (the validation token signer) with your Zoom app’s secret token.
3. Create a Google Sheet with three tabs named Clients, Session Log, and Homework Tracker, then paste the spreadsheet ID into all Google Sheets nodes.
4. Add Google Sheets OAuth credentials, Gmail OAuth credentials, and an OpenAI API key (used for both GPT-4o-mini and Whisper transcription).
5. Update the coach name, reply-to address, and nudge limits (window, max nudges, spacing, overdue cutoff) in the nudge rules configuration step.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
