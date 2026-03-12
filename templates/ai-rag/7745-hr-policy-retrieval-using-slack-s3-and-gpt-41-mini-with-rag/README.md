# 🔍 Hr policy retrieval using Slack, S3, and GPT-4.1-mini with RAG

> ⚡ **112 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

## HR Chatbot with RAG: Retrieve Company Policies via Slack, Amazon S3, and OpenAI
 
## Overview
Answer HR and company policy questions via Slack, powered by a Knowledge Base of internal documents stored in S3. The assistant uses vector search and an OpenAI Chat Model to retrieve accurate answers.

The HR Assistant is an AI-powered Slack bot that allows employees to ask questions in natural language and get accurate answers from company documentation. Documents are managed through an ingestion workflow that retrieves files from S3, transforms them into embeddings, and stores them in a vector database.
On Slack, the assistant interprets questions, searches the Knowledge Base, and responds with concise and reliable answers, or clearly states when information isn’t available.

## How it works
**Normal interaction** 
- An employee asks a question in Slack (e.g., “How many vacation days do I have?”).
- The assistant checks the Knowledge Base (vector store).
- If relevant information is found, the assistant provides a clear answer.
- If not, it responds with: “That answer doesn’t appear to be covered in the materials I have access to.”

**Standardized process of Knowledge Base ingestion**
1. Trigger – The ingestion workflow is manually executed.
2. S3 Download – Files are pulled from the company’s S3 bucket.
3. Data Loader – Documents are pre-processed and split into chunks.
4. Embeddings – Each chunk is converted into an embedding via OpenAI.
5. Vector Store – Embeddings are stored in the Knowledge Base (vector DB).
6. Chatbot Workflow – When questions arrive via Slack, the assistant queries the vector store to find the most relevant context before generating a response.

## Required Connections
To use the HR Assistant effectively, you need:
- A Slack workspace, where the bot is installed and invited to relevant channels.
- An S3 bucket containing company documents (e.g., HR policies, procedures).
- Access to OpenAI API keys for both embeddings and chat models.
- Proper permissions to fetch documents from S3 and write to the vector store.
- A configured n8n instance with both ingestion and chatbot workflows.

## Setup Time
≈ 20–30 minutes (depending on number of documents and Slack integration).

## Customising this workflow
- Add more document sources (e.g., Google Drive, Confluence) in the ingestion pipeline.
- Expand the Slack integration to allow commands like /askHR or to restrict the bot to only respond when @mentioned.
- Add scheduled ingestion (instead of manual trigger) to automatically refresh the Knowledge Base from S3.
- Connect analytics nodes to monitor which HR topics employees ask most often.

## 🔗 Nodes Used

Slack, AWS S3, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
