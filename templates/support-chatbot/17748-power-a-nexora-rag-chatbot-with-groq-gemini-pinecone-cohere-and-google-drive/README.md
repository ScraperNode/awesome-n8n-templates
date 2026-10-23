# 💬 Power a Nexora RAG chatbot with Groq, Gemini, Pinecone, Cohere and Google Drive

> ⚡ **14 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow powers a RAG chatbot that answers chat messages using a Groq Llama model grounded in a Pinecone knowledge base, and automatically updates that knowledge base by ingesting new files added to a specific Google Drive folder using Google Gemini embeddings and Cohere reranking.

## How it works
1. Receives an incoming chat message via a public webhook-based chat trigger.
2. Uses a Groq Chat Model to run an AI agent that answers strictly from retrieved context and maintains short-term conversation memory.
3. Retrieves relevant knowledge base chunks from a Pinecone vector index using Google Gemini embeddings and Cohere reranking.
4. Returns the grounded response back to the chat client.
5. Triggers every minute when a new file is created in a specific Google Drive folder.
6. Downloads the new file, splits it into chunks, generates embeddings with Google Gemini, and inserts the chunks into the same Pinecone index for future retrieval.

## Setup
1. Add credentials for Groq, Pinecone, Cohere, Google Drive OAuth2, and the Google Gemini (PaLM) API.
2. Set the Google Drive folder to watch for new documents and ensure the account has access to read files in that folder.
3. Create or select the target Pinecone index (set to `erhan8n` in this workflow) and ensure its vector dimensions match the Google Gemini embedding model you use.
4. Copy the chat trigger’s public webhook URL and configure it in your chat/UI client that sends messages into the workflow.

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, AI Agent, Simple Memory, Recursive Character Text Splitter, Pinecone Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
