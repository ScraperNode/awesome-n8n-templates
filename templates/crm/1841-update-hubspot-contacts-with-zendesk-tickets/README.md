# 🤝 Update HubSpot contacts with Zendesk tickets

> ⚡ **1,163 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow automatically syncs your Zendesk tickets to your HubSpot contacts. Every 5 minutes, your Zendesk account collects all the new or updated tickets and syncs them accordingly, with your HubSpot contacts database. 

## Prerequisites
- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/)
- HubSpot account and [HubSpot credentials](https://docs.n8n.io/integrations/builtin/credentials/hubspot/)

## How it works
1. Cron node triggers the workflow every 5 minutes.
2. Function Item node checks all the tickets received after the last execution timestamp.
3. Zendesk node collects all tickets updated after last execution.
4. Zendesk node collects the user data of ticket requester.
5. Set node collects the contact`s email, name and externalID.
6. Merge by key node combines two inputs, ticket data and ticket requester data.
7. If node splits the workflow conditionally, based on data received.
8. If the data corresponds to a ticket that already exists, HubSpot node will update the ticket.
9. If the data does not correspond to a ticket, HubSpot node creates/updates the contact.
10. Zendesk node updates the external Id in Zendesk for the said contact.
11. HubSpot node creates a new ticket.
12. Zendesk node updates the ticket with the external Id.
13. The Function Item node sets the new last execution timestamp.

## 🔗 Nodes Used

Cron, Function Item, HubSpot, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
