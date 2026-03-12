# 🎬 Build a ServiceNow knowledge chatbot with OpenAI and Qdrant RAG

> ⚡ **1,219 views** · 🎬 [Content Creation & Video](../)

## Description

### **1. Data Ingestion Workflow (Left Panel – Pink Section)**

This part collects data from the ServiceNow Knowledge Article table, processes it into embeddings, and stores it in Qdrant.

#### **Steps:**

1. **Trigger: When clicking ‘Execute workflow’**

   * The workflow starts manually when you click *Execute workflow* in n8n.

2. **Get Many Table Records**

   * Fetches multiple records from the ServiceNow Knowledge Article table.
   * Each record typically contains knowledge article content that needs to be indexed.

3. **Default Data Loader**

   * Takes the fetched data and structures it into a format suitable for text splitting and embedding generation.

4. **Recursive Character Text Splitter**

   * Splits large text (e.g., long knowledge articles) into smaller, manageable chunks for embeddings.
   * This step ensures that each text chunk can be properly processed by the embedding model.

5. **Embeddings OpenAI**

   * Uses OpenAI’s Embeddings API to convert each text chunk into a high-dimensional vector representation.
   * These embeddings are essential for semantic search in the vector database.

6. **Qdrant Vector Store**

   * Stores the generated embeddings along with metadata (e.g., article ID, title) in the Qdrant vector database.
   * This database will later be used for similarity searches during chatbot interactions.

---

### **2. RAG Chatbot Workflow (Right Panel – Green Section)**

This section powers the Retrieval-Augmented Generation (RAG) chatbot that retrieves relevant information from Qdrant and responds intelligently.

#### **Steps:**

1. **Trigger: When chat message received**

   * Starts when a user sends a chat message to the system.

2. **AI Agent**

   * Acts as the orchestrator, combining memory, tools, and LLM reasoning.
   * Connects to the OpenAI Chat Model and Qdrant Vector Store.

3. **OpenAI Chat Model**

   * Processes user messages and generates responses, enriched with context retrieved from Qdrant.

4. **Simple Memory**

   * Stores conversational history or context to ensure continuity in multi-turn conversations.

5. **Qdrant Vector Store1**

   * Performs a similarity search on stored embeddings using the user’s query.
   * Retrieves the most relevant knowledge article chunks for the chatbot.

6. **Embeddings OpenAI**

   * Converts user query into embeddings for vector search in Qdrant.

## 🔗 Nodes Used

ServiceNow, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
