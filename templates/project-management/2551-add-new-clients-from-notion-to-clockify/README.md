# 📋 Add new clients from Notion to Clockify

> ⚡ **659 views** · 📋 [Project Management](../)

## Description

# Who is this template for?

This workflow template is ideal for anyone using Notion for project management and Clockify for time tracking. The workflow automatically adds all new clients from Notion to Clockify.

## How it works
1. Scans your Notion client table every minute for new clients
2. Adds all new clients to your Clockify workspace

## Set up Steps
1. Set up the Notion trigger node by adding your Notion API credentials as described in the [n8n Notion docs](https://docs.n8n.io/integrations/builtin/credentials/notion/).
2. Go to your Notion clients page/table and give your integration permission to acces the data on this page.  
3. Go back to n8n and select your Notion client page in the Notion trigger node.
3. Set up the Clockify node by adding your Clockify API credentials as described in the [n8n Clockify docs](https://docs.n8n.io/integrations/builtin/credentials/clockify/), select your Clockify workspace and map your client name column from Notion to the Clockify "Client Name" field.

## 🔗 Nodes Used

Clockify, Notion Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
