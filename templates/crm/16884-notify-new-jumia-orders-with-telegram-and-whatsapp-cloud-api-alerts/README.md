# 🤝 Notify new Jumia orders with Telegram and WhatsApp Cloud API alerts

> ⚡ **14 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow polls the Jumia Vendor API for recent orders, formats each new order into a readable alert, and sends notifications to both Telegram and WhatsApp, while tracking processed order IDs in an n8n Data Table to prevent duplicate messages.

## How it works
1. Runs manually or on a 5-minute schedule to start the order-check process.
2. Requests an access token from the Jumia Vendor API using a refresh token.
3. Fetches recent orders from the Jumia Vendor API and normalizes the order data into a consistent structure.
4. Checks an n8n Data Table to skip any orders that have already been processed.
5. Formats a detailed notification message containing order, customer, totals, and shipping information.
6. Sends the notification to a Telegram chat and then sends the same message via the WhatsApp Cloud API.
7. Inserts the order ID and metadata into the n8n Data Table to mark the order as processed.

## Setup
1. Provide your Jumia Vendor API values (client_id, refresh_token, and seller ID) in the HTTP request and normalization steps.
2. Create an n8n Data Table named `jumia_processed_orders` with columns seller_id, marketplace, order_id, status, first_seen, notified_at, and raw_payload.
3. Add Telegram credentials and set your target Telegram chat ID.
4. Add WhatsApp Cloud API (Meta) credentials and set your phone number ID and recipient WhatsApp number.
5. Test with the Manual Trigger, then enable the 5-minute schedule trigger (and adjust the interval if needed).

## 🔗 Nodes Used

HTTP Request, Telegram, WhatsApp Business Cloud, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
