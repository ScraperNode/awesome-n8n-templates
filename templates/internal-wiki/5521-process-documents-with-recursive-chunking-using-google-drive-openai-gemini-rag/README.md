# 📖 Process documents with recursive chunking using Google Drive, OpenAI & Gemini RAG

> ⚡ **3,048 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

**1. Document Ingestion & Processing**

Google Drive Trigger monitors for new files → Loop Over Items processes each file → File Info extracts metadata → Google Drive downloads the actual content → Switch routes to appropriate extractors (PDF or TEXT) based on file type

**2. Content Transformation & Chunking**

Document Data node processes extracted text → Recursive Splitter breaks content into contextual chunks → Chunk Splitting applies intelligent segmentation while preserving document context and relationships between chunks

**3. Embedding & Storage**

Basic LLM Chain processes chunks → OpenAI Chat Model generates contextual understanding → Summarize creates document summaries → Supabase Vector Store saves embeddings with metadata → Embeddings OpenAI creates vector representations → Default Data Loader handles storage operations

**4. Query Processing & Retrieval**

When Clicking Execute triggers user queries → OpenAI processes and understands the question → AI Agent orchestrates hybrid search (combining vector similarity + keyword matching) → Google Gemini Chat Model generates final responses using retrieved context → HTTP Request handles additional external data sources

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, AI Agent, Basic LLM Chain, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
