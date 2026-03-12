# 📖 Build enterprise RAG system with Google Gemini file search & retell AI voice

> ⚡ **247 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# 🧠 Enterprise RAG System with Google Gemini File Search + Retell AI Voice Agent

Build a complete **enterprise-grade RAG pipeline** using Google Gemini’s brand-new **File Search API**, combined with a powerful **Retell AI voice agent (JARVIS)** as the conversational front end.  
This workflow is designed for **AI automation agencies, SMBs, enterprise teams, and internal AI copilots.**

---

## 📌 Who Is This For?
- Enterprise teams building internal search copilots  
- AI automation agencies delivering RAG products to clients  
- SMBs wanting automated knowledge lookup  
- Anyone needing a **production-ready, zero-Pinecone RAG workflow**

---

## 🚧 Problem This Solves
Traditional RAG requires:
- Vector DB setup  
- Embedding jobs  
- Chunking pipelines  
- Custom search APIs  

**Gemini File Search eliminates all of this** — you simply create a store and upload files.  
Indexing, chunking, embeddings = fully automated.

This workflow turns that into a **plug-and-play enterprise template.**

---

## 🧩 What This Workflow Does (High-Level)
### 1️⃣ Create a Gemini File Search Store  
- Calls `fileSearchStores` API  
- Creates a persistent embedding store  
- Automatically saved to Google Sheets for future retrieval

### 2️⃣ Auto-Upload Documents from Google Drive  
When a new file is added:
- Download → Start resumable upload → Upload actual bytes  
- Gemini auto-indexes the document for retrieval

### 3️⃣ Chat-Based Retrieval (Chat Trigger)  
User question → Gemini File Search → Short, precise answer returned.

### 4️⃣ Voice Search (Retell AI Agent)  
Your Gemini RAG can now be searched **by voice**.

---

## 🎙️ Retell AI (JARVIS) Voice Agent – Integration Steps

### 🔧 Step 1 — Paste This Prompt Into Retell AI
You are JARVIS, an advanced AI assistant designed to help user with their daily tasks.
Always call the user “Sir”.

You remember the user's name and important details to improve the experience.

Whenever the user asks for information that requires external lookup:

Make a short, witty remark related to their request.

Immediately call the n8n tool — do NOT repeat the question back.

Be concise, professional, and efficient.

n8n tool call:
Use this tool for all knowledge-based or RAG lookups.
It sends the user’s query to the n8n workflow.

JSON Schema:
{
"type": "object",
"properties": {
"query": {
"type": "string",
"description": "The user’s full request for JARVIS to process."
}
},
"required": ["query"]
}


---

### 🔧 Step 2 — Add This URL to Retell (YOUR WEBHOOK)
Paste the webhook URL from your **Respond to Webhook** node:

https://YOUR-N8N-URL/webhook/Gemini
 ← replace with your actual webhook ID


This is the endpoint Retell calls every time the user speaks.

---

### 🔧 Step 3 — End-to-End Flow
1. User speaks to JARVIS  
2. Retell sends `query` → n8n  
3. n8n forwards query to Gemini using File Search  
4. Gemini returns answer  
5. Retell speaks the response out loud  

You now have a **voice-powered enterprise RAG agent**.

---

## 📦 Requirements
- Google Gemini File Search API access  
- Google Drive folder for document uploads  
- Retell AI agent  
- n8n instance  
- (Optional) Google Sheets for storing store IDs  

---

## 📝 Estimated Setup Time
⏱️ **25–30 minutes** (end-to-end)

---

## 👨‍💻 Template Author
**Sandeep Patharkar**  
Founder – FastTrackAI  
AI Automation Architect | Enterprise Workflow Designer  

🔗 Website: https://fasttrackaimastery.com  
🔗 LinkedIn: https://www.linkedin.com/in/sandeeppatharkar/  
🔗 Skool Community: https://www.skool.com/aic-plus  
🔗 YouTube: https://www.youtube.com/@FastTrackAIMastery  

---

## 🏁 Summary
This template gives you a **full enterprise RAG infrastructure**:
- Automatic document indexing  
- Gemini File Search retrieval  
- Chat + Voice interfaces  
- Zero-vector-database setup  
- Seamless Retell AI integration  
- Fully production-ready  

Perfect for creating internal AI copilots, employee knowledge assistants, client-facing search apps, and enterprise RAG systems.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Google Drive Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
