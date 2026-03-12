# 💬 Handle customer support queries with cache-first RAG using Redis, LangCache and OpenAI

> ⚡ **60 views** · 💬 [Support Chatbots](../)

## Description

An end-to-end **Retrieval-Augmented Generation (RAG)** customer support workflow for **n8n**, using a **cache-first strategy (LangCache)** combined with a **Redis vector store** powered by **OpenAI embeddings**.  
This template is designed for fast, accurate, and cost-efficient customer support chatbots, internal help desks, and knowledge-base assistants.

---

## Overview

This workflow implements a **production-ready RAG architecture** optimized for customer support use cases. Incoming chat messages are processed through a structured pipeline that prioritizes cached answers, falls back to semantic vector search when needed, and validates response quality before returning a final answer.

The workflow supports:
- Multi-question user inputs
- Intelligent query decomposition
- Cache reuse to reduce latency and cost
- High-precision retrieval from a Redis vector database
- Quality evaluation and controlled retries
- Final answer synthesis into a single, coherent response

---

## Key Features

- **Chat-based RAG pipeline** using n8n’s Chat Trigger
- **Query decomposition** for multi-topic questions
- **LangCache integration** (search + save)
- **Redis Vector Store** for semantic retrieval
- **OpenAI embeddings and chat models**
- **Quality scoring** with retry logic
- **Session memory buffers** for contextual continuity
- **Fallback-safe behavior** (no hallucinations)

---

## How the Workflow Works

### 1. Chat Trigger
The workflow starts when a new chat message is received.

### 2. Configuration Setup
A centralized configuration node defines:
- LangCache base URL
- Cache ID
- Similarity threshold (default: `0.75`)
- Maximum retrieval iterations (default: `2`)

### 3. Query Decomposition
The user message is analyzed and decomposed into:
- A single focused question, or
- Multiple independent sub-questions

This improves retrieval accuracy and cache reuse.

### 4. Cache-First Retrieval
Each sub-question is processed independently:
- The workflow first searches **LangCache**
- If a high-similarity cached answer is found, it is reused immediately

### 5. Vector Retrieval (Cache Miss)
If no cache hit exists:
- The query is embedded using OpenAI embeddings
- A semantic search is executed against the **Redis vector index**
- Retrieved knowledge-base documents are passed to a research-only agent

### 6. Knowledge-Only Answering
The research agent:
- Answers **strictly from the retrieved knowledge**
- Returns `"no info found"` if no relevant data exists

### 7. Quality Evaluation
Each generated answer is evaluated by a dedicated quality-check node:
- Outputs a numerical `SCORE` (0.0 – 1.0)
- Provides textual feedback
- Low scores can trigger limited retries

### 8. Cache Update
High-quality answers are saved back to **LangCache** for future reuse.

### 9. Aggregation & Synthesis
All sub-answers are aggregated and synthesized into:
- One final, user-facing response, or
- A polite fallback message if information is insufficient

---

## Main Nodes & Responsibilities

- **When Chat Message Received** — Entry point for user messages
- **LangCache Config** — Centralized configuration values
- **Decompose Query (LangChain Agent)** — Splits complex queries
- **Structured Output Parser** — Ensures valid JSON output
- **Search LangCache** — Cache lookup via HTTP
- **Redis Vector Store** — Semantic retrieval from Redis
- **Embeddings OpenAI** — Vector generation
- **Research Agent** — KB-only answering (no hallucinations)
- **Quality Evaluator** — Scores answer relevance
- **Save to LangCache** — Stores validated answers
- **Memory Buffers** — Session context handling
- **Response Synthesizer** — Final message generation

---

## Setup Instructions

### 1. Configure Credentials
Create the following credentials in n8n:
- **OpenAI API**
- **Redis**
- **HTTP Bearer Auth** (for LangCache)

### 2. Prepare the Knowledge Base
- Embed your documents using OpenAI embeddings
- Insert them into the configured Redis vector index
- Ensure documents are concise and well-structured

### 3. Configure LangCache
Update the configuration node with:
- `langcacheBaseUrl`
- `langcacheCacheId`
- Optional tuning for similarity threshold and iterations

### 4. Test the Workflow
- Use the example data loader or schedule trigger
- Send test chat messages
- Validate cache hits, vector retrieval, and final responses

---

## Recommended Tuning

- **Similarity Threshold:** `0.7 – 0.85`
- **Max Iterations:** `1 – 3`
- **Quality Score Cutoff:** `0.7`
- **Model Choice:** Use faster models for low latency, stronger models for accuracy
- **Cache Policy:** Cache only high-confidence answers

---

## Security & Compliance Notes

- Store API keys securely using n8n credentials
- Avoid caching sensitive or personally identifiable information
- Apply least-privilege access to Redis and LangCache
- Consider logging cache writes for audit purposes

---

## Common Use Cases

- Customer support chatbots
- Internal help desks
- Knowledge-base assistants
- Self-service support portals
- AI-powered FAQ systems

---

## Template Metadata (Recommended)

- **Template Name:** AI Customer Support — Redis RAG (LangCache + OpenAI)
- **Category:** Customer Support / AI / RAG
- **Tags:**  
  `customer-support`, `RAG`, `knowledge-base`, `redis`, `openai`, `langcache`, `chatbot`, `n8n-template`
- **Difficulty Level:** Intermediate
- **Required Integrations:** OpenAI, Redis, LangCache

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
