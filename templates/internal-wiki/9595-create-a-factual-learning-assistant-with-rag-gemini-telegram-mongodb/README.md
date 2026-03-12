# 📖 Create a factual learning assistant with RAG, Gemini, Telegram & MongoDB

> ⚡ **468 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Who's it for?
This template is perfect for educational institutions, coaching centers (like UPSC, GMAT, or specialized technical training), internal corporate knowledge bases, and SaaS companies that need to provide instant, accurate, and source-grounded answers based on proprietary documents.

It's designed for users who want to leverage Google Gemini's powerful reasoning but ensure its answers are strictly factual and based only on their verified knowledge repository.

## How it works / What it does
This workflow establishes a Retrieval-Augmented Generation (RAG) pipeline to build a secure, fact-based AI Agent. It operates in two main phases:

### 1. Knowledge Ingestion: 
When a new document (e.g., a PDF, lecture notes, or policy manual) is uploaded via a form or Google Drive, the Embeddings Google Gemini node converts the content into numerical vectors. These vectors are then stored in a secure MongoDB Atlas Vector Store, creating a private knowledge base.

 
### 2. AI Query & Response: 
A user asks a question via Telegram. The AI Agent uses the question to perform a semantic search on the MongoDB Vector Store, retrieving the most relevant, source-specific passages. It then feeds this retrieved context to the Google Gemini Chat Model to generate a precise, factual answer, which is sent back to the user on Telegram.

This process ensures the agent never **"hallucinates"** or uses general internet knowledge, making the responses **accurate and trustworthy**.

## Requirements
To use this template, you will need the following accounts and credentials:

1. **n8n Account**
2. **Google Gemini API Key:** For generating vector embeddings and powering the AI Agent.
3. **MongoDB Atlas Cluster:** A free-tier cluster is sufficient, configured with a Vector Search index.
4. **Telegram Bot:** A bot created via BotFather and a Chat ID where the bot will listen for and send messages.
5. **Google Drive Credentials** (if using the Google Drive ingestion path).

## How to set up
- **Set up MongoDB Atlas:** Create a free cluster and a database. Create a Vector Search Index on your collection to enable efficient searching.
- **Configure Ingestion Path:**
  - **Set up the Webhook trigger** for your "On form submission" or connect your Google Drive credentials.
  - Configure the **Embeddings Google Gemini node** with your API Key.
  - Connect the **MongoDB Atlas Vector Store node** with your database credentials, collection name, and index name.
- **Configure Chat Path:**
  - Set up the **Telegram Trigger** with your Bot Token to listen for incoming messages.
  - Configure the **Google Gemini Chat Model** with your API Key.
  - Connect the MongoDB Atlas Vector Store 1 node as a Tool within the AI Agent. Ensure it points to the same vector store as the ingestion path.
- **Final Step:** Configure the Send a text message node with your **Telegram Bot Token and the Chat ID**.

## How to customize the workflow
- **Change Knowledge Source:** Replace the Google Drive nodes with nodes for Notion, SharePoint, Zendesk, or another document source.
- **Change Chat Platform:** Replace the Telegram nodes with a Slack, Discord, or WhatsApp Cloud trigger and response node.
- **Refine the Agent's Persona:** Open the AI Agent node and edit the System Instruction to give the bot a specific role (e.g., "You are a senior UPSC coach. Answer questions politely and cite sources.").

## 💡 Example Use Case

- An **UPSC/JEE/NEET** coaching uploads NCERT summaries and previous year notes to Google Drive.
- Students ask questions in the Telegram group — the bot instantly replies with **contextually accurate answers** from the uploaded materials.
- The same agent can generate **daily quizzes or concise notes** from this curated content automatically.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Drive, Google Drive Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
