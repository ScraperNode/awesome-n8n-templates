# 🎫 Triage inbound Gmail with Anthropic Claude, Google Sheets, and Slack alerts

> ⚡ **18 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow watches a Gmail inbox for new messages, uses Anthropic Claude to classify each email and draft a reply, then logs the results to Google Sheets and optionally posts high-priority or sales alerts to Slack.

## How it works
1. Polls Gmail every minute for new incoming emails.
2. Cleans and normalizes each email (sender, subject, body) into a truncated text block for AI processing.
3. Sends the email text to Anthropic Claude to extract structured triage fields (category, priority, sentiment, detected language, summary, suggested reply, and a human-review flag).
4. Validates and coerces the AI output to allowed values, suppressing replies for spam and flagging malformed results for human review.
5. If the email is spam, logs it to Google Sheets and stops processing.
6. If the email is not spam, creates a Gmail draft reply in the original thread and logs the triage record to Google Sheets.
7. If the email is high priority or categorized as sales, posts a Slack message with the summary and a note that a Gmail draft is ready to review.

## Setup
1. Connect Gmail OAuth2 credentials for the Gmail trigger and Gmail draft creation.
2. Add an Anthropic credential for the Claude chat model used to classify emails and draft replies.
3. Connect Google Sheets credentials and set `PERLY_TRIAGE_SHEET_ID` to the target spreadsheet ID containing a sheet named `email_triage`.
4. (Optional) Connect Slack credentials and update the target channel (default `#leads`) for alerts.

## Requirements
- Gmail account with OAuth2 credentials, used both by the trigger and to create the draft reply.

## Customization
- Change how often the Gmail trigger polls: it is set to every minute.

## Additional info
Nothing is sent automatically: every reply is saved as a Gmail draft for a person to read and send. The validation step forces each AI field to an allowed value and flags anything unusual for human review.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, Anthropic Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
