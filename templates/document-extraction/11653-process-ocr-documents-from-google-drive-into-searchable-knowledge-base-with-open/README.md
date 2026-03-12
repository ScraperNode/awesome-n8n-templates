# 🔬 Process OCR documents from Google Drive into searchable knowledge base with OpenAI & Pinecone

> ⚡ **258 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works
This workflow automates a full RAG ingestion pipeline. When a new OCR JSON file is added to a Google Drive folder, the workflow extracts lesson metadata, parses and cleans the Arabic text, generates semantic chunks, creates AI embeddings, and stores them in a Pinecone vector index. After processing, the file is automatically moved to an archive folder to prevent duplicates.

## Set up steps
Follow the sticky notes inside the workflow for detailed instructions.

1. Connect your Google Drive credentials.
2. Replace the input folder ID and archive folder ID with your own.
3. Connect your OpenAI account for embeddings.
4. Connect your Pinecone API key and select your index.

The workflow is ready to run once credentials and folder paths are configured.

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, Embeddings OpenAI, Recursive Character Text Splitter, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
