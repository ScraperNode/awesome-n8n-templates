# 💬 Route omnichannel customer support with Ollama and Postgres pgvector

> ⚡ **3 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives customer messages via webhook from chat, email, or social channels, stores conversation history in Postgres (pgvector), retrieves relevant knowledge, and uses Ollama to draft a guarded reply or create a human handoff, then sends the response through a channel adapter.

## How it works
1. Receives an inbound customer message via one of three webhook endpoints (chat, email, or social).
2. Validates a shared secret header, normalizes the payload into a standard structure, and rejects invalid or oversized requests with an error response.
3. Upserts the conversation in Postgres, stores the inbound message, and fetches the latest message history while ignoring duplicate provider event IDs.
4. Generates an embedding for the customer message with Ollama and uses pgvector similarity search in Postgres to retrieve the top published knowledge snippets.
5. Sends the message, recent history, and retrieved knowledge to Ollama chat to classify intent and draft a JSON reply with citations.
6. Applies guardrails to force human escalation for sensitive requests, missing approved citations, low confidence, or conversations already waiting for a human.
7. If escalation is needed, creates a handoff record in Postgres and notifies a human-queue webhook; otherwise records the outbound reply, sends it to a reply-webhook channel adapter, and returns a 200 acknowledgment.

## Setup
1. Add Postgres credentials and create the required tables (cs_conversations, cs_messages, cs_kb_chunks with a pgvector embedding column, and cs_handoffs) plus the pgvector extension.
2. Set environment variables for CS_TENANT_SECRET, CS_OLLAMA_URL, CS_OLLAMA_MODEL, and CS_OLLAMA_EMBED_MODEL, and ensure your Ollama instance can serve /api/chat and /api/embeddings.
3. Set CS_REPLY_WEBHOOK (your channel adapter endpoint that sends replies back to chat/email/social) and CS_HUMAN_WEBHOOK (your human queue intake endpoint).
4. Publish and maintain knowledge in cs_kb_chunks (tenant_id, content, source, published, expires_at, embedding) so FAQs can cite approved sources.
5. Copy the three webhook URLs from n8n and configure your chat, email, and social adapters to call them with x-cs-secret, event_id, customer_id, and message fields.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
