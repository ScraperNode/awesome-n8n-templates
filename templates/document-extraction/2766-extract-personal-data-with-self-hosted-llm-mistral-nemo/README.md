# 🔬 Extract personal data with self-hosted LLM Mistral NeMo

> ⚡ **6,049 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow shows how to use a self-hosted Large Language Model (LLM) with n8n's LangChain integration to extract personal information from user input. This is particularly useful for enterprise environments where data privacy is crucial, as it allows sensitive information to be processed locally.

📖 For a detailed explanation and more insights on using open-source LLMs with n8n, take a look at our [comprehensive guide on open-source LLMs](https://blog.n8n.io/open-source-llm/).

## 🔑 Key Features

1. **Local LLM**
   - Connect Ollama to run Mistral NeMo LLM locally
   - Provide a foundation for compliant data processing, keeping sensitive information on-premises

2. **Data extraction**
   - Convert unstructured text to a consistent JSON format
   - Adjust the JSON schema to meet your specific data extraction needs.

3. **Error handling**
   - Implement auto-fixing for LLM outputs
   - Include error output for further processing

## ⚙️ Setup and сonfiguration

### Prerequisites

- [n8n AI Starter Kit](https://docs.n8n.io/hosting/starter-kits/ai-starter-kit/) installed

### Configuration steps

1. Add the **Basic LLM Chain** node with system prompts.
2. Set up the **Ollama Chat Model** with optimized parameters.
3. Define the JSON schema in the **Structured Output Parser** node.

🔍 Further resources
--------------------

- [Run LLMs locally with n8n](https://blog.n8n.io/local-llm/)
- [Video tutorial on using local AI with n8n](https://www.youtube.com/watch?v=xz_X2N-hPg0)

Apply the power of self-hosted LLMs in your n8n workflows while maintaining control over your data processing pipeline!

## 🔗 Nodes Used

Basic LLM Chain, Ollama Chat Model, Auto-fixing Output Parser, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
