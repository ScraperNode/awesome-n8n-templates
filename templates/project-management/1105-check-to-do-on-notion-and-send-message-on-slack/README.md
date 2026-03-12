# 📋 Check To Do on Notion and send message on Slack

> ⚡ **3,400 views** · 📋 [Project Management](../)

## Description

This workflow allows you to check the To-Do list on Notion and send a message on Slack.

## Prerequisites
1. Create a Notion page similar to this [page](https://www.notion.so/n8n/To-Do-520ca3bdb6084098a4a80cfddd957488).
2. Create credentials for Notion by following the instructions mentioned in the [documentation](https://docs.n8n.io/credentials/notion/).
3. Follow the steps mentioned in the [documentation](https://docs.n8n.io/credentials/slack/) to create credentials for Slack.

**Cron node:** This node triggers the workflow every day.

**Notion node:** This node fetches all the tasks from Notion.

**IF node:** This node checks if the task is assigned to a particular user.

**Create a Direct Message:** This node will create a direct message channel with the user.

**Send a Direct Message:** This node will send the to-do lists in the direct message.

**NoOp:** This node is connected to the `false` output of the IF node. If the condition is false, no further action will be taken.

## 🔗 Nodes Used

Cron, Slack, Start, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
