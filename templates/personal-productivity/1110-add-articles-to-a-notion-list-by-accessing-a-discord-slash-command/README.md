# ⚡ Add articles to a Notion list by accessing a Discord slash command

> ⚡ **2,142 views** · ⚡ [Personal Productivity](../)

## Description

This workflow allows you to add articles to a Notion reading list by accessing a Discord slash command.

## Prerequisites

- A Notion account and [credentials](), and a reading list similar to this [template](https://www.notion.so/n8n/Reading-List-9d64210e9fca411893ab79c302ccbeb9).
- A Discord account and [credentials](), and [Discord Slash Command
](https://youtube.com/playlist?list=PL1IyzCekgLc1hkHdiIRmLJ-SexoPpL1fd) connected to n8n.

## Nodes

- [Webhook node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) triggers the workflow whenever the Discord Slash command is issued.
- [IF node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) checks the type returned by Discord. If the type is not equal to 1, it will return true, otherwise false.
- [HTTP Request node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.httpRequest/) makes an HTTP call to the link and gets the HTML of the webpage.
- [HTML Extract node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.htmlExtract/) extracts the title from the HTML which we will use in the next node.
- [Notion node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.notion/) adds the link to your Notion reading list.
- [Set nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) set the reply values for Discord and register the Interaction Endpoint URL.

## 🔗 Nodes Used

HTTP Request, Webhook, HTML Extract, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
