# 🧾 Reconcile Razorpay UPI payments with Google Sheets, GPT-4o, Gmail and Slack

> ⚡ **16 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs daily to reconcile Razorpay payments and settlements against invoice and bank-credit records in Google Sheets, logs exceptions, sends receipt emails via Gmail, creates and cancels Razorpay payment links for failed-payment recovery, uses OpenAI for match suggestions and reminder drafts, and posts a Slack digest.

## How it works
1. Runs every day at 7:30 AM on a schedule.
2. Loads invoices, bank credits, the payments ledger, and existing exceptions from Google Sheets.
3. Fetches recent Razorpay payments, the settlement reconciliation report, and settlement records via the Razorpay API with pagination.
4. Matches captured payments to invoices (using stored manual overrides, invoice references, or Razorpay order IDs), checks settlement and bank-credit status, calculates fees, and writes updated ledger, settlement, invoice, and exception records back to Google Sheets.
5. Sends unmatched payments with plausible invoice candidates to OpenAI to generate a suggested invoice match, then logs the suggestion as an exception in Google Sheets without applying it automatically.
6. Emails payment receipts via Gmail for newly paid invoices and cancels any existing Razorpay payment links for paid or replaced invoices.
7. For eligible failed payments, creates a new Razorpay payment link, uses OpenAI to draft a recovery email, sends it via Gmail, updates chase fields in Google Sheets, and escalates high-value or final-attempt cases to a Slack channel.
8. Builds an HTML reconciliation report and emails it to finance via Gmail, then posts a summary digest to Slack.

## Setup
1. Create a Google Sheet with tabs named Invoices, Payments Ledger, Settlements, Exceptions, and Bank Credits, then replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes.
2. Add a Razorpay HTTP Basic Auth credential (Key ID as username and Key Secret as password) and select it in the Razorpay HTTP Request nodes.
3. Connect Google Sheets OAuth2, a Gmail account for sending receipts and reminders, a Slack OAuth connection for posting to your recon channel, and an OpenAI API key for match suggestions and email drafting.
4. Update the reconciliation parameters in Set Recon Rules (finance email, support contact, lookback windows, tolerances, SLA days, fee percentages, and chase limits) and set the Slack channel (for example #finance-recon) in the Slack nodes.
5. Ensure your upstream order/link creation process writes the invoice ID into Razorpay order receipt or payment notes (for example notes.invoice_id) to enable exact matching.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
