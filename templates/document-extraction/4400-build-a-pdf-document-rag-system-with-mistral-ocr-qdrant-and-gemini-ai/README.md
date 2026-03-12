# 🔬 Build a PDF Document RAG System with Mistral OCR, Qdrant and Gemini AI

> ⚡ **44,739 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow is designed to **process PDF documents** using **Mistral's OCR** capabilities, store the extracted text in a Qdrant vector database, and enable Retrieval-Augmented Generation (**RAG**) for answering questions. Here’s how it functions:  

Once configured, the workflow automates document ingestion, vectorization, and intelligent querying, enabling powerful RAG applications.

---

### **Benefits**

* **End-to-End Automation**
  No manual interaction is needed: documents are read, processed, and made queryable with minimal setup.

* **Scalable and Modular**
  The workflow uses subflows and batching, making it easy to scale and customize.

* **Multi-Model Support**
  Combines Mistral for OCR, OpenAI for embeddings, and Gemini for intelligent answering—taking advantage of the strengths of each.

* **Real-Time Q\&A**
  With RAG integration, users can query document content through natural language and receive accurate responses grounded in the PDF data.

* **Light or Full Mode**
  Users can choose to index full page content or only summarized text, optimizing for either performance or richness.

---

### **How It Works** 

1. **PDF Processing with Mistral OCR**:  
   - The workflow starts by uploading a PDF file to Mistral's API, which performs OCR to extract text and metadata.  
   - The extracted content is split into manageable chunks (e.g., pages or sections) for further processing.  

2. **Vector Storage in Qdrant**:  
   - The extracted text is converted into embeddings using OpenAI's embedding model.  
   - These embeddings are stored in a Qdrant vector database, enabling efficient similarity searches for RAG.  

3. **Question-Answering with RAG**:  
   - When a user submits a question via a chat interface, the workflow retrieves relevant text chunks from Qdrant using vector similarity.  
   - A language model (Google Gemini) generates answers based on the retrieved context, providing accurate and context-aware responses.  

4. **Optional Summarization**:  
   - The workflow includes an optional summarization step using Google Gemini to condense the extracted text for faster processing or lighter RAG usage.  

---

### **Set Up Steps**  
To deploy this workflow in n8n, follow these steps:  

1. **Configure Qdrant Database**:  
   - Replace `QDRANTURL` and `COLLECTION` in the "Create collection" and "Refresh collection" nodes with your Qdrant instance details.  
   - Ensure the Qdrant collection is configured with the correct vector size (e.g., 1536 for OpenAI embeddings) and distance metric (e.g., Cosine).  

2. **Set Up Credentials**:  
   - Add credentials for:  
     - **Mistral Cloud API** (for OCR processing).  
     - **OpenAI API** (for embeddings).  
     - **Google Gemini API** (for chat and summarization).  
     - **Google Drive** (if sourcing PDFs from Drive).  
     - **Qdrant API** (for vector storage).  

3. **PDF Source Configuration**:  
   - If using Google Drive, specify the folder ID in the "Search PDFs" node.  
   - Alternatively, modify the workflow to accept PDFs from other sources (e.g., direct uploads or external APIs).  

4. **Customize Text Processing**:  
   - Adjust chunk size and overlap in the "Token Splitter" node to optimize for your document type.  
   - Choose between raw text or summarized content for RAG by toggling between the "Set page" and "Summarization Chain" nodes.  

5. **Test the RAG**:  
   - Trigger the workflow manually or via a chat message to verify OCR, embedding, and Qdrant storage.  
   - Use the "Question and Answer Chain" node to test query responses.  

6. **Optional Sub-Workflows**:  
   - The workflow supports execution as a sub-workflow for batch processing (e.g., handling multiple PDFs).  

----
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive, Execute Sub-workflow, Execute Workflow Trigger, Summarization Chain, Question and Answer Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
