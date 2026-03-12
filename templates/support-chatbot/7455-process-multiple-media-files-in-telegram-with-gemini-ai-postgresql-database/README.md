# 💬 Process multiple media files in Telegram with Gemini AI & PostgreSQL database

> ⚡ **10,045 views** · 💬 [Support Chatbots](../)

## Description

# 🤖📨 Telegram AI Assistant with Multi-File Media Group Handling, Smart File Processing & PostgreSQL Integration

&gt; **AI-powered Telegram bot for text, voice, video, documents & media — with database-driven grouping and Telegram-safe formatting.**

---

## 📋 Description

This n8n template creates a **next-generation Telegram AI assistant** 🧠💬 capable of handling **text messages, media files, and documents** with advanced processing, PostgreSQL integration, and AI-powered responses.

It is designed to **solve Telegram’s media group challenge** 📦 — when multiple files are sent together, they are stored, processed, and combined into one coherent AI-generated reply.

### ✨ Key Features
- 📂 **Multi-file media group management** with PostgreSQL:
  - `media_group`
  - `media_queue`
  - `chat_histories`
- 📑 **Document parsing** for CSV, HTML, ICS, JSON, ODS, PDF (with AI fallback), RTF, TXT, XML, and spreadsheets.
- 🎤 **Voice & video transcription** for AI analysis.
- 🖼️ **Image, audio, and video description** for richer AI context.
- 🛡️ **Telegram-safe MarkdownV2 formatting** with auto-splitting for messages over 4096 chars.
- ⚠️ **Error fallback** for unsupported file types.

---

## 💡 Acknowledgment

A huge thank you to **Ezema Gingsley Chibuzo** 🙌 for the inspiration of the first version of this workflow:  
[Create a Multi-Modal Telegram Support Bot with GPT-4 and Supabase RAG](https://n8n.io/workflows/5589-create-a-multi-modal-telegram-support-bot-with-gpt-4-and-supabase-rag/)  
Your pioneering work laid the foundation for this improved, **database-powered multi-modal assistant** 🚀

---

## 🏷 Tags
`telegram` `ai-assistant` `postgresql` `multi-file` `media-group`  
`file-processing` `voice-transcription` `document-parser` `pdf-extraction`  
`markdown-formatting` `n8n-template`

---

## 💼 Use Case
Use this template if you need an AI-powered Telegram bot that can:
- 📦 Handle **multiple files sent in a single message** (albums, multiple PDFs, etc.).
- 🧾 Extract & analyze **content from many file formats**.
- 🎙️ Transcribe **voice and video messages**.
- 🗂️ Maintain **chat memory** for contextual AI answers.
- 🛡️ Avoid **Telegram formatting errors** and length limit issues.

This workflow automates the full chain: **Receive → Process → AI Analysis → Telegram-safe Reply**.

---

## 💬 Example User Interactions

- **📄 Multiple PDFs with a caption** → AI extracts and summarizes all PDFs in one combined reply.  
- **🎤 Voice message** → AI transcribes and replies with a contextual answer.  
- **📊 CSV or spreadsheet file** → AI parses and summarizes the data.  
- **🖼️ Multiple images** → AI describes each image and replies in a single message.

---

## 🔑 Required Credentials
- **Telegram Bot API** (Bot Token)  
- **PostgreSQL** (Connection credentials)  
- **AI Provider API** (OpenAI, Google Gemini, or compatible LLM)

---

## ⚙️ Setup Instructions
1. 🗄️ **Create the PostgreSQL tables** (Gray section SQL):
   - `media_group`
   - `media_queue`
   - `chat_histories`
2. 🔌 Configure the **Telegram Trigger** with your bot token.
3. 🤖 Connect your **AI provider** credentials.
4. 🗂️ Set up **PostgreSQL** credentials in the database nodes.
5. ▶️ Deploy the workflow in n8n.
6. 🎯 Start sending messages and files to your bot.

---

## 📌 Extra Notes
- ✅ **Green section** ensures only one trigger per media group.  
- 📌 **Yellow section** guarantees captions and files are stored in the correct sequence.  
- ✨ **Purple section** formats AI output to be Telegram-safe and split if needed.  
- 🧠 AI prompt is **not fixed**, allowing full customization.

---

## 💡 Need Assistance?

If you’d like help customizing or extending this workflow, feel free to reach out:  

📧 Email: [johnsilva11031@gmail.com](mailto:johnsilva11031@gmail.com)  
🔗 LinkedIn: [John Alejandro Silva Rodríguez](https://www.linkedin.com/in/john-alejandro-silva-rodriguez-48093526b/)

## 🔗 Nodes Used

Postgres, Telegram, Telegram Trigger, Postgres Trigger, AI Agent, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
