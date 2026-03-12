# 🤝 Sync products between Airtable and Shopify with inventory management

> ⚡ **532 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Create Products in Shopify from Airtable

This workflow creates products in your Shopify store from Airtable. It also enables inventory tracking and sets the quantity of an inventory item at your store's default location. 

This is a great way to keep shopify in sync with Airtable if Airtable is your primary source of data, Only records with the 'sync' column set to true are sync'd. Setup Airtable Automations so that if any records are created or updated then this flag is set to true.

Records are matched using the 'slug' column which Shopify calls a handle.
 
### Airtable Setup Notes

The Airtable products table has the following columns
title - free text
description - free text
company - free text
type - free text
status - ACTIVE, DRAFT or ARCHIVE
slug - used in the product url, text with no spaces, can also use hyphen.
price - sale price of the products
compare_at_price - compare at price for products
sku - unique code for each product
stock_on_hand - quantity of this item available for purchase.
sync - boolean, set to true to sync this record.

### Update GraphQL nodes with your Shopify store URL

1) Replace the URL in all GraphQL nodes with the URL for your Shopify store. 
2) All GraphQL requests all use the Shopify 2025-04 GraphQL Admin API.

## 🔗 Nodes Used

Airtable, GraphQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
