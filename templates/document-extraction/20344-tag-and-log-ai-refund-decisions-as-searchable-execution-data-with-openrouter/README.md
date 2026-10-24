# 🔬 Tag and log AI refund decisions as searchable execution data with OpenRouter

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow applies a demo refund policy, asks an AI agent to explain the decision, and saves the case and the final decision as custom execution data so you can find the run later. It is Exercise 2 from the n8n Production AI Playbook on Audit & Trace.

## How it works
1. Receives a POST webhook request with an orderId, customerTier and message.
2. Order Lookup returns a simulated order record.
3. Policy Decision, an Edit Fields node, selects refund_approved, refund_declined or needs_human_review from the record.
4. Check Tag Length, an If node, sends values over 255 characters to Reject Oversized Tag, a Stop and Error node.
5. Tag Execution, an Execution Data node, saves the case details as custom data.
6. Refund Support Agent explains the decision using an OpenRouter chat model.
7. Record Decision saves the final decision as custom data, and Build Reply returns the response.

## Setup
1. Add an OpenRouter API credential to OpenRouter - Support. The template uses openai/gpt-4.1-mini, and any supported chat model works.
2. Select Execute workflow and POST {"orderId":"ORD-1001","customerTier":"gold","message":"Please refund this order."} to the Webhook Test URL.
3. Repeat with ORD-1002 and ORD-9999, selecting Execute workflow before each request. The decisions should be refund_approved, refund_declined and needs_human_review.
4. Open each saved execution to inspect the custom data. Filtering the executions list by custom data requires n8n Cloud Pro or Enterprise.

## Requirements
- n8n Cloud or a self-hosted n8n instance
- An OpenRouter API key
- n8n Cloud Pro or Enterprise to filter executions by custom data (optional)

## Customization
- Replace Order Lookup with your own order API and change the Policy Decision expression to match your refund policy.

## Additional info
All order records are synthetic and no payment is processed.

## 🔗 Nodes Used

Webhook, Stop and Error, Execution Data, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
