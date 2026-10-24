# 🎫 Triage Gmail and draft email replies with OpenAI, Slack, and Google Sheets

> ⚡ **7 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls your Gmail inbox every 15 minutes, uses OpenAI to classify unread emails as URGENT, STANDARD, or SPAM, drafts reply emails for non-spam messages, posts a review notification to Slack, and logs spam messages to Google Sheets.

## How it works
1. Runs every 15 minutes on a schedule and fetches up to 20 unread messages from your Gmail Inbox.
2. Marks each fetched Gmail message as read and extracts key fields (sender, subject, snippet, body text, thread ID) for processing.
3. Sends the email content to OpenAI to return a strict JSON classification (category, action label, priority note, and suggested subject).
4. Routes SPAM messages to Google Sheets to append a row in a “Spam Log” sheet and stops further processing for those emails.
5. Sends URGENT and STANDARD messages to OpenAI to generate a concise, plain-text reply draft in your writing style.
6. Saves the generated reply as a Gmail draft in the original thread and posts a Slack message with the triage details so you can review and send.

## Setup
1. Connect a Gmail OAuth2 credential and ensure the workflow has access to read Inbox messages, mark them as read, and create drafts.
2. Add an OpenAI credential and customize the two system prompts to match your role, triage rules, writing voice, and signature.
3. Connect a Slack credential and replace `REPLACE_ME_CHANNEL_ID` with the channel ID where draft-ready alerts should be posted.
4. Connect a Google Sheets credential, replace `REPLACE_ME_SHEET_ID`, and create a sheet tab named “Spam Log” with columns matching the appended fields (From, Snippet, Subject, Timestamp, Message ID).
5. Adjust the schedule interval and Gmail fetch limit/filters if needed, then activate the workflow.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
