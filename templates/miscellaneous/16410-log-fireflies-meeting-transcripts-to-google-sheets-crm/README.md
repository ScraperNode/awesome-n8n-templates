# 🔧 Log Fireflies meeting transcripts to Google Sheets CRM

> ⚡ **32 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow receives a Fireflies webhook when a meeting is processed, fetches the full transcript from Fireflies, matches the external attendee to a lead in Google Sheets, and appends the transcript to a Conversation Logs tab linked to that lead.

## How it works
1. Receives a POST webhook from Fireflies containing the processed meeting ID.
2. Fetches the meeting transcript, speakers, and meeting date from Fireflies using the meeting ID.
3. Identifies the likely client speaker (not matching your internal team markers) and formats the transcript as “Speaker: line” text.
4. Searches the Google Sheets “Lead Database” tab for a lead whose Name matches the detected client name.
5. If a matching Lead ID is found, appends a new row to the Google Sheets “Conversation Logs” tab with the Lead ID, date, and full transcript.
6. If no matching lead is found, stops without writing anything to Google Sheets.

## Setup
1. Install the Fireflies community node (`@firefliesai/n8n-nodes-fireflies`) and add your Fireflies API key credential.
2. Add a Google Sheets OAuth2 credential, set the spreadsheet ID, and ensure you have “Lead Database” (with Name and Lead ID columns) and “Conversation Logs” (with Lead ID, Date, and Details columns) tabs.
3. Update the internal team marker keywords in the code step so the workflow correctly distinguishes your team members from the client.
4. Copy the workflow’s Production webhook URL and configure it as a webhook destination in Fireflies so processed meetings are sent to n8n.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
