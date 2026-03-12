# 🤝 Sync Shopify orders with your Zendesk contacts

> ⚡ **1,085 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow automatically syncs Shopify orders with your Zendesk contacts. Using this workflow, the Shopify email ID, phone number ID and order information will be added or updated to Zendesk contacts. 

## Prerequisites
- Shopify account and [Shopify credentials](https://docs.n8n.io/integrations/builtin/credentials/shopify/)
- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/) 

## How it works
1. Shopify Trigger starts the workflow whenever a customer`s data is updated.
2. Zendesk Node then searches the contact by email address.
3. Set node keeps only the UserId and email of the contact.
4. Merge by Key node combines the Shopify and Zendesk data.
5. If node splits the workflow conditionally, check if the contact already exists or not.
6. If the user exists, Zendesk node updates its contact data.
7. If the user does not exist, Zendesk node creates a new contact.

## 🔗 Nodes Used

Shopify Trigger, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
