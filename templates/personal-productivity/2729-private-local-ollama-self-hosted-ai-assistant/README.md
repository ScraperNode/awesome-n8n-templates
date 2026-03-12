# ⚡ 🔐🦙🤖 Private & local Ollama self-hosted AI assistant

> ⚡ **62,453 views** · ⚡ [Personal Productivity](../)

## Description

Transform your local N8N instance into a powerful chat interface using any local & private Ollama model, with zero cloud dependencies ☁️. This workflow creates a structured chat experience that processes messages locally through a language model chain and returns formatted responses 💬.

## How it works 🔄
- 💭 Chat messages trigger the workflow
- 🧠 Messages are processed through Llama 3.2 via Ollama (or any other Ollama compatible model)
- 📊 Responses are formatted as structured JSON
- ⚡ Error handling ensures robust operation

## Set up steps 🛠️
- 📥 Install N8N and Ollama
- ⚙️ Download Ollama 3.2 model (or other model)
- 🔑 Configure Ollama API credentials
- ✨ Import and activate workflow

This template provides a foundation for building AI-powered chat applications while maintaining full control over your data and infrastructure 🚀.

## 🔗 Nodes Used

Basic LLM Chain, Ollama Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
