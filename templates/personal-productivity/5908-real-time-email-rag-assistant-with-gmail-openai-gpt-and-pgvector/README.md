# ⚡ Real-time email RAG assistant with Gmail, OpenAI GPT, and PGVector

> ⚡ **4,346 views** · ⚡ [Personal Productivity](../)

## Description

# 🧠 Email real time RAG Assistant with Gmail, OpenAI & PGVector

## 📌 Who’s it for

This workflow is ideal for:

- Professionals  
- Project managers  
- Sales and support teams  
- Anyone managing high volumes of Gmail messages

It enables fast and intelligent search through your email inbox using **natural language queries**.

---

## ⚙️ How it works / What it does

- Continuously monitors your **Gmail inbox** for new emails.  
- Extracts **email content and metadata** (subject, body, sender, date).  
- Converts email content into **vector embeddings** using OpenAI.  
- Stores embeddings in a **PostgreSQL database with PGVector**.  
- A **conversational AI agent** performs **semantic search** on your stored email history.  
- Supports **time-sensitive** and **context-aware** responses via OpenAI Chat model.

---

## 🚀 How to set up

1. **Connect your Gmail account** to the Gmail Trigger node (with API access enabled).
2. **Configure OpenAI credentials** for the Embedding and Chat nodes.
3. **Set up a PostgreSQL database** with the **PGVector extension** enabled.
4. **Import the workflow** into your n8n instance (Cloud or Self-hosted).
5. **Customize parameters** like polling frequency, embedding settings, or vector query depth.

---

## 📋 Requirements

- ✅ n8n instance (Self-hosted or Cloud)  
- ✅ Gmail account with API access  
- ✅ OpenAI API Key  
- ✅ PostgreSQL database with PGVector extension installed  

---

## 🛠️ How to customize the workflow

- **Email Filtering**: Change filters in the Gmail Trigger to watch specific labels or senders.
- **Text Splitting Granularity**: Adjust `chunkSize` and `chunkOverlap` in the text splitter node.
- **Query Depth**: Modify `topK` in the vector search node to retrieve more or fewer similar results.
- **Prompt Tuning**: Customize the system message or agent instructions in the RAG node.
- **Workflow Extensions**: Add notifications, error logging, Slack/Telegram alerts, or data exports.

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
