# ⚒️ Create a Paul Graham essay Q&A system with OpenAI and Milvus vector database

> ⚡ **1,194 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Create a Paul Graham Essay Q&A System with OpenAI and Milvus Vector Database
#### How It Works

This workflow creates a question-answering system based on Paul Graham essays. It has two main steps:

1. **Data Collection & Processing**: 
   - Scrapes [Paul Graham essays](http://www.paulgraham.com/articles.html)
   - Extracts text content
   - Loads them into a [Milvus](https://milvus.io/) vector store

2. **Chat Interaction**:
   - Provides a question-answering interface using the stored vector embeddings
   - Utilizes [OpenAI embeddings](https://platform.openai.com/docs/guides/embeddings) for semantic search

#### Set Up Steps

1. Set up a Milvus server following the [official guide](https://milvus.io/docs/install_standalone-docker.md)
2. Create a collection named "my_collection"
3. Run the workflow to scrape and load Paul Graham essays
4. Start chatting with the QA system

The workflow handles the entire process from fetching essays, extracting content, generating embeddings via OpenAI, storing vectors in Milvus, and providing retrieval for question answering.

## 🔗 Nodes Used

HTTP Request, Question and Answer Chain, Embeddings OpenAI, OpenAI Chat Model, Vector Store Retriever, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
