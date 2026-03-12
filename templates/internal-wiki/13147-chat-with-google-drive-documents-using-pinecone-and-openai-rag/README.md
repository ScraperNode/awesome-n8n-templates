# 📖 Chat with Google Drive documents using Pinecone and OpenAI RAG

> ⚡ **282 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

#### **Google Drive → Pinecone RAG Chatbot (Auto-Sync & Query)**

This n8n workflow implements a fully automated Retrieval-Augmented Generation (RAG) pipeline powered by Google Drive, OpenAI embeddings, and Pinecone.

It continuously keeps a vector database in sync with your company documents and exposes them through an AI chat interface.

What this workflow does

The workflow monitors a Google Drive folder and automatically reacts to document lifecycle events:

- File created

- File updated

- File deleted

When a document is added or updated:

- The file is downloaded from Google Drive

- Its content is chunked using a recursive text splitter

- Embeddings are generated with OpenAI

- Vectors are stored or updated in Pinecone

When a document is deleted:

The corresponding vectors are removed from Pinecone, keeping the index clean and consistent

On the chat side:

- A conversational AI agent retrieves relevant vectors from Pinecone

- Context is injected into the prompt

- The assistant answers questions grounded only on your documents

*Key features*

- End-to-end RAG pipeline (ingestion + retrieval + chat)

- Automatic vector updates on file changes

- Idempotent design (safe re-runs, no duplicated vectors)

- Google Drive as a live knowledge source

- Pinecone as scalable vector storage

- OpenAI embeddings and chat models

- Ready-to-use AI chat interface inside n8n

*Typical use cases*

- Internal company knowledge base

- AI assistant for policies, manuals, and documentation

- Team chat over shared Google Drive files

- Lightweight alternative to full-blown document search platforms

- Prototyping and production RAG systems

*Who this template is for*

- n8n users building AI-powered workflows

- Teams working with Google Drive documents

- Developers implementing RAG architectures

- Anyone who wants a self-hosted, controllable, and transparent AI document chatbot

This template is designed to be robust, maintainable, and production-ready, while remaining easy to extend with additional data sources, metadata filtering, or alternative LLM providers.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Google Drive Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
