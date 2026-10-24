# ⚒️ Sync website crawl deltas into Qdrant with Apify and OpenAI embeddings

> ⚡ **20 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow triggers on a completed Apify Website Content Crawler run, syncs the crawl dataset into a Qdrant collection using OpenAI embeddings, then compares vector counts and parses the Apify run logs to report what chunks were added, refreshed, or deleted.

## How it works
1. Triggers when an Apify Website Content Crawler actor run finishes.
2. Calls the Qdrant Collections API to read the current point count in the target collection as a pre-sync baseline.
3. Starts an Apify Qdrant Integration actor run to upsert the crawl dataset into Qdrant, generating embeddings with OpenAI and applying delta updates plus deletion of expired chunks.
4. Waits 30 seconds to allow the Qdrant sync to finish settling.
5. Calls the Qdrant Collections API again to read the post-sync point count.
6. Fetches the Apify actor run logs and outputs a freshness report with vectors-before/after and the counts of chunks added, refreshed, and deleted.

## Setup
1. Create and select an Apify API credential for the Apify Trigger, the sync run request, and the log request.
2. Set environment variables `QDRANT_API_KEY` and `OPENAI_API_KEY`, and allow env access in nodes (for example by setting `N8N_BLOCK_ENV_ACCESS_IN_NODE=false` if required by your n8n deployment).
3. Replace `https://YOUR-CLUSTER.qdrant.io:6333` with your Qdrant endpoint in all Qdrant URLs and in the sync request body, and ensure the `docs` collection name matches your intended collection (or allow auto-create).
4. Ensure the Apify Website Content Crawler actor is available in your Apify account and run it once so the trigger can be configured and tested.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
