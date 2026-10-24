# 📖 Build a dual-stage RAG chat assistant with Google Drive, Ollama, Pinecone and Gemini

> ⚡ **6 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This template builds a dual-stage RAG system that ingests PDFs/text from Google Drive into a Pinecone knowledge-base index with Ollama embeddings, and serves chat queries via a Pinecone semantic cache that falls back to a Google Gemini AI Agent with vector retrieval.

## How it works
1. Triggers on a Google Drive folder update (or manually) to list and download files from a specified Drive folder.
2. Detects whether each file is a PDF or plain text and extracts the document text accordingly.
3. Splits extracted content into overlapping chunks, embeds them with Ollama (nomic-embed-text), and inserts the vectors into a Pinecone index for the knowledge base.
4. Triggers when a chat message is received and embeds the user query with Ollama to search the Pinecone semantic-cache index for the closest prior answer.
5. Returns the cached answer immediately when the best match score is at least 0.88.
6. On a cache miss, uses a Google Gemini AI Agent with conversation memory and a Pinecone vector-store retrieval tool to generate a grounded answer from the knowledge-base index.
7. Stores the new query-and-answer pair back into the Pinecone semantic-cache index for faster responses to future similar questions.

## Setup
1. Create two Pinecone indexes using cosine similarity and 768 dimensions: one for the knowledge base (e.g. `nomic-embed-text`) and one for the semantic cache (e.g. `rag-semantic-cache`).
2. Set up Pinecone credentials in n8n and select the correct index names in the Pinecone vector store nodes.
3. Run Ollama and pull the `nomic-embed-text` model, then configure Ollama credentials/base URL in n8n.
4. Add Google Drive OAuth2 credentials and replace `YOUR_GOOGLE_DRIVE_FOLDER_ID` with the folder you want to ingest.
5. Add a Google Gemini API key and confirm the model name (for example `models/gemini-1.5-flash`) in both Gemini chat model nodes.
6. If you use the chat trigger via webhook, copy the chat/webhook URL from n8n and configure your client to send messages to it.

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, AI Agent, Simple Memory, Pinecone Vector Store, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
