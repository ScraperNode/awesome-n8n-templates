# 🎫 Triage and reply to Gmail with Claude and log priority alerts to Slack

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors Gmail for new messages, uses Anthropic Claude to classify and summarize them, then routes outcomes to Gmail (drafts/labels/archive), Slack alerts, Airtable task creation, and Google Sheets logging, with optional deduplication via a Supabase/Airtable HTTP endpoint.

## How it works
1. Polls Gmail every minute for new incoming emails.
2. Extracts key fields (message ID, thread ID, sender, subject, body, and received date) and optionally checks an external endpoint to avoid processing the same message twice.
3. Sends the email content to Anthropic Claude to classify it (Urgent/Important/Normal/Promotional) and return a JSON summary, action items, response requirement, and sentiment.
4. Labels, archives, and logs Promotional emails to a Google Sheets tab.
5. Drafts a reply with Anthropic Claude for Urgent, Important, and Normal emails and saves it as a Gmail draft in the original thread.
6. Sends a Slack alert and creates an Airtable task for non-Normal emails, while logging Normal emails to Google Sheets.
7. Calls an external endpoint to mark the message as processed for future deduplication.

## Setup
1. Connect your Gmail OAuth2 credential and verify the trigger is monitoring the correct mailbox.
2. Add an Anthropic API key (as an HTTP header credential) and ensure the request headers include `x-api-key`, `anthropic-version`, and `content-type`.
3. Connect Slack OAuth2 and replace `REPLACE_WITH_URGENT_CHANNEL_ID` and `REPLACE_WITH_GENERAL_CHANNEL_ID` with your channel IDs.
4. Connect Airtable and replace `REPLACE_WITH_YOUR_AIRTABLE_BASE_ID` and `REPLACE_WITH_YOUR_TASKS_TABLE_ID`, ensuring the table has fields matching the mapped columns (Due, From, Title, Status, Summary, Category, Action Items).
5. Connect Google Sheets and replace `REPLACE_WITH_YOUR_SHEET_ID`, creating the “Promotional Log” and “Normal Log” sheet tabs.
6. (Optional) Replace the placeholder Supabase/Airtable HTTP endpoints for the check and mark-processed steps with your own deduplication service keyed by `messageId`.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Slack, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
