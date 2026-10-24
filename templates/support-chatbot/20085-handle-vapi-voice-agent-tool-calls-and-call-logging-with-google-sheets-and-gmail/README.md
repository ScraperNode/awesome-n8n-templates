# 💬 Handle Vapi voice agent tool calls and call logging with Google Sheets and Gmail

> ⚡ **141 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow provides a backend webhook for Vapi voice agents, handling mid-call tool calls via Google Calendar and Google Sheets, then logging end-of-call details to Google Sheets and sending follow-up alerts through Gmail when keywords are detected.

## How it works
1. Receives a POST request from Vapi through a single webhook for both tool calls and end-of-call reports.
2. Normalizes the incoming payload to extract the event type, tool call details, caller number, call ID, transcript, summary, and call metadata.
3. For mid-call tool requests, routes by function name to either check Google Calendar availability, look up a customer in Google Sheets, append a request to Google Sheets, or return a safe response for unknown functions.
4. Formats the selected tool result into Vapi’s required `{ results: [{ toolCallId, result }] }` response and returns it immediately to the caller.
5. For end-of-call reports, extracts a call record, scans the transcript and summary for configured follow-up keywords, and prepares flags.
6. Appends the call record to a Google Sheets “Calls” tab and sends a Gmail alert email only if the call is flagged as needing follow-up, then acknowledges receipt to Vapi.

## Setup
1. Create Google Calendar, Google Sheets, and Gmail credentials in n8n.
2. Update the Agent Config values (CalendarId, AlertEmail, SlotLengthMinutes, TransferMessage, and FollowUpKeywords) to match your environment.
3. Create a Google Sheets spreadsheet with “Customers”, “Requests”, and “Calls” tabs (and matching column headers) and replace `YOUR_SPREADSHEET_ID` in all Google Sheets steps.
4. Activate the workflow, copy the production webhook URL, and set it as the Server URL in your Vapi assistant.
5. In Vapi, define tools named `check_availability`, `lookup_customer`, and `log_request` (and optionally `transfer_call` if you want the custom transfer message).

## 🔗 Nodes Used

Google Sheets, Webhook, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
