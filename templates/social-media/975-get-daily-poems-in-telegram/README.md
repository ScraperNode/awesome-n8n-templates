# 📱 Get daily poems in Telegram

> ⚡ **1,113 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow posts a poem translated into English every day in a Telegram chat.

![workflow-screenshot](fileId:447)

**Cron node**: triggers the workflow every day at 10:00. You can change the time and interval based on your use case. 

**HTTP Request node**: makes an HTTP request to the Poemist API that returns a random poem.

**LingvaNex node**: translates the returned poems into English.

**Telegram node**: takes in the translated poem and posts it in the chat.

## 🔗 Nodes Used

Cron, HTTP Request, Start, Telegram, LingvaNex

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
