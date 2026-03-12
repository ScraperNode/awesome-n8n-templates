# 💬 Build website Q&A chatbot with RAG, OpenAI GPT-4o-mini and Supabase Vector DB

> ⚡ **2,922 views** · 💬 [Support Chatbots](../)

## Description

## ✅ What problem does this workflow solve?

Many websites lack a smart, searchable interface. Visitors often leave due to unanswered questions. This workflow transforms any website into a **Retrieval-Augmented Generation (RAG)** chatbot—automatically extracting content, creating embeddings, and enabling real-time, context-aware chat on your own site.

---

## ⚙️ What does this workflow do?

1. Accepts a website URL through a form trigger.
2. Fetches and cleans website content.
3. Parses content into smaller sections.
4. Generates vector embeddings using OpenAI (or your embedding model).
5. Stores embeddings and metadata in **Supabase’s vector database**.
6. When a user asks a question:
   - Searches Supabase for relevant chunks via similarity search.
   - Retrieves matching content as context.
   - Sends context + question to OpenAI to generate an accurate answer.
7. Returns the AI-generated response to the user in the chat interface.

---

## 🔧 Setup Instructions

### 🖥️ Website Form Trigger
- Use a **Form / HTTP Trigger** to submit website URLs for indexing.

### 📥 Content Extraction & Chunking
- Use HTTP nodes to fetch HTML.
- Clean and parse it (e.g., remove scripts, ads).
- Use a **Function node** to split into manageable text chunks.

### 🧠 Embedding Generation
- Call OpenAI (or Cohere) to generate embeddings for each chunk.
- Insert vectors and metadata into Supabase via its **API or n8n Supabase node**.

### 💬 User Query Handling
- Use a **Chat Trigger** (webhook/UI) to receive user questions.
- Convert the question into an embedding.
- Query Supabase with similarity search (e.g., `match_documents` RPC).
- Retrieve top-matching chunks and feed them into OpenAI with the user question.
- Return the reply to the user.

### 🛠 AI & Database Setup
- **OpenAI API key** for embedding and chat.
- A **Supabase project** with:
  - `vector` extension enabled
  - Tables for document chunks and embeddings
  - A similarity search function like `match_documents`

## 💬 How to Embed the Chat Widget on Your Website

You can add the chatbot interface to your website with a simple JavaScript snippet.

### Steps:

1. Open the "When chat message received" node
2. Copy Chat URL
3. Make sure, "Make Chat Publicly Available
"Toggle is enabled
4. Make sure the mode is "Embedded Chat"
5. Follow the instructions given on this package [here](https://www.npmjs.com/package/@n8n/chat#a-cdn-embed).

---

## 🧠 How it Works

1. **Submit URL** → Form Trigger  
2. **Fetch Website Content** → HTTP Request  
3. **Clean & Chunk Content** → Function Node  
4. **Make Embeddings** (OpenAI/Cohere)  
5. **Store in Supabase** → embeddings + metadata  
6. **User Chat** → Chat Trigger  
7. **Search for Similar Content** → Supabase similarity match  
8. **Generate Answer** → OpenAI completion w/ context  
9. **Send Reply** → Chat interface returns answer

---

## 🗂 Why Supabase?

Supabase offers a scalable Postgres-based vector database with extensions like `pgvector`, making it easy to:
- Store vector data alongside metadata
- Run ANN (Approximate Nearest Neighbor) similarity searches
- Integrate seamlessly with n8n and your chatbot UI :contentReference[oaicite:1]{index=1}

---

## 👤 Who can use this?

- 📝 **Documentation websites**
- 👩‍💼 **Support portals**
- 🏢 **Product/Landing pages**
- 🛠 **Internal knowledge bases**

Perfect for anyone who wants a **smart, website-specific chatbot** without building an entire AI stack from scratch.

---

## 🚀 Ready to Deploy?

Plug in your:
- ✅ OpenAI API Key
- ✅ Supabase project credentials
- ✅ Chat UI or webhook endpoint

… and launch your **AI-powered, website-specific RAG chatbot** in minutes!

## 🔗 Nodes Used

HTTP Request, HTML Extract, AI Agent, Embeddings Cohere, OpenAI Chat Model, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
