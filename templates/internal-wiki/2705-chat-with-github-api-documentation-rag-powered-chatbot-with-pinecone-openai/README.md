# 📖 Chat with GitHub API documentation: RAG-powered chatbot with Pinecone & OpenAI

> ⚡ **30,077 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This workflow demonstrates a Retrieval Augmented Generation (RAG) chatbot that lets you chat with the GitHub API Specification (documentation) using natural language. Built with n8n, OpenAI's LLMs and the Pinecone vector database, it provides accurate and context-aware responses to your questions about how to use the GitHub API.
You could adapt this to any OpenAPI specification for any public or private API, thus creating a documentation chatbout that anyone in your company can use.

## How it works:

* Data Ingestion: The workflow fetches the complete GitHub API OpenAPI 3 specification directly from the GitHub repository.
Chunking and Embeddings: It splits the large API spec into smaller, manageable chunks. OpenAI's embedding models then generate vector embeddings for each chunk, capturing their semantic meaning.
* Vector Database Storage: These embeddings, along with the corresponding text chunks, are stored in a Pinecone vector database.
* Chat Interface and Query Processing: The workflow provides a simple chat interface. When you ask a question, it generates an embedding for your query using the same OpenAI model.
* Semantic Search and Retrieval: Pinecone is queried to find the most relevant text chunks from the API spec based on the query embedding.
* Response Generation: The retrieved chunks and your original question are fed to OpenAI's `gpt-4o-mini` LLM, which generates a concise, informative, and contextually relevant answer, including code snippets when applicable.

## Set up steps:

* Create accounts: You'll need accounts with OpenAI and Pinecone.
* API keys: Obtain API keys for both services.
Configure credentials: In your n8n environment, configure credentials for OpenAI and Pinecone using your API keys.
* Import the workflow: Import this workflow into your n8n instance.
* Pinecone Index: Ensure you have a Pinecone index named "n8n-demo" or adjust the workflow accordingly. The workflow is set up to work with this index out of the box.

### Setup Time: Approximately 15-20 minutes.

## Why use this workflow?

* Learn RAG in Action: This is a practical, hands-on example of how to build a RAG-powered chatbot.
* Adaptable Template: Easily modify this workflow to create chatbots for other APIs or knowledge bases.
* n8n Made Easy: See how n8n simplifies complex integrations between data sources, vector databases, and LLMs.

## 🔗 Nodes Used

HTTP Request, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
