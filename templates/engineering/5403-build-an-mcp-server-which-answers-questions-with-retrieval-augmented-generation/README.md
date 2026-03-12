# ⚒️ Build an MCP server which answers questions with retrieval augmented generation

> ⚡ **4,338 views** · ⚒️ [Engineering](../)

## Description

## Build an MCP Server which has access to a semantic database to perform Retrieval Augmented Generation (RAG)

## Tutorial
![thumbnail.png](fileId:1878)
[Click here to watch the full tutorial on YouTube](https://youtu.be/GB2RZ25HTD8)

## How it works
This MCP Server has access to a local semantic database (Qdrant) and answers questions being asked to the MCP Client.

## AI Agent Template
[Click here to navigate to the AI Agent n8n workflow which uses this MCP server](https://n8n.partnerlinks.io/5398-ai-assistant-which-answers-questions-with-a-rag-mcp-and-a-search-engine-mcp)

## Warning
This flow only runs local and cannot be executed on the n8n cloud platform because of the MCP Client Community Node.

## Installation
1. Install n8n + Ollama + Qdrant using the [Self-hosted AI starter kit](https://github.com/n8n-io/self-hosted-ai-starter-kit)

2. Make sure to install Llama 3.2 and mxbai-embed-large as embeddings model.

3. Activate the n8n flow

![activate n8n flow.png](fileId:1593)

4. Run the "RAG Ingestion Pipeline" and upload some PDF documents

## How to use it
1. Run the MCP Client workflow and ask a question. It will be either answered by using the semantic database or the search engine API.

## More detailed instructions
Missed a step? Find more detailed instructions here: https://brightdata.com/blog/ai/news-feed-n8n-openai-bright-data

## 🔗 Nodes Used

n8n Form Trigger, Default Data Loader, Qdrant Vector Store, Embeddings Ollama, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
