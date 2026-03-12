# 🔍 Automate document ingestion & RAG system with Google Drive, Sheets & OpenAI

> ⚡ **1,600 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

## 1. Overview

The **IngestionDocs** workflow is a fully automated **document
ingestion and knowledge management system** built with **n8n**. Its
purpose is to continuously ingest organizational documents
from **Google Drive**, transform them into vector embeddings using
**OpenAI**, store them in **Pinecone**, and make them searchable and
retrievable through an **AI-powered Q&A interface**.

This ensures that employees always have access to the most up-to-date
knowledge base without requiring manual intervention.

------------------------------------------------------------------------

## 2. Key Objectives

-   **Automated Ingestion** → Seamlessly process new and updated
    documents from Google Drive.\
-   **Change Detection** → Track and differentiate between new, updated,
    and previously processed documents.\
-   **Knowledge Base Construction** → Convert documents into embeddings
    for semantic search.\
-   **AI-Powered Assistance** → Provide an intelligent Q&A system for
    employees to query manuals.\
-   **Scalable & Maintainable** → Modular design using n8n, LangChain,
    and Pinecone.

------------------------------------------------------------------------

## 3. Workflow Breakdown

### **A. Document Monitoring and Retrieval**

-   The workflow begins with two **Google Drive triggers**:
    -   **File Created Trigger** → Fires when a new document is
        uploaded.\
    -   **File Updated Trigger** → Fires when an existing document is
        modified.\
-   A **search operation** lists the files in the designated Google
    Drive folder.\
-   Non-downloadable items (e.g., subfolders) are filtered out.\
-   For valid files:
    -   The file is downloaded.\
    -   A **SHA256 hash** is generated to uniquely identify the file's
        content.

------------------------------------------------------------------------

### **B. Record Management (Google Sheets Integration)**

To keep track of ingestion states, the workflow uses a **Google
Sheets--based Record Manager**:\
- Each file entry contains:\
- **Id** (Google Drive file ID)\
- **Name** (file name)\
- **hashId** (SHA256 checksum)\
- The workflow compares the current file's hash with the stored one:\
- **New Document** → File not found in records → Inserted into the
Record Manager.\
- **Already Processed** → File exists and hash matches → Skipped.\
- **Updated Document** → File exists but hash differs → Record is
updated.

This guarantees that only new or modified content is processed, avoiding
duplication.

------------------------------------------------------------------------

### **C. Document Processing and Vectorization**

Once a document is marked as new or updated:\
1. **Default Data Loader** extracts its content (binary files
supported).\
- Pages are split into individual chunks.\
- Metadata such as file ID and name are attached.\
2. **Recursive Character Text Splitter** divides the content into
manageable segments with overlap.\
3. **OpenAI Embeddings (`text-embedding-3-large`)** transform each text
chunk into a semantic vector.\
4. **Pinecone Vector Store** stores these vectors in the configured
index:\
- For **new documents**, embeddings are inserted into a namespace based
on the file name.\
- For **updated documents**, the namespace is cleared first, then
re-ingested with fresh embeddings.

This process builds a **scalable and queryable knowledge base**.

------------------------------------------------------------------------

### **D. Knowledge Base Q&A Interface**

The workflow also provides an **interactive form-based user
interface**:\
- **Form Trigger** → Collects employee questions.\
- **LangChain AI Agent**:\
- Receives the question.\
- Retrieves relevant context from **Pinecone** using vector similarity
search.\
- Processes the response using **OpenAI Chat Model (`gpt-4.1-mini`)**.\
- **Answer Formatting**:\
- Responses are returned in **HTML** format for readability.\
- A **custom CSS theme** ensures a modern, user-friendly design.\
- Answers may include references to page numbers when available.

This creates a **self-service knowledge base assistant** that employees
can query in natural language.

------------------------------------------------------------------------

## 4. Technologies Used

-   **n8n** → Orchestration of the entire workflow.\
-   **Google Drive API** → File monitoring, listing, and downloading.\
-   **Google Sheets API** → Record manager for tracking file states.\
-   **OpenAI API**:
    -   **text-embedding-3-large** for semantic vector creation.\
    -   **gpt-4.1-mini** for conversational Q&A.\
-   **Pinecone** → Vector database for embedding storage and retrieval.\
-   **LangChain** → Document loaders, text splitters, vector store
    connectors, and agent logic.\
-   **Crypto (SHA256)** → File hash generation for change detection.\
-   **Form Trigger + Form Node** → Employee-facing Q&A submission and
    answer display.\
-   **Custom CSS** → Provides a modern, responsive, styled UI for the
    knowledge base.

------------------------------------------------------------------------

## 5. End-to-End Data Flow

1.  **Employee uploads or updates a document** → Google Drive detects
    the change.\
2.  **Workflow downloads and hashes the file** → Ensures uniqueness and
    detects modifications.\
3.  **Record Manager (Google Sheets)** → Decides whether to skip,
    insert, or update the record.\
4.  **Document Processing** → Splitting + Embedding + Storing into
    Pinecone.\
5.  **Knowledge Base Updated** → The latest version of documents is
    indexed.\
6.  **Employee asks a question via the web form**.\
7.  **AI Agent retrieves embeddings from Pinecone + uses GPT-4.1-mini**
    → Generates a contextual answer.\
8.  **Answer displayed in styled HTML** → Delivered back to the employee
    through the form interface.

------------------------------------------------------------------------

## 6. Benefits

-   **Always Up-to-Date** → Automatically syncs documents when uploaded
    or changed.\
-   **No Duplicates** → Smart hashing ensures only relevant updates are
    reprocessed.\
-   **Searchable Knowledge Base** → Employees can query documents
    semantically, not just by keywords.\
-   **Enhanced Productivity** → Answers are immediate, reducing time
    spent browsing manuals.\
-   **Scalable** → New documents and users can be added without workflow
    redesign.

------------------------------------------------------------------------

✅ In summary, **IngestionDocs** is a **robust AI-driven
document ingestion and retrieval system** that integrates **Google
Drive, Google Sheets, OpenAI, and Pinecone** within **n8n**. It
continuously builds and maintains a **knowledge base of manuals** while
offering employees an intelligent, user-friendly **Q&A assistant** for
fast and accurate knowledge retrieval.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
