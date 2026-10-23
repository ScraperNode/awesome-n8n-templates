# 📁 Log completed ThunderPhone calls to Google Sheets with call summaries

> ⚡ **0 views** · 📁 [File Management](../)

## Description

## Quick Overview
This workflow listens for ThunderPhone call-completed events, fetches the full call details, and appends a formatted row to Google Sheets with key metadata, the AI summary, the transcript, and a dashboard link.

## How it works
1. Triggers when ThunderPhone sends a signed call-completed webhook for a phone or web call.
2. Fetches the completed call record from ThunderPhone, including duration, status, end reason, summary, and transcripts.
3. Filters out test or simulation calls so they are not logged.
4. Formats the call data into Google Sheets columns, including a combined transcript and a ThunderPhone dashboard link.
5. Appends the formatted row to the `Calls` sheet in Google Sheets.

## Setup
1. Install the ThunderPhone community node (`n8n-nodes-thunderphone`) and create a ThunderPhone API credential using a server API key from ThunderPhone (Organization  Keys).
2. Add a Google Sheets OAuth credential and select the target spreadsheet in the Google Sheets append step.
3. Create a sheet tab named `Calls` with headers that match the workflow fields (Call ID, Started at, Direction, From, To, Agent, Duration (s), Status, End reason, Summary, Transcript, Call link).
4. Activate the workflow so ThunderPhone can register the webhook, and ensure your n8n instance is reachable over public HTTPS.

## 🔗 Nodes Used

Google Sheets, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
