# 🤝 Process store webhook orders with supplier, shipping, CRM and ERP APIs

> ⚡ **27 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives paid-order webhooks from an online store, verifies the request signature, checks supplier stock, and then routes the order through supplier purchasing, shipping label creation, customer email, CRM updates, and ERP inventory updates via HTTP APIs, with a scheduled low-stock digest.

## How it works
1. Receives a paid-order webhook request and captures the raw body for signature verification.
2. Verifies the webhook HMAC signature, normalizes the order (including SKU mapping), and de-duplicates repeat deliveries by order ID.
3. Checks availability with the supplier stock API and branches based on the in-stock result.
4. If in stock, creates a supplier purchase order, generates a shipping label with tracking, emails the customer, upserts the customer/order in the CRM, and updates inventory in the ERP.
5. If out of stock, tags the customer/order as BACKORDER in the CRM, emails the customer with the supplier lead time, and posts an operations alert.
6. Responds to the webhook with the fulfillment route (fulfilled/backorder) plus tracking or lead-time details, while duplicates are acknowledged without reprocessing.
7. Every six hours, reads ERP inventory, compiles a low-stock digest (≤5 units), and posts it to an operations alert channel.

## Setup
1. Set your API base URL in the Config nodes and replace the placeholder endpoints (supplier, shipping, CRM, ERP, messaging, alerts) with your real REST services or native n8n integrations.
2. Set the store webhook signing secret in the Config node and ensure your store sends the corresponding HMAC header (for Shopify, `x-shopify-hmac-sha256`).
3. Copy the Webhook URL into your store’s “order paid/created” webhook configuration and keep the webhook path consistent.
4. Update the SKU mapping JSON in Config (or ensure SKUs are provided in the webhook payload) so supplier and ERP requests use valid SKUs.
5. Configure your alert endpoints/channels (for example `#ops-backorders`, `#ops-inventory`, and `#ops-alerts`) in the alerts service used by the HTTP requests.

## Requirements
- n8n 1.100 or later, self-hosted or cloud
- Your store, supplier, carrier, CRM and ERP reachable over HTTPS (or their native n8n nodes)
- A signing secret from the store webhook (HMAC over the raw body)

## Customization
- Swap any HTTP Request node for the native node of your store, carrier, CRM or ERP
- Change the low stock threshold and the sync interval in the schedule branch
- Every business rule lives in one Code or Config node named for what it decides

## Additional info
Built and tested on sample data by Finamatik Business Solutions (Sharjah, UAE). Screens of a full run, including the backorder path and the six hourly sync, are at https://finamatik.com/work/order-to-fulfilment. Questions: hamza.jamal@finamatik.com

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
