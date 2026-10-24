# 🔬 Reindex markdown RAG chunks with Supabase pgvector and webhooks

> ⚡ **27 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow reindexes Markdown documentation into a Supabase Postgres pgvector table by fetching source docs from an HTTP API, chunking and embedding them via a Supabase Edge Function, upserting the vectors, and deleting stale chunks on a daily schedule or on-demand webhook.

## How it works
1. Runs daily on a schedule or triggers when a POST request hits the webhook endpoint.
2. Fetches Markdown sources (for example FAQ and blog posts) from a configured HTTP API endpoint.
3. Strips frontmatter, splits content on H2 sections, chunks long sections with overlap, and batches chunks for embedding.
4. For each batch, calls a Supabase Edge Function to generate embeddings for the chunk texts.
5. Upserts each chunk’s source, index, content, and pgvector embedding into a Supabase Postgres `rag_chunks` table using conflict updates.
6. After processing batches, deletes rows in `rag_chunks` whose `updated_at` timestamp is older than the current run to remove stale chunks.

## Setup
1. Add an HTTP Header Auth credential for the sources API request and for calling the Supabase Edge Function.
2. Add Supabase Postgres credentials with access to the database where the vector table lives.
3. Create a `public.rag_chunks` table with a pgvector `embedding` column (matching your model’s dimensions) and a primary key on `(source, chunk_idx)`.
4. Update the sources API URL, the Supabase Edge Function `/embed` URL, and (optionally) the daily schedule time and batch/chunk sizing constants to match your environment.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
