# 🔍 Build a self-updating RAG system with OpenAI, Google Gemini, Qdrant and Google Drive

> ⚡ **1,404 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

This workflow implements a **Retrieval-Augmented Generation (RAG) system** that integrates **Google Drive and Qdrant**.

This setup creates a powerful, **self-updating knowledge base** that provides accurate, context-aware answers to user queries.

---

###  Key Advantages

* **Automated Knowledge Base Updates**
  No manual intervention is required—documents in Google Drive are automatically synchronized with Qdrant.

* **Efficient Search and Retrieval**
  Vector embeddings enable fast and precise retrieval of relevant information.

* **Scalable and Flexible**
  Works with multiple documents and supports continuous growth of your dataset.

* **Seamless AI Integration**
  Combines **OpenAI embeddings** for vectorization and **Google Gemini** for high-quality natural language answers.

* **Metadata-Enhanced Storage**
  Each document stores metadata (file ID and name), making it easy to manage and track document versions.

* **End-to-End RAG Pipeline**
  From document ingestion to AI-powered Q\&A, everything is handled inside one n8n workflow.

---

### **How It Works**  
This workflow implements a **Retrieval-Augmented Generation (RAG)** system that automatically processes, stores, and retrieves document information for AI-powered question answering. Here’s how it functions:

1. **Document Processing & Vectorization**:
   - The system monitors a specified **Google Drive folder** for new or updated files.
   - When a file is added or modified, it is downloaded and split into manageable chunks using a **Recursive Character Text Splitter**.
   - Each chunk is converted into vector embeddings using **OpenAI's embedding model**.
   - These vectors, along with metadata (file ID, file name), are stored in a **Qdrant vector database**.

2. **Automatic Updates**:
   - The workflow includes a mechanism to **delete old vectors** associated with an updated file before inserting the new ones, ensuring the knowledge base remains current.

3. **Query Handling & Response Generation**:
   - When a user sends a chat message (via a chat trigger), the system:
     - Retrieves the most relevant document chunks from **Qdrant** based on the query's semantic similarity.
     - Uses a **Google Gemini** language model to generate a context-aware answer grounded in the retrieved documents.
   - This provides accurate, source-based responses instead of relying solely on the AI's internal knowledge.

4. **Initial Setup & Maintenance**:
   - The workflow can be triggered manually to **create the Qdrant collection** or **clear all existing data**.
   - It processes all existing files in the Drive folder during initial setup, populating the vector store.

---

### **Set Up Steps**  
To configure this workflow, follow these steps:

**STEP 1: Create Qdrant Collection**
- Replace `QDRANTURL` in the **"Create collection"** and **"Clear collection"** nodes with your Qdrant instance URL (e.g., `http://your-qdrant-host:6333`).
- Replace `COLLECTION` with your desired collection name.
- Ensure the Qdrant API credentials are correctly set in the respective HTTP Request nodes.

**STEP 2: Configure Google Drive Access**
- Set up OAuth credentials for **Google Drive** to allow the workflow to:
  - Read files from a specific folder .
  - Download files for processing.
- Update the **Folder ID** in the **"Search files"** and **"Update?"** trigger nodes to point to your target Google Drive folder.

**STEP 3: Set Up AI Models**
- Configure the **OpenAI API** credentials in the **Embeddings** nodes for generating text embeddings.
- Configure the **Google Gemini (PaLM) API** credentials in the **Google Gemini Chat Model** node for generating answers.

**STEP 4: Configure Metadata**
- The system automatically attaches metadata (`file_id`, `file_name`) to each document chunk. This is set in the **Default Data Loader** nodes.
- This metadata is crucial for identifying the source of information and for the update mechanism.

**STEP 5: Test the RAG System**
- The workflow includes a chat trigger (**"When chat message received"**) for testing.
- Send a query to test the retrieval and answer generation process.

---
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, Question and Answer Chain, Embeddings OpenAI, Vector Store Retriever

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
