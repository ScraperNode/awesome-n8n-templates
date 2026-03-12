# 💬 Multi-department support bot with slash commands, Pinecone & Telegram

> ⚡ **703 views** · 💬 [Support Chatbots](../)

## Description

## My Telegram bot provides specialized support through dedicated slash commands for different departments. Users can directly access the right support team using:

- /billing - For payment and invoice questions
- /tech-support - For technical assistance
- /return-policy - For returns and refunds

## **Key Features:**

- Command-based routing 
- Direct department access via slash commands
## State management 
- Tracks active conversations in PostgreSQL
## Knowledge base integration 
- Pinecone vector stores for each department
## Auto-updating 
- New Google Drive documents automatically populate the knowledge base 
- Context-aware 
- Maintains department choice

## 🔗 Nodes Used

Postgres, Telegram, Telegram Trigger, Google Drive, Google Drive Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
