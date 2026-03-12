# 📖 Ask questions about a PDF using AI

> ⚡ **142,454 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

The workflow first populates a Pinecone index with vectors from a Bitcoin whitepaper. Then, it waits for a manual chat message. When received, the chat message is turned into a vector and compared to the vectors in Pinecone. The most similar vectors are retrieved and passed to OpenAI for generating a chat response.

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 🔗 Nodes Used

Google Drive, Question and Answer Chain, Binary Input Loader, Embeddings OpenAI, OpenAI Chat Model, Vector Store Retriever

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
