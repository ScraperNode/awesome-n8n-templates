# 📖 Build a RAG system for PDF documents with Google Drive, Unstructured, and OpenAI

> ⚡ **563 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This template monitors a Google Drive folder, converts PDF documents into clean text chunks with Unstructured, generates OpenAI embeddings, and upserts vectors into Pinecone. It’s a practical, production-ready starting point for Retrieval-Augmented Generation (RAG) that you can plug into a chatbot, semantic search, or internal knowledge tools.

## How it works
1) Google Drive Trigger detects new files in a selected folder and downloads them.
2) The files are sent to Unstructured where they are split into smaller pieces (chunks).
3) The chunks are prepared to be sent to OpenAI where they are converted into vectors (embeddings).
4) The embeddings are recombined with their original data and the payload is prepared for upsert into the Pinecone index.

## Set up steps
1) In Pinecone, create an index with 1536 dimensions and configure it for `text-embedding-3-small`.
2) Copy the host url and paste it on the 'Pinecone Upsert' node. It should look something like this: https://{your-index-name}.pinecone.io/vectors/upsert.
3) Add Google Drive, OpenAI and Pinecone credentials in n8n.
4) Point the trigger to your ingest folder (you can use [this article](https://drive.google.com/file/d/1dLlFEYfwecVJA2bwH9tWzG_K9bdesKVM/view) for demo).
5) Click the 'Open chat' button and enter the following: _Which Git provider do the authors use?_

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
