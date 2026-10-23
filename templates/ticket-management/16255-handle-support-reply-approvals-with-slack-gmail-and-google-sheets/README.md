# 🎫 Handle support reply approvals with Slack, Gmail and Google Sheets

> ⚡ **6 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives Slack interactive button clicks for support ticket approvals, looks up the matching ticket in Google Sheets, and then either replies to the customer via Gmail or records a Needs Edit/Rejected decision and updates the original Slack message.

## How it works
1. Receives a Slack interactivity POST request when a reviewer clicks an Approve, Needs Edit, or Reject button.
2. Parses the Slack payload to extract the ticket_id, decision, reviewer details, and the Slack channel and message timestamp to update.
3. Looks up the matching ticket row in Google Sheets using the ticket_id.
4. Builds a shared context that combines the ticket data with reviewer metadata and chooses the reply text from final_reply or suggested_reply.
5. If the decision is approve, replies to the customer email thread in Gmail using the stored Gmail message ID, marks the ticket as Sent in Google Sheets, and updates the original Slack message to show “Approved and sent”.
6. If the decision is needs_edit, updates the ticket status to Needs Edit in Google Sheets and updates the original Slack message to indicate edits are required.
7. If the decision is reject, updates the ticket status to Rejected in Google Sheets and updates the original Slack message to confirm rejection and that no email was sent.

## Setup
1. In your Slack app, enable Interactivity and set the Interactivity Request URL to this workflow’s production webhook URL for the configured path.
2. Add a Google Sheets OAuth2 credential and set the Spreadsheet ID and Sheet tab for the ticket table, ensuring it contains columns like ticket_id, suggested_reply/final_reply, gmail_message_id, slack_channel, slack_message_ts, and status.
3. Add a Gmail OAuth2 credential for the mailbox that should send replies, and ensure each ticket row stores the correct gmail_message_id for replying.
4. Create an HTTP Header Auth credential for the Slack Web API (Bearer token) and verify it has permission to call chat.update in the target workspace.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
