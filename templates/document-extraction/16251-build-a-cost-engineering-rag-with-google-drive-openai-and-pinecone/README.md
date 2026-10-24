# 🔬 Build a cost engineering RAG with Google Drive, OpenAI, and Pinecone

> ⚡ **184 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow ingests PDF cost-engineering manuals from Google Drive into a Pinecone vector index using OpenAI embeddings, then answers user questions via an n8n chat webhook using a retrieval-augmented OpenAI agent that responds only with evidence from the indexed documents.

## How it works
1. Runs every 2 minutes on a schedule.
2. Lists files in a configured Google Drive “incoming” folder and downloads each document.
3. Extracts text from each PDF, splits it into overlapping chunks, and attaches document metadata.
4. Generates OpenAI embeddings for the chunks and inserts them into the Pinecone `rag` index.
5. Moves each successfully processed Google Drive file into a configured “ingested/archive” folder.
6. Receives user questions through an n8n Chat webhook and uses a LangChain agent with a Pinecone retrieval tool plus an OpenAI chat model to answer strictly from retrieved passages (or returns the defined fallback message when evidence is missing).

## Setup
1. Connect Google Drive credentials and replace `RAG_INCOMING_FOLDER_ID` and `RAG_INGESTED_FOLDER_ID` with your actual folder IDs.
2. Add an OpenAI API key for both embedding generation and chat responses, and confirm the chat model selection (e.g., `gpt-4.1-mini`).
3. Connect Pinecone credentials, ensure an index named `rag` exists, and match its embedding dimension to the OpenAI embeddings model you use.
4. Upload your Technical Composition Manuals as PDFs to the Google Drive incoming folder.
5. Enable the Chat trigger and copy its webhook URL into the client/app you use to send questions (or use n8n’s chat UI).

## 🔗 Nodes Used

Google Drive, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
