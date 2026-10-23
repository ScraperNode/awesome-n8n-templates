# 🔬 Send Stripe payment thank-you receipts with Claude Sonnet and Gmail

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow triggers on successful Stripe charges, normalizes payment details, uses Anthropic Claude to generate a personalized thank-you and receipt message, logs the payment to an n8n Data Table, and emails the customer via Gmail.

## How it works
1. Triggers when Stripe reports a successful charge (charge.succeeded).
2. Extracts and normalizes the customer name, email, amount, currency, and payment description from the Stripe event.
3. Uses Anthropic Claude (via LangChain) to generate a warm email subject, an HTML thank-you/receipt message, and a one-line internal finance summary.
4. Combines the AI output with the normalized payment fields and adds a timestamp for logging.
5. Writes the payment details and summary into an n8n Data Table for finance records.
6. Sends the generated thank-you and receipt email to the customer using Gmail.

## Setup
1. Add Stripe credentials and enable the Stripe trigger so Stripe can register the charge.succeeded webhook.
2. Add an Anthropic credential (Claude Sonnet 4.6) for the AI-generated subject, message, and internal summary.
3. Add a Gmail OAuth2 connection and ensure the workflow is allowed to send emails from the connected mailbox.
4. Create or select the n8n Data Table named payment_log (or update the table selection) to store the payment records.
5. Confirm your Stripe charge data includes a customer email (billing_details.email or receipt_email) so Gmail has a valid recipient address.

## Requirements
- n8n instance with the Data Table feature enabled
- Stripe account + API key (the trigger registers the webhook automatically)
- Anthropic API key (Claude)
- Gmail account connected via OAuth2

## Customization
- Listen to other Stripe events — charge.refunded, charge.dispute.created, customer.subscription.deleted, invoice.payment_failed — and branch a different flow for each
- Add an IF for high-value payments to trigger a VIP/owner alert
- Attach a PDF invoice (via a PDF node) to the thank-you email
- Send the payment record to QuickBooks, a Google Sheet, or Slack instead of (or alongside) the data table
- Localize the email by currency/country for international customers

## Additional info
App-event trigger: Stripe fires the workflow the instant a payment succeeds — no polling, no manual webhook setup.
Claude confirms the exact amount, currency, and item and never invents order numbers, discounts, or promises.
Universal for any business taking Stripe payments: SaaS, e-commerce, coaching, agencies, communities.

## 🔗 Nodes Used

Stripe Trigger, Gmail, AI Agent, Anthropic Chat Model, Structured Output Parser, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
