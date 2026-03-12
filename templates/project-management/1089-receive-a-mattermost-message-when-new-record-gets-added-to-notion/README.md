# 📋 Receive a Mattermost message when new record gets added to Notion

> ⚡ **1,146 views** · 📋 [Project Management](../)

## Description

This workflow allows you to receive a Mattermost message when meeting notes get added to the Notion.

## Prerequisites
1. Create a table in Notion similar to this: [Meeting Notes](https://www.notion.so/n8n/00df263161a04ad79f33d82efb3bb996?v=092a631c982c4b74a8ddb1865f8a1b54)
2. Follow the steps mentioned in the [documentation](https://docs.n8n.io/credentials/notion/), to create credentials for the Notion Trigger node.
3. Create create [credentials](https://docs.n8n.io/credentials/mattermost/) for Mattermost.

![workflow-screenshot](fileId:499)

**Notion Trigger:** The Notion Trigger node will trigger the workflow when new data gets added to Notion.

**IF node:** This node will check if the notes belong to the team `Marketing`. If the team is `Marketing` the node will `true`, otherwise `false`.

**Mattermost node:** This node will send a message about the new data in the channel 'Marketing' in Mattermost. If you have a different channel, use that instead. You can even replace the Mattermost node with nodes of other messaging platforms, like Slack, Telegram, Discord, etc.

**NoOp node:** Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow.

## 🔗 Nodes Used

Mattermost, Notion Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
