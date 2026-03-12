# 🤝 Sync payment and customer data between Stripe and Pipedrive

> ⚡ **1,921 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow combines customers' details with their payment data and passes the input to Pipedrive as a note to the organization.

## Prerequisites

- Stripe account and [Stripe credentials](https://docs.n8n.io/integrations/builtin/credentials/stripe/)
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)

## How it works
1. Cron node triggers the workflow every day at 8 a.m.
2. HTTP Request node searches for payments in Stripe.
3. The Item Lists node creates separate items from a list of payment data.
4. Merge node takes in the payment data as an input 1.
5. Stripe node gets all the customers data.
6. Set node renames customer-related data fields and keeps only needed fields.
7. Merge node takes in the customer data as an input 2.
8. Merge node combines the payment data with the customers one.
9. Pipedrive node searches for the organization and creates a note with payment data.

## 🔗 Nodes Used

Cron, Function Item, HTTP Request, Pipedrive, Start, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
