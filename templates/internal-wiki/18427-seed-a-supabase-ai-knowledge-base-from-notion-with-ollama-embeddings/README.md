# 📖 Seed a Supabase AI knowledge base from Notion with Ollama embeddings

> ⚡ **3 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This n8n template ingests your entire Notion database into a Supabase vector store, making every page searchable by an AI assistant or chatbot. It runs on a schedule to keep your knowledge base in sync automatically, and each run is safe to repeat — no manual cleanup, no duplicate embeddings.

## How it works
1. Clears the knowledge base before each run so re-runs are always safe and up to date
2. Fetches all pages in your Notion database
3. Retrieves the full block content of each page
4. Skips empty pages
5. Prepends each page's title to its content and appends the source Notion URL, then splits into chunks and generates embeddings using Ollama's nomic-embed-text
6. Stores the embeddings in Supabase, ready for semantic search

## Setup
1. Create a Notion internal integration, share your target database with it, and add a Notion API credential in n8n.
2. Enable pgvector in Supabase, create the `documents` table and `match_documents` function, and add a Supabase credential (Project URL and service_role key) in n8n.
3. Install and run Ollama, pull `nomic-embed-text`, and add an Ollama credential pointing to your Ollama base URL.
4. In the Notion node, replace `YOUR_DATABASE_ID` with your Notion database ID, and in the Supabase delete request, replace `YOUR_SUPABASE_PROJECT_URL` with your Supabase Project URL.

## Requirements
- Supabase account with pgvector enabled
- Notion account with an internal integration connected to your database
- Ollama running locally (ollama.com) with nomic-embed-text pulled

## Customization
- Swap the Ollama embedding node for OpenAI, Cohere, or HuggingFace. The workflow uses n8n's LangChain-based embedding pipeline, so any supported embedding model works. If you switch models, update the vector(768) column in your SQL to match the new dimension.
- Adjust chunk size and overlap in the Split Text for Processing node to suit your content.
- To capture content inside toggles and deeply indented lists, enable Also Fetch Nested Blocks in the Fetch Page Blocks node. For large databases, leave it off to avoid Notion API rate limits.

## Additional info
Pairs well with: Search multiple knowledge bases with an Agentic RAG assistant (query everything you've stored).

## 🔗 Nodes Used

HTTP Request, Notion, Schedule Trigger, Recursive Character Text Splitter, Supabase Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
