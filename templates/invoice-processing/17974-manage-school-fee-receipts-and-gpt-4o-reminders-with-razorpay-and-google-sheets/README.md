# 🧾 Manage school fee receipts and GPT-4o reminders with Razorpay and Google Sheets

> ⚡ **32 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow automates school fee collection by processing Razorpay payment webhooks, updating student balances in Google Sheets, generating a PDF receipt, and sending it via Gmail, plus running a weekly Google Sheets defaulter scan that uses OpenAI to draft reminder emails and logs activity.

## How it works
1. Receives a Razorpay payment.captured webhook, validates the payload, and extracts student identifiers, payer details, amount, and transaction metadata.
2. Looks up the matching student in Google Sheets and calculates the updated fee paid and outstanding balance.
3. Updates the student’s record in Google Sheets and generates a branded HTML receipt which is converted into a PDF.
4. Emails the PDF receipt via Gmail and logs the payment event to a Google Sheets audit sheet, also sending a Telegram message from the same receipt step.
5. Runs every Monday at 9:00 AM, fetches all students from Google Sheets, and identifies defaulters by balance due and overdue-day tiers (gentle/firm/escalation).
6. Uses OpenAI to draft a short tiered reminder message, emails it via Gmail to the parent/guardian, and appends a reminder entry to the Google Sheets audit sheet.
7. If the workflow errors, sends an alert to a Slack channel via the Error Trigger.

## Setup
1. Create a Razorpay webhook for successful payments and point it to this workflow’s webhook URL.
2. Connect Google Sheets OAuth credentials and set the correct spreadsheet and sheet names/IDs for the Students and PaymentLog tabs.
3. Connect a Gmail OAuth2 credential and replace the hardcoded recipient email(s) with the parent/student email fields you want to use.
4. Add an OpenAI API credential and select the model you want to use for drafting reminders.
5. Connect Telegram and Slack credentials, then set the Telegram chat ID and the Slack channel used for error alerts.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
