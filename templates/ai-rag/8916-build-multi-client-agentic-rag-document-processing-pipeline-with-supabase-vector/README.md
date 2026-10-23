# 🔍 Index Google Drive files into a Supabase vector store with OpenAI embeddings

> ⚡ **1,882 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

**📺 Full walkthrough video: https://youtu.be/r5kN_la0O7I**

**Author:** [Cole Medin](https://www.youtube.com/@ColeMedin)

## Who it's for

This workflow is for developers, data engineers, and knowledge management teams who need to automatically ingest documents stored in Google Drive into a searchable vector database — supporting RAG (retrieval-augmented generation) pipelines or semantic search applications.

## How it works

1. **One-time setup:** A chat trigger runs SQL queries to create the required Postgres tables (`documents`, `document_metadata`, `document_rows`) and the vector similarity match function in Supabase/Postgres.
2. **Trigger:** Two Google Drive triggers detect newly created or updated files in a watched folder and pass them into a batch loop.
3. **Clean old data:** For each file, stale document rows and vector embeddings are deleted from Supabase before re-processing.
4. **Metadata upsert & download:** Document metadata (ID, title, URL) is upserted into Postgres, then the file binary is downloaded from Google Drive.
5. **Route by file type:** A Switch node directs each file to the correct extractor — PDF, Word/Office document, Excel spreadsheet, or CSV.
6. **Tabular data storage:** Excel and CSV rows are inserted as raw JSONB records into Postgres and aggregated into a summary.
7. **Embedding & storage:** All extracted text (documents, PDFs, tabular summaries) is chunked with a character text splitter, embedded via OpenAI, and inserted into the Supabase vector store.

## How to set up

- [ ] Connect Google Drive OAuth2 credentials to the two trigger nodes and the download node
- [ ] Add Supabase credentials to the delete and vector store insert nodes
- [ ] Add Postgres credentials to all Postgres nodes (table creation, metadata upsert, schema update, row insert)
- [ ] Set your OpenAI API key in the `OpenAI Embeddings` node
- [ ] Run the setup flow once via the chat trigger to create all database tables and the vector match function
- [ ] Set the Google Drive folder ID to watch in both trigger nodes
- [ ] Tune the Character Text Splitter chunk size and overlap to fit your document sizes

## Requirements

- Google Drive account (OAuth2)
- Supabase project with pgvector extension enabled
- Postgres database (can be the Supabase Postgres instance)
- OpenAI API key

## How to customize

- **Add file types:** Extend the Switch node with additional branches (e.g., PowerPoint, plain text) and pair each with an appropriate extractor.
- **Swap the embedding model:** Replace `text-embedding-3-small` with a larger OpenAI model or an alternative provider (e.g., Cohere, Mistral) in the embeddings node.
- **Connect a RAG chatbot:** Pipe the Supabase vector store into an AI Agent or chain node to build a document Q&A assistant on top of the ingested files.

## 🔗 Nodes Used

Postgres, Google Drive, Google Drive Trigger, Supabase, Embeddings OpenAI, Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
