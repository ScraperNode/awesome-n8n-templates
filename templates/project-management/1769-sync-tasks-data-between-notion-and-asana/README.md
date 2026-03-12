# 📋 Sync tasks data between Notion and Asana

> ⚡ **6,901 views** · 📋 [Project Management](../)

## Description

This workflow syncs data between Notion and Asana whenever a new task or an update is done in one of the apps.

## Prerequisites
- Asana account and [Asana credentials](https://docs.n8n.io/integrations/builtin/credentials/asana/)
- Notion account and [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion/)

## How it works

1. Go to Asana account.
2. Create a new task in Asana.
3. Notice a new task created in Notion account.
4. Update the task in Asana.
5. Notice the task is updated in Notion.

## 🔗 Nodes Used

Asana, Asana Trigger, Function, Start, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
