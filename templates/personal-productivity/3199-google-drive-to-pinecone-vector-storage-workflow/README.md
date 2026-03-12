# ⚡ Google Drive to Pinecone vector storage workflow

> ⚡ **294 views** · ⚡ [Personal Productivity](../)

## Description

# Document Chat Bot with Automated RAG System

This workflow creates a conversational assistant that can answer questions based on your Google Drive documents. It automatically processes various file types and uses Retrieval-Augmented Generation (RAG) to provide accurate answers based on your document content.

## How It Works

1. **Monitors Google Drive for New Documents**: Automatically detects when files are created or updated in designated folders
2. **Processes Multiple File Types**: Handles PDFs, Excel spreadsheets, and Google Docs
3. **Builds a Knowledge Base**: Converts documents into searchable vector embeddings stored in Supabase
4. **Provides Chat Interface**: Users can ask questions about their documents through a web interface
5. **Retrieves Relevant Information**: Uses advanced RAG techniques to find and present the most relevant information

## Setup Steps (Estimated time: 25-30 minutes)

1. **API Credentials**: Connect your OpenAI API key for text processing and embeddings
2. **Google Drive Integration**: Set up Google Drive triggers to monitor specific folders
3. **Supabase Configuration**: Configure Supabase vector database for document storage
4. **Chat Interface Setup**: Deploy the web-based chat interface using the provided webhook

The workflow automatically chunks documents into manageable segments, generates embeddings, and stores them in a vector database for efficient retrieval. When users ask questions, the system finds the most relevant document sections and uses them to generate accurate, contextual responses.

## 🔗 Nodes Used

Webhook, Google Drive, Google Drive Trigger, Supabase, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
