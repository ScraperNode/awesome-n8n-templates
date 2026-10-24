# 🤝 Process demo Stripe orders with Lovable, Gmail, Slack, and Google Sheets

> ⚡ **8 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives order requests from a Lovable app via webhook, validates and deduplicates them in Google Sheets, simulates a Stripe payment intent, and then sends a Gmail receipt on success or posts a Slack alert on failure, while logging events and errors to Sheets.

## How it works
1. Receives a POST request on a webhook endpoint containing order details such as email, amount, currency, and order ID.
2. Validates required fields and formats, generates an idempotency key, checks Google Sheets for duplicates, and stores the order in an orders sheet with status processing while writing an audit log entry.
3. Initializes a retry counter and calls a demo Stripe payment-intent step via an HTTP request (httpbin) to simulate payment processing.
4. Evaluates the HTTP response and a failure-simulation flag to decide whether the payment is treated as successful or failed.
5. On success, updates the order to completed in Google Sheets, logs the success, emails a Gmail receipt to the customer, and returns a 200 JSON response to the webhook caller.
6. On failure, retries up to three times with a 10-second wait between attempts while logging each retry to Google Sheets.
7. If payment still fails or failure is simulated, updates the order to failed in Google Sheets, logs the failure, posts a Slack alert, and returns a 502 JSON response.

## Setup
1. Create a Google Sheets spreadsheet with orders, logs, and errors tabs (with columns matching the workflow mappings) and connect Google Sheets OAuth2 credentials.
2. Add Gmail OAuth2 credentials and confirm the sending mailbox used to email receipts.
3. Add Slack OAuth2 credentials and select the target channel for failure alerts.
4. Copy the webhook URL for /process-order and configure Lovable (or your checkout frontend) to send a POST payload with order_id, email, amount, and optional force_fail/product_name/customer_name/currency fields.
5. Replace the Google Sheets document ID and any channel IDs if you are not using the preconfigured spreadsheet and Slack channel.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
