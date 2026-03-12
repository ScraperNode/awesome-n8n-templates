# 📖 RAG chatbot for company documents using Google Drive and Gemini

> ⚡ **277,478 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This workflow implements a Retrieval Augmented Generation (RAG) chatbot that answers employee questions based on company documents stored in Google Drive. It automatically indexes new or updated documents in a Pinecone vector database, allowing the chatbot to provide accurate and up-to-date information. The workflow uses Google's Gemini AI for both embeddings and response generation.

## How it works
The workflow uses two `Google Drive Trigger` nodes: one for detecting new files added to a specified Google Drive folder, and another for detecting file updates in that same folder.
1. Automated Indexing: When a new or updated document is detected
2. The `Google Drive` node downloads the file.
3. The `Default Data Loader` node loads the document content.
4. The `Recursive Character Text Splitter` node breaks the document into smaller text chunks.
5. The Embeddings Google Gemini node generates embeddings for each text chunk using the text-embedding-004 model.
6. The `Pinecone Vector Store` node indexes the text chunks and their embeddings in a specified Pinecone index.
7.The Chat Trigger node receives user questions through a chat interface. The user's question is passed to an AI Agent node.
8. The `AI Agent` node uses a `Vector Store Tool` node, linked to a Pinecone Vector Store node in query mode, to retrieve relevant text chunks from Pinecone based on the user's question.
9. The AI Agent sends the retrieved information and the user's question to the Google Gemini Chat Model (gemini-pro).
10. The `Google Gemini Chat Model` generates a comprehensive and informative answer based on the retrieved documents.
11. A `Window Buffer Memory` node connected to the AI Agent provides short-term memory, allowing for more natural and context-aware conversations.

## Set up steps

1. Google Cloud Project and Vertex AI API:
* Create a Google Cloud project.
* Enable the Vertex AI API for your project.
2. Google AI API Key:
* Obtain a Google AI API key from Google AI Studio.
3. Pinecone Account:
* Create a free account on the Pinecone website.
Obtain your API key from your Pinecone dashboard.
* Create an index named company-files in your Pinecone project.
4. Google Drive:
* Create a dedicated folder in your Google Drive where company documents will be stored.
5. Credentials in n8n: Configure credentials in your n8n environment for:
* Google Drive OAuth2
* Google Gemini(PaLM) Api (using your Google AI API key)
* Pinecone API (using your Pinecone API key)
5. Import the Workflow:
* Import this workflow into your n8n instance.
6. Configure the Workflow:
* Update both Google Drive Trigger nodes to watch the specific folder you created in your Google Drive.
* Configure the Pinecone Vector Store nodes to use your company-files index.

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, AI Agent, Simple Memory, Recursive Character Text Splitter, Pinecone Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
