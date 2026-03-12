# 📁 Send Google Drive files to Notion database

> ⚡ **3,918 views** · 📁 [File Management](../)

## Description

This workflow sends a file to a Notion database of your choosing when a new file is created in a specific Google Drive folder.

## Prerequisites

- Notion account and [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion/).
- Google account and [Google credentials](https://docs.n8n.io/integrations/builtin/credentials/github/).
- Google Drive folder to monitor for new files.

## How it works

When a Google Drive file is created in the folder you specified, the workflow sends the file to the Notion database you created. The workflow uses the `On file upload` node to trigger the workflow when a new file is created in the folder. The `Create database page` node creates a new page in the Notion database you created.

## Setup

1. Create a Notion database called "My Google Drive Files" with the following columns:
    - Filename
    - Google Drive File
2. Share the database to n8n.
3. In the n8n workflow, click on the `Create database page` node and select the database you created in step 1.
4. In Google Drive, create a folder and navigate to it.
5. Copy the URL of the Google Drive folder you are currently in.
6. In the n8n workflow, add the folder URL to `On file upload` node.

## 🔗 Nodes Used

Notion, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
