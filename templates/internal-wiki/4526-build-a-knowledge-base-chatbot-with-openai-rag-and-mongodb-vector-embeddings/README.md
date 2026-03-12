# 📖 Build a knowledge base chatbot with OpenAI, RAG and MongoDB vector embeddings

> ⚡ **13,894 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

### Who is this for?

This template is designed for internal support teams, product specialists, and knowledge managers in technology companies who want to automate ingestion of product documentation and enable AI-driven, retrieval-augmented question answering.

### What problem is this workflow solving?
Support agents often spend too much time manually searching through lengthy documentation, leading to inconsistent or delayed answers. This solution automates importing, chunking, and indexing product manuals, then uses retrieval-augmented generation (RAG) to answer user queries accurately and quickly with AI.

### What these workflows do
**Workflow 1**: Document Ingestion & Indexing
Manually triggered to import product documentation from Google Docs.

Automatically splits large documents into chunks for efficient searching.

Generates vector embeddings for each chunk using OpenAI embeddings.

Inserts the embedded chunks and metadata into a MongoDB Atlas vector store, enabling fast semantic search.

**Workflow 2**: AI-Powered Query & Response
Listens for incoming user questions (can be extended to webhook).

Converts questions to vector embeddings and performs similarity search on MongoDB vector store.

Uses OpenAI’s GPT-4o-mini model with retrieval-augmented generation to produce direct, context-aware answers.

Maintains short-term conversation context using a memory buffer node.

### Setup
**Setting up vector embeddings**
Authenticate Google Docs and connect your Google Docs URL containing the product documentation you want to index.

Authenticate MongoDB Atlas and connect the collection where you want to store the vector embeddings. Create a search index on this collection to support vector similarity queries.

Ensure the index name matches the one configured in n8n (data_index).

See the example MongoDB search index template below for reference.

**Setting up chat**
Configure the AI system prompt in the “Knowledge Base Agent” node to reflect your company’s tone, answering style, and any business rules.

Update the workflow description and instructions to help users understand the chat’s purpose and capabilities.

Connect the MongoDB collection used for vector search in the chat workflow and update the vector search index if needed to match your setup.

### Make sure
Both MongoDB nodes (in ingestion and chat workflows) are connected to the same collection, with:

An embedding field storing vector data,

Relevant metadata fields (e.g., document ID, source), and

The same vector index name configured (e.g., data_index).



**Search Index Example:**
{
  "mappings": {
    "dynamic": false,
    "fields": {
      "_id": {
        "type": "string"
      },
      "text": {
        "type": "string"
      },
      "embedding": {
        "type": "knnVector",
        "dimensions": 1536,
        "similarity": "cosine"
      },
      "source": {
        "type": "string"
      },
      "doc_id": {
        "type": "string"
      }
    }
  }
}

## 🔗 Nodes Used

Google Docs, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
