# 🤝 Sync Zendesk tickets to your HubSpot contacts

> ⚡ **1,115 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow automatically syncs your Zendesk tickets to your HubSpot contacts. Every 5 minutes, your HubSpot account collects all the newly modified data and updates it into your Zendesk account, updating the current tickets or creating new ones. 

## Prerequisites
- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/) 
- HubSpot account and [HubSpot credentials](https://docs.n8n.io/integrations/builtin/credentials/hubspot/) 

## How it works
1. Cron node triggers the workflow every 5 minutes.
2. Function Item node collects all the tickets received after the last execution timestamp.
3. HubSpot node collects all the recently modified companies.
4. Zendesk node checks all the Zendesk tickets associated with those companies.
5. Merge by key node merges the Zendesk and Hubspot data related to those companies.
6. If node splits the workflow conditionally, based on data received.
7. If the company already exists in, Zendesk node updates organization’sdata.
8. If the company does not exist yet, Zendesk node will create an organization.
9. The Function Item node sets the new last execution timestamp.

## 🔗 Nodes Used

Cron, Function Item, HubSpot, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
