# 📖 Basic RAG chat

> ⚡ **5,481 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This workflow demonstrates a simple Retrieval-Augmented Generation (RAG) pipeline in n8n, split into two main sections:

🔹 Part 1: Load Data into Vector Store
Reads files from disk (or Google Drive).

Splits content into manageable chunks using a recursive text splitter.

Generates embeddings using the Cohere Embedding API.

Stores the vectors into an In-Memory Vector Store (for simplicity; can be replaced with Pinecone, Qdrant, etc.).

🔹 Part 2: Chat with the Vector Store
Takes user input from a chat UI or trigger node.

Embeds the query using the same Cohere embedding model.

Retrieves similar chunks from the vector store via similarity search.

Uses Groq-hosted LLM to generate a final answer based on the context.

🛠️ Technologies Used:
📦 Cohere Embedding API

⚡ Groq LLM for fast inference

🧠 n8n for orchestrating and visualizing the flow

🧲 In-Memory Vector Store (for prototyping)

🧪 Usage:
Upload or point to your source documents.

Embed them and populate the vector store.

Ask questions through the chat trigger node.

Receive context-aware responses based on retrieved content.

## 🔗 Nodes Used

Question and Answer Chain, Embeddings Cohere, Vector Store Retriever, Recursive Character Text Splitter, Simple Vector Store, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
