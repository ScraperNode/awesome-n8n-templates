# 📖 Chat with a database using AI

> ⚡ **252,885 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This workflow allows you to ask questions about data stored in a database using AI.

To use it, you'll need an OpenAI API key (although you could also swap in a model from another service).

Supported databases:
- Postgres
- MySQL
- SQLite

The workflow uses n8n's embedded chat, but you could also modify it to work with a chat service such as Slack, MS Teams or WhatsApp.

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
