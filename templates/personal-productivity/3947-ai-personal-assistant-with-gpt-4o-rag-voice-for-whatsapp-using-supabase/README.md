# ⚡ AI personal assistant with GPT-4o, RAG & voice for WhatsApp using Supabase

> ⚡ **4,009 views** · ⚡ [Personal Productivity](../)

## Description

### 🧠 Intelligent AI Assistant with RAG & Voice for WhatsApp – Built with GPT-4o & Supabase

---

### 📌 About this workflow and its creator

Hi! I’m Amanda, a creator of intelligent automations using n8n and Make. I’ve been building AI-powered workflows for over 2 years, always focused on usability and innovation. This one here is very special to me – a truly advanced AI assistant that reads, listens, interprets and responds like a real human 🤖✨

This ready-to-use workflow acts as a powerful AI personal assistant capable of understanding messages via voice, text, documents, or even images. It supports full multi-channel operation (WhatsApp via Evolution API, Instagram, Facebook, and more), and includes advanced RAG capabilities using Supabase + GPT-4o. It’s designed to be highly extensible, with memory, prompt update tools, and knowledge base management.

---

### ⚙️ What this workflow does

- 💬 Understands user input via text, document, audio or image (voice, OCR, PDF)
- 🎤 Transcribes and interprets voice messages using OpenAI Whisper
- 🧠 Understands prompts and user commands using GPT-4o via LangChain agent
- 🗂️ Searches knowledge base using RAG + Supabase vector DB
- 📄 Accepts documents and automatically indexes them for future questions
- 🧾 Summarizes documents and stores metadata in Supabase
- 🗃️ Offers memory support (PostgreSQL chat memory per user session)
- 📧 Sends replies through WhatsApp (Evolution API), Instagram, Facebook, etc.
- 📅 Manages schedules (via tool integration with Google Calendar)
- 📬 Sends and searches emails (with support tools)
- 🛠 Modular and expandable structure (tools for saving knowledge, deleting, updating prompt)

---

### 🔧 Setup Instructions

1. **n8n Hosting**  
   This workflow **requires n8n self-hosted** (or n8n Cloud with custom credentials + community nodes enabled).

2. **Create required databases**  
   Use the provided SQL queries inside the `setar_supabase_tabelas_vectoriais`, `criar_cerebro`, and `criar_rag_controle` nodes to initialize:
   - `documents` table for RAG
   - `cerebro` table for prompt
   - `memoria_chat` for session memory
   - `rag_controle` for summaries and indexing

3. **Credentials needed**
   - OpenAI API (for chat, embeddings and Whisper transcription)
   - Redis (for managing message buffer)
   - Supabase (for vector store + metadata)
   - Postgres (for memory and prompts)
   - Evolution API (or other messaging platforms)

4. **Webhook**
   Set the webhook path to receive messages from your Evolution or WhatsApp API provider.

5. **Configure ‘Set’ node**
   In the `config` node, adjust:
   - `adminNumero`: your personal WhatsApp or admin number
   - `evolutionApiKey`: your private API key
   - `utilizacaoApenasViaAdmin`: toggle if this should only respond to admin numbers

6. **Tool connections**
   Ensure the supporting workflows are also imported and connected for:
   - Emails
   - Knowledge management
   - Calendar events

---

### 📎 Notes

- This workflow uses LangChain agents, OpenAI GPT-4o, Supabase, Redis, and PostgreSQL.
- It includes multiple “sticky notes” inside the workflow with explanations.
- Ideal for businesses, consultants, and developers looking to offer an intelligent and extendable AI chatbot experience.

---

## 🛍 Want to use this on your system?
❤️ Buy workflows: [https://iloveflows.com](https://iloveflows.com)  
☁️ Use n8n Cloud with my partner link: [https://n8n.partnerlinks.io/amanda](https://n8n.partnerlinks.io/amanda)

## 🔗 Nodes Used

Postgres, Redis, Webhook, Execute Sub-workflow, Supabase, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
