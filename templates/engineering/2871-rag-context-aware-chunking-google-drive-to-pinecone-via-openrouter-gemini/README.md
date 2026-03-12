# ⚒️ RAG: context-aware chunking | Google Drive to Pinecone via OpenRouter & Gemini

> ⚡ **10,133 views** · ⚒️ [Engineering](../)

## Description

Workflow based **on** the following article.
https://www.anthropic.com/news/contextual-retrieval

This n8n automation is designed to extract, process, and store content from documents into a **Pinecone** vector store using context-based chunking. The workflow enhances retrieval accuracy in **RAG (Retrieval-Augmented Generation)** setups by ensuring each chunk retains meaningful context.

**Workflow Breakdown:**
🔹 **Google Drive** - Retrieve Document:
The automation starts by fetching a source document from Google Drive. This document contains structured content, with predefined boundary markers for easy segmentation.

🔹 **Extract Text Content** - Once retrieved, the document’s text is extracted for processing. Special section boundary markers are used to divide the text into logical sections.

🔹 **Code Node** - Create Context-Based Chunks:
A custom code node processes the extracted text, identifying section boundaries and splitting the document into meaningful chunks. Each chunk is structured to retain its context within the entire document.

🔹 **Loop Node** - Process Each Chunk:
The workflow loops through each chunk, ensuring they are processed individually while maintaining a connection to the overall document context.

🔹 **Agent Node** - Generate Context for Each Chunk:
We use an Agent node powered by OpenAI’s GPT-4.0-mini via OpenRouter to generate contextual metadata for each chunk, ensuring better retrieval accuracy.

🔹 **Prepend Context to Chunks & Create Embeddings** - The generated context is prepended to the original chunk, creating context-rich embeddings that improve searchability.

🔹 **Google Gemini** - Text Embeddings:
The processed text is passed through Google Gemini text-embedding-004, which converts the text into semantic vector representations.

🔹 **Pinecone Vector Store** - Store Embeddings:
The final embeddings, along with the enriched chunk content and metadata, are stored in Pinecone, making them easily retrievable for RAG-based AI applications.

**Use Case:**
This automation enhances RAG retrieval by ensuring each chunk is contextually aware of the entire document, leading to more accurate AI responses. It’s perfect for applications that require semantic search, AI-powered knowledge management, or intelligent document retrieval.

By implementing context-based chunking, this workflow ensures that LLMs retrieve the most relevant data, improving response quality and accuracy in AI-driven applications.

[![Video Thumbnail](https://img.youtube.com/vi/qBeWP65I4hg/maxresdefault.jpg)](https://www.youtube.com/watch?v=qBeWP65I4hg)

## 🔗 Nodes Used

Google Drive, AI Agent, Recursive Character Text Splitter, Pinecone Vector Store, Extract from File, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
