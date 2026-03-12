# 🤝 Sync Shopify customers to your HubSpot contacts

> ⚡ **1,198 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow syncs Shopify customers to your HubSpot account as contacts. Whenever somebody makes a purchase on Shopify, it automatically adds them as a new customer to your Hubspot account if the customer doesn’t exist yet.

Also, this workflow creates or updates contacts from new paid orders on Shopify by adding the amount and order close date of the deal.

## Prerequisites
- Shopify account and [Shopify credentials](https://docs.n8n.io/integrations/builtin/credentials/shopify/)
- HubSpot account and [HubSpot credentials](https://docs.n8n.io/integrations/builtin/credentials/hubspot/)

## How it works
1. Shopify trigger starts the workflow whenever an order is updated.
2. HubSpot node creates or updates the contact who made the order update.
3. Set node sorts and passes only the userid.
4. Merge node merges data of both inputs, the order and the customer.
5. Hubspot node looks up if the order already exists.
6. If node splits the workflow conditionally, based on data received.
7. If the order is new, the new deal is created in the Hubspot node.

## 🔗 Nodes Used

HubSpot, Shopify Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
