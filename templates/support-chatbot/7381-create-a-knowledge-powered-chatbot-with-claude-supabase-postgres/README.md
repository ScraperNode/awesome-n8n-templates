# 💬 RAG chat assistant with Claude, Supabase vector store, and Postgres memory

> ⚡ **1,473 views** · 💬 [Support Chatbots](../)

## Description

**📺 Full walkthrough video: https://youtu.be/Z_l_T22px3U**

## Who it's for

This workflow is for developers and AI builders who want to deploy a context-aware chat assistant powered by a private knowledge base. It suits teams that need persistent conversation memory and retrieval-augmented generation (RAG) on their own infrastructure.

## How it works

1. The **Chat Trigger** listens for incoming user messages and forwards them to the AI Agent.
2. The **AI Agent** (Claude Sonnet 4) orchestrates the response generation.
3. **Postgres Chat Memory** stores and retrieves the conversation history, enabling multi-turn dialogue.
4. The **Supabase Vector Store** is queried as a tool to retrieve relevant documents from the knowledge base.
5. **OpenAI Embeddings** convert the user query into vectors used for the Supabase similarity search.
6. Claude synthesizes context from memory and retrieved documents to produce a final response.

## How to set up

- [ ] Add your **Anthropic API key** to the Claude Sonnet 4 Model node
- [ ] Add your **OpenAI API key** to the Generate OpenAI Embeddings node
- [ ] Configure your **Supabase** project URL, API key, and target table name
- [ ] Configure the **Postgres Chat Memory** node with your PostgreSQL database credentials
- [ ] Optionally set authentication on the Chat Trigger node

## Requirements

- Anthropic account (Claude Sonnet 4)
- OpenAI account (text-embedding model)
- Supabase project with a vector-enabled table
- PostgreSQL database for session memory

## How to customize

- Swap Claude for OpenAI GPT-4 or another LLM supported by n8n
- Replace Supabase Vector Store with Pinecone, Qdrant, or another vector database
- Use a unique session key per user to support isolated multi-user conversations

## 🔗 Nodes Used

AI Agent, Embeddings OpenAI, Anthropic Chat Model, Supabase Vector Store, Chat Trigger, Postgres Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
