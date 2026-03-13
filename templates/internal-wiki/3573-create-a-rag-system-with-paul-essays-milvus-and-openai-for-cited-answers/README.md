# 📖 Create a RAG system with Paul Essays, Milvus, and OpenAI for cited answers

> ⚡ **2,250 views** · 📖 [Internal Wiki & Knowledge Base](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Create a RAG System with Paul Essays, Milvus, and OpenAI for Cited Answers

This workflow automates the process of creating a document-based AI retrieval system using [Milvus](https://milvus.io/), an open-source vector database. It consists of two main steps:

1. Data collection/processing
2. Retrieval/response generation

The system scrapes [Paul Graham essays](https://paulgraham.com/articles.html), processes them, and loads them into a Milvus vector store. When users ask questions, it retrieves relevant information and generates responses with citations.

### Step 1: Data Collection and Processing

1. Set up a Milvus server using the [official guide](https://milvus.io/docs/install_standalone-docker.md)
2. Create a collection named "my_collection"
3. Execute the workflow to scrape Paul Graham essays:
   - Fetch essay lists
   - Extract names
   - Split content into manageable items
   - Limit results (if needed)
   - Fetch texts
   - Extract content
   - Load everything into Milvus Vector Store

This step uses [OpenAI embeddings](https://platform.openai.com/docs/guides/embeddings) for vectorization.

### Step 2: Retrieval and Response Generation

When a chat message is received, the system:

* Sets chunks to send to the model
* Retrieves relevant information from the Milvus Vector Store
* Prepares chunks
* Answers the query based on those chunks
* Composes citations
* Generates a comprehensive response

This process uses OpenAI embeddings and models to ensure accurate and relevant answers with proper citations.

For more information on vector databases and similarity search, visit [Milvus documentation](https://milvus.io/docs).

## 🔗 Nodes Used

HTTP Request, Embeddings OpenAI, OpenAI Chat Model, Recursive Character Text Splitter, Default Data Loader, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
