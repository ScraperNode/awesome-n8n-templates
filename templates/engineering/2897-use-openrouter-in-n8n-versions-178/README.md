# ⚒️ Use OpenRouter in n8n versions <1.78

> ⚡ **3,595 views** · ⚒️ [Engineering](../)

## Description

## What it is:

In version 1.78, n8n introduced a dedicated node to use the OpenRouter service, which lets you to use a lot of different LLM models and providers and change models on the fly in an agentic workflow.

For prior n8n versions, there's a workaround to make OpenRouter accessible, by using the OpenAI node with a OpenRouter-specific BaseURL.

This trivial workflow demonstrates this for version before 1.78, so that you can use different LLM model dynamically with the available n8n nodes for OpenAI LLM and OpenAI credentials.

## What you can do:

* Use any of the [OpenRouter models](https://openrouter.ai/models)
* Have the model even dynamically configured or changing (by some external config, some rule, or some specific chat message)

## Setup steps:

* Import the workflow
* Ensure you have registered and account, purchased some credits and created and API key for [OpenRouter.ai](https://openrouter.ai)
* Configure the "OpenRouter" credentials with your own credentials, using an _OpenAI  type_ credential, but making sure in the credential's config form its "Base URL" is set to _https://openrouter.ai/api/v1_ so OpenRouter is used instead of OpenAI. 
* Open the "Settings" node and change the model value to any valid model id from the [OpenRouter models list](https://openrouter.ai/models) or even have the model property set dynamically

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
