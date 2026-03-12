# ⚒️ Paul Graham essay search & chat with Milvus vector database

> ⚡ **1,516 views** · ⚒️ [Engineering](../)

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
