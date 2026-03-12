# ⚒️ Extract context from voice notes with OpenRouter AI & Milvus for RAG systems

> ⚡ **680 views** · ⚒️ [Engineering](../)

## Description

# Voice Note Context Extraction Pipeline with AI Agent & Vector Storage


### This n8n template demonstrates how to automatically extract and store contextual information from voice notes using AI agents and vector databases for future retrieval.


### How it works

- **Webhook trigger** receives voice note data including title, transcript, and timestamp from external services (example here: voicenotes.com)
- **Field extraction** isolates the key data fields (title, transcript, timestamp) for processing
- **AI Context Agent** processes the transcript to extract meaningful context while:
  - Correcting speech-to-text errors
  - Converting first-person references to third-person facts
  - Filtering out casual conversation and focusing on significant information
- **Output formatting** structures the extracted context with timestamps for embedding
- **File conversion** prepares the context data for vector storage
- **Vector embedding** uses OpenAI embeddings to create searchable representations
- **Milvus storage** stores the embedded context for future retrieval in RAG applications

### How to use

- Configure the webhook endpoint to receive data from your voice note service
- Set up credentials for OpenRouter (LLM), OpenAI (embeddings), and Milvus (vector storage)
- Customize the AI agent's system prompt to match your context extraction needs
- The workflow automatically processes incoming voice notes and stores extracted context

### Requirements

- OpenRouter account for LLM access
- OpenAI API key for embeddings
- Milvus vector database (cloud or self-hosted)
- Voice note service with webhook capabilities (e.g., Voicenotes.com)

### Customizing this workflow

- **Modify the context extraction prompt** to focus on specific types of information (preferences, facts, relationships)
- **Add filtering logic** to process only voice notes with specific tags or keywords
- **Integrate with other storage** systems like Pinecone, Weaviate, or local vector databases
- **Connect to RAG systems** to use the stored context for enhanced AI conversations
- **Add notification nodes** to confirm successful context extraction and storage

### Use cases

- **Personal AI assistant** that remembers your preferences and context from voice notes
- **Knowledge management** system for capturing insights from recorded thoughts
- **Content creation** pipeline that extracts key themes from voice recordings
- **Research assistant** that builds context from interview transcripts or meeting notes

## 🔗 Nodes Used

Webhook, AI Agent, Embeddings OpenAI, Structured Output Parser, Convert to File, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
