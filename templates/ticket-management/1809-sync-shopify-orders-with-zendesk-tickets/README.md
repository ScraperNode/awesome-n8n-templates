# 🎫 Sync Shopify orders with Zendesk tickets

> ⚡ **1,431 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow automatically syncs Shopify orders with your Zendesk tickets. Using this workflow, Shopify orders will be added or have their information updated straight to your Zendesk tickets. 

## Prerequisites
- Shopify account and [Shopify credentials](https://docs.n8n.io/integrations/builtin/credentials/shopify/)
- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/)

## How it works
1. Shopify Trigger starts the workflow whenever an order is updated.
2. Zendesk node finds if the order already exists and has a ticket assigned.
3. Set node keeps and passes only ticket ID.
4. Merge by Key node combines the Shopify order data with the Zendesk ticket data.
5. If node splits the workflow conditionally, checks if the ticket already exists or not.
6. If order is new, Zendesk node creates a new ticket for the order.

## 🔗 Nodes Used

Shopify Trigger, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
