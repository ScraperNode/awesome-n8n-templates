# 🔬 Load help center pages into a Pinecone knowledge base with OpenAI embeddings

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow manually fetches help pages (or demo docs), chunks them, generates OpenAI embeddings, and upserts the vectors into a Pinecone index so they can be used for retrieval-based support or chat.

## How it works
1. Starts when you run the workflow manually.
2. Reads configuration to decide whether to load URLs from DOC_URLS or use the built-in demo knowledge base.
3. Fetches each public document URL with retries, converts the HTML to plain text, and records any pages that fail or contain too little text.
4. Splits each document into overlapping text chunks with stable chunk IDs so re-running updates existing vectors instead of duplicating them.
5. If OpenAI/Pinecone loading is not enabled (for example, preview mode or missing configuration), outputs the chunks that would be embedded and upserted without writing anything.
6. Otherwise, batches chunks, calls the OpenAI Embeddings API to create vectors, and skips any batches that fail to embed after retries.
7. Upserts each successfully embedded batch into Pinecone with title, source, and chunk text stored as metadata, and reports either the upsert counts or the Pinecone error.

## Setup
1. Add an OpenAI API credential in n8n and set USE_OPENAI to true in the config node.
2. Create a Pinecone index whose vector dimension matches EMBED_DIMENSIONS, then add a Pinecone HTTP Header Auth credential (Api-Key) and set PINECONE_INDEX_HOST and PINECONE_NAMESPACE in the config node.
3. Add your public documentation URLs to DOC_URLS and adjust CHUNK_WORDS/CHUNK_OVERLAP if you want different chunking behavior.
4. Switch out of preview mode (set TEST_EMAIL for test mode or set TEST_RUN to false) so upserts are enabled.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
