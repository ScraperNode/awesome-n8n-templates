# 💬 Website chatbot with Google Drive knowledge base using GPT-4 and Mistral AI

> ⚡ **1,577 views** · 💬 [Support Chatbots](../)

## Description

#  AI-Powered Website Chatbot with Google Drive Knowledge Base


##  Overview
This workflow combines **website chatbot intelligence** with **automated document ingestion and vectorization** — enabling live Q&A from both **chat input** and **processed Google Drive files**.  
It uses **Mistral AI** for OCR + embeddings, and **Qdrant** for vector search.

---

##  Chatbot Flow
- **Trigger:** `When chat message received` or `webhook` based upon deployed chatbot
- **Model:** `OpenAI gpt-4.1-mini`
- **Memory:** `Simple Memory (Buffer Window)`
- **Vector Search Tool:** `Qdrant Vector Store `
- **Embeddings:** `Mistral Cloud`
- **Agent:** `website chat agent`
  - Responds based on `chatdbtai` Supabase content
  - Enforces brand tone and informative documents.
  - Integratration  with both:
    - **Embedded chat** UI
    - **Webhook** 

---

##  Document → Knowledge Base Pipeline
Triggered manually to keep vector store up-to-date.

### Steps
1. **Google Drive (brand folder)**  
   → Fetch files from folder `Website kb (ID: 1o3DK9Ceka5Lqb8irvFSfEeB8SVGG_OL7)`
2. **Loop Over Items**  
   → For each file:
   - `Set metadata`
   - `Download file`
   - `Upload to Mistral` for OCR
   - `Get Signed URL`
   - `Run OCR extraction` (`mistral-ocr-latest`)
3. **If OCR success**  
   → Pass to chunking pipeline  
   Else → skip and continue
4. **Chunking Logic (`Code` node)**  
   - Splits document into 1,000-character JSON chunks  
   - Adds metadata (source, char positions, file ID)
5. **Default Data Loader + Text Splitter**  
   → Prepares chunks for embedding
6. **Embeddings (Mistral Cloud)**  
   → Generates embeddings for text chunks
7. **Qdrant Vector Store (Insert mode)**  
   → Saves embeddings into `docragtestkb` collection
8. **Wait**  
   → Optional delay between batches

---

##  Integrations Used
| Service | Purpose | Credential |
|----------|----------|------------|
| **Google Drive** | File source | `Google Drive account 6 rn dbt` |
| **Mistral Cloud** | OCR + embeddings | `Mistral Cloud account 2 dbt rn` |
| **Qdrant** | Vector storage | `QdrantApi account` |
| **OpenAI** | Chat model | `OpenAi account 8 dbt digi` |

---

##  Agent System Prompt Summary
&gt; “You are the official AI assistant for this website.  
Use `chatdbtai` only as your knowledge source.  
Respond conversationally, list offerings clearly, link blogs, and say  
‘I couldn’t find that on this site’ if no match.”

---

##  Key Features
- ✅ Automated OCR + chunking → vectorization  
- ✅ Persistent memory for chat sessions  
- ✅ Multi-channel (Webhook + Embedded Chat)  
- ✅ Fully brand-guided, structured responses  
- ✅ Live data retrieval from Qdrant vector store  


---

##  Summary
&gt; A unified workflow that turns brand files + web content into a **knowledge base** that powers a intelligent chatbot — capable of responding to visitors in real time, powered by **Mistral**, **OpenAI**, and **Qdrant**.

---

###  **Need Help or More Workflows?**
Want to customize this workflow for your business or integrate it with your existing tools?  
Our team at **Digital Biz Tech** can tailor it precisely to your use case  from automation logic to AI-powered enhancements.  

💡 We can help you set it up for free — from connecting credentials to deploying it live.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)    
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)  
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)  
You can also DM us on LinkedIn for any help.

---

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
