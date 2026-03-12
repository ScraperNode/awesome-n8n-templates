# 🤝 Bulk create Shopify products with inventory management from Google Sheets

> ⚡ **3,958 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Create Products in Shopify from a Google Sheet

This workflow creates products in your Shopify store from a google sheet. It also enables inventory tracking and sets the quantity of an inventory item at your store's default location. 

This is a great way to get test data into test or staging stores to try out apps, update templates or try out new designs. 

This Automation will only import new products. It will skip existing products if the slug matches an existing product's handle (Shopify's term for a slug).
 
### Setup Notes

The Google Sheet has the following columns :
title - free text
description - free text
company - free text
category - free text
status - ACTIVE, DRAFT or ARCHIVE
slug - used in the product url, text with no spaces, can also use hyphen.
price - sale price of the products
compare_at_price - compare at price for products
sku - unique code for each product
stock_on_hand - quantity of this item available for purchase.

Use those labels in the first row of your sheet and N8N will create one object per row with the column names as object fields. 

### Update GraphQL nodes with your Shopify store URL

1) Replace the URL in all GraphQL nodes with the URL for your Shopify store. 
2) These GraphQL requests all use the Shopify 2025-04 GraphQL Admin API. 


This flow is updated to use Airtable at [Sync Products between Airtable and Shopify with Inventory Management](https://n8n.io/workflows/7468-sync-products-between-airtable-and-shopify-with-inventory-management/)

## 🔗 Nodes Used

Google Sheets, GraphQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
