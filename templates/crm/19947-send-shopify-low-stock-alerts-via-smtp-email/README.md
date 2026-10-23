# 🤝 Send Shopify low stock alerts via SMTP email

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs on a schedule to pull your full Shopify product catalog, identify variants whose inventory is below a configurable threshold, and send an HTML low-stock alert email via SMTP.

## How it works
1. Runs every 12 hours on a scheduled trigger.
2. Sets the low-stock threshold, store name, and notification recipient email.
3. Fetches all products from Shopify with pagination and extracts each product variant’s SKU and inventory quantity.
4. Filters the variants to keep only those with inventory below the configured threshold and aggregates them into a single summary.
5. If at least one low-stock item exists, builds an HTML table and sends the alert email via SMTP; otherwise, the workflow ends with no action.

## Setup
1. Add Shopify API credentials with permission to read products and select them in the Shopify node.
2. Add SMTP credentials for your mail server and set the sender address used for the alert email.
3. Update the low-stock threshold, recipient email address, schedule frequency, and (optionally) the store name in the workflow’s configuration fields.

## 🔗 Nodes Used

Send Email, Shopify, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
