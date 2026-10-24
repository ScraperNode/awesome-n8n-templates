# 💬 Autonomous AI Customer Support Agent with Multi-KB RAG & Human Escalation

> ⚡ **81 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow receives support requests via webhook, validates and rate-limits them in Supabase, then uses an Ollama-powered LangChain agent with three Supabase vector knowledge bases and Wikipedia search to answer via Slack, Gmail, or HTTP callback, escalating low-confidence or human requests to operators.

## How it works
1. Receives a POST support request via webhook and validates the `x-api-key` header, returning 401 if it is missing or incorrect.
2. Normalizes the incoming payload and logs the request to Supabase to enforce a per-session rate limit, returning 429 when the threshold is exceeded.
3. Rejects invalid or duplicate messages by checking for an empty body, enforcing a 2000-character limit, and deduplicating by `message_id` in Supabase.
4. Immediately returns a 202 Accepted response, sanitizes the customer query to mask common PII patterns, and detects explicit requests to speak to a human.
5. Uses a LangChain agent running on Ollama with Postgres chat memory to retrieve context from three Supabase vector knowledge bases and optionally query Wikipedia when the KBs miss.
6. Parses the agent’s JSON output, routes high/medium-confidence answers to Slack, Gmail, or an HTTP callback, and writes the scrubbed response plus sources and confidence to a Supabase audit log.
7. When confidence is low or a human handover is requested, queues an escalation in Supabase and alerts operators in Slack during business hours (or emails on-call off-hours), while also posting a Slack warning if escalation volume spikes.

## Setup
1. Create the required Supabase tables (`support_rate_limits`, `support_message_ids`, `support_audit_log`, `support_kb_gaps`, `support_escalations`) plus the three vector KB tables (`documents`, `additional_documents`, `reference_documents`) and configure them with embeddings and matching functions for Supabase Vector Store retrieval.
2. Add credentials for Supabase, Postgres (for chat memory), Ollama, Slack, and Gmail.
3. Pull the Ollama models used by the workflow (`qwen2.5:7b` and `nomic-embed-text`) and ensure the Ollama endpoint is reachable from n8n.
4. Replace placeholders like `YOUR_API_KEY`, `YOUR_ONCALL_EMAIL`, and `YOUR_N8N_INSTANCE_URL`, and set the target Slack channel ID and any required callback URL behavior in your request payload.
5. Populate the Supabase knowledge base tables with your embedded documents so the agent can retrieve relevant support content.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail, Supabase, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
