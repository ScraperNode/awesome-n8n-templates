# 📖 Build a retrieval-based chatbot with Telegram, OpenAI and Google Drive PDF backup

> ⚡ **1,619 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# 📚 Telegram RAG Chatbot with PDF Document & Google Drive Backup
- An upgraded Retrieval-Augmented Generation (RAG) chatbot built in **n8n** that lets users ask questions via Telegram and receive accurate answers from uploaded PDFs. It embeds documents using OpenAI and backs them up to Google Drive.

## 👤 Who’s it for

Perfect for:
- Knowledge workers who want instant access to private documents
- Support teams needing searchable SOPs and guides
- Educators enabling course material Q&A for students
- Individuals automating personal document search + cloud backup

## ⚙️ How it works / What it does

### 💬 Telegram Chat Handling
1. **User sends a message**  
   Triggered by the Telegram bot, the workflow checks if the message is text.

2. **Text message → OpenAI RAG Agent**  
   If the message is text, it's passed to a GPT-powered document agent.  
   This agent:
   - Retrieves relevant info from embedded documents using semantic search
   - Returns a context-aware answer to the user

3. **Send answer back**  
   The bot sends the generated response back to the Telegram user.

4. **Non-text input fallback**  
   If the message is not text, the bot replies with a polite unsupported message.

### 📄 PDF Upload and Embedding
1. **User uploads PDFs manually**  
   A manual trigger starts the embedding flow.

2. **Default Data Loader**  
   Reads and chunks the PDF(s) into text segments.

3. **Insert to Vector Store (Embedding)**  
   Text chunks are embedded using OpenAI and saved for retrieval.

4. **Backup to Google Drive**  
   The original PDF is uploaded to Google Drive for safekeeping.

## 🛠️ How to set up

1. **Telegram Bot**
   - Create via [BotFather](https://t.me/botfather)
   - Connect it to the Telegram Trigger node

2. **OpenAI**
   - Use your OpenAI API key
   - Connect the Embeddings and Chat Model nodes (GPT-3.5/4)
   - Ensure both embedding and querying use the same Embedding node

3. **Google Drive**
   - Set up credentials in n8n for your Google account
   - Connect the “Backup to Google Drive” node

4. **PDF Ingestion**
   - Use the “Upload your PDF here” trigger
   - Connect it to the loader, embedder, and backup flow

## ✅ Requirements

- Telegram bot token
- OpenAI API key (GPT + Embeddings)
- n8n instance (self-hosted or cloud)
- Google Drive integration
- PDF files to upload

## 🧩 How to customize the workflow

| Feature                        | How to Customize                                                  |
|-------------------------------|-------------------------------------------------------------------|
| Auto-ingest from folders       | Add Google Drive/Dropbox watchers for new PDFs                   |
| Add file upload via Telegram   | Extend Telegram bot to receive PDFs and run the embedding flow   |
| Track user questions           | Log Telegram usernames and questions to a database               |
| Summarize documents            | Add summarization step on upload                                 |
| Add Markdown or HTML support   | Format replies for better Telegram rendering                     |

Built with 💬 Telegram + 📄 PDF + 🧠 OpenAI Embeddings + ☁️ Google Drive + ⚡ n8n

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Drive, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
