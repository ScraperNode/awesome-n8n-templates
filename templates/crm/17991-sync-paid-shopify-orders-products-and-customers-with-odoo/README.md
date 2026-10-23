# 🤝 Sync paid Shopify orders, products, and customers with Odoo

> ⚡ **44 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow triggers when a Shopify order is marked paid, then finds or creates matching products and the customer in Odoo and creates an Odoo sales order, with success notifications to Slack and Gmail and error alerts to a separate Slack channel.

## How it works
1. Triggers when Shopify sends an `orders/paid` event for a newly paid order.
2. Validates that the order payload contains at least one line item and a customer email, and routes malformed payloads to an error alert.
3. Splits the order into individual Shopify line items, searches Odoo for each product by SKU (default_code), and creates missing products in Odoo.
4. Aggregates the resolved Odoo product IDs, quantities, and unit prices back into a single list of order lines.
5. Searches Odoo for an existing customer (res.partner) by email and creates a new contact from Shopify customer and shipping details when no match is found.
6. Creates an Odoo sale order (sale.order) for the resolved customer using the aggregated order lines and the Shopify order reference.
7. Posts a success message to Slack and sends a confirmation email via Gmail, while any node-level errors are logged and sent to a dedicated Slack alerts channel.

## Setup
1. Connect your Shopify credentials and ensure the Shopify Trigger is configured to receive `orders/paid` events from your store.
2. Add Odoo API credentials and confirm your Odoo instance allows access to `product.product`, `res.partner`, and `sale.order` for search and create operations.
3. Add Slack credentials and set the target channel IDs for the success channel (#sales-ops) and the alerts channel (#sales-ops-alerts).
4. Add Gmail OAuth credentials and update the recipient address (currently `sales-ops@yourcompany.example`) for the confirmation email.
5. Verify your Shopify products have SKUs populated, since the workflow matches and creates Odoo products using the SKU as `default_code`.

## 🔗 Nodes Used

Slack, Shopify Trigger, Gmail, Odoo

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
