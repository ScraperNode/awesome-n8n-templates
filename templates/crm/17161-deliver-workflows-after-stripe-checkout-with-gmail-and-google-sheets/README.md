# 🤝 Deliver workflows after Stripe checkout with Gmail and Google Sheets

> ⚡ **7 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow listens for completed Stripe Checkout sessions, validates payment status, fetches the purchased workflow from your n8n instance, exports it as a JSON file, emails it to the buyer via Gmail, and logs the sale details to Google Sheets.

## How it works
1. Triggers when Stripe sends a `checkout.session.completed` event for a Checkout session.
2. Normalizes key fields from the Stripe event (buyer email, payment status, amount, session ID, and the workflow ID from `client_reference_id`).
3. Verifies the event is a completed checkout session and the payment status is not `unpaid`.
4. Retrieves the purchased workflow from the n8n API using the workflow ID passed through Stripe.
5. Appends a sales record to Google Sheets with the timestamp, buyer email, amount, session ID, and workflow details.
6. Exports the fetched workflow to a formatted JSON file and sends it to the buyer as a Gmail attachment with import instructions.

## Setup
1. Add credentials for Stripe, n8n API, Gmail OAuth2, and Google Sheets OAuth2 used by the workflow.
2. Create or select a Google Sheets spreadsheet and a `Sales` sheet tab, and ensure the column headers match the fields being appended (Timestamp, Workflow ID, Workflow Name, Buyer Email, Amount USD, Session ID).
3. Configure your Stripe Checkout/Payment Link to pass the n8n workflow ID in `client_reference_id` so the workflow can fetch and deliver the correct workflow JSON.

## 🔗 Nodes Used

Google Sheets, Stripe Trigger, Gmail, n8n, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
