# 📖 Build a RAG knowledge assistant with Google Drive, OpenAI, and Pinecone

> ⚡ **2 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick Overview
This workflow syncs documents from a Google Drive folder into a Pinecone vector index using OpenAI embeddings, then exposes a webhook chat endpoint where an OpenAI-powered agent answers questions by retrieving relevant context from Pinecone.

## How it works
1. Triggers every minute when a file in a specified Google Drive folder is updated.
2. Extracts the file’s metadata, downloads the updated file from Google Drive, and parses it into text.
3. Splits the text into chunks, generates OpenAI embeddings for each chunk, and inserts them into a Pinecone index under the configured namespace.
4. Receives user questions via a POST webhook endpoint.
5. Uses an OpenAI chat model with conversation memory and a Pinecone retrieval tool to search for relevant document chunks and answer strictly from the retrieved context.
6. Returns the agent’s response to the webhook caller.

## Setup
1. Connect Google Drive credentials and set the folder to watch in the Google Drive trigger.
2. Add an OpenAI API credential for both embedding generation and the chat models.
3. Configure a Pinecone index and namespace (and provide Pinecone credentials) to match the workflow’s index name and namespace settings.
4. Activate the workflow, copy the webhook URL for the POST endpoint, and configure your client app to send questions (and a session ID if you want memory) to that URL.

## 🔗 Nodes Used

Webhook, Google Drive, Google Drive Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
