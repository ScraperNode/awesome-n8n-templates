# 📖 Create an AI knowledge base assistant using Ollama, PGVector and Telegram

> ⚡ **247 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This workflow automatically converts uploaded documents and text into an AI-powered searchable knowledge base using semantic vector embeddings and Retrieval-Augmented Generation (RAG). Users can upload PDFs, JSON, CSV, XLS, XLSX, or raw text files, which are automatically processed, chunked, embedded, and stored in PostgreSQL PGVector for intelligent retrieval.Questions can then be asked directly through Telegram, where the system retrieves relevant context and generates AI-powered responses using Ollama and Llama 3.

⚙️ How it works

Users can upload files or raw text through an n8n form interface. The workflow automatically extracts content from supported formats such as PDF, JSON, CSV, XLS, XLSX, and plain text, then splits the content into searchable chunks. Using the nomic-embed-text embedding model, vector embeddings are generated and stored in PostgreSQL with PGVector for semantic retrieval. Users can then ask questions through Telegram, where the system performs semantic similarity search to retrieve the most relevant document context. Finally, Llama 3 running via Ollama generates an AI-powered contextual response, which is sent back to the user through the Telegram bot.

📦 Requirements

•	Ollama
•	Llama 3 model
•	nomic-embed-text embedding model
•	PostgreSQL with PGVector extension
•	Telegram Bot API credentials
•	Docker
•	Cloudflare Tunnel or ngrok (optional for public access)

📚 Supported File Types

•	PDF
•	JSON
•	CSV
•	XLS
•	XLSX
•	Plain Text

🚀 Use Cases

•	Personal AI knowledge base
•	AI document assistant
•	Semantic document search
•	Internal company knowledge retrieval
•	Telegram AI chatbot
•	Private/self-hosted RAG system

## 🔗 Nodes Used

Telegram, Telegram Trigger, Question and Answer Chain, Ollama Chat Model, Vector Store Retriever, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
