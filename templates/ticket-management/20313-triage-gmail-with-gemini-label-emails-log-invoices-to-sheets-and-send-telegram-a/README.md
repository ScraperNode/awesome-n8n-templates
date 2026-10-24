# 🎫 Triage Gmail with Gemini, label emails, log invoices to Sheets, and send Telegram alerts

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow watches your Gmail inbox, uses Google Gemini to classify and summarize each email, applies category labels, optionally creates reply drafts, logs invoice details to Google Sheets, sends urgent alerts via Telegram, and stores a searchable processing log in an n8n Data Table.

## How it works
1. Triggers every 5 minutes when a new Gmail inbox message arrives (excluding promotions, social, and your own emails).
2. Fetches the full email content, formats it into a clean prompt, and sends it to Google Gemini to return a JSON classification, summary, urgency flag, optional reply text, and optional invoice fields.
3. Ensures the corresponding Gmail label (for example, AI/Clients or AI/Invoices) exists and applies it to the email.
4. If the email needs a reply and drafting is enabled, creates a Gmail draft reply in the same thread addressed to the sender.
5. If the email is classified as an invoice and a Google Sheets document ID is provided, appends the extracted invoice fields plus an email link to your Google Sheets invoice tracker.
6. If the email is marked urgent and a Telegram chat ID is provided, sends a Telegram message with the sender, subject, and one-line summary.
7. Inserts a row into an n8n Data Table to log the received time, sender, subject, category, urgency, summary, and whether a draft or invoice entry was created.

## Setup
1. Connect credentials for Gmail, Google Gemini (API key), and Telegram, and also connect Google Sheets if you want invoice logging.
2. In Google Sheets, create a sheet with header columns: Date, Issuer, Number, Net, VAT, Total, Currency, Subject, Link to the email.
3. In the workflow’s Settings values, fill in your name, business description, tone, your Google Sheets document ID (optional), and your Telegram chat ID (optional), and set create_drafts to false if you don’t want Gmail drafts created.

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Gmail Trigger, Google Gemini, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
