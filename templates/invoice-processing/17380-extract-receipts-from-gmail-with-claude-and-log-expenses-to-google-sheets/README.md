# 🧾 Extract receipts from Gmail with Claude and log expenses to Google Sheets

> ⚡ **92 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow runs daily to search Gmail for receipt and invoice emails, uses Anthropic Claude to extract structured expense fields, and appends the confirmed expenses to a Google Sheets log.

## How it works
1. Runs every day on a schedule.
2. Searches Gmail using the configured query to find recent receipt, invoice, or order confirmation emails.
3. Flattens each matched email into a plain-text record (from, subject, date, and a truncated body) for reliable parsing.
4. Sends all prepared email records to the Anthropic Messages API (Claude) to classify true receipts and extract vendor, amount, currency, date, category, and invoice/order number.
5. Filters to confirmed receipts and formats them into rows, including the original email sender and subject for reference.
6. Appends the expense rows to the target Google Sheets spreadsheet.

## Setup
1. Connect your Gmail account in the Gmail node and adjust the Gmail search query and look-back window in the configuration values.
2. Provide an Anthropic API key (set the `ANTHROPIC_API_KEY` environment variable) and ensure the model name matches one available to your account.
3. Connect your Google Sheets account and select the target spreadsheet document, sheet tab, and matching columns for the appended expense fields.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
