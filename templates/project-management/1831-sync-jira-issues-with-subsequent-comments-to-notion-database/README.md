# 📋 Sync Jira issues with subsequent comments to Notion database

> ⚡ **5,454 views** · 📋 [Project Management](../)

## Description

This workflow creates/updates/deletes a Notion database page when an issue is created/updated/deleted in Jira. Subsequent updates to the issue's title or status in Jira are updated in the Notion database. If you require more fields to send to Notion, this template is easily extendible which will be described in [setup](notion://www.notion.so/n8n/a1b8c2bc7d2b4aa3b90d50fa80b766d1?v=a3106a73c9fc41b88630cc9f091cf063&p=34c3b4a9a1824323b8ee0b16a0c4cead&pm=s#setup). The Notion database will require [setup](notion://www.notion.so/n8n/a1b8c2bc7d2b4aa3b90d50fa80b766d1?v=a3106a73c9fc41b88630cc9f091cf063&p=34c3b4a9a1824323b8ee0b16a0c4cead&pm=s#setup) before the workflow can be used.

## Prerequisites

- Notion account and [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion/).
- Jira account and [Jira credentials](https://docs.n8n.io/integrations/builtin/credentials/jira/).

## How it works

1. When a new issue is created in Jira, the workflow creates a new page in the Notion database will all the required fields.
2. When the issue's title or status is updated in Jira, the workflow updates the specific Notion database page identified by the "Issue Key" field in Notion. If the status in Jira is set to "Done", the workflow will mark the Notion database page "Done" field as true.
3. When the issue is deleted in Jira, the workflow archives the Notion database page.

## Setup

This workflow requires that you set up a Notion database. To do so, follow the steps below:

1. In Notion, create a new database.
2. Add the following columns to the database:
    - Done (with type "Checkbox")
    - Title (renamed from "Name")
    - Status (with the following options: "To Do", "In Progress", "Done")
    - Link (with type "URL")
    - Issue ID (with type "Number")
    - Issue Key (with type "Text")
    - Add any other fields you require to the database.
3. Your database should look something like this
    
  ![Screenshot 20221202 at 12.51.52.png](fileId:688)
    
4. Share the database to n8n.
5. By default, the workflow will fill all the fields provided above, except for any other additional fields you add.

## 🔗 Nodes Used

Function, Jira Trigger, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
