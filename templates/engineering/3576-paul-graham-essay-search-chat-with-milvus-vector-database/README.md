# ⚒️ Paul Graham essay search & chat with Milvus vector database

> ⚡ **1,516 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Paul Graham Essay Search & Chat with Milvus Vector Database
### How It Works

This workflow creates a RAG (Retrieval-Augmented Generation) system using [Milvus](https://milvus.io/) vector database to search Paul Graham essays:

1. **Scrape & Load**: Fetches [Paul Graham essays](https://paulgraham.com/articles.html), extracts text, and stores them as vector embeddings in Milvus
2. **Chat Interface**: Enables semantic search and AI-powered conversations about the essays

### Set Up Steps

1. Set up Milvus server following the [official installation guide](https://milvus.io/docs/install_standalone-docker.md), then create a collection
2. Execute the workflow to scrape essays and load them into your Milvus collection
3. Chat with the AI agent using the Milvus tool to query and discuss essay content

## 🔗 Nodes Used

HTTP Request, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Recursive Character Text Splitter, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
