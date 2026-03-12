# 💬 Bitrix24 AI-Powered RAG Chatbot for Open Line Channels

> ⚡ **6,886 views** · 💬 [Support Chatbots](../)

## Description

## Overview
Transform your Bitrix24 Open Line channels with an intelligent chatbot that leverages Retrieval-Augmented Generation (RAG) technology to provide accurate, document-based responses to customer inquiries in real-time.

## Use Case
This workflow is designed for organizations that want to enhance their customer support capabilities in Bitrix24 by providing automated, knowledge-based responses to customer inquiries. It's particularly useful for:

- Customer service teams handling repetitive questions
- Support departments with extensive documentation
- Sales teams needing quick access to product information
- Organizations looking to provide 24/7 customer support

## What This Workflow Does

### Smart Document Processing
- Automatically processes uploaded PDF documents
- Splits documents into manageable chunks
- Generates vector embeddings for semantic understanding
- Indexes content for efficient retrieval

### AI-Powered Responses
- Utilizes Google Gemini AI to generate natural language responses
- Constructs answers based on relevant document content
- Maintains conversation context for coherent interactions
- Provides fallback responses when information is not available

### Vector Database Integration
- Stores document embeddings in Qdrant vector database
- Enables semantic search beyond simple keyword matching
- Retrieves the most relevant information for each query
- Maintains a persistent knowledge base that grows over time

### Webhook Handler
- Processes incoming messages from Bitrix24 Open Line channels
- Handles authentication and security validation
- Routes different types of events to appropriate handlers
- Manages session and conversation state

### Event Routing
- Intelligently routes different event types:
  - `ONIMBOTMESSAGEADD`: Processes new user messages
  - `ONIMBOTJOINCHAT`: Handles bot joining a conversation
  - `ONAPPINSTALL`: Manages application installation
  - `ONIMBOTDELETE`: Handles bot deletion

### Document Management
- Organizes processed documents in designated folders
- Tracks document processing status
- Moves indexed documents to appropriate locations
- Maintains document metadata for reference

### Interactive Menu
- Provides menu-based options for common user requests
- Customizable menu items and responses
- Easy navigation for users seeking specific information
- Fallback to operator option when needed

## Technical Architecture

### Components
1. **Webhook Handler**: Receives and validates incoming requests from Bitrix24
2. **Credential Manager**: Securely manages authentication tokens and API keys
3. **Event Router**: Directs events to appropriate processing functions
4. **Document Processor**: Handles document loading, chunking, and embedding
5. **Vector Store**: Qdrant database for storing and retrieving document embeddings
6. **Retrieval System**: Searches for relevant document chunks based on user queries
7. **LLM Integration**: Google Gemini model for generating natural language responses
8. **Response Manager**: Formats and sends responses back to Bitrix24

### Integration Points
- **Bitrix24 API**: For bot registration, message handling, and user interaction
- **Ollama API**: For generating document embeddings
- **Qdrant API**: For vector storage and retrieval
- **Google Gemini API**: For AI-powered response generation

## Setup Instructions

### Prerequisites
- Active Bitrix24 account with Open Line channels enabled
- Access to n8n workflow system
- Ollama API credentials
- Qdrant vector database access
- Google Gemini API key

### Configuration Steps

1. **Initial Setup**
   - Import the workflow into your n8n instance
   - Configure credentials for all services
   - Set up webhook endpoints

2. **Bitrix24 Configuration**
   - Create a new Bitrix24 application
   - Configure webhook URLs
   - Set appropriate permissions
   - Install the application to your Bitrix24 account

3. **Document Storage**
   - Create a designated folder in Bitrix24 for knowledge base documents
   - Configure folder paths in the workflow settings
   - Upload initial documents to be processed

4. **Bot Configuration**
   - Customize bot name, avatar, and description
   - Configure welcome messages and menu options
   - Set up fallback responses

5. **Testing**
   - Verify successful installation
   - Test document processing pipeline
   - Send test queries to evaluate response qu

## 🔗 Nodes Used

Function, HTTP Request, Webhook, Execute Sub-workflow, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
