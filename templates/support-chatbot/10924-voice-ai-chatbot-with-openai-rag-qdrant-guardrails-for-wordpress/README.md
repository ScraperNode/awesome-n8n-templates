# 💬 Voice AI chatbot with OpenAI, RAG (Qdrant) & Guardrails for WordPress

> ⚡ **905 views** · 💬 [Support Chatbots](../)

## Description

This workflow implements a **complete Voice AI Chatbot system** for **Wordress** that integrates speech recognition, guardrails for safety, retrieval-augmented generation (RAG), Qdrant vector search, and audio responses. It is designed to be connected to a **WordPress Voicebot AI plugin** through a webhook endpoint.

---

### **Key Advantages**

* ✅ Complete Voice AI Pipeline**
The workflow handles:
	* audio input
	* STT
	* intelligent processing
	* TTS output
  All within a single automated process.

* ✅ **Safe and Policy-Compliant**
Thanks to the **Guardrails module**, the system automatically:
	* detects harmful or disallowed requests
	* blocks them
	* responds safely
  This protects both the user and the business.

* ✅ **Contextual and Memory-Based Conversations**	
The **Window Buffer Memory** tied to unique session IDs enables:
	* continuous conversation flow
	* natural dialogue
	* better understanding of context

* ✅ **Company-Specific Knowledge via RAG**
By integrating Qdrant as a vector store, the system can:
	* retrieve business documentation
	* give accurate and up-to-date answers
	* support personalized content
This makes the chatbot far more powerful than a standard LLM.

* ✅ **Modular and Extensible Architecture**
Because everything is modular inside n8n, you can:
	* swap OpenAI with other models
	* add new tools or knowledge sources
	* change prompts or capabilities
  without redesigning the entire workflow.

* ✅ **Easy WordPress Integration
The workflow connects directly to a **WordPress Voicebot plugin**, meaning:
	* no custom backend development
	* simple deployment
	* fast integration for websites

* ✅ **Automatic Indexing of Documents**
The second workflow section:
	* fetches Google Drive files
	* converts them into embeddings
	* indexes them into Qdrant
This lets you maintain your knowledge base with almost no manual work.

---

### How It Works

This workflow creates a Wordpress voice-enabled AI chatbot that processes audio inputs and provides contextual responses using RAG (Retrieval-Augmented Generation) from a Qdrant vector database. The system operates as follows:

1. **Audio Processing Pipeline**:
   - Receives audio input via webhook and converts speech to text using OpenAI's STT (Speech-to-Text)
   - Applies guardrails to detect inappropriate content or jailbreak attempts using a separate GPT-4.1-mini model
   - Routes safe queries to the AI agent and blocks unsafe content with a default response

2. **AI Agent with Contextual Memory**:
   - Uses OpenAI Chat Model with window buffer memory to maintain conversation context
   - Equips the agent with two tools: Calculator for computations and RAG tool for business knowledge retrieval
   - The RAG system queries Qdrant vector store containing company documents using OpenAI embeddings

3. **Response Generation**:
   - Generates appropriate text responses based on query type and available knowledge
   - Converts approved responses to audio using OpenAI's TTS (Text-to-Speech) with "onyx" voice
   - Returns binary audio responses to the webhook caller

---

### Set Up Steps

1. **Vector Database Preparation**:
   - Create Qdrant collection via HTTP request with specified vector configuration
   - Clear existing collection data before adding new documents
   - Set up Google Drive integration to source documents from specific folders

2. **Document Processing Pipeline**:
   - Search and retrieve files from Google Drive folder "Test Negozio"
   - Process documents through recursive text splitting (500 chunk size, 50 overlap)
   - Generate embeddings using OpenAI and store in Qdrant vector store
   - Implement batch processing with 5-second delays between operations

3. **System Configuration**:
   - Configure webhook endpoint for receiving audio inputs
   - Set up multiple OpenAI accounts for different functions (STT, TTS, guardrails, main agent)
   - Establish Qdrant API connections for vector storage and retrieval
   - Implement session-based memory management using session IDs from webhook headers

4. **WordPress Integration**:
   - Install the provided Voicebot AI Agent WordPress plugin
   - Configure the plugin with the webhook URL to connect to this n8n workflow
   - The system is now ready to receive audio queries and respond with voice answers

The workflow handles both real-time voice queries and background document processing, creating a comprehensive voice assistant solution with business-specific knowledge retrieval capabilities.

---



### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
