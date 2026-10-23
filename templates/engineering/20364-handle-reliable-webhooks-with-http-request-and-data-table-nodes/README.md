# ⚒️ Handle reliable webhooks with HTTP Request and Data Table nodes

> ⚡ **5 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow receives POST webhooks, validates and normalizes the event payload, and uses an n8n Data Table to enforce idempotent processing with durable state tracking. It calls a simulated downstream API on httpbin.org with bounded retries and backoff, then returns deterministic webhook responses.

## How it works
1. Receives an incoming POST request via an n8n Webhook endpoint.
2. Normalizes the request body, validates required fields (eventId, eventType, customerId, amount, and ISO-8601 timestamp), and returns HTTP 400 for invalid payloads.
3. Checks the n8n Data Table for an existing eventId and, if found, returns a deterministic response based on the persisted status (duplicate, in-flight, terminal no-op, retryable exhausted, or resumes the next retry stage).
4. If the eventId is new, writes a “received” state to the Data Table, marks the event as “processing,” and makes a downstream HTTP request to httpbin.org.
5. Classifies the downstream HTTP result as success, retryable failure, or terminal failure, updates the Data Table status accordingly, and responds to the webhook with processed or failure details.
6. For retryable failures, waits with bounded backoff (2 seconds then 4 seconds) and retries the downstream call up to a maximum of three attempts before persisting a final failed state and returning an error response.

## Setup
1. Create an n8n Data Table named “Webhook Reliability State” with columns: eventId (string, matchable), eventType (string), customerId (string), amount (number), timestamp (string), status (string), attemptCount (number), lastError (string), createdTimestamp (string), and updatedTimestamp (string).
2. Confirm all Data Table steps in the workflow are configured to use the “Webhook Reliability State” table.
3. Copy the Webhook URL for the “webhook-reliability” path and configure your source system to send POST requests with the expected JSON fields.
4. If you replace the httpbin.org call with a real downstream API, update the HTTP request URL and add any required n8n credentials for that service.

## 🔗 Nodes Used

HTTP Request, Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
