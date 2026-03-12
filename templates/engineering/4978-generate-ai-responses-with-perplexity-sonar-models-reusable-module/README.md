# ⚒️ Generate AI Responses with Perplexity Sonar Models (Reusable Module)

> ⚡ **433 views** · ⚒️ [Engineering](../)

## Description

# Perplexity API Module

This reusable workflow allows you to interact with the [Perplexity API](https://docs.perplexity.ai/api-reference/async-chat-completions-post) using the `sonar` or `sonar-pro` models. It is designed to be triggered from other workflows and accepts dynamic prompts via input parameters.

## Features

- 🧱 Modular: Triggered using `Execute Workflow` from any other workflow
- 📥 Inputs:
  - `SystemPrompt`: Set your system-level instruction for the LLM
  - `UserPrompt`: The main user prompt for the conversation
- 🧠 Uses Perplexity’s `chat/completions` endpoint
- 🔐 Built with API authentication in mind (Bearer token or header auth)
- 🔁 Easily extendable for any model in the Perplexity suite

## Models supported
- `sonar`
- `sonar-pro`  
[See full model list and capabilities](https://docs.perplexity.ai/models/model-cards)

## Usage

1. Set up your credentials in n8n under HTTP Bearer or Header Auth.
2. Add this workflow as a subworkflow using the “Execute Workflow” node.
3. Pass the desired `SystemPrompt` and `UserPrompt` as input variables.
4. Receive the model response in return.

## Notes

- This template is inactive by default and safe to import.
- Includes sticky notes with API references and model info.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
