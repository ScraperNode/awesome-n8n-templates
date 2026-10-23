# 🎫 Route procurement helpdesk tickets from Gmail with Groq and Slack

> ⚡ **15 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow monitors a Gmail inbox for procurement requests, uses Groq (Llama 3.1) to classify and route each ticket with SLA logic, escalates high-risk items to Slack, creates a ticket via HTTP, sends an auto-reply from Gmail, and logs the full record to Google Sheets.

## How it works
1. Triggers every minute when a new email arrives in a Gmail inbox.
2. Extracts the sender, subject, body, timestamps, and Gmail thread/message IDs, and generates a procurement ticket ID.
3. Looks up the email thread ID in Google Sheets to identify whether the request already exists.
4. Uses Groq (Llama 3.1) to classify the request (category, urgency, sentiment, risk, team) and applies routing rules to set SLA deadlines, queues, and escalation flags.
5. If escalation is required, posts a detailed alert to a Slack channel and creates an escalated ticket via an HTTP request; otherwise, creates a standard ticket via an HTTP request.
6. Generates a short agent-facing status summary with Groq, emails the customer an acknowledgement and suggested reply via Gmail, and appends the full ticket and AI outputs to Google Sheets.

## Setup
1. Connect your Gmail OAuth2 credential for both the inbox trigger and the customer auto-reply sender.
2. Add a Groq API credential and confirm the selected model (llama-3.1-8b-instant) is available in your Groq account.
3. Connect a Google Sheets OAuth2 credential and update the spreadsheet and sheet IDs/names used for the thread lookup and ticket logging, ensuring the target sheet has the required columns (for example: thread_id, ticket_id, category, urgency, sla_deadline).
4. Connect a Slack OAuth2 credential and create/select the channel used for escalations (procurement-escalations).
5. Replace the demo HTTP request URLs with your real ticketing system endpoints (for example Jira, ServiceNow, or Freshdesk) and map any required request body/headers.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Gmail Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
