# 🔬 Multi-format document processing for RAG chatbot with Google Drive & Supabase

> ⚡ **635 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow is the data ingestion pipeline for the "RAG System V2" chatbot. It automatically monitors a specific Google Drive folder for new files, processes them based on their type, and inserts their content into a Supabase vector database to make it searchable for the RAG agent.

Key Features & Workflow:

Google Drive Trigger: The workflow starts automatically when a new file is created in a designated folder (named "DOCUMENTS" in this template).

Smart File Handling: A Switch node routes the file based on its MIME type (e.g., PDF, Excel, Google Doc, Word Doc) for correct processing.

Multi-Format Extraction:

PDF: Text is extracted directly using the Extract PDF Text node.

Google Docs: Files are downloaded and converted to plain text (text/plain) and processed by the Extract from Text File node.

Excel: Data is extracted, aggregated, and concatenated into a single text block for embedding.

Word (.doc/.docx): Word files are automatically converted into Google Docs format using an HTTP Request. This newly created Google Doc will then trigger the entire workflow again, ensuring it's processed correctly.

Chunking & Metadata Enrichment: The extracted text is split into manageable chunks using the Recursive Character Text Splitter (set to 2000-character chunks). The Enhanced Default Data Loader then enriches these chunks with crucial metadata from the original file, such as file_name, creator, and created_at.

Vectorization & Storage: Finally, the workflow uses OpenAI Embeddings to create vector representations of the text chunks and inserts them into the Supabase Vector Store.

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, Embeddings OpenAI, Recursive Character Text Splitter, Supabase Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
