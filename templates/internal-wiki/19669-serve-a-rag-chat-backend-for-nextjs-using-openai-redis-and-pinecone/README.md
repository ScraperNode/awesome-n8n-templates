# 📖 Serve a RAG chat backend for Next.js using OpenAI, Redis, and Pinecone

> ⚡ **20 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow exposes a secure webhook API for a Next.js app to run a RAG chat agent using OpenAI, a Pinecone vector store, Redis caching, and Postgres logging, and it optionally calls back into Next.js to trigger ISR revalidation when grounded answers indicate public content should be refreshed.

## How it works
1. Receives a POST request on a header-authenticated webhook endpoint from a Next.js Server Action or Route Handler.
2. Validates the request payload (query, conversationId, tenantId, and allowed namespace) and returns a structured 400 response if any checks fail.
3. Builds a deterministic cache key and checks Redis to return a cached answer immediately for identical repeated queries.
4. On a cache miss, generates OpenAI embeddings and retrieves the top relevant passages from a Pinecone vector index scoped to the request namespace.
5. Uses an OpenAI-powered agent with conversation window memory and a vector-search tool to produce a structured JSON answer with citations and a groundedness/confidence score.
6. Validates and normalizes the agent’s JSON output, stores the result in Redis with a TTL, and logs the conversation turn to Postgres.
7. Responds to Next.js with the final answer payload, and if the answer is grounded, posts a non-blocking callback to Next.js /api/revalidate to revalidate an ISR tag for that namespace.

## Setup
1. Create and connect credentials for OpenAI, Redis, and Postgres, and configure the webhook’s Header Auth (x-api-key) so only your Next.js server can call it.
2. Set up a Pinecone index and connect Pinecone credentials, then select the index in the vector store node and ensure your documents are already embedded and stored in the namespaces you plan to use.
3. Update the configuration values in the workflow (allowedNamespaces, default namespace, embedding/chat models, cache TTL, and max query length) to match your app’s requirements.
4. Implement a Next.js Route Handler at /api/revalidate that validates the shared secret and calls revalidateTag/revalidatePath, then set nextjsRevalidateUrl and nextjsRevalidateSecret in the workflow to match it.
5. Ensure your Postgres database contains a rag_conversation_turns table (or update the insert target) with columns matching the logged fields (conversation, query, answer, citations, groundedness, confidence, latency, cacheHit, createdAt).

## 🔗 Nodes Used

HTTP Request, Postgres, Redis, Webhook, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
