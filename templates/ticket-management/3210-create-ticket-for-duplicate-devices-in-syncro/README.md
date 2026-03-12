# 🎫 Create ticket for duplicate devices in Syncro

> ⚡ **57 views** · 🎫 [Ticket Management & Triage](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

Using the serial number for assets, this workflow will create a ticket with the subject "Found duplicate Serial Numbers" with a list of all of the duplicate assets for a technician to review and merge.

Duplicate assets causes incorrect billing (if customers are billed based on asset counts), and additional overhead when reviewing the history of assets when that history is spread across multiple instances.

*Note: Due to limitations of the Syncro API, automatically merging duplicate assets is not possible.*

## How it works:
* Get a list of all assets in Syncro and summarize the list based on the Customer ID, Asset Type, and Asset Serial
* Create a new ticket listing all of the duplicate assets

## Set up steps:
* Install the [Syncro RMM community node](https://www.npmjs.com/package/n8n-nodes-syncrormm)
* Connect a Syncro RMM account*
* Open the "Create a ticket" node and update the customer ID

**See [Syncro RMM Community Node documentation](https://www.npmjs.com/package/n8n-nodes-syncrormm#credentials) for details about how to get a Syncro API key and what permissions the Syncro API key needs*

## 🔗 Nodes Used

Schedule Trigger, Filter, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
