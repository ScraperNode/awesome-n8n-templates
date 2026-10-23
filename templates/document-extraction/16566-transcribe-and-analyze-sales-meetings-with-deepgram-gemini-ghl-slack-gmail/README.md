# 🔬 Transcribe and analyze sales meetings with Deepgram, Gemini, GHL, Slack & Gmail

> ⚡ **52 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/GNAplBWdCDE?si=TjojVTZX7ViiRUiG

This workflow receives meeting voice recording via webhook, transcribes it with Deepgram, and uses Gemini to extract client details and next-step tasks. It then updates GoHighLevel, posts a task summary to Slack, emails the client their action items via Gmail, and logs the meeting to Sheets.

## How it works
1. Receives a POST webhook request containing a meeting ID, attendee email, meeting date/time, and an audio file.
2. Looks up the contact in GoHighLevel by email and creates/updates the contact if it does not already exist.
3. Checks Google Sheets for the meeting ID and only continues if no existing row is found.
4. Sends the audio binary to Deepgram to transcribe the recording with speaker diarization and utterances enabled.
5. Formats the transcript and sends it to a Google Gemini–powered agent that returns structured JSON with client identification and task lists.
6. Creates a GoHighLevel task with the extracted service-provider tasks, posts the task summary to Slack, and emails the client their tasks via Gmail.
7. Appends the meeting details, extracted company name, and action items to Google Sheets and returns a webhook response.

## Setup
1. Configure the incoming webhook (header authentication) and set the webhook URL in the system that sends the voice recording.
2. Add credentials for GoHighLevel OAuth2, Deepgram (HTTP Header Auth API key), Slack OAuth, and Gmail OAuth2.
3. Add Google Sheets service account credentials and update the spreadsheet ID, sheet name, and ensure columns exist for meetingid, client_email, company_name, meeting_time, and actionable_items.
4. Review and adjust the Gemini model selection and the agent prompt/schema to match the task output format you want.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, HighLevel

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
