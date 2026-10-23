# 🧾 Detect duplicate payment charges from Gmail using Gemini, Google Sheets and Slack

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow monitors Gmail for receipt emails, uses Google Gemini to extract transaction details, checks recent transactions stored in Google Sheets for potential duplicate charges, logs the result back to the sheet, and sends a Slack alert when it finds a possible double charge.

## How it works
1. Triggers every minute when a new Gmail message matching the search query (for example, “receipt”) arrives.
2. Fetches the full Gmail message, extracts a clean email body from MIME parts, and prepares core metadata such as sender, subject, thread ID, and received timestamp.
3. Sends the email content to Google Gemini to extract structured transaction fields (merchant, amount, currency, transaction date/time, reference, and type) and parses the JSON response.
4. Validates that the email represents a successful charge with the required fields, and normalizes merchant, amount, currency, and timestamps into a consistent format.
5. Generates a deterministic transaction ID, pulls recent transactions from Google Sheets, and flags the current charge as a potential duplicate when merchant, amount, and currency match within a 48-hour window.
6. Appends the transaction to Google Sheets, posts a Slack alert when a potential duplicate is detected, and then labels the Gmail message as processed.

## Setup
1. Connect Gmail OAuth2 credentials and update the Gmail trigger query and the “processed” label ID used to tag handled messages.
2. Add Google Gemini (PaLM) API credentials and confirm the selected model is available in your Google AI Studio account.
3. Connect Google Sheets credentials, set the target spreadsheet and “Transactions” sheet, and ensure the sheet has columns for transaction fields and duplicate status (including email_message_id and transaction_timestamp).
4. Connect Slack credentials and select the channel where duplicate-charge alerts should be posted.
5. (Optional) Adjust the duplicate detection time window in the duplicate-checking code (48 hours by default) to fit your review process.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Gmail Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
