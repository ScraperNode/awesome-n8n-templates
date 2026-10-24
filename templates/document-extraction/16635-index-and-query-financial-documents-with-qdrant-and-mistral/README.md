# 🔬 Index and query financial documents with Qdrant and Mistral

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow ingests local financial documents into a Qdrant vector database using Mistral Cloud embeddings, keeping the index in sync when files are added, changed, or deleted.

## How it works
1. Runs when you manually start the workflow (for testing) and sets the working folder path and Qdrant collection name.
2. Routes the run based on whether a file was added, changed, or deleted.
3. For changed or deleted files, searches Qdrant for existing vectors matching the file path and deletes the corresponding points.
4. For added files (and changed files after cleanup), reads the file from disk and prepares a text payload that includes file metadata and contents.
5. Splits the text into chunks, generates embeddings with Mistral Cloud, and inserts the vectors into the specified Qdrant collection.

## Setup
1. Create a Qdrant API credential in n8n and ensure your Qdrant instance is reachable at the host/port used in the HTTP requests (for example, `http://qdrant:6333`).
2. Add a Mistral Cloud API key credential for the Mistral embeddings node.
3. Update the folder path in the variables (for example, `/home/node/BankStatements`) and make sure n8n has filesystem access to that directory.
4. Create (or update) the Qdrant collection name used by the workflow (for example, `local_file_search`) so it matches the collection referenced in the workflow.

## 🔗 Nodes Used

HTTP Request, Recursive Character Text Splitter, Read/Write Files from Disk, Default Data Loader, Embeddings Mistral Cloud, Qdrant Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
