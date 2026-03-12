# 🔬 Automate a 'Chat with your PDF' Bot on Telegram with Google Gemini & Pinecone

> ⚡ **682 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## This n8n template from [Intuz](https://www.intuz.com/) provides a complete solution to automate a powerful, AI-driven 'Chat with your PDF' bot on Telegram.

It uses Retrieval-Augmented Generation (RAG) to allow users to upload documents, which are then indexed into a vector database, enabling the bot to answer questions based only on the provided content.

## Who's this workflow for?
- Researchers & Students
- Legal & Compliance Teams
- Business Analysts & Financial Advisors
- Anyone needing to quickly find information within large documents

## How it works
This workflow has two primary functions: indexing a new document and answering questions about it.

**1. Uploading & Indexing a Document:**
- A user sends a PDF file to the Telegram bot.
- n8n downloads the document, extracts the text, and splits it into small, manageable chunks.
- Using Google Gemini, each text chunk is converted into a numerical representation (an "embedding").
- These embeddings are stored in a Pinecone vector database, making the document's content searchable.
- The bot sends a confirmation message to the user that the document has been successfully saved.

**2. Asking a Question (RAG):**
- A user sends a regular text message (a question) to the bot.
- n8n converts the user's question into an embedding using Google Gemini.
- It then searches the Pinecone database to find the most relevant text chunks from the uploaded PDF that match the question.
- These relevant chunks (the "context") are sent to the Gemini chat model along with the original question.
- Gemini generates a new, accurate answer based only on the provided context and sends it back to the user in Telegram.

## Key Requirements to Use This Template

**1. n8n Instance & Required Nodes:**
- An active n8n account (Cloud or self-hosted).
- This workflow uses the official n8n LangChain integration (@n8n/n8n-nodes-langchain). If you are using a self-hosted version of n8n, please ensure this package is installed.

**2. Telegram Account:**
- A Telegram bot created via the BotFather, along with its API token.

**3. Google Gemini AI Account:**
- A Google Cloud account with the Vertex AI API enabled and an associated API Key.

**4. Pinecone Account:**
- A Pinecone account with an API key.
- You must have a vector index created in Pinecone. For use with Google Gemini's embedding-001 model, the index must be configured with 768 dimensions.

## Setup Instructions
**1. Telegram Configuration:**
- In the "Telegram Message Trigger" node, create a new credential and add your Telegram bot's API token.
- Do the same for the "Telegram Response" and "Telegram Response about Database" nodes.

**2. Pinecone Configuration:**
- In both "Pinecone Vector Store" nodes, create a new credential and add your Pinecone API key.
- In the "Index" field of both nodes, enter the name of your pre-configured Pinecone index (e.g., telegram).

**3. Google Gemini Configuration:**
- In all three Google Gemini nodes (Embeddings Google Gemini, Embeddings Google Gemini1, and Google Gemini Chat Model), create a new credential and add your Google Gemini (Palm) API key.

**4. Activate and Use:**
- Save the workflow and toggle the "Active" switch to ON.
- To use: First, send a PDF document to your bot. Wait for the confirmation message. Then, you can start asking questions about the content of that PDF.

## Connect with us
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Workflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Telegram, Telegram Trigger, Stop and Error, Question and Answer Chain, Vector Store Retriever, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
