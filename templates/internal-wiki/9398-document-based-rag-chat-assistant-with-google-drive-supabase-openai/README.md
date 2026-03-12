# 📖 Document-based RAG chat assistant with Google Drive, Supabase & OpenAI

> ⚡ **528 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

### What is this?
This RAG workflow allows you to build a smart chat assistant that can answer user questions based on any collection of documents you provide. It automatically imports and processes files from Google Drive, stores their content in a searchable vector database, and retrieves the most relevant information to generate accurate, context-driven responses. The workflow manages chat sessions and keeps the document database current, making it adaptable for use cases like customer support, internal knowledge bases, or HR assistant etc.

## How it works
### 1. Chat RAG Agent
- Uses OpenAI for responses, referencing only specific data from the vector store (data that is uploaded on google drive folder).
- Maintains chat history in Postgres using a session key from the chat input.

### 2. Data Pipeline (File Ingestion)
- Monitors Google Drive for new/updated files and automatically updates them in vector store
- Downloads, extracts, and processes file content (PDFs, Google Docs).
- Generates embeddings and stores them in the Supabase vector store for retrieval.

### 3. Vector Store Cleanup
- Scheduled and manual routines to remove duplicate or outdated entries from the Supabase vector store.
- Ensures only the latest and unique documents are available for retrieval.

### 4. File Management
- Handles folder and file creation, upload, and metadata assignment in Google Drive.
- Ensures files are organized and linked with their corresponding vector store entries.

## Getting Started
- Create and connect all relevant credentials
  - Google Drive
  - Postgres
  - Supabase
  - OpenAI
- Run the table creation nodes first to set up your database tables in Postgres
- Upload your documents through Google Drive (or swap out for a different file storage solution)
- The agent will process them automatically (chunking text, storing tabular data in Postgres)
- Start asking questions that leverage the agent's multiple reasoning approaches

## Customization (optional)
This template provides a solid foundation that you can extend by:
- Tuning the system prompt for your specific use case
- Adding document metadata like summaries
- Implementing more advanced RAG techniques
- Optimizing for larger knowledge bases
- Note, if you're using a different nodes eg. file storage, vector store etc the integration may vary a little


## Prerequisites
- Google account (google drive)
- Supabase account
- OpenAI APIs
- Postgres account

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, Supabase, Schedule Trigger, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
