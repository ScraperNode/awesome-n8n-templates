# 💬 Route customer support requests to AI specialists with OpenRouter

> ⚡ **178 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives customer support requests via a webhook, normalizes the payload, and uses an OpenRouter-powered orchestrator agent to route the request to a Billing, Technical, or Account specialist agent. It then returns a structured JSON reply to the caller or escalates to human review.

## How it works
1. Receives a POST webhook request containing a customer’s tier and message.
2. Normalizes the incoming payload into consistent fields (requestId, customerId, customerTier, message, email, timestamp).
3. Uses an OpenRouter chat model with an orchestrator agent to choose exactly one specialist (billing, technical, or account) and pass the full request to that agent tool.
4. Parses the orchestrator’s JSON output into a consistent response object and flags whether routing succeeded.
5. If parsing/routing fails, prepares an escalation payload for human review; otherwise keeps the specialist response.
6. Responds to the webhook caller with JSON including the requestId, chosen specialist, customer-facing message, action taken, and routing reasoning.

## Setup
1. Add an OpenRouter API credential and select it for the orchestrator and each specialist chat model.
2. Activate the workflow and copy the production webhook URL from the Webhook trigger.
3. Configure your source system to POST to the webhook URL with fields like customerTier and message (optionally requestId, customerId, and email).

## 🔗 Nodes Used

Webhook, AI Agent, OpenRouter Chat Model, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
