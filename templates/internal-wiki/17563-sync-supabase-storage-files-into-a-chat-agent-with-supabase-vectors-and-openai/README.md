# 📖 Sync Supabase Storage files into a chat agent with Supabase vectors and OpenAI

> ⚡ **2 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow syncs files from Supabase Storage into a Supabase vector store using OpenAI embeddings, then exposes an n8n chat trigger where an AI agent answers questions by retrieving relevant document chunks from Supabase.

## How it works
1. Starts a manual sync run when you click “Test workflow”.
2. Reads existing file records from the Supabase `files` table and lists objects in the Supabase Storage `private` bucket.
3. Compares both lists and skips files that are already indexed or match the `.emptyFolderPlaceholder` marker.
4. Downloads each new file from Supabase Storage and extracts text (PDFs are parsed; files without an extension are treated as plain text).
5. Creates a new row in the Supabase `files` table and splits the extracted text into chunks.
6. Generates embeddings with OpenAI and inserts the chunks into the Supabase `documents` vector table for later retrieval.
7. When a chat message is received, an AI agent uses OpenAI and a Supabase vector search tool to retrieve the top matches and respond with answers grounded in the indexed files.

## Setup
1. Add a Supabase API credential and replace the hardcoded Supabase project URL used by the Storage list and download requests.
2. Create the Supabase `files` table (at least `name` and `storage_id`) and a `documents` vector table plus the `match_documents` function required by the Supabase vector store integration.
3. Add OpenAI credentials for the embeddings model and chat models used by the indexing and chat steps.
4. Update or remove the hardcoded `file_id` metadata filter in the Supabase vector search so the chat agent searches across all indexed documents (or set it to the file you want to limit results to).
5. If you plan to index non-PDF text uploads, add a text extraction/reading step for the “txt” branch so plain files produce text for chunking and embedding.

## 🔗 Nodes Used

HTTP Request, Supabase, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
