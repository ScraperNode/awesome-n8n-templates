# 🔬 Scrape and ingest web pages into a Pinecone RAG stack with Firecrawl and OpenAI

> ⚡ **1,187 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**What this does**

Receives a URL via webhook, uses Firecrawl to scrape the page into clean markdown, and stores it as vector embeddings in Pinecone. A visual, self-hosted ingestion pipeline for RAG knowledge bases. Adding a new source is as simple as sending a URL.

The second part of the workflow exposes a chat interface where an AI Agent queries the stored knowledge base to answer questions, with Cohere reranking for better retrieval quality.

**How it works**

Part 1: Ingestion Pipeline
1. **Webhook** receives a POST request with a `url` field
2. **Verify URL** validates and normalizes the domain, returning a 422 error if invalid
3. **Firecrawl `/scrape`** fetches the page and converts it to clean markdown
4. **Embeddings OpenAI** generates 1536-dimensional vector embeddings from the scraped content
5. **Default Data Loader** attaches the source URL as metadata
6. **Pinecone Vector Store** inserts the content and embeddings into the index
7. **Respond to Webhook** confirms how many items were added

Part 2: RAG Chat Agent
1. **Chat trigger** receives a user question
2. **AI Agent** (OpenRouter / Claude Sonnet) queries the Pinecone vector store
3. **Cohere Reranker** improves retrieval quality before the agent responds
4. **Agent** answers based solely on the ingested knowledge base

🔥 Firecrawl   
🌲 Pinecone   
🧠 OpenAI Embeddings   
🤖 OpenRouter (Claude Sonnet)   
🎯 Cohere Reranker

**Webhook usage**

Send a POST request to the webhook URL:

```bash
curl -X POST https://your-n8n-instance/webhook/your-id \
  -H "Content-Type: application/json" \
  -d '{"url": "firecrawl.dev"}'
```

**Pinecone setup**

Your Pinecone index must be configured with **1536 dimensions** to match the OpenAI `text-embedding-3-small` model output. See the sticky note inside the workflow for the exact index settings.

**Requirements**
- Firecrawl API key
- OpenAI API key (for embeddings)
- OpenRouter API key (for the chat agent)
- Cohere API key (for reranking)
- Pinecone account with a properly configured index

## 🔗 Nodes Used

Webhook, AI Agent, Embeddings OpenAI, Simple Memory, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
