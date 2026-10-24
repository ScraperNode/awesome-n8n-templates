# 🎫 Triage support emails with Gmail, OpenAI, Slack, and Google Sheets

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow monitors a labeled Gmail support inbox, uses OpenAI to classify and draft replies with thread context from Google Sheets, then posts each ticket to Slack with approval buttons and logs the Slack metadata and AI fields back to Google Sheets.

## How it works
1. Triggers when a new email arrives in Gmail with the specified Support label.
2. Extracts key fields from the Gmail message (sender, subject, snippet/body, message ID, thread ID, and received timestamp).
3. Looks up the Gmail thread ID in Google Sheets to detect whether the message is a follow-up and to pull the latest prior ticket context.
4. Sends the current email plus any prior thread context to OpenAI to generate a JSON classification, risk signals, and a suggested reply draft.
5. Parses and normalizes the OpenAI JSON output, applies safety overrides (for example low confidence, billing/refund, angry, or urgent), and assigns a ticket ID and review status.
6. Builds and sends a Slack message (via a Slack API HTTP request) containing the summary and suggested reply with Approve/Needs Edit/Reject buttons.
7. Merges the Slack response (channel and message timestamp) into the ticket data and appends or updates the ticket row in Google Sheets.

## Setup
1. Connect credentials for Gmail OAuth2, OpenAI API, Google Sheets OAuth2, and an HTTP Header Auth credential for your Slack API request.
2. Create and apply a Gmail label for support emails and update the Gmail Trigger label ID to match your label.
3. Create a Google Sheets ticket log with the required columns (such as ticket_id, gmail_thread_id, status, summary, suggested_reply, slack_channel, slack_message_ts) and set the spreadsheet ID and sheet/tab in both Google Sheets steps.
4. Configure the Slack destination by setting the Slack channel ID in the Slack payload builder and replacing the HTTP Request URL with your Slack endpoint (for example chat.postMessage) and authorization header/token.
5. Activate the separate “Support Approval Button Handler” workflow and set your Slack app’s Interactivity Request URL to that handler’s webhook URL.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
