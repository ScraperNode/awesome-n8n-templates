# 🔍 Website content chatbot with Pinecone, Airtable & OpenAI for RAG applications

> ⚡ **1,104 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

### This n8n workflow shows how to **extract website content, index it in Pinecone, and leverage Airtable to power a chat agent for customer Q&A**.

Use cases include:  
* Building a **knowledge base** from your website.  
* Creating a **chatbot** that answers customer queries using your own site content.  
* Powering **RAG workflows** for FAQs, support docs, or product knowledge.  

---

### How it works
* Workflow starts with a **manual trigger** or chat message.  
* Website content is fetched via **HTTP Request**.  
* The **HTML body** is extracted and converted into clean **Markdown**.  
* Text is split into chunks (~500 chars with 50 overlap) using the **Character Text Splitter**.  
* **OpenAI embeddings** are generated for each chunk.  
* Content and embeddings are stored in **Pinecone** with namespace separation.  
* A **Chat Agent** (powered by OpenAI or OpenRouter) retrieves answers from Pinecone and Airtable.  
* **Memory buffer** allows multi-turn conversations.  
* A **billing tool** (Airtable) provides dynamic billing-related answers when needed.  

---

### How to use
* Replace the sample website URL in the **HTTP Request** node with your own domain or content source. 
* Update Normalize code based on markdown content output to remove noise. 
* Adjust chunk size in the **Text Splitter** for your website markdown output.  
  * In this example, the **Character Text Splitter with separator `######`** worked really well.  
  * Always check the **Markdown output** to fine-tune your splitting logic.  
* Update **Pinecone namespace** to match your project.  
* Customize the **Chat Agent system prompt** to fit your brand voice and response rules.  
* Connect to your own **Airtable schema** if you want live billing/payment data access.  

---

### Requirements
* **OpenAI account** (for embeddings + chat model).  
* **Pinecone account** (vector DB for semantic search).  
* **Airtable account** (if using the billing tool).  
* (Optional) **OpenRouter account** (alternative chat model provider).  
* n8n self-hosted or cloud.  

---

### Need Help?  
Ask in the [n8n Forum](https://community.n8n.io/)!  

Happy Automating! 🚀

## 🔗 Nodes Used

HTTP Request, Markdown, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
