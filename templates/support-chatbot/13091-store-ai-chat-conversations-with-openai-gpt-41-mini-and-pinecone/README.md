# 💬 Store AI chat conversations with OpenAI GPT-4.1-mini and Pinecone

> ⚡ **9 views** · 💬 [Support Chatbots](../)

## Description

How it works

- Chat input triggers the workflow when a user sends a message.
- The primary AI Agent processes the incoming message using OpenAI's Chat Model to generate intelligent responses.
- Context is retrieved from an assistant service using the "Get context from Assistant" node to enhance response quality with relevant historical information.
- A secondary AI Agent handles database logging by formatting and sending chat data via POST request to your storage endpoint.
- The Edit Fields node structures the conversation data to match your database schema before storage.
- All conversations are automatically stored with proper formatting, timestamps, and metadata for future retrieval and analysis.

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
