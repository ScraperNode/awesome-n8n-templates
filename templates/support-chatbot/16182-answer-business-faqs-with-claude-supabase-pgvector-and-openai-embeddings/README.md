# 💬 Answer business FAQs with Claude, Supabase pgvector and OpenAI embeddings

> ⚡ **5 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow exposes a webhook-based FAQ endpoint that embeds incoming questions with OpenAI, retrieves relevant knowledge base chunks from Supabase pgvector, and asks Anthropic Claude to answer strictly from that context with citations, returning a structured JSON response.

## How it works
1. Receives a POST webhook request containing a user question (and optional session ID).
2. Standardizes request fields and sets the Supabase URL, embedding model, top-k, and similarity threshold used for retrieval.
3. Creates an embedding for the question using the OpenAI Embeddings API.
4. Calls a Supabase PostgREST RPC (match_documents) backed by pgvector to return the most similar document chunks.
5. Builds a citation-marked context block from the top matches (or a “no matches” context when nothing is found).
6. Sends the context and question to Anthropic Claude with instructions to respond in JSON and cite only from the provided chunks.
7. Parses Claude’s JSON, maps cited chunk IDs back to source metadata, and returns the answer, confidence flag, and citations in the webhook response.

## Setup
1. Create a Supabase Postgres database with the pgvector extension, a documents table (including an embedding vector(1536) column), and a match_documents RPC compatible with the workflow’s request body.
2. Populate the Supabase documents table with chunked knowledge base content and embeddings (ingestion happens outside this workflow).
3. Add HTTP Header Auth credentials for OpenAI (Authorization: Bearer <api_key>), Supabase (apikey and Authorization: Bearer <anon_key>), and Anthropic (x-api-key: <api_key>), then select them in the respective HTTP request steps.
4. Update the Supabase project URL and business name in the workflow configuration, and adjust topK and matchThreshold as needed.
5. Copy the production webhook URL from n8n and configure your chat UI, Slack bot, or frontend to POST a JSON body containing a question field to it.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
