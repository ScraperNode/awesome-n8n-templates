# ⚒️ OpenAI responses API adapter for LLM and AI agent workflows

> ⚡ **3,615 views** · ⚒️ [Engineering](../)

## Description

### This n8n template demonstrates how to use OpenAI's Responses API with existing LLM and AI Agent nodes.

Though I would recommend just waiting for official support, if you're impatient and would like a round-about way to integrate OpenAI's responses API into your existing AI workflows then this template is sure to satisfy!

This approach implements a simple API wrapper for the Responses API using n8n's builtin webhooks. When the base url is pointed to these webhooks using a custom OpenAI credential, it's possible to intercept the request and remap for compatibility.

### How it works
* An OpenAI subnode is attached to our agent but has a special custom credential where the base_url is changed to point at this template's webhooks.
* When executing a query, the agent's request is forwarded to our mini chat completion workflow.
* Here, we take the default request and remap the values to use with a HTTP node which is set to query the Responses API.
* Once a response is received, we'll need to remap the output for Langchain compatibility. This just means the LLM or Agent node can parse it and respond to the user.
* There are two response formats, one for streaming and one for non-streaming responses.

### How to use
* You must activate this workflow to be able to use the webhooks.
* Create the custom OpenAI credential as instructed.
* Go to your existing AI workflows and replace the LLM node with the custom OpenAI credential. You do not need to copy anything else over to the existing template.

### Requirements
* OpenAI account for Responses API

### Customising this workflow
* Feel free to experiment with other LLMs using this same technique!
* Keep up to date with the Responses API announcements and make modifications as required.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
