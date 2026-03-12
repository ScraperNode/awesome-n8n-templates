# 📖 Create a private document Q&A system with Llama3, Postgres, Qdrant and Google Drive

> ⚡ **3,606 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## ⚙️ How It Works: LocalRAG.AI

⚠️ Note: This system only works for self-hosted n8n instances. It will not function on n8n.cloud or other remote setups.
LocalRAG.AI is a private, on-prem AI assistant that uses your own documents to answer questions intelligently. It combines LangChain, Ollama, Qdrant, and Postgres into a powerful AI pipeline — all running locally for maximum data privacy.

## 🔄 What It Does
Monitors Your Google Drive Folders for new or updated files.
Downloads the file, extracts the text, and prepares it.
Generates Embeddings using your local Ollama model (e.g., LLaMA 3).
Stores them in Qdrant, your local vector database.
During a chat, it:
Uses vector search to retrieve relevant chunks.
Combines them with chat history stored in Postgres.
Responds via a LangChain AI agent using your local model.
🛠️ Setup Steps (Self-hosted Only)
Install and Self-host n8n (e.g., via Docker).
Set up your Ollama instance locally and load your desired LLM (e.g., llama3).
Deploy Qdrant locally for vector storage.
Connect a Postgres DB to store chat history.
Create and import the workflow in n8n.
Authenticate Google Drive to monitor folders.
Connect credentials for Ollama, Qdrant, Postgres in the n8n workflow.
Start chatting through the Webhook Trigger or custom UI.
🧠 Perfect For:
Research teams handling confidential data
Internal documentation Q&A
AI chatbots that don’t rely on OpenAI or cloud

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, AI Agent, Ollama Chat Model, Ollama Model, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
