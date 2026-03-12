# 🤝 Automatically add customers from Pipedrive to Stripe

> ⚡ **1,086 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow automatically adds closed deals from Pipedrive as new customers into Stripe.

## Prerequisites
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/) 
- Stripe account and [Stripe credentials](https://docs.n8n.io/integrations/builtin/credentials/stripe/)

## How it works
1. Pipedrive trigger node starts the workflow when a deal gets updated in Pipedrive.
2. IF node checks that the current won time is not equal to the previuos one in the deal and continues the workflow if it's true.
3. Pipedrive node extracts the organization's details to pass it further.
4. HTTP Request node searches for the same organization's details within Stripe.
5. If a customer doesn't exist within Stripe, Merge node passes a new customer details to Stripe.
6. Stripe node creates a new customer.

## 🔗 Nodes Used

HTTP Request, Pipedrive, Pipedrive Trigger, Start, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
