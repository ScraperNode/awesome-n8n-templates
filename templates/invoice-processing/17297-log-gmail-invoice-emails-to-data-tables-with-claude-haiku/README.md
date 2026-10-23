# 🧾 Log Gmail invoice emails to data tables with Claude Haiku

> ⚡ **11 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs every morning to find unprocessed invoice-like emails in Gmail, uses Anthropic Claude to extract vendor, total amount, currency, date, and description, then logs each validated invoice into an n8n Data Table and labels the source email to prevent duplicates.

## How it works
1. Runs every day at 06:45 on a schedule.
2. Searches Gmail for the last 90 days of invoice/receipt emails (German and English keywords) while excluding messages that already have the processed label.
3. Builds a strict Anthropic Claude prompt from the email metadata and text snippets to request invoice fields as JSON only.
4. Sends the batch to the Anthropic Messages API and receives a JSON array of extracted invoice entries.
5. Validates the returned data and drops any entries without a literal positive total amount, a supported currency, and a clean YYYY-MM-DD date.
6. Inserts each remaining invoice as a new row in an n8n Data Table.
7. Adds a Gmail label to each processed message so it is not picked up again in future runs.

## Setup
1. Connect your Gmail account credentials for both searching messages and applying labels.
2. Add an Anthropic API credential for the HTTP request to the Anthropic Messages API.
3. Create an n8n Data Table with columns for date, vendor, amount, currency, and description, then replace `YOUR_TABLE_ID` with your table ID.
4. Create or choose a Gmail label for processed invoices, replace `YOUR_LABEL_ID` in the labeling step, and ensure the Gmail search query excludes the same label (the `-label:Processed` part).

## Requirements
- Gmail account with OAuth credentials
- Anthropic API key (Claude Haiku, a few cents per month)
- n8n 1.60 or newer (Data Tables)

## Customization
- Adjust the Gmail search query to match the vendors you actually receive invoices from
- Change the schedule if a daily run is too often or not often enough
- Add a filter node to exclude private subscriptions that arrive in the same inbox

## Additional info
The prompt is deliberately strict: it only accepts amounts that appear literally in the email, always takes the gross total instead of the VAT share, and skips order confirmations and payment reminders that carry no sum. A validation step after the model drops anything without a clean amount and date. Unclear invoices are skipped on purpose rather than guessed, because wrong numbers in bookkeeping cost more time than adding one invoice by hand.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
