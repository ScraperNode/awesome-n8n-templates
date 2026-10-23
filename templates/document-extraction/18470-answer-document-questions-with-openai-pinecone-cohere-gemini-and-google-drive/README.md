# 🔬 Answer document questions with OpenAI, Pinecone, Cohere, Gemini and Google Drive

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow exposes a webhook-powered document Q&A chatbot that searches a Pinecone vector database with OpenAI embeddings, reranks results with Cohere, optionally falls back to Google Gemini, and returns an answer with quoted sources plus Google Drive view and download links for the referenced files.

## How it works
1. Receives a POST request via webhook with the user’s question in the `message` field.
2. Searches a Pinecone knowledge base using OpenAI embeddings, reranks the top matches with Cohere, and uses an OpenAI chat model (with Google Gemini as fallback) to produce an answer that includes the document name, page number, and an exact supporting quote.
3. Sends the generated answer to a second OpenAI-based agent that extracts only the referenced source file names into structured JSON.
4. Splits the extracted file-name list into individual items and searches Google Drive for each file to retrieve its file ID.
5. Builds Google Drive view and direct download URLs for the matched files and packages them together with the AI answer.
6. Responds to the original webhook request with the answer content and the assembled source links.

## Setup
1. Add credentials for OpenAI (chat model and embeddings), Pinecone, Cohere, and Google Gemini (fallback model).
2. Connect Google Drive OAuth credentials and ensure the workflow has access to the Drive location containing your source PDFs.
3. Replace `YOUR_PINECONE_INDEX_NAME` with your Pinecone index name and confirm your PDFs are already embedded and stored in that index.
4. Activate the workflow, copy the webhook URL, and configure your client (website widget, Slack app, etc.) to POST JSON containing a `message` field.

## 🔗 Nodes Used

Google Sheets, Webhook, Google Drive, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
