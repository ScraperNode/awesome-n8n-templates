# 🤝 Sync Stripe charges to HubSpot contacts

> ⚡ **1,888 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow pushes Stripe charges to HubSpot contacts. It uses the Stripe API to get all charges and the HubSpot API to update the contacts. The workflow will create a new HubSpot property to store the total amount charged. If the property already exists, it will update the property.

## Prerequisites

- [Stripe credentials](https://docs.n8n.io/integrations/builtin/credentials/stripe/).
- [HubSpot credentials](https://docs.n8n.io/integrations/builtin/credentials/hubspot/).

## How it works

1. On a schedule, check if the property exists in HubSpot. If it doesn't exist, create it. The default schedule is once a day at midnight.
2. Once property is acertained, the first Stripe node gets all charges.
3. Once the charges are returned, the second Stripe node gets extra customer information.
4. Once the customer information is returned, `Merge data` node will merge the customer information with the charges so that the next node `Aggregate totals` can calculate the total amount charged per contact.
5. Once we have the total amount charged per contact, the `Create or update customer` node will create a new HubSpot contact if it doesn't exist or update the contact if it does exist with the total amount charged.

## 🔗 Nodes Used

HTTP Request, HubSpot, Stripe, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
