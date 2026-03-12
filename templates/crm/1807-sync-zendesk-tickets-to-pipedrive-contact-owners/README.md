# 🤝 Sync Zendesk tickets to Pipedrive contact owners

> ⚡ **1,098 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow syncs Zendesk tickets to Pipedrive contact owners. 

This workflow is triggered every day at 09:00 with Zendesk collecting all the tickets updated after the last execution timestamp and updating them according to Pipedrive contacts. It also adds Zendesk comments to the tickets as notes in Pipedrive. 

## Prerequisites
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)
- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/)

*Note: The Pipedrive and the Zendesk accounts need to be created by the same person / with the same email.*

## How it works
1. Cron node triggers the workflow every day at 09:00.
2. Zendesk node collects all the tickets updated after the last execution timestamp.
3. If node checks if the channel in the ticket is an email, and if so, it continues the workflow.
4. The Item Lists node removes duplicates to make search efficient.
5. Pipedrive node searches persons by email.
6. Set node renames and keeps only needed fields (email & person id)
7. Merge by key node adds the Pipedrive contact id to Zendesk tickets.
8. The HTTP Request node gets Zendesk comments for tickets and the Merge node adds them to tickets.
9. Split node adds nodes in batches with each iteration. 
11. Item list node splits comments into separate items.
12. Pipedrive node adds comment as notes.
13. If node checks if the data processing is done and if not, goes back to the Split node.
The Function Item node sets the new last execution timestamp.

## 🔗 Nodes Used

Cron, Function Item, HTTP Request, Pipedrive, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
