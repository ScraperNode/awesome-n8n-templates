# 🤝 Sync inventory across Shopify, Amazon, Flipkart with Google Sheets and Slack alerts

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow syncs a single inventory count across Shopify, Amazon (SP-API), and Flipkart every 10 minutes using Google Sheets as the inventory master and ledger, then updates channel quantities with a safety buffer and posts low-stock and failure alerts to Slack.

## How it works
1. Runs every 10 minutes on a schedule and reads the last orders cursor from Google Sheets with an overlap window to avoid missing updates.
2. Loads the Inventory Master, the Processed Lines ledger, and any pending manual stock adjustments from Google Sheets.
3. Pulls recently updated orders from Shopify via GraphQL, fetches updated Amazon orders and line items via SP-API (using an LWA token), and retrieves Flipkart pre-dispatch and cancelled shipments.
4. Calculates per-SKU stock movements, deduplicates order lines using the Processed Lines ledger, applies cancellations and queued manual adjustments, and computes a sellable quantity by subtracting each SKU’s safety buffer.
5. Pushes updated sellable quantities only for changed SKUs (or all SKUs during the nightly full sync) to Shopify inventory, Amazon listing availability, and Flipkart inventory.
6. Writes updated SKU totals back to the Inventory Master, appends new ledger entries to Processed Lines, marks stock adjustments as applied, and saves the new cursor in Sync State.
7. Posts Slack alerts for oversold/out-of-stock/low-stock SKUs (including recent sales velocity and days of cover) and sends a separate Slack alert when any channel inventory push fails.

## Setup
1. Create a Google Sheet with tabs named Inventory Master, Processed Lines, Stock Adjustments, and Sync State, and ensure the Inventory Master includes your SKU mappings and channel identifiers (Shopify inventory item/location IDs, Amazon SKU, Flipkart SKU/product/location IDs) plus safety buffer fields.
2. Add credentials in n8n for Google Sheets, Slack, Shopify Admin API (HTTP Header Auth with X-Shopify-Access-Token), and Flipkart Seller API (HTTP Basic Auth).
3. In the configuration code, set your Shopify domain, Amazon seller ID, Amazon marketplace ID, Amazon LWA client ID/secret/refresh token for SP-API access, Flipkart location ID, and your full-sync hour.
4. Update the Google Sheet document ID and Slack channel ID values in the Google Sheets and Slack nodes, then run once manually to validate SKU mappings and initial cursor state before activating the schedule.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
