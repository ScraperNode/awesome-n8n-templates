# 🔬 Sync WordPress and WooCommerce content with Pinecone using OpenAI embeddings

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow syncs WordPress/WooCommerce pages and blog posts into a Pinecone vector index by fetching content in small batches, generating OpenAI embeddings, and tracking indexed items in an n8n Data Table to handle updates and deletions.

## How it works
1. Runs on a manual trigger or on a daily cron schedule.
2. Fetches up to 100 published WordPress pages and up to 100 published posts (IDs and modified timestamps) via the WooCommerce/WordPress REST API.
3. Compares the live IDs/modified dates with the `indexed_wc_blog_v1` n8n Data Table and selects up to `staticBatchSize` pages/posts that are new or changed.
4. Fetches the full content for the selected batch from the WordPress pages and posts endpoints and combines the results.
5. For each page/post, strips HTML, prepares metadata, deletes any existing Pinecone vectors for the same `fileId`, then splits text, generates OpenAI embeddings, and inserts the chunks into Pinecone.
6. Upserts the page/post’s `fileId` and `dateModified` into the `indexed_wc_blog_v1` Data Table to record what was indexed.
7. Identifies entries that exist in `indexed_wc_blog_v1` but no longer exist in WordPress and deletes their vectors from Pinecone and their rows from the Data Table.

## Setup
1. Add WooCommerce API credentials with access to the WordPress REST API endpoints for pages and posts.
2. Add an OpenAI API credential for creating embeddings.
3. Add a Pinecone API credential, create or select a Pinecone index, and set the index host and namespace values.
4. Create an n8n Data Table named `indexed_wc_blog_v1` with text columns `productId`, `indexedAt`, and `dateModified`.
5. Update `wooBaseUrl`, `pineconeIndexName`, `pineconeIndexHost`, `pineconeNamespace`, and `staticBatchSize` in the “WC: Settings (static content)” node before enabling the schedule.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Embeddings OpenAI, Recursive Character Text Splitter, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
