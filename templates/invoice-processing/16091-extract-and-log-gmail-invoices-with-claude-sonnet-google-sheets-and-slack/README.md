# 🧾 Extract and log Gmail invoices with Claude Sonnet, Google Sheets and Slack

> ⚡ **34 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow polls Gmail every 15 minutes for unread invoice or receipt emails, uses Anthropic Claude (Sonnet) to extract key financial fields, logs new documents to Google Sheets, sends optional Slack alerts for overdue or high-value invoices, and marks processed emails as read.

## How it works
1. Runs every 15 minutes and triggers on unread emails in Gmail.
2. Prepares the email metadata and body text (and any available attachment text) and sets configuration values like the Google Sheets target and Slack threshold.
3. Sends the combined email content to Anthropic Claude Sonnet to classify the document and extract structured invoice/receipt fields as JSON.
4. Parses the AI response, normalizes amounts and dates, and flags items as overdue or high value based on your threshold.
5. Checks Google Sheets for an existing entry with the same invoice number to avoid duplicates.
6. Appends new invoice/receipt records to the Google Sheets log and posts a Slack message when an alert condition is met.
7. Marks the Gmail email as read after logging (and after any Slack alert) to keep the inbox clean.

## Setup
1. Connect your Gmail account in both the Gmail trigger and the “Mark as read” action.
2. Add an Anthropic (Claude) API credential and ensure the Claude Sonnet model is available in your account.
3. Connect your Google Sheets account, set the target spreadsheet ID and sheet name, and create columns that match the fields being appended (for example: Timestamp, From, Subject, Invoice Type, Vendor Name, Invoice Number, Invoice Date, Due Date, Currency, Subtotal, Tax, Total Amount, Payment Status, Line Items, Confidence, Email ID).
4. (Optional) Connect your Slack account and set the Slack channel ID, then set the high-value threshold amount used to trigger alerts.
5. Review the Gmail polling interval and unread-only filter to match how you want invoices and receipts to be picked up.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
