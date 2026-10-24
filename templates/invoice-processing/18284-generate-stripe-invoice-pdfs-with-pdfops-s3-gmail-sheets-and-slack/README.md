# 🧾 Generate Stripe invoice PDFs with PDFops, S3, Gmail, Sheets, and Slack

> ⚡ **2 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow listens for successful Stripe payments, generates an invoice PDF with PDFops (handling zero-decimal currencies), archives the PDF to Amazon S3, emails it to the customer via Gmail when possible, logs the transaction to Google Sheets, and posts issues to Slack.

## How it works
1. Triggers on Stripe `payment_intent.succeeded` events and ignores payments below the configured minimum amount.
2. Fetches the Stripe customer details to determine the billing name and email, falling back to the payment receipt email when needed.
3. Builds an invoice payload that converts Stripe’s smallest-unit amounts correctly for zero-decimal currencies and optionally derives net amount when a tax rate is provided.
4. Uses PDFops to render the invoice payload into a PDF file.
5. Uploads the generated PDF to an Amazon S3 bucket and appends an invoice record to a Google Sheets “Invoices” ledger.
6. If a customer email exists, sends the PDF as an attachment via Gmail; otherwise, posts a Slack message noting the invoice was archived but not emailed.
7. If invoice payload generation or PDF rendering fails, posts an error alert to a Slack channel with the Stripe payment ID.

## Setup
1. Install the PDFops community node (`n8n-nodes-pdfops`) and (optionally) add a PDFops API credential if you exceed the free unauthenticated limit.
2. Add credentials for Stripe, Amazon S3 (AWS), Gmail, Google Sheets, and Slack.
3. Update the invoice defaults (company name, invoice prefix, tax rate, minimum amount, and S3 bucket name) to match your billing requirements.
4. Replace the Google Sheets document URL/ID and ensure an “Invoices” sheet exists with columns matching the appended fields (Date, Total, Invoice, Currency, Customer, Payment ID).
5. Set the target Slack channel (for example `#billing`) and verify Gmail can send from the desired account.

## Requirements
- A Stripe account delivering payment_intent.succeeded, plus AWS S3, Gmail, Google Sheets and Slack credentials. A PDFops API key is optional: the workflow runs keyless at 100 requests/IP/month, and a credential only raises that quota.

## Customization
- Company details, tax rate, currency and the minimum billable amount all live in one Set Invoice Defaults node. Drop the Sheets or Slack branch if you only want the archive, and swap S3 for Drive or Dropbox without touching the PDF step.

## Additional info
Stripe reports amounts in the smallest currency unit, but not every currency has 100 of them — JPY, KRW and 13 others are zero-decimal, so the reflexive amount/100 silently issues an invoice 100x too small. This template handles that explicitly. It also derives tax backwards from the charged total so the invoice reconciles with what Stripe actually took, falls back to receipt_email when a guest checkout has no customer object, skips zero-amount authorisations, and routes render failures to Slack so a missing invoice is noticed rather than silently never existing.

## 🔗 Nodes Used

Google Sheets, Slack, Stripe Trigger, AWS S3, Gmail, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
