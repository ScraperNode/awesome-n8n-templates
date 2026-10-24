# 📖 Build an OpenAI RAG system with document upload, semantic search and caching

> ⚡ **778 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Overview
This workflow implements a complete Retrieval-Augmented Generation (RAG) system for document ingestion and intelligent querying.

It allows users to upload documents, convert them into vector embeddings, and query them using natural language. The system retrieves relevant document context and generates accurate AI responses while using caching to improve performance and reduce costs.

This workflow is ideal for building AI knowledge bases, document assistants, and internal search systems.

---

## How It Works

### 1. Input & Configuration
- Receives requests via webhook (`rag-system`)
- Supports two actions:
  - `upload` → process documents
  - `query` → answer questions
- Defines:
  - Chunk size & overlap
  - TopK retrieval count
  - Database table names

---

###  Document Upload Flow

2. **Text Extraction**
   - Extracts text from uploaded PDF documents

3. **Text Chunking**
   - Splits text into overlapping chunks for better retrieval accuracy

4. **Document Structuring**
   - Converts chunks into structured documents

5. **Embedding Generation**
   - Generates vector embeddings using OpenAI

6. **Vector Storage**
   - Stores embeddings in PGVector (Postgres)

7. **Upload Logging**
   - Logs document metadata (user, filename, timestamp)

8. **Response**
   - Returns success message via webhook

---

###  Query Flow

9. **Cache Check**
   - Checks if query result exists in cache (last 1 hour)

10. **Cache Routing**
   - If cached → return cached response  
   - If not → proceed to retrieval  

---

###  Cache Hit Flow

11. **Format Cached Response**
   - Standardizes cached output format

12. **Respond to User**
   - Returns cached answer with `cached: true`

---

###  Cache Miss Flow

13. **Vector Retrieval**
   - Retrieves top relevant document chunks from PGVector

14. **AI Answer Generation**
   - Uses LLM with retrieved context
   - Generates accurate, context-based answer

15. **Cache Storage**
   - Saves query + response in database for reuse

16. **Response**
   - Returns generated answer with `cached: false`

---

## Setup Instructions

1. **Webhook Setup**
   - Configure endpoint (`rag-system`)
   - Send payload with:
     - `action`: upload / query
     - `user_id`
     - `document` or `query`

2. **OpenAI Setup**
   - Add API credentials for:
     - Embeddings
     - Chat model

3. **Postgres + PGVector**
   - Enable PGVector extension
   - Create tables:
     - `documents`
     - `query_cache`
     - `upload_log`

4. **Configure Parameters**
   - Adjust:
     - Chunk size (e.g., 1000)
     - Overlap (e.g., 200)
     - TopK (e.g., 5)

5. **Optional Enhancements**
   - Add authentication layer
   - Add multi-tenant filtering (user_id)

---

## Use Cases

- AI document search systems  
- Internal knowledge base assistants  
- Customer support knowledge retrieval  
- Legal or compliance document analysis  
- SaaS AI chat with custom data  

---

## Requirements

- OpenAI API key  
- Postgres database with PGVector  
- n8n instance (cloud or self-hosted)  

---

## Key Features

- Full RAG architecture (upload + query)  
- PDF document ingestion pipeline  
- Semantic search with vector embeddings  
- Context-aware AI responses  
- Query caching for performance optimization  
- Multi-user support via metadata filtering  
- Scalable and modular design  

---

## Summary

A complete RAG-based AI system that enables document ingestion, semantic search, and intelligent query answering. It combines vector databases, LLMs, and caching to deliver fast, accurate, and scalable AI-powered knowledge retrieval.

## 🔗 Nodes Used

Postgres, Webhook, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
