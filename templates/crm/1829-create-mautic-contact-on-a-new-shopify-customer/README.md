# 🤝 Create Mautic contact on a new Shopify customer

> ⚡ **1,101 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow creates a new contact in Mautic when a new customer is created in Shopify. By default, the workflow will fill the first name, last name, and email address. You can add any other fields you require.

# Prerequisites

- Shopify account and [Shopify credentials](https://docs.n8n.io/integrations/builtin/credentials/shopify/).
- Mautic account and [Mautic credentials](https://docs.n8n.io/integrations/builtin/credentials/mautic/).

# How it works

1. Triggers on a new customer in Shopify.
2. Sends the required data to Mautic to create a new contact.

## 🔗 Nodes Used

Shopify Trigger, Mautic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
