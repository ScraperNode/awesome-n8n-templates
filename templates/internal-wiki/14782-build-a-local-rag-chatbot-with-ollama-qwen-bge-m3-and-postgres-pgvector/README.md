# 📖 Build a local RAG chatbot with Ollama, Qwen, BGE-M3 and Postgres PGVector

> ⚡ **693 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

Build a fully local RAG chatbot using Ollama that works without tool calling — ideal for smaller open-source models like Qwen that don't support native function calls. This template lets you run a private, self-hosted AI assistant with retrieval-augmented generation using only your own hardware.

## How it works

1. A **Webhook** receives the user's chat message
2. A **small classifier LLM** (Qwen 7B) analyzes the input and decides: is this small talk, or a real question that needs the knowledge base?
3. For **small talk**, a dedicated AI agent responds conversationally with chat memory
4. For **real questions**, the classifier generates focused sub-queries, which are sent through a **loop-based RAG pipeline**:
   - Each sub-query is embedded using **BGE-M3** and matched against a **Postgres PGVector** store
   - Results are filtered by a relevance score threshold (&gt;0.4)
   - Chunks are aggregated and deduplicated across all sub-queries
5. An **Answer Generator agent** (Qwen 14B) produces a sourced answer using a strict 3-step format: short answer → sources → follow-up question
6. Both paths use **Postgres-backed chat memory** for multi-turn conversations
7. A post-processing step removes `&lt;think&gt;` tags that some reasoning models produce

## Set up steps

1. **Install Ollama** and pull the required models:
   - `ollama pull qwen2.5:7b` (classifier + small talk)
   - `ollama pull qwen3:14b` (answer generation)
   - `ollama pull bge-m3` (embeddings)
2. **Set up PostgreSQL** with the `pgvector` extension enabled
3. **Create your vector store** — ingest your documents into the PGVector store using BGE-M3 embeddings (you can use n8n's built-in document loaders for this)
4. **Configure credentials** in n8n:
   - Ollama connection (default: `http://localhost:11434`)
   - PostgreSQL connection for both chat memory and vector store
5. **Customize the webhook path** and connect it to your frontend or API client
6. **Optional:** Adjust the relevance score threshold, swap models for larger/smaller ones, or modify the system prompts to match your use case

## 🔗 Nodes Used

Webhook, Filter, AI Agent, Basic LLM Chain, Ollama Chat Model, Embeddings Ollama

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
