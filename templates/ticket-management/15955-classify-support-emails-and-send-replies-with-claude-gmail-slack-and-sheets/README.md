# 🎫 Classify support emails and send replies with Claude, Gmail, Slack and Sheets

> ⚡ **29 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for unread support emails, uses Anthropic Claude to classify and draft replies, routes urgent tickets to Slack and a Gmail draft, auto-replies to normal tickets, and logs all tickets to Google Sheets for reporting.

## How it works
1. Triggers every minute when a new unread email arrives in Gmail inbox.
2. Applies workflow settings (Slack channel, Google Sheet ID/name, support email, and max email length) and builds a structured prompt from the email subject, sender, and truncated body.
3. Sends the prompt to Anthropic Claude (Sonnet) to return a JSON classification with category, priority, sentiment, summary, draft reply, and an internal note.
4. Parses the AI JSON output, applies safe defaults if parsing fails, and prepares reply metadata like timestamp and reply subject.
5. For urgent tickets, creates a Gmail draft reply, posts an alert to a Slack channel with ticket details, and appends a log row to Google Sheets.
6. For normal tickets, sends the draft reply as a plain-text Gmail message and appends a log row to Google Sheets.
7. For low-priority tickets, skips replying and appends a log row to Google Sheets.

## Setup
1. Connect Gmail credentials for the Gmail Trigger and the Gmail actions used to create drafts and send replies.
2. Add Anthropic credentials for the Claude Sonnet model used to classify tickets and draft responses.
3. Connect Slack credentials and set your target Slack channel ID in the settings.
4. Connect Google Sheets credentials, create a spreadsheet with a “Support Tickets” sheet (or update the sheet name), and set the Google Sheet ID in the settings.
5. Update the settings values (support email, max email characters, sheet name) to match your environment before activating the workflow.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
