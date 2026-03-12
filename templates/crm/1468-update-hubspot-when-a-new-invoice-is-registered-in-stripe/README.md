# 🤝 Update HubSpot when a new invoice is registered in Stripe

> ⚡ **6,410 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow automatically posts a message in Slack when a new invoice is uploaded in Stripe, and it updates the fields in the HubSpot CRM.

## Prerequisites

- A Slack account and [credentials](https://docs.n8n.io/integrations/credentials/slack/)
- A HubSpot account and [credentials](https://docs.n8n.io/integrations/credentials/hubspot/)
- A Stripe account and [credentials](https://docs.n8n.io/integrations/credentials/stripe/)

## Nodes

- [Stripe Trigger node](https://docs.n8n.io/integrations/trigger-nodes/n8n-nodes-base.stripetrigger/) triggers the workflow when a new invoice is uploaded.
- [IF nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) filter the invoices that don't have a PO number and if there is no deal for the PO.
- [HubSpot nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.hubspot/) retrieve deals with the specific PO number and update the deal status to 'paid'.
- [Slack nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.slack/) post messages about the deals in a Slack channel.

## 🔗 Nodes Used

Slack, Start, Stripe Trigger, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
