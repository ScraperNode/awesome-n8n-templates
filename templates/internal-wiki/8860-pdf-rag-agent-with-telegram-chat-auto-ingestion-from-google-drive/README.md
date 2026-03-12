# 📖 Pdf RAG agent with Telegram chat & auto-ingestion from Google Drive

> ⚡ **1,076 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## How it works

This workflow creates an intelligent document assistant called "Mookie" that can answer questions based on your uploaded documents. Here's how it operates:

- **Document Ingestion:** The system can automatically load PDF files from Google Drive or accept PDFs uploaded directly through Telegram, then processes and stores them in a PostgreSQL vector database using Mistral embeddings
- **Smart Retrieval:** When users ask questions via Telegram or a web chat interface, the AI agent searches through the stored documents to find relevant information using vector similarity matching
- **Contextual Responses:** Using GPT-4 and the retrieved document context, Mookie provides accurate answers based solely on the ingested documents, avoiding hallucination by refusing to answer questions not covered in the stored materials
- **Memory & Conversation:** The system maintains conversation history for each user, allowing for natural follow-up questions and contextual discussions

## Set up steps

**Estimated setup time:** 30-45 minutes
You'll need to configure several external services and credentials:

- Set up a PostgreSQL database with PGVector extension for document storage
- Create accounts and API keys for Azure OpenAI (GPT-4), Mistral Cloud (embeddings), and Google Drive access
	- Connect your own LLM's if you don't have these credentials.
- Configure a Telegram bot and obtain API credentials for chat functionality
- Update webhook URLs throughout the workflow to match your n8n instance
- Test the document ingestion pipeline with sample PDFs
- Verify the chat interfaces (both Telegram and web) are responding correctly

&gt;The workflow includes approval mechanisms for PDF ingestion and handles both automated bulk processing from Google Drive and real-time document uploads through Telegram. Read the sticky notes provided in the template code for clear instructions.

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram, Telegram Trigger, Google Drive, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
