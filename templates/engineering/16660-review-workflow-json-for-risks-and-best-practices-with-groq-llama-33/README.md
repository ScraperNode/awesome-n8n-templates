# ⚒️ Review workflow JSON for risks and best practices with Groq (Llama 3.3)

> ⚡ **27 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow exposes a webhook that accepts an exported n8n workflow JSON, runs static validation and risk checks, then uses Groq (Llama 3.3 70B) via an AI agent to return a structured JSON review with metrics, risks, and best-practice recommendations.

## How it works
1. Receives a POST request via a webhook containing a `workflow` object with exported n8n workflow JSON.
2. Validates the payload structure and analyzes the workflow to generate metrics and findings such as orphan nodes, dead ends, missing error handling, placeholder credentials, deprecated nodes, and documentation gaps.
3. Routes valid analyses to a Groq-powered AI agent that explains each finding (why it matters, risk, business impact, and best-practice fix) and formats the response as structured JSON.
4. Routes invalid or malformed inputs to a formatter that returns a consistent `{ success: false, error }` JSON response.
5. Responds to the original webhook request with the final JSON analysis.

## Setup
1. Add a Groq API credential in the Groq Chat Model node. You can generate a free API key at console.groq.com if you don't have one yet.
2. Activate the workflow and copy the webhook URL from the Webhook trigger. This is the endpoint you'll send workflow JSON to for analysis.
3. Configure your caller to POST { "workflow": { ... } } to the webhook URL, with the exported workflow JSON nested under the workflow key in the request body.

## 🔗 Nodes Used

Webhook, AI Agent, Structured Output Parser, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
