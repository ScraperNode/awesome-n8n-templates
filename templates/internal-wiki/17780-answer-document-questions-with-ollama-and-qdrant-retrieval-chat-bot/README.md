# 📖 Answer document questions with Ollama and Qdrant retrieval chat bot

> ⚡ **88 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow provides a local RAG chatbot in n8n that answers chat questions using context retrieved from a Qdrant collection, generating responses with a local Ollama chat model and Ollama embeddings.

## How it works
1. Receives a user question from the n8n chat trigger.
2. Retrieves the most relevant document chunks from a Qdrant vector collection using an Ollama-powered embedding model.
3. Injects the retrieved context into a retrieval QA prompt that instructs the assistant to answer only from the provided passages and to decline when information is missing.
4. Uses the Ollama chat model (qwen2.5:7b) to generate a concise answer grounded in the retrieved context.

## Setup
1. Run the companion indexing workflow first (Index local documents for RAG using Ollama embeddings and Qdrant, https://creators.n8n.io/workflows/17764) to embed your document content into Qdrant.
2. Start Ollama locally and pull the required models (qwen2.5:7b and nomic-embed-text:latest).
3. Create n8n credentials for your local Ollama service and your Qdrant instance.
4. Set the Qdrant collection name to match the one used during indexing (for example, "handbook").
5. If recall is too narrow for multi-fact questions, increase the retriever Top K setting to fetch more chunks.

## Requirements
- Ollama installed and running locally with qwen2.5:7b and nomic-embed-text:latest pulled
- A Qdrant instance, self-hosted or cloud, with a collection already populated by the companion Index workflow
- n8n credentials set up for your local Ollama service and your Qdrant instance

## Customization
- Swap qwen2.5:7b for a different Ollama chat model if you want to trade speed for stronger reasoning
- Raise the Vector Store Retriever's Top K setting to pull in more chunks for multi-fact questions
- Edit the QA chain prompt to change tone, add source citations, or make refusals stricter on out of scope questions

## Additional info
Companion workflow, run this one first: Index local documents for RAG using Ollama embeddings and Qdrant, https://creators.n8n.io/workflows/17764

Runs 100 percent locally with no OpenAI API keys, so documents never leave your machine. Good fit for clients who care about data residency or privacy.

## 🔗 Nodes Used

Question and Answer Chain, Ollama Chat Model, Vector Store Retriever, Chat Trigger, Qdrant Vector Store, Embeddings Ollama

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
