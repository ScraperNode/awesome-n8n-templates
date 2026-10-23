# 🎫 Triage support emails and schedule SLA tasks with Gmail, Gemini, Google Calendar, Sheets and Discord

> ⚡ **32 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow monitors Gmail for unread emails with the subject “Inquiry Received”, uses Google Gemini to classify and summarize each inquiry, calculates an SLA deadline, creates a Google Calendar follow-up event, logs the ticket in Google Sheets, drafts a Gmail reply, and posts a Discord alert for high-priority cases.

## How it works
1. Triggers every minute when an unread Gmail message matching subject “Inquiry Received” is received.
2. Sends the email sender, subject, and body to Google Gemini via an LLM chain to return structured JSON with category, priority, summary, and a reply draft.
3. Calculates an SLA deadline based on priority (High: +4 hours, Medium: next day 18:00, Low: +3 days 18:00) and builds a task title and metadata.
4. Creates a Google Calendar event from now until the calculated deadline with the ticket details in the description.
5. Appends a row to Google Sheets with the received time, triage results, deadline, and the Google Calendar event link.
6. Creates a Gmail draft reply in the original email thread using the AI-generated reply text.
7. If the priority is High, sends an urgent notification to Discord with the deadline and inquiry summary.

## Setup
1. Connect credentials for Gmail, Google Gemini (Google AI), Google Calendar, and Google Sheets in n8n.
2. Update the Google Sheets document ID and sheet name in the Google Sheets append step, and ensure the sheet has columns: received_at, priority, category, sender, subject, summary, deadline, calendar_event_url.
3. Configure a Discord webhook and select it in the Discord node used to send urgent alerts.
4. Confirm the Gmail trigger filter (subject “Inquiry Received” and unread) matches your inbound support email pattern and adjust it if needed.

## 🔗 Nodes Used

Google Sheets, Discord, Google Calendar, Gmail, Gmail Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
