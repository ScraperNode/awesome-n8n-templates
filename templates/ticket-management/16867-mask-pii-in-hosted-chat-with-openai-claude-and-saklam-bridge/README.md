# 🎫 Mask PII in hosted chat with OpenAI, Claude, and Saklam Bridge

> ⚡ **8 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow provides a public hosted chat that routes messages through the Saklam Bridge to mask PII on-premises before calling models like Claude, GPT, or Mistral, then restores the original values in the response.

## How it works
1. Exposes a public hosted chat interface and receives each user message.
2. Sends the message to an AI agent that uses an OpenAI-compatible chat model endpoint.
3. Routes the model request through the self-hosted Saklam Bridge, which masks PII locally before forwarding the prompt to your chosen LLM provider.
4. Receives the provider’s response back through Saklam Bridge, which unmasks the placeholders to restore the original PII.
5. Returns the final unmasked answer to the hosted chat user.

## Setup
1. Deploy the Saklam Bridge container in the same network as n8n and configure it with your Saklam license and your LLM provider API key.
2. Create an OpenAI API credential in n8n that points its Base URL to your Saklam Bridge endpoint (for example, `http://saklam-bridge:4000/v1`) and uses the Bridge master key as the API key.
3. Select that OpenAI credential in the chat model node and set the model name to the provider model you want to use (for example, `claude-haiku-4-5`, `gpt-4o`, or `mistral/mistral-large-latest`).
4. Enable the hosted chat trigger and test a message while checking Saklam Bridge logs to confirm only masked text leaves your network.

## Requirements
- Self-hosted n8n (Docker)
- Saklam Bridge container — commercial, 7-day free trial (setup guide: https://saklam.com/en/docs/n8n)
-  A pay-as-you-go API key for your LLM provider (bring your own key)

## Customization
- Point the model node of any existing workflow (email automation, extraction, classification) at the same Bridge credential — that workflow is masked too. Switch providers by model name (claude-*, gpt-*, mistral/*), no workflow changes needed.

## Additional info
Verify what actually left your network at any time with: docker logs saklam-bridge. Full documentation: https://saklam.com/en/docs/n8n

## 🔗 Nodes Used

Slack, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
