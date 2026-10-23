# 🔬 Sync Google Drive documents to Pinecone RAG with Google Gemini embeddings

> ⚡ **52 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs on a schedule to sync files from a Google Drive folder into a Pinecone vector index for RAG, extracting text from PDFs, XLSX, Google Docs, and spreadsheets, generating embeddings with Google Gemini, and tracking file state in a Google Sheets log to handle updates and deletions.

## How it works
1. Runs on a schedule and fetches the current file list from a target Google Drive folder and the existing file log from Google Sheets.
2. Compares Google Drive files with the Google Sheets log to detect new/updated files to ingest and files that were deleted from Drive.
3. For new or updated files, deletes any existing vectors in Pinecone for the file ID, downloads the file from Google Drive, and routes it by MIME type.
4. Extracts text from PDFs, XLSX/Google Sheets, and plain text/Google Docs files and maps the extracted content with file metadata (file ID, name, modified time, and MIME type).
5. Chunks the document text, generates embeddings with Google Gemini, and inserts the resulting vectors and metadata into a Pinecone index.
6. Appends or updates the Google Sheets log with the latest file metadata, and for deleted Drive files it deletes matching vectors in Pinecone and removes the corresponding log rows.

## Setup
1. Connect Google Drive OAuth2 credentials and set the folder ID to the Drive folder you want to sync.
2. Connect Google Sheets OAuth2 credentials and set the spreadsheet/sheet used as the sync log (it must include at least file_id, name, and modifiedTIme columns).
3. Create or select a Pinecone index (for example, gdrive-rag), add Pinecone API credentials, and ensure the Pinecone delete endpoint and API key header are configured correctly.
4. Add Google Gemini (PaLM) API credentials for the embeddings model used by the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, Pinecone Vector Store, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
