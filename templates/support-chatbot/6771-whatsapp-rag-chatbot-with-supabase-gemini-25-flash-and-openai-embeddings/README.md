# 💬 WhatsApp RAG chatbot with Supabase, Gemini 2.5 Flash, and OpenAI embeddings

> ⚡ **7,818 views** · 💬 [Support Chatbots](../)

## Description

## WhatsApp RAG Chatbot with Supabase, Gemini 2.5 Flash, and OpenAI Embeddings

This n8n template demonstrates how to build a **WhatsApp-based AI chatbot** that answers user questions using **document retrieval (RAG)** powered by **Supabase** for storage, **OpenAI embeddings** for semantic search, and **Gemini 2.5 Flash LLM** for generating high-quality responses.

Use cases are many: Turn your WhatsApp into a **knowledge assistant** for FAQs, customer support, or internal company documents — all without coding.

---

### Good to know

- The workflow uses **OpenAI embeddings** for both document embeddings and query embeddings, ensuring accurate semantic search.  
- **Gemini 2.5 Flash LLM** is used to generate user-friendly answers from the retrieved context.  
- Messages are processed in **real-time** and sent back directly to WhatsApp.  
- Workflow is modular — you can split document ingestion and query handling for large-scale setups.  
- Supabase and WhatsApp API credentials must be configured before running.  

---

### How it works

1. **Trigger**: A new WhatsApp message triggers the workflow via webhook.  
2. **Message Check**: Determines if the message is a query or a document upload.  
3. **Document Handling**:  
   - Fetch file URL from WhatsApp.  
   - Convert binary to text.  
   - Generate embeddings with **OpenAI** and store them in **Supabase**.  
4. **Query Handling**:  
   - Generate query embeddings with **OpenAI**.  
   - Retrieve relevant context from **Supabase**.  
   - Pass context to **Gemini 2.5 Flash LLM** to compose a response.  
5. **Response**: Send the answer back to the user on WhatsApp.  

*Optional:* Add Gmail node to forward chat logs or daily summaries.

---

### How to use

- Configure **WhatsApp Business API** webhook for incoming messages.  
- Add your **Supabase** and **OpenAI** credentials in n8n’s credentials manager.  
- Upload documents via WhatsApp to populate the Supabase vector store.  
- Ask queries — the bot retrieves context and answers using **Gemini 2.5 Flash**.

---

### Requirements

- **WhatsApp Business API** (or Twilio WhatsApp Sandbox)  
- **Supabase account** (vector storage for embeddings)  
- **OpenAI API key** (for generating embeddings)  
- **Gemini API access** (for LLM responses)  

---

### Customising this workflow

- Swap WhatsApp with **Telegram, Slack, or email** for different chat channels.  
- Extend ingestion to other sources like **Google Drive or Notion**.  
- Adjust the number of retrieved documents or prompt style in Gemini for tone control.  
- Add a **Gmail output node** to send logs or alerts automatically.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, Embeddings OpenAI, Supabase Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
