# 💬 Build a product catalog chatbot with Mistral AI, Google Drive & Supabase RAG

> ⚡ **501 views** · 💬 [Support Chatbots](../)

## Description

#   AI Product Catalog Chatbot with Google Drive Ingestion & Supabase RAG

##  Overview
This workflow builds a **dual-system** that connects **automated document ingestion** with a **live product catalog chatbot** powered by **Mistral AI** and **Supabase**.

It includes:
- **Ingestion Pipeline:** Automatically fetches JSON files from Google Drive, processes their content, and stores vector embeddings in Supabase.  
- **Chatbot:** An AI agent that queries the Supabase vector store (RAG) to answer user questions about the product catalog.  

It uses **Mistral AI** for chat intelligence and embeddings, and **Supabase** for vector storage and semantic product search.

---

##  Chatbot Flow
- **Trigger:** `When chat message received` or `Webhook` (from live website)
- **Model:** `Mistral Cloud Chat Model (mistral-medium-latest)`
- **Memory:** `Simple Memory (Buffer Window)` — keeps last 15 messages for conversational context
- **Vector Search Tool:** `Supabase Vector Store`
- **Embeddings:** `Mistral Cloud`
- **Agent:** `product catalog agent`
  - Responds to user queries using the `products` table in Supabase.  
  - Searches vectors for relevant items and returns structured product details (name, specs, images, and links).  
  - Maintains chat session history for natural follow-up questions.

---

##  Document → Knowledge Base Pipeline
Triggered manually (`Execute workflow`) to populate or refresh the Supabase vector store.

### Steps
1. **Google Drive (List Files)**  
   → Fetch all files from the configured Google Drive folder.

2. **Loop Over Items**  
   → For each file:
   - **Google Drive (Get File)**  
     → Download the JSON document.
   - **Extract from File**  
     → Parse and read raw JSON content.
   - **Map Data into Fields (`Set` node)**  
     → Clean and normalize JSON keys (e.g., `page_title`, `comprehensive_summary`, `key_topics`).
   - **Convert Data into Chunks (`Code` node)**  
     → Merge text fields like `summary` and `markdown`.  
     → Split content into overlapping 2,000-character chunks.  
     → Add metadata such as `title`, `URL`, and `chunk index`.
   - **Embeddings (Mistral Cloud)**  
     → Generate vector embeddings for each text chunk.
   - **Insert into Supabase Vectorstore**  
     → Save chunks + embeddings into the `website_mark` table.
   - **Wait**  
     → Pause for 30 seconds before the next file to respect rate limits.

---

##  Integrations Used
| Service | Purpose | Credential |
|----------|----------|------------|
| **Google Drive** | File source for catalog JSON documents | `Google Drive account dbt` |
| **Mistral AI** | Chat model & embeddings | `Mistral Cloud account dbt` |
| **Supabase** | Vector storage & RAG search | `Supabase DB account dbt` |
| **Webhook / Chat** | User-facing interface for chatbot | `Website or Webhook` |

---

##  Sample JSON Data Format (for Ingestion)

The ingestion pipeline expects structured JSON product files, which can include different categories such as **Apparel** or **Tools**.

###  Apparel Example (T-Shirts)
```json
[
  {
    "Name": "Classic Crewneck T-Shirt",
    "Item Number": "A-TSH-NVY-M",
    "Image URL": "https://www.example.com/images/tshirt-navy.jpg",
    "Image Markdown": "![Classic Crewneck T-Shirt](https://www.example.com/images/tshirt-navy.jpg)",
    "Size Chart URL": "https://www.example.com/charts/tshirt-sizing",
    "Materials": "100% Pima Cotton",
    "Color": "Navy Blue",
    "Size": "M",
    "Fit": "Regular Fit",
    "Collection": "Core Essentials"
  }
]
```

###  Tools Example (Drill Bits)
```json
[
  {
    "Name": "Titanium Drill Bit, 1/4\"",
    "Item Number": "T-DB-TIN-250",
    "Image URL": "https://www.example.com/images/drill-bit-1-4.jpg",
    "Image Markdown": "![Titanium Drill Bit, 1/4\"](https://www.example.com/images/drill-bit-1-4.jpg)",
    "Spec Sheet URL": "https://www.example.com/specs/T-DB-TIN-250",
    "Materials": "HSS with Titanium Coating",
    "Type": "Twist Drill Bit",
    "Size (in)": "1/4",
    "Shank Type": "Hex",
    "Application": "Metal, Wood, Plastic"
  }
]
```

---

##  Agent System Prompt Summary
&gt; “You are an AI product catalog assistant.  
Use only the Supabase vector database as your knowledge base.  
Provide accurate, structured responses with clear formatting — including product names, attributes, and URLs.  
If data is unavailable, reply politely: *‘I couldn’t find that product in the catalog.’*”

---

##  Key Features
-  Automated JSON ingestion from Google Drive → Supabase  
-  Intelligent text chunking and metadata mapping  
-  Dual-workflow architecture (Ingestion + Chatbot)  
-  Live conversational product search via RAG  
-  Supports both **embedded chat** and **webhook** channels  

---

##  Summary
&gt; A powerful end-to-end workflow that transforms your product data into a **searchable, AI-ready knowledge base**, enabling real-time product Q&A through a **Mistral-powered chatbot**.

Perfect for eCommerce teams, distributors, or B2B companies managing large product catalogs.

---

###  **Need Help or More Workflows?**
Want to customize this workflow for your business or integrate it with your tools?  
Our team at **Digital Biz Tech** can tailor it precisely to your use case — from automation pipelines to AI-powered product discovery.

💡 We can help you set it up for free — from connecting credentials to deploying it live.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)  
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)  
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)  
You can also DM us on LinkedIn for any help.

---

## 🔗 Nodes Used

Webhook, Google Drive, AI Agent, Simple Memory, Character Text Splitter, Supabase Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
