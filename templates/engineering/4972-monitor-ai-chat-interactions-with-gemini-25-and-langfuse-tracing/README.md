# ⚒️ Monitor AI chat interactions with Gemini 2.5 and Langfuse tracing

> ⚡ **1,279 views** · ⚒️ [Engineering](../)

## Description

This workflow contains community nodes that are only compatible with the self-hosted version of n8n.

# How it works

This workflow is a simple AI Agent that connects to Langfuse so send tracing data to help monitor LLM interactions.

The main idea is to create a custom LLM model that allows the configuration of callbacks, which are used by langchain to connect applications such Langfuse.

This is achieves by using the "langchain code" node:
- Connects a LLM model sub-node to obtain the model variables (model name, temp and provider) - Creates a generic langchain initChatModel with the model parameters.
- Return the LLM to be used by the AI Agent node.


## 📋 Prerequisites
- Langfuse instance (cloud or self-hosted) with API credentials
- LLM API key (Gemini, OpenAI, Anthropic, etc.)
- n8n &gt;= 1.98.0 (required for LangChain code node support in AI Agent)

## ⚙️ Setup

1. Add these to your n8n instance:
```bash
# Langfuse configuration
LANGFUSE_SECRET_KEY=your_secret_key
LANGFUSE_PUBLIC_KEY=your_public_key
LANGFUSE_BASEURL=https://cloud.langfuse.com  # or your self-hosted URL

# LLM API key (example for Gemini)
GOOGLE_API_KEY=your_api_key
```

Alternative: Configure these directly in the LangChain code node if you prefer not to use environment variables

2. Import the workflow JSON

3. Connect your preferred LLM model node

4. Send a test message to verify tracing appears in Langfuse

## 🔗 Nodes Used

AI Agent, LangChain Code, Simple Memory, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
