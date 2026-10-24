# ⚡ Extract and log Gmail admin tasks with OpenAI, Google Sheets and Airtable

> ⚡ **10 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow monitors Gmail for messages labeled “Admin”, redacts sensitive data, uses OpenAI to extract structured admin tasks and reminders, skips duplicates by checking Google Sheets and/or Airtable, sends optional Slack or Microsoft Teams alerts for urgent items, and logs the clean task details.

## How it works
1. Triggers every minute when a new Gmail message matches the query `label:Admin newer_than:7d`.
2. Loads configurable settings (log destination, alert channels, due-soon window, dedupe window, and redaction toggle) and normalizes the email into a clean text body.
3. Redacts sensitive patterns (such as SSNs, card-like numbers, phone numbers, email addresses, and addresses) and generates an “admin hash” fingerprint for deduplication.
4. Checks Google Sheets and/or Airtable for recent matching Message IDs or admin hashes and skips processing if the email appears to be a duplicate.
5. Sends the redacted email content to OpenAI to classify whether it is an admin item and to extract fields like task title, summary, priority, due date/time, and recommended next step.
6. If the item is valid, optionally posts an alert to Slack and/or Microsoft Teams for urgent/high-priority, due-soon, or review-needed items.
7. Appends the extracted task record to Google Sheets and/or creates a record in Airtable, then outputs an OK or skipped status.

## Setup
1. Connect credentials for Gmail OAuth2 and OpenAI.
2. If logging to Google Sheets, connect Google Sheets OAuth2 and set the Google Sheet ID and tab name (for example, “Admin Tasks”) in the settings code.
3. If logging to Airtable, add an Airtable Personal Access Token, set the base ID and table name in the settings code, and ensure the table has fields like “Message ID” and “Admin Hash”.
4. If enabling alerts, connect Slack OAuth2 and set the target channel name, and/or create a Microsoft Teams incoming webhook URL and paste it into the settings code.
5. Adjust the Gmail search query/label, duplicate window days, and urgent due-soon threshold in the workflow settings to match your inbox rules.

## Requirements
- n8n Cloud or self-hosted n8n instance
- Gmail account with an Admin label or admin-focused search query
- OpenAI API key configured in n8n
- Google Sheets OAuth2 and/or Airtable Personal Access Token
- Slack OAuth2 and/or Microsoft Teams incoming webhook if alerts are enabled

## Customization
- Set TASK_LOG to sheets, airtable, or both
- Set NOTIFY_CHANNELS to slack, teams, both, or none
- Change URGENT_DUE_DAYS and DUPLICATE_WINDOW_DAYS
- Tune the AI classifier prompt for your preferred admin categories
- Adjust the Gmail Admin label/search query to match your inbox rules

## Additional info
This template is positioned as a general-purpose personal admin assistant. It redacts common sensitive patterns before AI by default, skips duplicates, non-admin emails, and failed extractions cleanly, and does not provide legal, financial, medical, or tax advice.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Slack, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
