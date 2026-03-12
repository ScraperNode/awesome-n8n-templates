# 📖 🤖 AI powered RAG chatbot for your docs + Google Drive + Gemini + Qdrant

> ⚡ **84,791 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# 🤖 AI-Powered RAG Chatbot with Google Drive Integration

This workflow creates a powerful RAG (Retrieval-Augmented Generation) chatbot that can process, store, and interact with documents from Google Drive using Qdrant vector storage and Google's Gemini AI.

## How It Works

### Document Processing & Storage 📚
- Retrieves documents from a specified Google Drive folder
- Processes and splits documents into manageable chunks
- Extracts metadata using AI for enhanced search capabilities
- Stores document vectors in Qdrant for efficient retrieval

### Intelligent Chat Interface 💬
- Provides a conversational interface powered by Google Gemini
- Uses RAG to retrieve relevant context from stored documents
- Maintains chat history in Google Docs for reference
- Delivers accurate, context-aware responses

### Vector Store Management 🗄️
- Features secure delete operations with human verification
- Includes Telegram notifications for important operations
- Maintains data integrity with proper version control
- Supports batch processing of documents

## Setup Steps

1. Configure API Credentials:
   - Set up Google Drive & Docs access
   - Configure Gemini AI API
   - Set up Qdrant vector store connection
   - Add Telegram bot for notifications
   - Add OpenAI Api Key to the '**Delete Qdrant Points by File ID**' node

2. Configure Document Sources:
   - Set Google Drive folder ID
   - Define Qdrant collection name
   - Set up document processing parameters

3. Test and Deploy:
   - Verify document processing
   - Test chat functionality
   - Confirm vector store operations
   - Check notification system


This workflow is ideal for organizations needing to create intelligent chatbots that can access and understand large document repositories while maintaining context and providing accurate responses through RAG technology.

## 🔗 Nodes Used

Webhook, Telegram, Google Drive, Google Docs, AI Agent, LangChain Code

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
