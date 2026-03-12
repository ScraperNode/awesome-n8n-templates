# 🤝 Add new products to Stripe when product added to Pipedrive

> ⚡ **1,127 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow adds a new product in Stripe whenever a new product has been added to Pipedrive.

## Prerequisites

- Stripe account and [Stripe credentials](https://docs.n8n.io/integrations/builtin/credentials/stripe/)
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/) 

## How it works
1. Pipedrive trigger node starts the workflow when a new product is added.
2. HTTP Request node creates a new product in Stripe using previuos input.
3. Merge node combines data of both Pipedrive and Stripe inputs. The output will contain the data of Pipedrive input merged with the data of Stripe input. The merge occurs based on the index of the items.
4. The Item Lists node splits prices to separate items.
5. HTTP Request node creates price records in Stripe.

## 🔗 Nodes Used

Function Item, HTTP Request, Pipedrive Trigger, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
