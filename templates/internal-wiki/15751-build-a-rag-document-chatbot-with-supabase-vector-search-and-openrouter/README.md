# 📖 Build a RAG document chatbot with Supabase vector search and OpenRouter

> ⚡ **208 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## What this workflow does

This workflow builds a Retrieval-Augmented Generation (RAG) document chat assistant inside n8n using Supabase Vector Store and AI models.

The workflow allows users to upload documents, convert them into embeddings, store them inside Supabase pgvector, and query them through an AI chat interface using semantic search.

When a user sends a question through the webhook endpoint, the workflow retrieves the most relevant document chunks from Supabase and uses an AI model to generate a grounded response based on the uploaded documents.

This template includes:

* Document ingestion pipeline
* Recursive text chunking
* AI embeddings generation
* Supabase vector storage
* Semantic retrieval
* AI-powered document question answering
* Webhook API integration for frontend apps

## How it works

The workflow is split into two main parts:

1. Document ingestion pipeline

* Downloads documents from Google Drive
* Extracts text from PDFs
* Splits text into smaller chunks
* Generates embeddings using AI models
* Stores embeddings inside Supabase pgvector

2. RAG chat pipeline

* Receives user questions through a webhook
* Searches Supabase vector database for relevant content
* Retrieves matching document chunks
* Sends retrieved context to the AI model
* Returns grounded responses back to the frontend

## Requirements

* n8n instance
* Supabase account with pgvector enabled
* Google Drive account
* AI provider credentials (OpenRouter, Gemini, or OpenAI)

## Setup

1. Create a Supabase project and enable pgvector
2. Create the required documents table and match_documents function
3. Connect your Supabase credentials in n8n
4. Connect your AI model credentials
5. Add your Google Drive credentials
6. Upload your documents and run the ingestion workflow
7. Use the webhook endpoint to connect your frontend application

Setup typically takes around 15–30 minutes.

## How to customize

You can customize this workflow by:

* Switching AI providers (Gemini, OpenRouter, OpenAI)
* Adjusting chunk size and retrieval count
* Connecting your own frontend UI
* Adding support for multiple document sources
* Expanding the workflow into a multi-user knowledge assistant

This workflow is designed as a practical starting point for building AI-powered document assistants and RAG applications inside n8n.

## 🔗 Nodes Used

Webhook, Google Drive, AI Agent, Recursive Character Text Splitter, Supabase Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
