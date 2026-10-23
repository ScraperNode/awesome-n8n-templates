# 🎫 Detect silent refund reply failures with OpenRouter and webhook logs

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow shows how a support agent can send a confident refund reply even when the order data behind it is missing or incomplete, and how to catch that with saved executions and a validation step. It is Exercise 1 from the n8n Production AI Playbook on Audit & Trace.

## How it works
1. Receives a POST webhook request with an orderId and a customer message.
2. Order Lookup returns a simulated order record and flags whether the lookup is complete.
3. Validate Lookup, disabled by default, routes incomplete lookups to human review.
4. Refund Support Agent drafts a reply from the lookup result using an OpenRouter chat model.
5. Respond to Customer returns the reply, or Respond Needs Human returns a human-review status.

## Setup
1. Add an OpenRouter API credential to OpenRouter - Support. The template uses openai/gpt-4.1-mini, and any supported chat model works.
2. In the workflow Settings, set Save manual executions to Save.
3. Select Execute workflow and POST {"orderId":"ORD-1001","message":"Charged twice, refund the duplicate."} to the Webhook Test URL. Repeat with ORD-9999 and ORD-1004.
4. Compare each reply with the Order Lookup output in the saved execution, then enable Validate Lookup and rerun all three requests.

## Requirements
- n8n Cloud or a self-hosted n8n instance
- An OpenRouter API key

## Customization
- Replace Order Lookup with your own database or order API, and keep the lookupComplete flag so Validate Lookup still works.

## Additional info
All order records are synthetic and no payment is processed.

## 🔗 Nodes Used

Webhook, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
