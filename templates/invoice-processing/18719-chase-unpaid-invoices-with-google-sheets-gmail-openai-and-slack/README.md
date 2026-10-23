# 🧾 Chase unpaid invoices with Google Sheets, Gmail, OpenAI and Slack

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Runs every weekday morning, finds overdue unpaid invoices in Google Sheets, and checks Gmail first so anyone who has already replied is held rather than chased. Drafts a stage-appropriate reminder with OpenAI, sends it, logs the chase in a Data Table, and posts one Slack digest.

## How it works
1. Runs on a weekday-morning schedule, loads configuration values, and checks date.nager.at for public holidays to decide whether reminders should be sent today.
2. Reads the invoice ledger from Google Sheets and the prior chase history from an n8n Data Table, then determines which invoices are overdue and eligible to chase based on due date, status, hold_until, chase limits, and minimum gap rules.
3. Searches Gmail for recent inbox messages and holds any invoice whose client has replied within the configured window, attaching the subject and snippet for review.
4. Processes invoices one at a time and, for those still eligible, uses OpenAI (GPT-5.6) to draft a nudge, firm reminder, or final notice with tone adjusted by days overdue and client payment history.
5. Validates and sanitizes the draft to ensure it contains the correct invoice number and amount, falling back to a safe template if needed.
6. If dry_run is disabled, sends the reminder email via Gmail and upserts the invoice’s chase count and last-chased date into the n8n Data Table.
7. Posts a single Slack digest summarizing what was sent or held (including reply snippets), plus total outstanding and any holiday-lookup warning.

## Setup
1. Add credentials for Google Sheets, Gmail, Slack, and an OpenAI-compatible connection configured to use the gpt-5.6-terra model.
2. Update the Settings values, including your Google Sheets URL, country/region codes, currency symbol, date_order, thresholds (gentle/firm/final), reply window, and target Slack channel.
3. Ensure your Google Sheets invoice tab contains invoice_no, client_name, client_email, amount, due_date, and status columns, and optionally add hold_until to pause chasing an invoice.
4. Create an n8n Data Table named invoice_chases to store chase_count and last_chased history.
5. Keep dry_run enabled for initial testing, review the Slack digest for correct selection and matching, then switch dry_run off to start sending emails.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
