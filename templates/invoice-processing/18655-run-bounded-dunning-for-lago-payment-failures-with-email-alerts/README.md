# 🧾 Run bounded dunning for Lago payment failures with email alerts

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow listens to Lago payment webhooks, retries failed invoice collections up to three times, stores a durable dunning state in an n8n Data Table, and emails billing when a retry is requested, customer action is required, or a payment is recovered.

## How it works
1. Receives verified and deduplicated payment events from Lago via a webhook trigger.
2. Normalizes the webhook payload to extract the invoice ID, customer identifiers, payment status, and a recommended handling action.
3. For payment failures, fetches the invoice and customer from Lago, loads the current retry count from an n8n Data Table, and retries the invoice payment in Lago when the invoice is still unpaid and the three-attempt cap is not reached.
4. Records the updated dunning state (retry requested or manual review required) in the n8n Data Table and prepares a billing notification message.
5. For events that require customer authentication, preserves the current retry count in the n8n Data Table and prepares an alert that includes the payment action URL.
6. For successful payments, marks the invoice as recovered in the n8n Data Table while retaining the accumulated retry count.
7. Sends a plain-text email to the billing address for retry, manual review, customer action required, and recovery outcomes.

## Setup
1. Add your Lago API credential to the Lago Trigger and all Lago nodes used to get invoices, get customers, and retry payments.
2. Configure an SMTP credential for the email node and replace the default to/from addresses (billing@example.com and billing-automation@example.com).
3. Create (or select) an n8n Data Table for “Lago Dunning State” and ensure it includes fields for invoice/customer identifiers, event and payment status, retry_count, state/last_action, total_amount_cents, and last_event_at.
4. Activate the workflow and ensure Lago can deliver webhook events to the trigger’s registered endpoint.

## 🔗 Nodes Used

Send Email, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
