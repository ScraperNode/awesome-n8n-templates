# ⚒️ Chat with local LLMs using n8n and Ollama

> ⚡ **186,162 views** · ⚒️ [Engineering](../)

## Description

## Chat with local LLMs using n8n and Ollama
This n8n workflow allows you to seamlessly interact with your self-hosted Large Language Models (LLMs) through a user-friendly chat interface. By connecting to Ollama, a powerful tool for managing local LLMs, you can send prompts and receive AI-generated responses directly within n8n.

### Use cases
* Private AI Interactions
Ideal for scenarios where data privacy and confidentiality are important.
* Cost-Effective LLM Usage
Avoid ongoing cloud API costs by running models on your own hardware.
* Experimentation & Learning
A great way to explore and experiment with different LLMs in a local, controlled environment.
* Prototyping & Development
Build and test AI-powered applications without relying on external services.

### How it works
1. When chat message received: Captures the user's input from the chat interface.
2. Chat LLM Chain: Sends the input to the Ollama server and receives the AI-generated response.
3. Delivers the LLM's response back to the chat interface.

### Set up steps
* Make sure Ollama is installed and running on your machine before executing this workflow.
* Edit the Ollama address if different from the default.

## 🔗 Nodes Used

Basic LLM Chain, Ollama Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
