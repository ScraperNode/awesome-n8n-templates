# 💬 Personal shopper chatbot for WooCommerce with RAG using Google Drive and openAI

> ⚡ **13,638 views** · 💬 [Support Chatbots](../)

## Description

This workflow combines **OpenAI**, **Retrieval-Augmented Generation (RAG)**, and **WooCommerce** to create an intelligent personal shopping assistant. It handles two scenarios:  
1. **Product Search**: Extracts user intent (keywords, price ranges, SKUs) and fetches matching products from WooCommerce.  
2. **General Inquiries**: Answers store-related questions (e.g., opening hours, policies) using RAG and documents stored in Google Drive.  

---

### **How It Works**  

#### **1. Chat Interaction & Intent Detection**  
- **Chat Trigger**:  
  - Starts when a user sends a message (*"When chat message received"*).  
- **Information Extractor**:  
  - Uses OpenAI to analyze the message and determine if the user is **searching for a product** or asking a **general question**.  
  - Extracts:  
    - `search` (true/false).  
    - `keyword`, `priceRange`, `SKU`, `category` (if product-related).  
  - Example:  
    ```json  
    {  
      "search": true,  
      "keyword": "red handbags",  
      "priceRange": { "min": 50, "max": 100 },  
      "SKU": "BAG123",  
      "category": "women's accessories"  
    }  
    ```  

#### **2. Product Search (WooCommerce Integration)**  
- **AI Agent**:  
  - If `search: true`, routes the request to the `personal_shopper` tool.  
  - **WooCommerce Node**:  
    - Queries the WooCommerce store using extracted parameters (`keyword`, `priceRange`, `SKU`).  
    - Filters products in stock (`stockStatus: "instock"`).  
    - Returns matching products (e.g., "red handbags under €100").  

#### **3. General Inquiries (RAG System)**  
- **RAG Tool**:  
  - If `search: false`, uses the **Qdrant Vector Store** to retrieve store information from documents.  
  - **Google Drive Integration**:  
    - Documents (e.g., store policies, FAQs) are stored in Google Drive.  
    - Downloaded, split into chunks, and embedded into Qdrant for semantic search.  
  - **OpenAI Chat Model**: Generates answers based on retrieved documents (e.g., "Our store opens at 9 AM").  

### **Set Up Steps**  

#### **1. Configure the RAG System**  
- **Google Drive Setup**:  
  - Upload store documents .  
  - Update the **Google Drive2** node with your folder ID.  
- **Qdrant Vector Database**:  
  - Clean the collection (update **Qdrant Vector Store** node with your URL).  
  - Use **Embeddings OpenAI** to convert documents into vectors.  

#### **2. Configure OpenAI & WooCommerce**  
- **OpenAI Credentials**:  
  - Add your API key to all OpenAI nodes (`OpenAI Chat Model`, `Embeddings OpenAI`, etc.).  
- **WooCommerce Integration**:  
  - Connect your WooCommerce store (credentials in the `personal_shopper` node).  
  - Ensure product data is synced and accessible.  

#### **3. Customize the AI Agent**  
- **Intent Detection**:  
  - Modify the **Information Extractor**’s system prompt to align with your store’s terminology.  
- **RAG Responses**:  
  - Update the tool description to reflect your store’s documents.  

---

### **Notes**  
This template is ideal for e-commerce businesses needing a hybrid assistant for product discovery and customer support.


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
