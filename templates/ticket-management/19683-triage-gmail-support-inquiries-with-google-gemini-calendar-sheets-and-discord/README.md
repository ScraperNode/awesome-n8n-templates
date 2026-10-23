# 🎫 Triage Gmail support inquiries with Google Gemini, Calendar, Sheets, and Discord

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow watches Gmail for unread “Inquiry Received” emails, uses Google Gemini to classify and summarize the inquiry and draft a reply, calculates an SLA deadline, then creates a Google Calendar event, logs the ticket in Google Sheets, and alerts a Discord channel for high-priority cases.

## How it works
1. Triggers every minute when an unread Gmail message arrives with the subject matching “Inquiry Received”.
2. Sends the email sender, subject, and body to Google Gemini to return structured JSON containing category, priority, a short summary, and a reply draft.
3. Calculates an SLA deadline based on priority (High: +4 hours, Medium: next day at 18:00, Low: +3 days at 18:00) and builds a task title and formatted deadline.
4. Creates a Google Calendar event from the received time to the SLA deadline with the inquiry details in the description.
5. Appends the ticket details (including the Calendar event link) to a specified Google Sheets worksheet.
6. Creates a Gmail draft reply in the original email thread using the AI-generated reply text.
7. Posts an urgent Discord alert when the inquiry priority is High.

## Setup
1. Add credentials for Gmail, Google Gemini (Google AI), Google Calendar, Google Sheets, and a Discord webhook connection.
2. Update the Gmail trigger search filter if you want different matching criteria than unread emails with subject “Inquiry Received”.
3. Set your Google Sheets document ID and sheet name, and ensure the sheet has columns for received_at, priority, category, sender, subject, summary, deadline, and calendar_event_url.
4. Confirm the target Google Calendar (default is your primary calendar) where the SLA events should be created.
5. Configure the Discord node to post to your desired incident/alerts channel via webhook.

## 🔗 Nodes Used

Google Sheets, Discord, Google Calendar, Gmail, Gmail Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
