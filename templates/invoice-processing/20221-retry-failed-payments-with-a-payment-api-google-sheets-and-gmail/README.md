# 🧾 Retry failed payments with a payment API, Google Sheets, and Gmail

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow receives failed-payment webhooks, logs retryable failures to a Google Sheets queue with reason-based retry timing, retries due payments on a 15-minute schedule via an HTTP payment API call, and notifies customers through Gmail when action is required, a payment succeeds, or retries are exhausted.

## How it works
1. Receives a POST webhook event for a failed payment and normalizes the payload into consistent fields.
2. Checks Google Sheets (RetryQueue tab) for an existing row with the same event_id and stops if the event was already processed.
3. Classifies the failure reason to either schedule an automatic retry (with delay and max retries) or mark it as customer action required.
4. Appends the result to the Google Sheets RetryQueue and, for customer-action cases, sends a Gmail email asking the customer to update their payment method.
5. Runs every 15 minutes, loads the Google Sheets RetryQueue, and filters to rows that are SCHEDULED, due now, and still below the max retry limit.
6. Calls the payment provider’s retry endpoint via HTTP for each due row and interprets the response to determine success or failure.
7. Updates the same Google Sheets row to SUCCESS and emails the customer on success, or schedules the next retry time (or marks MAX_RETRIES_REACHED) and emails the customer when retries are exhausted.

## Setup
1. Create a Google Sheet with a RetryQueue tab and column headers that match the fields used in the Google Sheets nodes (for example: id, event_id, transaction_id, payment_id, amount, currency, status, retry_count, max_retries, next_retry_at, last_retry_at, customer_email, failure_reason, failure_message).
2. Add Google Sheets credentials in n8n and update each Google Sheets node to point to your spreadsheet (replace any YOUR_GOOGLE_SHEET_ID placeholders and select the correct document and sheet).
3. Add a Gmail credential in n8n and confirm the “Notify Customer”, “Email Customer — Payment Successful”, and “Email Customer — Payment Failed” nodes use the correct sender and content for your use case.
4. Set the HTTP Request node to your real payment retry endpoint (URL and authentication via headers/credentials) and verify the request/response fields align with how “Read Retry Result” detects success.
5. Copy the “Receive Failed Payment” webhook URL from n8n and configure your payment system to POST failed payment events to it using the expected fields (event_id, transaction_id, customer_email, amount, currency, failure_reason/failure_code).

## Additional info
## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| Google Sheets Operation `lookup` shows red error | Your n8n version removed/renamed Lookup | Use **Get Row(s)** + filter on `event_id` |
| Sheets node returns no data / fails | Still using `YOUR_GOOGLE_SHEET_ID` | Replace with real Sheet ID and connect credential |
| Duplicate always true | Demo row already has same `event_id` | Use a new `event_id` or clear the matching row |
| Auto-retry IF never goes false | `failure_reason` is still retryable (e.g. insufficient_funds) | Send `expired_card` / `invalid_card` / `authentication_required` |
| Schedule finds no due rows | `next_retry_at` is in the future or status not `SCHEDULED` | Backdate `next_retry_at` and set `status=SCHEDULED` |
| HTTP retry fails immediately | Placeholder payment URL / missing auth | Point to mock (e.g. httpbin) or real provider + credential |
| Success IF unexpected with httpbin | httpbin echoes request; not a real payment status | Use a mock that returns `{"status":"succeeded"}` or `{"status":"failed"}` |
| Gmail not received | Wrong email / missing Gmail credential | Use your real `customer_email` and reconnect Gmail |
| Webhook 404 | Workflow inactive or wrong path | Activate workflow; POST to `/webhook/payment-failed` (or test URL while listening) |
| Card data concerns | Payload includes sensitive fields | Send only payment IDs/tokens — never PAN/CVV |


## Need Help?

If you need help customizing or extending this workflow, for ex. adding provider-specific retry APIs, CRM sync, Slack alerts, fraud checks or production hardening then **WeblineIndia's n8n team** can assist you with advanced automation.

Learn more: [Everything in n8n Automation | Offshore Workflow Experts](https://www.weblineindia.com/n8n-automation/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
