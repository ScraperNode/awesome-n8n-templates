# 📖 Store persistent AI agent memory with Claude, Voyage AI, Postgres, and Redis

> ⚡ **14 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow provides persistent AI agent memory by combining Redis session history, PostgreSQL + pgvector long-term storage, Voyage AI embeddings, and Anthropic Claude for chat and memory extraction, with webhooks for chat and forgetting memories plus a daily maintenance schedule.

## How it works
1. Receives a chat message via a webhook (or manual trigger), validates userId/sessionId/message, and loads configuration.
2. Loads recent conversation turns from Redis and retrieves a cached query embedding from Redis or generates one via the Voyage AI embeddings API and stores it back in Redis.
3. Runs a pgvector similarity search in PostgreSQL for the user’s stored memories, re-ranks results by similarity/importance/recency, and updates access statistics for retrieved memories.
4. Sends the recent turns plus retrieved memory context to Anthropic Claude to generate a reply and returns the reply to the webhook caller.
5. In the background, saves the updated session history to Redis, asks Anthropic Claude to extract new durable memories from the exchange, embeds them with Voyage AI, and upserts them into PostgreSQL while deduplicating near-duplicates.
6. Runs once per day to decay the importance of unused memories and prune expired or low-importance stale memories from PostgreSQL.
7. Receives a forget request via a webhook to delete one memory (by UUID) or all memories for a user in PostgreSQL and clears the corresponding Redis session.

## Setup
1. Provide PostgreSQL credentials and enable the pgvector extension, then run the one-time schema setup described in the template notes to create the agent_memories table with the correct embedding vector dimension.
2. Provide Redis credentials for storing per-user session history and the embedding cache.
3. Add HTTP Header Auth credentials for Anthropic (x-api-key) and for the embeddings provider (Authorization: Bearer …), and select them in the Claude and embedding HTTP Request steps.
4. Update the configuration values (models, embedding URL/model/dimensions, TTLs, retrieval thresholds, and dedupe similarity threshold) to match your providers and desired behavior.
5. Copy the chat and forget webhook URLs and secure them (for example with header authentication) before connecting your client application, ensuring userId is supplied by a trusted caller.

## 🔗 Nodes Used

HTTP Request, Postgres, Redis, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
