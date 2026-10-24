# 🎫 Triage after-hours Vapi and Retell calls with GPT-4.1, Slack, and Gmail

> ⚡ **13 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow accepts end-of-call webhooks from Vapi and Retell, uses OpenAI to classify call urgency from the transcript, logs calls to Google Sheets, pages an on-call and backup team via Slack based on severity and repeat calls, and emails a 7am digest via Gmail.

## How it works
1. Receives an end-of-call webhook from Vapi, Retell, or a direct test POST and immediately responds to acknowledge receipt.
2. Normalizes the payload to extract the caller identity, transcript, timestamps, and metadata, then loads triage settings from Google Sheets.
3. Looks up recent incidents for the same caller in an n8n Data Table and uses OpenAI to classify the transcript into emergency, urgent, routine, or spam with a one-sentence summary.
4. Groups repeat calls from the same caller into a single incident, escalates based on configured severities or on a third call within the repeat window, and builds the alert message.
5. Writes the call details to a Google Sheets “Call Log” sheet and upserts the incident state into the n8n Data Table ledger.
6. If escalation is needed, posts the alert to the on-call Slack channel, waits 10 minutes, then pages the backup Slack channel if the incident is still not marked handled.
7. At 7am, reads overnight calls from Google Sheets, builds an HTML brief grouped by escalated items and callback requests, and emails it via Gmail only if any calls came in.

## Setup
1. Create and connect credentials for OpenAI, Google Sheets, Slack, and Gmail.
2. In Google Sheets, create a document with a “Settings” tab (Business Name, Emergency Examples, On Call Slack Channel, Backup Slack Channel, Escalate After Minutes, Repeat Caller Window Minutes, Escalate Severities, Digest Email) and a “Call Log” tab with the columns referenced in the workflow.
3. Create an n8n Data Table for the incident ledger with the columns noted in the workflow (identity, incidentId, calls, severity, lastCallMs, escalated, backupEscalated, handled, summary).
4. Replace YOUR_GOOGLE_SHEET_ID and YOUR_INCIDENT_TABLE_ID in the relevant nodes, and set default Slack channels and digest email if you do not store them in the Settings sheet.
5. Copy the production webhook URL from the “Call Ended Webhook” trigger and configure it as the Vapi server URL or Retell webhook for end-of-call/analyzed events.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
