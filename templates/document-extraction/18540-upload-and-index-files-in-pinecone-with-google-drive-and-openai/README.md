# 🔬 Upload and index files in Pinecone with Google Drive and OpenAI

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow accepts file uploads via a webhook, archives the originals in Google Drive, then chunks and embeds the content with OpenAI before indexing it into a Pinecone vector database for retrieval.

## How it works
1. Receives a file upload via a POST webhook request as binary multipart form data.
2. Detects the file name, size, and extension and calculates dynamic chunk size, chunk overlap, and OpenAI embedding batch size.
3. Uploads the original file to a specified Google Drive folder to keep a source copy.
4. Downloads the same file back from Google Drive and prepares it for document loading.
5. Splits the document into pages and chunks (tagged with the source filename), generates OpenAI embeddings, and inserts the vectors into the specified Pinecone index.
6. Responds to the webhook with the workflow output once indexing completes.

## Setup
1. Add credentials for Google Drive, OpenAI, and Pinecone.
2. Replace `YOUR_GOOGLE_DRIVE_FOLDER_ID` with the destination Drive folder ID and `YOUR_PINECONE_INDEX_NAME` with your Pinecone index name.
3. Activate the workflow, copy the webhook URL, and configure your client to POST a file using the `file` binary field (multipart/form-data).

## 🔗 Nodes Used

Webhook, Google Drive, Embeddings OpenAI, Recursive Character Text Splitter, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
