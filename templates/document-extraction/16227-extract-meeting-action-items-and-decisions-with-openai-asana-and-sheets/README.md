# 🔬 Extract meeting action items and decisions with OpenAI, Asana and Sheets

> ⚡ **81 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow ingests meeting audio or transcripts via a webhook or a 30-minute schedule, uses OpenAI (Whisper and GPT-4.1-mini) to extract summaries, decisions, and action items, creates tasks in Asana, logs each meeting to Google Sheets, and emails a recap through SendGrid.

## How it works
1. Receives meeting data from a webhook request or runs every 30 minutes on a schedule.
2. Normalizes meeting metadata (title, date, participants, audio URL, and transcript) and validates that either an audio URL or a sufficiently long transcript is present.
3. If only audio is provided, sends the audio URL to OpenAI Whisper to generate a transcript and merges it back into the meeting context.
4. Sends the transcript and metadata to OpenAI GPT-4.1-mini to extract a structured JSON summary, key topics, decisions, risks, and action items with owners and due dates.
5. Parses the AI JSON safely, adds counts and timestamps, and waits at a review buffer before continuing.
6. Splits action items into individual records and creates corresponding tasks in Asana for each one.
7. Appends a meeting log row to Google Sheets and sends a summary email via SendGrid, then returns a JSON status response to the webhook caller.

## Setup
1. Add OpenAI credentials and ensure the workflow can call the Audio Transcriptions API (Whisper) and the Chat model (gpt-4.1-mini).
2. Create an Asana personal access token, replace `YOUR_ASANA_PAT` and `YOUR_PROJECT_ID`, and verify how assignees should be provided (the workflow sends the extracted owner string as `assignee`).
3. Create a Google Sheets OAuth2 credential, replace `YOUR_SHEET_ID`, and ensure the spreadsheet contains a `MeetingLog` sheet with columns matching the appended values.
4. Create a SendGrid API key, replace `YOUR_SENDGRID_API_KEY`, and update the to/from email addresses used in the email payload.
5. If using the webhook trigger, copy the production webhook URL for `meeting-intelligence-inbound` and configure your meeting source to POST `meetingId`, `title`, `date`, `participants`, and either `audioUrl` or `transcript`.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
