# 🤝 Upsert and merchandise Medusa products from a PIM via webhook and Admin API

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives a product-launch webhook from a PIM, upserts the product in Medusa by handle, assigns it to a category and collection, publishes it to a sales channel, and returns a JSON response describing the action taken.

## How it works
1. Receives a POST webhook request containing product details, pricing, and destination merchandising IDs.
2. Validates and normalizes required fields (including handle, SKU, currency, amount, category, collection, and sales channel).
3. Searches Medusa for an existing product with the same handle.
4. Updates the existing Medusa product’s core fields if found, or creates a new Medusa product with an initial priced variant if not.
5. Adds the product to the specified Medusa product category and product collection, then publishes it to the specified Medusa sales channel.
6. Returns a JSON response indicating whether the product was created or updated along with the product and destination IDs.

## Setup
1. Install the community node package `@blackswampai/n8n-nodes-medusa` and create a Medusa Admin API credential in n8n.
2. Ensure your source system (PIM) can POST to the webhook and include the required fields, especially `handle` plus `category_id`, `collection_id`, and `sales_channel_id` from your Medusa store.
3. Copy the webhook URL from n8n and configure it in your PIM’s outbound webhook settings.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
