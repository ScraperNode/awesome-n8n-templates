# 🎬 Capture and draft content ideas from Telegram with Claude and Notion

> ⚡ **58 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works
- Send any idea as a text message to a Telegram bot
- Claude automatically decides the best content format (carousel, reel, or blog post)
- Claude writes 3 hooks for that format — problem, curiosity, and contrarian angles
- Each hook gets a full content draft
- Everything lands in a Notion database — tagged, formatted, and ready to use
- A Telegram confirmation is sent back with your hooks instantly

## Set up steps
- Create a Telegram bot via BotFather and connect it to n8n
- Add your Anthropic API key to the Claude node
- Duplicate the Notion database template (link in sticky note inside workflow)
- Connect your Notion account to n8n
- Activate the workflow and send your first idea

## 🔗 Nodes Used

Telegram, Telegram Trigger, Notion, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
