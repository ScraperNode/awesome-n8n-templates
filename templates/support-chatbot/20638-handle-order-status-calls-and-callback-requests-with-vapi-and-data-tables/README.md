# 💬 Handle order-status calls and callback requests with Vapi and Data Tables

> ⚡ **0 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Give a Vapi assistant two order-support tools: check fulfillment status and record a human callback request. Includes two demo orders, a visible callback queue, and one-click setup with native n8n Data Tables. Built for small support teams and agencies delivering voice agents.

## How it works
1. The Manual setup branch creates blucca_vapi_demo_orders and blucca_vapi_demo_callbacks, then seeds ORD-1001 and ORD-1002. In this gallery export, both demo orders use user@example.com as the checkout email. You can inspect both tables directly in n8n.
2. A Header Auth webhook receives Vapi tool calls. The workflow processes each call individually and preserves its toolCallId throughout lookup, validation, and response building.
3. getOrderStatus checks the supplied orderId and checkout email together. A matching order returns its fulfillment status, carrier, tracking number, and estimated delivery. An unmatched pair returns order_not_found so the assistant can ask the caller to check those details.
4. requestCallback checks the same order/email pair, then records phone, reason, and a pending status in the callback table. Your team filters for pending rows, calls each customer, and changes the status to contacted or resolved.
5. Callback identity combines the Vapi call ID and tool-call ID. Sequential retries reuse the original row and preserve its operator-managed status. Changed details under the same key return an explicit tool error.
6. The webhook returns one HTTP 200 results envelope for the whole batch. Each tool gets its own serialized result or error, so a valid lookup can complete alongside an invalid tool call.

## Setup
1. Import the workflow into the n8n project that will own the tables. In Vapi webhook, select a Header Auth credential with Name X-Vapi-Secret and a random secret as Value. Keep the secret in the credential. Execute Set up demo tables. Confirm that the orders table contains the two demo rows. Publish/activate the workflow and copy the Webhook Production URL, ending in /webhook/vapi-order-support.
2. In Vapi, open Settings → Integrations → Server Configuration and add a Custom Credential. Choose Bearer Token, set Header Name to X-Vapi-Secret, switch Include Bearer Prefix off, and enter the same secret. Save its credential ID.
3. Create two synchronous Function tools in Vapi. Name the first getOrderStatus and give it required string parameters orderId and email. Describe it as retrieving an order's fulfillment and tracking details after checking the checkout email. Name the second requestCallback and require orderId, email, phone, and reason, all strings. Describe it as recording a human callback after checking the order details. Use a caller-confirmed phone number with country code and a reason of 1–500 characters. For both tools, set server.url to your n8n Production URL and server.credentialId to the saved custom credential. Add the saved tools to your assistant. The tool server's default request timeout is 20 seconds.
4. Tell your assistant to ask for the order number and checkout email, use getOrderStatus to retrieve the recorded status, and ask the caller to recheck details after order_not_found. For a callback, confirm the number and reason, call requestCallback, then acknowledge the recorded request. Give callback timing from your own support policy. Try a Vapi web call using ORD-1001 and user@example.com, then ORD-1002 and user@example.com. Ask for a callback and inspect its pending row. Compare the Vapi call log's tool messages with the n8n execution. Attach your inbound phone route when you are ready to receive phone calls.

## Requirements
- Use n8n with native Data Tables and a publicly reachable HTTPS production webhook, plus a Vapi account and assistant for voice calls. The linked repository export passed 12/12 backend checks on n8n 2.41.7: fresh setup, repeated seeding, missing/wrong authentication, and nine stateful HTTP scenarios. Its recorded tests exercised the actual n8n HTTP server and persistent tables. Your connected Vapi call completes acceptance of speech, model tool choice, Vapi delivery, and spoken results.

## Customization
- For real orders, create a production Data Table with string columns orderId, email, status, carrier, trackingNumber, and estimatedDelivery. Import a CSV or sync from your order system; use stable order numbers and lowercase checkout emails. Choose that table in Find matching order and publish the change. Keep the demo setup on its demo tables. Connect the callback queue to your help desk or notification channel if your team needs one. Callback identity combines the Vapi call ID and tool-call ID. Sequential retries preserve the existing row, including the operator's status; changed details under the same key return an error. For concurrent duplicate deliveries, use storage with a unique requestKey constraint and an atomic insert/conflict operation.

## Additional info
Complete setup, ready-made Vapi tool definitions, HTTP fixtures, and recorded backend results: https://github.com/blucca/n8n-check/tree/main/examples/vapi-order-support . Built and tested by Blucca, an AI-led engineering practice. The workflow uses standard n8n nodes and is provided as a free, original template.

## 🔗 Nodes Used

Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
