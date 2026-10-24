# 📊 Build a Google Drive document similarity database with Ollama and Postgres

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Builds a searchable semantic similarity database from Google Drive documents using PostgreSQL, PGVector, and Ollama embeddings, then analyzes document similarity and provides interactive internal linking recommendations through chunk-level and page-level matching.

## How it works
1. Build or update the document database, or search the existing database for internal linking opportunities.
2. Scans a configured Google Drive folder, filters target documents, downloads the files, extracts page text, cleans the content, and stores it in PostgreSQL.
3. Splits document text into 500-character chunks with 50-character overlap and generates mxbai-embed-large embeddings through Ollama and PGVector.
4. Creates HNSW indexes, compares document chunks, calculates page-level centroid embeddings, and identifies highly similar pages. Accepts a 10–5,000 word query, vectorizes its chunks, compares them against stored document vectors, and generates chunk-level and page-level internal linking opportunity reports.

## Setup
1. Connect Google Drive with permission to access the source folder and documents, then update the folder used by the Scan Source Directory node if required.
2. Connect a PostgreSQL database with PGVector and HNSW support. The workflow creates and replaces tables used for scraped content, vectors, similarity calculations, centroids, and reports. Make sure Ollama is reachable from n8n and has the mxbai-embed-large:latest embedding model available.
3. Confirm the document filter, text extraction, chunking, similarity thresholds, database table configuration, and CSV output settings before running the workflow.

## Requirements
- Google Drive account and OAuth credentials
- PostgreSQL database with the PGVector extension
- HNSW vector index support
- Ollama accessible from the n8n instance
- mxbai-embed-large:latest embedding model
- n8n Chat Interface / Chat Trigger support

## Customization
- Change the Google Drive source folder and document filter criteria.
- Adjust document and query chunk size and overlap.
- Change Ollama embedding model configuration.
- Adjust chunk-level and page-level similarity thresholds.
- Modify the number of matching results returned.
- Customize generated CSV report filenames and database table names.

## Additional info
The database-build operation is destructive: it removes the existing n8n_vectors and scraped_pages tables before rebuilding the document dataset and embeddings. The workflow produces separate chunk-level and page-level similarity outputs. The interactive search mode requires a query between 10 and 5,000 words and generates internal linking recommendations from the existing vector database.

## 🔗 Nodes Used

Postgres, Google Drive, Filter, Recursive Character Text Splitter, Convert to File, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
