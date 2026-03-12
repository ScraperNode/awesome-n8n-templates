# 📖 Chat with documents via RAG: Google Drive to GPT-5 with Supabase vector database

> ⚡ **371 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# 📄 n8n RAG Ingestion & Query Workflow

## **Overview**
This workflow is your **all-in-one pipeline** to turn any document into a powerful **searchable knowledge base** using **RAG** (Retrieval-Augmented Generation).  
From the moment a file lands in your Google Drive, it’s automatically processed, understood, and made ready for instant AI-powered answers.

If you’re looking to **unlock hidden value in your files** and get answers in seconds instead of hours, this workflow is the foundation you need.

---

## **What It Does for You**
- **📥 Automatic Ingestion** – New files in a designated Google Drive folder are instantly picked up.
- **🔍 OCR Extraction** – Extracts **all** text, whether it’s plain or inside tables.
- **📚 Vector Database Storage** – Keeps your documents in **Supabase** for lightning-fast semantic search.
- **🧩 Smart Chunking** – Each page becomes a single chunk for better understanding.
- **💡 AI-Powered Answers** – Ask questions in natural language and get precise, context-aware responses.
- **🧠 Persistent Memory** – Remembers previous chats for more coherent conversations.
- **⚡ GPT-5 Intelligence** – Uses OpenAI’s most advanced model for deep, accurate answers.

---

## **How It Works**
1. **Detect** → Watches your Google Drive folder for new files.
2. **Extract** → Uses Mistral AI to read all text, including tables.
3. **Chunk** → Splits content so one page = one chunk for better context.
4. **Embed** → Generates vector embeddings with OpenAI for semantic search.
5. **Store** → Inserts processed content into Supabase.
6. **Retrieve & Answer** → When you ask, the system searches the database and passes the results to GPT-5.
7. **Remember** → Stores conversation history in Postgres for continuity.

---

## **Why You Want This**
- Stop wasting time digging through files.
- Get **fast, AI-driven answers** from your own documents.
- Keep your data organized and searchable at any scale.
- Designed for **businesses, researchers, and teams** who want instant access to the right information.
- You get the template + setup guide and description

---

## **Key Highlights**
- **End-to-End Automation** – From upload to query, no manual steps needed.
- **Flexible** – Works with any document type.
- **High Accuracy** – Large chunk size preserves full page context.
- **Scalable** – Add as many files as you want without slowing down.
- **Future-Ready** – Built to grow with your needs.


---

🚀 **Imagine having your own private ChatGPT trained on your files.**  
This workflow makes it happen. Upload, search, and get answers — all automatically.

## 🔗 Nodes Used

Slack, Telegram, Telegram Trigger, Google Drive, Gmail, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
