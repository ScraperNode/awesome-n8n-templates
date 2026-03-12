# 🎬 Render custom text over images

> ⚡ **1,969 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow gets triggered every Friday at 6 PM with the help of a Cron node. It pulls in data about a random cocktail via the HTTP Request Node and sends the data to a Bannerbear node to create an image based on a template. The image is then finally shared on a specified Rocket.Chat channel.

## 🔗 Nodes Used

Cron, HTTP Request, RocketChat, Bannerbear

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
