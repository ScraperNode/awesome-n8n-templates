# 📖 Find the most relevant workflow templates using RAG, Qdrant and Gemini

> ⚡ **376 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## 🤖 AI Workflow Recommender (RAG + Qdrant + Gemini)

This workflow helps users find the most relevant n8n templates using AI.

It combines Retrieval-Augmented Generation (RAG), vector search (Qdrant), and Gemini to understand user intent and recommend workflows based on meaning, not just keywords.

---

## ⚙️ How it works

1. Collect workflow templates from the n8n API using multiple search queries
2. Process and clean the data (split, format, deduplicate)
3. Convert workflows into embeddings using Gemini
4. Store embeddings in a vector database (Qdrant)
5. Accept user queries via chat interface
6. Convert queries into embeddings
7. Retrieve relevant workflows using semantic search
8. Generate AI-powered recommendations with explanations and template links

---

## 🚀 What this workflow does

- Understands user intent (not just keywords)
- Finds relevant workflows using semantic similarity
- Recommends the best workflows with explanations
- Provides ready-to-use template links

---

## 🧩 Setup steps

- Set up Qdrant (Cloud or self-hosted)
- Add Google Gemini API credentials
- Run the Data Ingestion workflow to populate the database
- Activate the RAG chatbot workflow

---

## ⚠️ Important

- Make sure the vector database is populated before using the chatbot
- Ensure embedding model and vector dimension match
- Free-tier APIs may have rate limits

---

## 🎥 Tutorial

@[youtube](pPFrxlJFNu8)

## 🔗 Nodes Used

HTTP Request, AI Agent, Simple Memory, Default Data Loader, Chat Trigger, Qdrant Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
