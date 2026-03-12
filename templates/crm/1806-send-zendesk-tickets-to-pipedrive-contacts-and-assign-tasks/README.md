# 🤝 Send Zendesk tickets to Pipedrive contacts and assign tasks

> ⚡ **1,113 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow automatically sends Zendesk tickets to Pipedrive contacts and makes them task assignees. The automation is triggered every 5 minutes, with Zendesk checking and collecting new tickets which are then individually assigned to a Pipedrive contact.

## Prerequisites
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)
- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/)

*Note: The Pipedrive and the Zendesk accounts need to be created by the same person / with the same email.*

## How it works
1. Cron node triggers the workflow every 5 minutes.
2. Zendesk node collects all the tickets received after the last execution timestamp.
3. Set node passes only the requester`s email and ID further to the Merge node.
4. Merge by key node merges both inputs together, the tickets and their contact emails.
5. Pipedrive node then searches for the requester.
6. HTTP Request node gets owner information of Pipedrive contact.
7. Set nodes keep only the requester owner's email and the agent`s email and id.
8. Merge by key node merges the information and adds the contact owner to ticket data.
9. Zendesk node changes the assignee to the Pipedrive contact owner or adds a note if the requester is not found.
10. The Function Item node sets the new last execution timestamp.

## 🔗 Nodes Used

Cron, Function Item, HTTP Request, Pipedrive, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
