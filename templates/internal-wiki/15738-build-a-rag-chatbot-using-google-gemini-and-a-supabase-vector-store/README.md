# 📖 Build a RAG chatbot using Google Gemini and a Supabase vector store

> ⚡ **415 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# 🧠 AI Chatbot with RAG: Google Gemini & Supabase Vector Store

## 📌 Summary

Build a custom, intelligent knowledge base in minutes. This n8n workflow provides a complete Retrieval-Augmented Generation (RAG) system using Google Gemini and Supabase. It features a seamless dual-flow design: an ingestion pipeline to process and store your uploaded documents, and a conversational AI agent that queries those documents to provide accurate, context-aware answers while remembering past interactions.

---

## ✨ Key Features

* **Two-in-One Architecture:** Combines both the document ingestion pipeline and the conversational chat interface into a single, cohesive workflow template.
* **State-of-the-Art AI:** Leverages Google Gemini (`models/gemini-embedding-001` and `models/gemini-2.5-flash`) for high-quality text embeddings and intelligent chat generation.
* **Persistent Conversational Memory:** Uses PostgreSQL to remember chat histories per `sessionId`, allowing the AI to maintain context across ongoing conversations. The chat trigger automatically generates a unique Session ID per browser window, keeping individual user conversations completely separate.
* **Vector-Powered Accuracy:** Integrates with Supabase (pgvector) to retrieve the top 5 most relevant chunks, ensuring the agent answers based *strictly* on your uploaded company documents without hallucinating.
* **Global Error Handling:** Built-in error triggers actively catch API rate limits, parsing failures, and bad requests, formatting them into clear alerts ready to be routed to your team.

---

## 🛠️ How It Works

1. **Data Ingestion (Knowledge Base Setup):** * Documents are uploaded via the Form Trigger and validated for size (&lt;10MB) to prevent parsing timeouts.
   * The text is parsed and split into optimized 1000-character chunks with a 100-character overlap.
   * Gemini generates embeddings for these chunks, which are permanently stored in your Supabase Vector Store.
2. **Query Processing (Chat Interface):**
   * A user asks a question via the **Chat Trigger**.
   * The AI Agent accesses the Postgres database to load previous chat context for that specific user's session.
   * The Agent uses the Supabase Retriever tool to pull the top 5 most relevant document chunks based on the user's query.
   * Gemini formulates a concise, factual response citing the retrieved data.

---

## 🚀 Setup Instructions

### 1. **Create Database Tables**
Before running the workflow, ensure your Supabase/Postgres database has the required tables. 
⚠️ **See the "DATABASE SETUP (SQL)" sticky note on the canvas for the complete SQL script.**

### 2. Connect Credentials
Connect your **Google Gemini API**, **Supabase** (URL and Service Role Key), and **Postgres** databases. *(Note: Your Postgres memory can be hosted within your Supabase project).* Ensure your Supabase database has `pgvector` enabled.

### 3. **Update Table Names**
Open the Supabase and Postgres nodes and replace:
- `your_documents_table` → your actual table name
- `your_chat_history_table` → your actual table name

### 4. **Configure Error Notifications (Important)**
The workflow catches errors and formats an alert message, but you must manually connect a messaging node (like Slack, Microsoft Teams, or Email) directly after the **Format Error Alert** node to receive these notifications.

### 5. Ingest Data
Open the **Upload Knowledge Base Form** node, click "Test step", and upload a sample document to index it into your database.

### 6. Test the Agent
Open the **User Chat Trigger** node, click "Chat", and ask a question related to the document you just uploaded!

---

## 📦 Nodes Used

**User-Facing Interfaces:**
* **Chat Trigger** - The user-facing chat interface for asking questions (includes Pin Data for easy testing).
* **Form Trigger & File Validator** - Provides a simple UI to upload and size-check files, with explicitly stated rules for the end-user. Includes a Webhook Response for success confirmation.

**Data Processing Pipeline (Ingestion):**
* **Document Default Data Loader** - Extracts raw text from uploaded files.
* **Character Text Splitter** - Chunks large texts into digestible pieces (1000 chars) for the AI.
* **Embeddings Google Gemini** - Converts text chunks into mathematical vectors.
* **Supabase Inserter** - Stores vectors in the knowledge base.

**AI & Memory (Query):**
* **Supabase Retriever** - Performs semantic search to find top 5 relevant chunks.
* **Postgres Chat Memory** - Stores and retrieves historical chat context by session ID.
* **Google Gemini Chat Model** - The core LLM powering the conversational responses.
* **Knowledge-Base AI Agent** - Orchestrates the memory, tools, and LLM to answer the user's prompt.

**Error Handling:**
* **Error Trigger & Format Error Alert** - Catches global execution failures. Connect an output to route these formatted alerts to your team.

---

## ⚠️ Limitations & Guidelines

* **File Size & Type:** The workflow limits files to 10MB to prevent memory exhaustion, and currently supports `.pdf, .txt, .docx, .pptx`. Highly complex PDFs with nested tables or un-OCR'd images may fail parsing.
* **Context Window Limits:** While the Agent tracks sessions, very long ongoing conversations (e.g., hundreds of messages) will eventually hit the LLM's token limit. It is recommended to implement a cron job or separate workflow to prune the `chat_history` table periodically or clear old sessions.
* **API Costs:** Each document ingestion and chat query uses Gemini API calls (embeddings + chat). Monitor your API usage.

## 🔗 Nodes Used

Stop and Error, AI Agent, Character Text Splitter, n8n Form Trigger, Supabase Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
