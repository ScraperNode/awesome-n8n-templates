# 📖 Create a self-updating RAG chatbot with Google Drive, Gemini, and Supabase

> ⚡ **1,560 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This template creates a comprehensive, production-ready Retrieval-Augmented Generation (RAG) system. It builds a sophisticated AI agent that can answer questions based on documents stored in a specific Google Drive folder, and it automatically keeps its knowledge base up-to-date as you add, update, or remove files.

**Who’s it for?**

This workflow is perfect for developers, businesses, and AI agencies looking to:

Create an internal knowledge base chatbot for employees (e.g., for HR policies, technical documentation, or project information).

Build an intelligent support agent that uses your company's official documents as its source of truth.

Develop advanced AI solutions for clients that require a self-maintaining knowledge base.

**How it works?**

This workflow is divided into three distinct, powerful systems:

The RAG Agent: This is the core chatbot. It receives a user's question, uses a Supabase Vector Store to find the most relevant document snippets, leverages a Cohere Reranker to improve accuracy, and uses a Postgres database to maintain conversation history (memory). It then uses Google Gemini to generate a final, context-aware answer.

The Ingestion Pipeline: This system automates the process of learning new information. It triggers whenever a file is created or updated in your designated Google Drive folder. It intelligently detects the file type (Google Doc or PDF), extracts the text, splits it into manageable chunks, generates embeddings using Gemini, and stores them in your Supabase vector database.

The Cleanup System: To ensure your knowledge base remains accurate, a scheduled process runs periodically to find and remove data from Supabase that corresponds to files that have been deleted from the Google Drive folder. This prevents the agent from using outdated information.

**How to set up**

To get this workflow running, you will need to configure the following:

Credentials: Connect your accounts in the n8n credential manager for:

Google Drive (OAuth2)

Supabase (API Key)

Postgres

Google Gemini (API Key from Google AI Studio)

Cohere (API Key)

Google Drive Folder: In the Search files and folders node, replace the placeholder folder ID with the ID of the Google Drive folder you want to monitor.

Database Setup: Ensure your Supabase and Postgres instances are set up with the necessary tables. You'll need a documents table in Supabase for the vectors and a document_metadata table in Postgres.

How to customize the workflow
This template is a powerful starting point. You can easily customize it by:

Swapping out the LLM (e.g., use OpenAI or Anthropic instead of Gemini).

Changing the vector database (e.g., Pinecone, Weaviate).

Adding more data sources, such as Notion, Slack, or websites.

## 🔗 Nodes Used

Postgres, Google Drive, Google Drive Trigger, Supabase, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
