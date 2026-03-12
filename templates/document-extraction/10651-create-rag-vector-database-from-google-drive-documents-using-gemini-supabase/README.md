# 🔬 Create RAG vector database from Google Drive documents using Gemini & Supabase

> ⚡ **712 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works

This workflow automates the process of converting Google Drive documents into searchable vector embeddings for AI-powered applications:

• Takes a Google Drive folder URL as input
• Initializes a Supabase vector database with pgvector extension
• Fetches all files from the specified Drive folder
• Downloads and converts each file to plain text
• Generates 768-dimensional embeddings using Google Gemini
• Stores documents with embeddings in Supabase for semantic search

**Built for the Study Agent workflow** to power document-based Q&A, but also works perfectly for any RAG system, AI chatbot, knowledge base, or semantic search application that needs to query document collections.

## Set up steps

**Prerequisites:**
• Google Drive OAuth2 credentials
• Supabase account with Postgres connection details
• Google Gemini API key (free tier available)

**Setup time:** ~10 minutes

**Steps:**
1. Add your Google Drive OAuth2 credentials to the Google Drive nodes
2. Configure Supabase Postgres credentials in the SQL node
3. Add Supabase API credentials to the Vector Store node
4. Add Google Gemini API key to the Embeddings node
5. Update the input with your Drive folder URL
6. Execute the workflow

**Note:** The SQL query will drop any existing "documents" table, so backup data if needed. Detailed node-by-node instructions are in the sticky notes within the workflow.

**Works with:** Study Agent (main use case), custom AI agents, chatbots, documentation search, customer support bots, or any RAG application.

## 🔗 Nodes Used

Postgres, Google Drive, Execute Workflow Trigger, Supabase Vector Store, Default Data Loader, Embeddings Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
