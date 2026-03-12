# 📋 Update time-tracking projects based on Syncro status changes

> ⚡ **1,192 views** · 📋 [Project Management](../)

## Description

This workflow is part of an MSP collection, which is publicly available on [GitHub](https://github.com/bionemesis/n8nsyncro).

This workflow archives or unarchives a Clockify projects, depending on a Syncro status. Note that Syncro should be setup with a webhook via 'Notification Set for Ticket - Status was changed'. It doesn't handle merging of tickets, as Syncro doesn't support a 'Notification Set' for merged tickets, so you should change a ticket to 'Resolved' first before merging it.

## Prerequisites

- A Clockify account and [credentials](https://docs.n8n.io/integrations/credentials/clockify/)

## Nodes

- [Webhook node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) triggers the workflow.
- [IF node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) filters projects that don't have the status 'Resolved'.
- [Clockify nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.clockify/) get all projects that (don't) have the status 'Resolved', based on the IF route.
- [HTTP Request nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.httprequest/) unarchives unresolved projects, and archives resolved projects, respectively.

## 🔗 Nodes Used

HTTP Request, Start, Webhook, Clockify

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
