# ⚡ Route chat prompts to free LLMs with Agnes AI, NVIDIA, and Ollama

> ⚡ **68 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow provides a simple AI playground where users can choose between several free LLM options—NVIDIA Integrate chat completions, Agnes AI chat completions, a local Ollama model, or an Ollama Cloud model via a LangChain agent with memory—enter a prompt, and receive the generated response directly in the form.

## How it works
1. Choose an AI model from the n8n Form.
2. Enter your prompt and submit the form.
3. The workflow routes the prompt to the selected free AI model.
4. The generated response is displayed directly on the form completion page.
5. Sends the user prompt to NVIDIA, Agnes, Ollama local and Ollama cloud endpoint and returns the first completion back to the form.

## Setup
1. Add an NVIDIA API bearer token credential and select it in the NVIDIA HTTP Request step.
2. Add an Agnes AI bearer token credential and select it in the Agnes AI HTTP Request step.
3. If using local Ollama, install Ollama, pull the referenced model (for example gemma4:latest), and update the Ollama base URL if your n8n instance cannot reach http://host.docker.internal:11434.
4. Add Ollama Cloud (Ollama API) credentials and ensure the selected model (gemma4:31b) is available to your account.

## 🔗 Nodes Used

HTTP Request, AI Agent, Ollama Chat Model, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
