# ⚙️ n8n workflow backup management with Dropbox and Airtable

> ⚡ **1,895 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow can be used to save all of your workflows in:
1. a raw state (as a json file in Dropbox)
2. an Airtable base, in a pre-designed format.

It runs periodically (currently, every 30 minutes) and either updates (if already existing in Airtable) or creates a new record in Airtable for each workflow.

Here's the Airtable base to give you an idea:

**[View Airtable base](https://airtable.com/shr9jexYomxygFSag)**

**Note: This workflows uses the "http://localhost:5678/rest" API which the UI editor uses but is still not officially supported. Hence, it may suffer breaking changes at some point in the future and the workflow might become dysfunctional then.**

## 🔗 Nodes Used

Airtable, Cron, Dropbox, Function, HTTP Request, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
