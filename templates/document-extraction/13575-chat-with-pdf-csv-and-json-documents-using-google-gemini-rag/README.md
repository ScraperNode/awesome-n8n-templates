# 🔬 Chat with PDF, CSV, and JSON documents using Google Gemini RAG

> ⚡ **118 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview

Turn documents into an AI-powered knowledge base.

Upload PDF, CSV, or JSON files and ask natural-language questions about their content using a Retrieval-Augmented Generation (RAG) workflow powered by Google Gemini. The workflow extracts, embeds, and semantically searches document data to generate accurate, source-grounded answers.

Designed as a simple and extensible starting point for building AI document assistants.

---

## Key Features

- Upload and analyze **PDF, CSV, and JSON**
- AI chatbot with semantic document search
- Retrieval-Augmented Generation (RAG) architecture
- Answers grounded in uploaded documents
- Beginner-friendly workflow with clear documentation
- Easy to extend for production use

---

## How It Works

1. Upload a document via form trigger  
2. Content is split into searchable chunks  
3. Gemini generates embeddings  
4. Data is stored in a vector store  
5. The chatbot retrieves context and answers questions  

---

## Requirements

- Google Gemini API credentials

---

## Notes

- Uses an **in-memory vector store** (data resets on restart)
- Can be replaced with Pinecone, Supabase, Weaviate, or other persistent databases
- Gemini API usage may incur costs depending on document size and query volume

## 🔗 Nodes Used

AI Agent, Simple Memory, Recursive Character Text Splitter, Simple Vector Store, n8n Form Trigger, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
