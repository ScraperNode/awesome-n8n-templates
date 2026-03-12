# ⚒️ Multi-AI agent router: compare OpenAI, Anthropic & Groq responses with webhooks

> ⚡ **243 views** · ⚒️ [Engineering](../)

## Description

## Introduction
This workflow connects to OpenAI, Anthropic, and Groq, processing requests in parallel with automatic performance metrics. Ideal for testing speed, cost, and quality across models.
## How It Works
Webhooks trigger parameter extraction and routing. Three AI agents run simultaneously with memory and parsing. Responses merge with detailed metrics.
## Workflow Template
Webhook → Extract Parameters → Router
├→ OpenAI Agent
├→ Anthropic Agent
├→ Groq Agent
→ Merge → Metrics → Respond
## Workflow Steps
1. Webhook receives POST with prompt and settings.
2. Parameters extracted and validated.
3. Router directs by cost, latency, or type.
4. AI agents run in parallel.
5. Results merged with metadata.
6. Metrics compute time, cost, and quality.
7. Response returns outputs and recommendation.
## Setup Instructions
1. Activate Webhook with authentication.
2. Add API keys for all providers.
3. Define models, tokens, and temperature.
4. Adjust Router logic for selection.
5. Tune Metrics scoring formulas.
## Prerequisites
* n8n v1.0+ instance
* API keys: OpenAI, Anthropic, Groq
* HTTP client for testing
## Customization
Add providers like Gemini or Azure OpenAI.
Enable routing by cost or performance.
## Benefits
Auto-select efficient providers and compare model performance in real time.

## 🔗 Nodes Used

Webhook, AI Agent, Anthropic Chat Model, OpenAI Chat Model, Structured Output Parser, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
