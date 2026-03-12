# ⚡ Notify on Discord about new Epic Games free game releases

> ⚡ **3,401 views** · ⚡ [Personal Productivity](../)

## Description

# Description
Very straightforward workflow. It checks the Epic Games website if the HTML container with free games has changed. If it did then it will send a notification to Discord with a list of embeds containing those games.

# Requirements
- You will need to install `n8n-nodes-puppeteer` community node

# Setup
There are two nodes that notify Discord. One at the very end and one in the loop in case of error. Configure them with a webhook or a bot, whatever suits you. That's all.

## 🔗 Nodes Used

HTTP Request, Discord, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
