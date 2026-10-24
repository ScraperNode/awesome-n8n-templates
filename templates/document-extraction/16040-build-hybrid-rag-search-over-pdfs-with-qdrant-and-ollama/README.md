# 🔬 Build hybrid RAG search over PDFs with Qdrant and Ollama

> ⚡ **209 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow ingests a local PDF into Qdrant with Ollama embeddings, then supports hybrid retrieval by querying Qdrant with both dense vectors and BM25 sparse vectors from an n8n chat trigger.

## How it works
1. Starts manually to read a PDF from disk and extract its text content.
2. Checks whether the Qdrant collection exists and creates it with a 768-dimension dense vector and a BM25-based sparse vector field if needed.
3. Splits the extracted text into chunks, adds metadata, generates dense embeddings with Ollama (nomic-embed-text), and inserts the documents into the Qdrant vector store.
4. Scrolls all stored points from Qdrant, builds a per-point BM25 sparse vector payload from each point’s content, and updates Qdrant vectors without overwriting existing fields.
5. Triggers on an incoming chat message, generates an embedding for the query via Ollama’s embeddings HTTP API, and runs a Qdrant hybrid search that fuses dense and BM25 results using RRF.

## Setup
1. Configure Qdrant credentials (REST API and Vector Store) and ensure the workflow points to the correct Qdrant URL/collection name (default: collection "testing").
2. Set up Ollama credentials and ensure the nomic-embed-text:latest model is available, and update the embeddings endpoint URL if your Ollama host is not `http://host.docker.internal:11434`.
3. Place the source PDF on the n8n host and update the file path in the disk read step (default: `/tmp/n8n_Self_Hosted_Enterprise_Terms_and_Conditions.pdf`).
4. Enable the chat trigger and use its webhook/chat entry point to send queries into the workflow.

## 🔗 Nodes Used

HTTP Request, Recursive Character Text Splitter, Read/Write Files from Disk, Extract from File, Default Data Loader, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
