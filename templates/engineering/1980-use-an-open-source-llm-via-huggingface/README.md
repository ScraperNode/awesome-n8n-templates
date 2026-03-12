# ⚒️ Use an open-source LLM (via HuggingFace)

> ⚡ **42,818 views** · ⚒️ [Engineering](../)

## Description

This workflow demonstrates how to connect an open-source model to a Basic LLM node.

The workflow is triggered when a new manual chat message appears. The message is then run through a Language Model Chain that is set up to process text with a specific prompt to guide the model's responses.

Note that open-source LLMs with a small number of parameters require slightly different prompting with more guidance to the model.

You can change the default Mistral-7B-Instruct-v0.1 model to any other LLM supported by HuggingFace. You can also connect other nodes, such as Ollama.

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 🔗 Nodes Used

Basic LLM Chain, Hugging Face Inference Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
