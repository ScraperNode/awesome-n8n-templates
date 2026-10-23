# 🔬 Index local documents for RAG using Ollama embeddings and Qdrant

> ⚡ **111 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow ingests a local document file, splits it into chunks, generates embeddings with Ollama (nomic-embed-text), and stores the vectors in a Qdrant collection for on-prem RAG indexing.

## How it works
1. Runs manually when you click Execute workflow in n8n.
2. Reads a document from disk from the n8n host/container file system.
3. Extracts text content from the file (configured for PDF extraction).
4. Splits the extracted text into overlapping chunks using a recursive character splitter.
5. Generates embeddings for each chunk with Ollama using the nomic-embed-text model.
6. Inserts the chunk texts and their embeddings into a specified Qdrant collection.

## Setup
1. Self-host n8n with a mounted volume and update the file path to a container-accessible path in the Read/Write Files from Disk step.
2. Run Ollama locally, pull the nomic-embed-text model, and add an Ollama credential in n8n pointing to your Ollama instance.
3. Set up a Qdrant instance, create a Qdrant API credential in n8n (URL and API key), and set the target collection name (for example, handbook) in the Qdrant step.

## Requirements
- Self-hosted n8n (Docker or npm-based) this workflow will not run on n8n Cloud, since it depends on the local-filesystem "Read/Write Files from Disk" node.
- Ollama installed and running locally, with the nomic-embed-text model pulled (ollama pull nomic-embed-text).
- A Qdrant instance (local or cloud) with a URL and API key you can register as an n8n credential.
- A document file (PDF by default; swap the extraction node's operation for other formats) accessible on the n8n host/container filesystem.

## Customization
- Swap the embedding model by changing the Ollama credential/model name to a different local embedding model.
- Point the "Extract from File" node at a different format (DOCX, CSV, HTML) instead of PDF.
- Adjust chunk size/overlap on the Recursive Character Text Splitter for longer or shorter context windows.
- Swap Qdrant for another n8n-supported vector store if you'd rather not self-host Qdrant.
- Replace the manual trigger with a Schedule Trigger or Webhook to automate ingestion of new files as they arrive.

## Additional info
Pairs with a companion template, "Local RAG Query Chatbot," which queries the same Qdrant collection this workflow populates — run this Indexer first, then use that template to ask questions about the indexed content. Runs entirely on local models (Ollama + Qdrant), so there's no per-query API cost once set up.

Known limitation: retrieval quality on the companion query template depends on the Vector Store Retriever's Top K setting. With the default value, questions needing multiple facts at once may retrieve an incomplete set of chunks, and the assistant will correctly decline rather than guess. Increase Top K on the retriever node if you need broader recall.

## 🔗 Nodes Used

Recursive Character Text Splitter, Read/Write Files from Disk, Extract from File, Default Data Loader, Qdrant Vector Store, Embeddings Ollama

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
