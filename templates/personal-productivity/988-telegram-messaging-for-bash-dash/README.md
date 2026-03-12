# ⚡ Telegram messaging for bash-dash

> ⚡ **1,227 views** · ⚡ [Personal Productivity](../)

## Description

This workflow allows you to send a message in a Telegram chat via [bash-dash](https://github.com/n8n-io/bash-dash).

![workflow-screenshot](fileId:446)

**Example usage**: - telegram I'll be late

If you want to send a predefined message without typing it in the command line, you can replace the Text Expression in the Telegram node with a specific message. In this case, the dash command - telegram will send the predefined message to the chat.

**Example bash-dash config**: commands[telegram]="http://localhost:5678/webhook/telegram"

## 🔗 Nodes Used

Start, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
