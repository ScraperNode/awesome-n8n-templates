# ⚒️ Route LLM prompts with Claude as primary and OpenAI as fallback

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
A reusable LLM router. Another workflow calls it with a prompt, it asks Claude first, and it falls back to OpenAI when the primary answer is empty. It checks the answer field itself, so an empty HTTP 200 also triggers the fallback.

## How it works
1. Receives input from another n8n workflow through the Execute Workflow trigger.
2. Normalizes the incoming payload into `prompt`, `system`, `mode`, and `max_tokens` with defaults.
3. Sends the prompt to the Anthropic Messages API (Claude) to generate a response.
4. Checks whether Claude returned usable text content rather than relying only on the HTTP status.
5. If no usable content is returned, sends the same prompt to the OpenAI Chat Completions API (gpt-4o-mini) as a fallback.
6. Returns the first usable result to the caller, including `text`, the responding `model`, and whether `fallback_used` is true or false.

## Setup
1. Add an Anthropic API credential for the Claude HTTP request.
2. Add an OpenAI API credential for the fallback OpenAI HTTP request.
3. Change primary_model and fallback_model in the Set node to use different models.
4. If using as a sub-workflow, call it from another workflow using an Execute Workflow node and pass the expected input fields.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
