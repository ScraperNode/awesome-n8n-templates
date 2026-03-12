# ⚡ Chat with your email history using Telegram, Mistral and Pgvector for RAG

> ⚡ **4,399 views** · ⚡ [Personal Productivity](../)

## Description

# Who is this for?

**Everyone!** Did you dream of asking an AI "*what hotel did I stay in for holidays last summer?*" or "*what were my marks last semester like?*".

Dream no more, as [vector similarity searches](https://www.pinecone.io/learn/vector-embeddings/) and **this workflow** are the foundations to make it possible (as long as the information appears in your e-mails 😅).

## 100% Local and Open Source!

This workflow is designed to use locally-hosted open source. **Ollama** as LLM provider, `nomic-embed-text` as the embeddings model, and **pgvector** as the vector database engine, on top of **Postgres**.

## Structured AND Vectorized

This workflow combines *structured* **and** *semantic* search on your e-mail.

No need for enterprise setups!
Leverage the convenience of n8n and open source to get a **bleeding edge** solution.

## Setup

1. You will need a **PGVector database** with embeddings for all your email. Use my other template [Gmail to Vector Embeddings with PGVector and Ollama](https://n8n.io/workflows/3762-gmail-to-vector-embeddings-with-pgvector-and-ollama/) to set it up in a breeze!
2. Make a copy of my [Email Assistant: Convert Natural Language to SQL Queries with Phi4-mini and PostgreSQL](https://n8n.io/workflows/3761-email-assistant-convert-natural-language-to-sql-queries-with-phi4-mini-and-postgresql/), you will need it for structured searches.
3. Install this template and modify the *Call the SQL composer Workflow* step, to point at your copy of the SQL workflow.
4. Adjust the rest of necessary steps: *Telegram Trigger*, *AI Chat model*, *AI Embeddings*...

**Activate the workflow** and chat around!

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
