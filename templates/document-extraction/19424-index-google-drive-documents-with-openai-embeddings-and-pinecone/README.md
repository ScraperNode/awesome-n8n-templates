# 🔬 Index Google Drive documents with OpenAI embeddings and Pinecone

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow keeps a Pinecone knowledge base in sync with a Google Drive folder by extracting text from supported files, generating OpenAI embeddings, and upserting vectors with metadata, while emailing an admin via Gmail when unsupported formats are found.

## How it works
1. Runs manually, on a daily schedule (3:00 AM), or when a new file is created in a specific Google Drive folder.
2. Lists all files in the configured Google Drive folder, skips temporary conversion/OCR files, and processes the remaining files one at a time.
3. Checks an n8n Data Table to skip files that are already indexed and unchanged since the last recorded modified time.
4. Detects each file’s MIME type and extracts content by exporting Google Docs/Sheets, extracting text from PDFs (or OCR-converting scanned PDFs), parsing Excel files, describing images with OpenAI Vision, or converting DOCX/PPTX to Google formats before export.
5. Splits the extracted content into chunks, creates OpenAI embeddings, deletes any existing Pinecone vectors for the same fileId, and inserts the updated vectors with metadata (title, source, fileId).
6. Upserts the file’s indexing record in the n8n Data Table and, after the run, removes Pinecone vectors and table entries for files that were deleted from the Drive folder.
7. For unsupported file types, sends a Gmail notification to the admin and records the skip in the tracking table to avoid repeated alerts.

## Setup
1. Add credentials for Google Drive (OAuth2), Pinecone, OpenAI, and Gmail (OAuth2) to the nodes that use them.
2. Create a Pinecone index with dimension 1536 (for text-embedding-3-small) and set the index name, host, and namespace in the Settings node.
3. Set the Google Drive folder ID to scan and the admin email address in the Settings node.
4. Create an n8n Data Table named gdrive_indexed_files with columns for fileId, indexedAt, and modifiedTime (or update the workflow to match your table name/schema).
5. (Optional) Adjust chunkSize and chunkOverlap in Settings, then run “Start document indexing” once to build the initial index before activating the triggers.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Google Drive Trigger, Schedule Trigger, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
