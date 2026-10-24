# 🤝 Sync multi-location inventory to Medusa from any WMS or ERP

> ⚡ **6 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow receives a stock feed via webhook, validates and expands SKU rows, then syncs per-location inventory levels to Medusa by matching inventory items by SKU and returning a JSON report of synced and missing items.

## How it works
1. Receives a POST webhook request containing a `stock_location_id` and an `items` array of SKUs and quantities.
2. Validates the payload and converts each item into a normalized row with `sku`, `stocked_quantity`, and `stock_location_id`.
3. For each row, queries Medusa for an inventory item that matches the SKU.
4. If a matching Medusa inventory item exists, sets the absolute inventory level for that item at the provided stock location in Medusa.
5. If no matching inventory item exists, records a `not_found` result for the SKU without creating any new inventory records.
6. Aggregates all row results into a sync report and responds to the webhook with HTTP 200 when all items sync, or HTTP 207 when some SKUs are missing.

## Setup
1. Configure Medusa credentials in n8n for the Medusa nodes (Medusa backend URL and an API token/secret).
2. Copy the production webhook URL for the “medusa-inventory-sync” endpoint and configure your WMS/ERP to POST stock updates to it.
3. Ensure your sender posts `stock_location_id` and an `items` array with `sku` and non-negative integer `stocked_quantity` values.
4. Verify the target Medusa store already contains Inventory Items for every SKU you plan to send and that the referenced stock location IDs exist.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
