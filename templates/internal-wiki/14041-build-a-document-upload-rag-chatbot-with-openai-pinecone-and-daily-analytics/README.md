# 📖 Build a document-upload RAG chatbot with OpenAI, Pinecone and daily analytics

> ⚡ **450 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Overview

This workflow implements a **complete Retrieval-Augmented Generation (RAG) knowledge assistant with built-in document ingestion, conversational AI, and automated analytics** using n8n, OpenAI, and Pinecone.

The system allows users to upload documents, automatically convert them into embeddings, query the knowledge base through a chat interface, and receive daily reports about chatbot performance and document usage.

Instead of manually searching through documentation, users can ask questions in natural language and receive answers grounded in the uploaded files. The workflow retrieves the most relevant document chunks from a vector database and provides them to the language model as context, ensuring accurate and source-based responses.

In addition to answering questions, the workflow records all chat interactions and generates **daily usage analytics**. These reports summarize chatbot activity, highlight the most referenced documents, and identify failed lookups where information could not be found.

This architecture is useful for teams building **internal knowledge assistants, documentation chatbots, AI support tools, or searchable company knowledge bases** powered by Retrieval-Augmented Generation.

---

## How It Works

1. **Document Upload Interface**
   - Users upload PDF, CSV, or JSON files through a form trigger.
   - These documents become part of the knowledge base used by the chatbot.

2. **Document Processing**
   - Uploaded files are loaded and converted into text.
   - The text is split into smaller chunks to improve embedding quality and retrieval accuracy.

3. **Embedding Generation**
   - Each text chunk is converted into vector embeddings using the OpenAI Embeddings node.

4. **Vector Database Storage**
   - The embeddings are stored in a Pinecone vector database.
   - This creates a searchable semantic index of the uploaded documents.

5. **Chat Interface**
   - Users interact with the knowledge base through a chat interface.
   - Each message becomes a query sent to the RAG system.

6. **RAG Retrieval**
   - The workflow retrieves the most relevant document chunks from Pinecone.
   - These chunks are provided to the language model as context.

7. **AI Response Generation**
   - The chatbot generates an answer using only the retrieved document information.
   - This ensures responses remain grounded in the knowledge base.

8. **Chat Logging**
   - User questions, AI responses, timestamps, and referenced documents are logged.
   - This enables monitoring and analytics of chatbot usage.

9. **Daily Analytics Workflow**
   - A scheduled trigger runs every morning.
   - The workflow retrieves chat logs from the previous 24 hours.

10. **Report Generation**
   - Usage statistics are calculated, including:
     - total questions asked
     - failed document lookups
     - most referenced documents
     - overall success rate.

11. **Email Summary**
   - A formatted HTML report is generated and sent via email to provide a daily overview of chatbot activity and knowledge base performance.

---

## Setup Instructions

1. **Configure Pinecone**
   - Create a Pinecone index for storing document embeddings.
   - Enter the index name in the **Workflow Configuration** node.

2. **Add OpenAI Credentials**
   - Configure credentials for:
     - OpenAI Chat Model
     - OpenAI Embeddings node.

3. **Configure Data Tables**
   - Create the following n8n Data Tables:
     - `form_responses`
     - `chat_logs`

4. **Set Workflow Parameters**
   - In the **Workflow Configuration** node configure:
     - Pinecone namespace
     - chunk size
     - chunk overlap
     - retrieval depth (top-K).

5. **Configure Email Notifications**
   - Add Gmail credentials to send daily summary reports.

6. **Deploy the Workflow**
   - Share the document upload form with users.
   - Enable the chat interface for question answering.

---

## Use Cases

### Internal Knowledge Assistant
Allow employees to search internal documentation using natural language questions.

### Customer Support Knowledge Base
Provide instant answers from support manuals, product documentation, or help center articles.

### Documentation Search Engine
Turn large document collections into an AI-powered searchable knowledge system.

### AI Helpdesk Assistant
Enable support teams to quickly retrieve answers from company knowledge repositories.

### Knowledge Base Analytics
Monitor chatbot usage, identify missing documentation, and understand which files are most valuable to users.

---

## Requirements

- n8n with LangChain nodes enabled
- OpenAI API credentials
- Pinecone account and index
- Gmail credentials for sending reports
- n8n Data Tables:
  - `form_responses`
  - `chat_logs`

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
