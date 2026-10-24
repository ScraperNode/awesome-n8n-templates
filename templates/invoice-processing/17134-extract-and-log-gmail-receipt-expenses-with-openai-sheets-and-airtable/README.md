# 🧾 Extract and log Gmail receipt expenses with OpenAI, Sheets and Airtable

> ⚡ **5 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors a Gmail “Receipts” label, downloads attachments, uses OpenAI to extract expense data from receipt emails and images, skips duplicates and non-receipts, fails safely when extraction is unreadable, sends Slack/Teams alerts for high-value, warranty, or review-needed receipts, and logs valid receipts to Sheets or Airtable.

## How it works
1. Triggers every minute when Gmail finds new emails matching the query `label:Receipts newer_than:2d`.
2. Normalizes the email into consistent fields (message ID, subject, sender, received date, plain-text body) and generates a receipt hash for stable matching.
3. Searches Airtable and/or Google Sheets for existing records matching the message ID or receipt hash and marks the email as a duplicate if it falls within the configured duplicate window.
4. For new receipts, sends the email content to OpenAI to extract receipt details like merchant, total, category, line items, tax hints, and return/warranty dates.
5. Evaluates the extraction to flag high-value, warranty/return-relevant, or needs-review receipts and formats alert messages.
6. Posts alerts to Slack and/or Microsoft Teams when enabled and the receipt is not “standard.”
7. Appends the structured receipt record to Google Sheets and/or creates a new record in Airtable, then returns a final status payload.

## Setup
1. Connect credentials for Gmail, OpenAI, and the destinations you use (Google Sheets OAuth, Airtable personal access token, and Slack OAuth if Slack alerts are enabled).
2. Update the “Setup Receipt Configuration” settings with your Google Sheet ID and tab name and/or your Airtable base ID and table name.
3. If you enable Microsoft Teams alerts, create an Incoming Webhook in Teams and paste its URL into the configuration.
4. Configure your Gmail labeling/filtering so receipt emails get the “Receipts” label (or update the Gmail search query to match your mailbox).
5. Adjust the high-value threshold, duplicate window days, and notification routing options in the configuration to match your expense workflow.

## Requirements
- Gmail account with a Receipts label or Gmail search filter
- OpenAI API credential
- Google Sheets and/or Airtable account for expense logging
- Slack and/or Microsoft Teams only if chat alerts are enabled

## Customization
- Choose EXPENSE_LOG: Google Sheets, Airtable, or both
- Choose NOTIFY_CHANNELS: Slack, Teams, both, or none
- Adjust high-value threshold, duplicate window, and warranty alert settings
- Customize the Gmail search/label to match your receipt emails
- Edit the OpenAI extraction prompt for merchant-specific receipt formats

## Additional info
The workflow skips duplicate receipts, non-receipt emails, and failed extractions cleanly instead of creating bad expense rows. Image receipt attachments are supported through OpenAI OCR fallback. PDF-only receipts fail safely unless useful receipt text is available in the email body.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Slack, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
