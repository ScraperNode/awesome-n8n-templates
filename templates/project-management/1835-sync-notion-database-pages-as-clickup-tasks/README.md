# 📋 Sync Notion database pages as ClickUp tasks

> ⚡ **3,051 views** · 📋 [Project Management](../)

## Description

This workflow creates/updates ClickUp tasks when Notion database pages are created/updated. All fields in the Notion database are mapped to a ClickUp property.

Notion database will require setup before the workflow can be used. See the list of fields available in the setup below.

# Prerequisites

- Notion account and [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion/).
- ClickUp account and [ClickUp credentials](https://docs.n8n.io/integrations/builtin/credentials/clickup/).

# How it works

1. When a new database page is created in Notion, the workflow creates a new task in ClickUp with all required fields.
2. The new ClickUp task's ID is saved in the Notion database page's "ClickUp ID" field.
3. Then, when the database page is updated in Notion, the workflow updates the specific ClickUp task identified by the "ClickUp ID" field in Notion.

# Setup

This workflow requires that you set up a Notion database. To do so, follow the steps below:

1. In Notion, create a new database.
2. Add the following columns to the database:
    - Task name (renamed from "Name")
    - Status (with type "Select" with the following options: "to do", "in progress", "review", "revision", "complete")
    - Deadline (with type "Date")
    - ClickUp ID (with type "Text")
    - Add any other fields you require.
3. Share the database to n8n.
4. By default, the workflow will fill all the fields provided above, except for any other additional fields you add.

## 🔗 Nodes Used

ClickUp, ClickUp Trigger, Notion, Notion Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
