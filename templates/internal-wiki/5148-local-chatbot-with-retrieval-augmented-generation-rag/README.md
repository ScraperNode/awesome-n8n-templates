# 📖 Local chatbot with retrieval augmented generation (RAG)

> ⚡ **110,801 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Build a 100% local RAG with n8n, Ollama and Qdrant. This agent uses a semantic database (Qdrant) to answer questions about PDF files.

## Tutorial
![thumbnail.png](fileId:1589)
[Click here to view the YouTube Tutorial](https://youtu.be/maZ_fF57yhE)

## How it works
Build a chatbot that answers based on documents you provide it (Retrieval Augmented Generation). You can upload as many PDF files as you want to the Qdrant database. The chatbot will use its retrieval tool to fetch the chunks and use them to answer questions.

## Installation
1. Install n8n + Ollama + Qdrant using the [Self-hosted AI starter kit](https://github.com/n8n-io/self-hosted-ai-starter-kit)
2. Make sure to install Llama 3.2 and mxbai-embed-large as embeddings model.

## How to use it
1. First run the "Data Ingestion" part and upload as many PDF files as you want
2. Run the Chatbot and start asking questions about the documents you uploaded

## 🔗 Nodes Used

AI Agent, Ollama Chat Model, Simple Memory, Recursive Character Text Splitter, n8n Form Trigger, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
