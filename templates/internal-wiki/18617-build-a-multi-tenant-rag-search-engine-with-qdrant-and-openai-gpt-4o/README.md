# 📖 Build a multi-tenant RAG search engine with Qdrant and OpenAI GPT-4o

> ⚡ **40 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow exposes a POST webhook that authenticates a tenant, embeds the user query with OpenAI, searches tenant-scoped vectors in Qdrant, and uses GPT-4o to return a grounded answer with bracketed citations and usage metrics.

## How it works
1. Receives a POST request via a webhook with a user query and tenant identifiers (for example, `x-tenant-id` in headers).
2. Validates that the tenant ID and query are present and routes invalid requests to an HTTP error response.
3. Sends the query to OpenAI Embeddings (`text-embedding-3-small`) to generate a vector.
4. Builds a Qdrant search request that enforces multi-tenant isolation using payload filters (required `tenant_id`, optional `workspace_id` and `category`) and applies a similarity threshold.
5. Queries Qdrant for the top matching chunks, then formats the retrieved payload into a single context block and a structured citations list.
6. Sends the query and formatted context to OpenAI Chat Completions (GPT-4o) to generate an answer that cites sources like [Source 1] using only the provided context.
7. Assembles a final JSON response (answer, citations, similarity metrics, and token usage) and returns it to the webhook caller.

## Setup
1. Provide an OpenAI API key (used for embeddings and GPT-4o), either by setting `OPENAI_API_KEY` as an environment variable or replacing the placeholder in the HTTP Authorization headers.
2. Set up a Qdrant instance and configure `QDRANT_HOST`, `QDRANT_API_KEY` (if required), and `QDRANT_COLLECTION` (defaults to `enterprise_rag_vectors`).
3. Ensure your Qdrant collection stores payload fields used for filtering and citations (at minimum `tenant_id`, and optionally `workspace_id`, `category`, plus fields like `content/text`, `title/filename`, and `document_id`).
4. Copy the webhook URL from the Webhook node and configure your client to POST a JSON body containing `query` and to include `x-tenant-id` (and optionally `x-workspace-id`) headers.

## Requirements
- • OpenAI API Account (with text-embedding-3-small and GPT-4o access)
- • Qdrant Cluster (Self-hosted Docker on VPS or Qdrant Cloud Free Tier)
- • n8n instance (Cloud or Self-hosted v1.0+)

## Customization
- • Swap text-embedding-3-small with local Ollama / BGE embeddings for completely air-gapped on-premise deployments.
- • Adjust the cosine similarity threshold (default 0.68) inside the Code node to fine-tune precision vs recall.
- • Connect the output response to Slack, WhatsApp, or customer support chatbots for automated enterprise document search.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
