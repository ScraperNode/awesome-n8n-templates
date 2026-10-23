# 🔬 Detect semantic duplicate website pages with Google Drive, Ollama and Postgres

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow scans HTML files in a Google Drive folder, extracts and stores page text in Postgres, generates embeddings with Ollama and PGVector, then computes chunk-level and page-level semantic similarity to identify likely duplicate pages and export two CSV reports.

## How it works
1. Starts manually and clears previous data from the Postgres tables used for scraped pages and stored vectors.
2. Lists files in a specified Google Drive folder and filters to the target HTML documents.
3. Downloads each HTML file from Google Drive, extracts visible body text, cleans it, and upserts the result into a Postgres table.
4. Loads the stored page text from Postgres, splits it into overlapping chunks, generates embeddings with Ollama, and inserts the chunk vectors into PGVector with page metadata.
5. Builds an HNSW index in Postgres and runs a similarity search to create a pairwise chunk-match report, which is exported as a downloadable CSV.
6. Computes per-page centroid embeddings from all chunk vectors, compares centroid similarity to flag likely duplicate pages, and exports the page-level similarity report as a downloadable CSV.

## Setup
1. Connect Google Drive OAuth2 credentials and set the folder URL/ID used to scan and download the source HTML files.
2. Connect Postgres credentials, ensure the pgvector extension is installed, and confirm the workflow can create/alter the required tables (including the n8n_vectors vector column and HNSW indexes).
3. Connect an Ollama credential, make sure the Ollama server is reachable from n8n, and ensure the mxbai-embed-large model is available locally.
4. Review and adjust the file filter (document naming), chunking settings, embedding dimensions (1024), and the SQL similarity thresholds to match your content and database performance limits.

## Requirements
- Working instance of n8n, either self-hosted or on the cloud. Remember, this workflow can be computationally expensive.
- Google Drive API (with OAuth setup in n8n credentials section)
- Ollama (for open source models) or any Embedding model API
- PostgreSQL with PGVector or any other vector database
- PgAdmin (for PostgreSQL) or your interface to access database tables via SQL for troubleshooting (optional).

## Additional info
Limitations and Enhancements:
Physical system memory
mxbai-embed-large Running through Ollama is free and private, but the embedding generation speed depends entirely on your hardware. The more system memory you have, the more data you can process in batches in the loop node.
Similarity threshold and boilerplate content
The cosine distance used in this workflow is 0.15 for chunk-level matching. And 0.05 (similarity above 95%) of the threshold is used for page-level centroid matching. This is only the starting point. Once you have the data, and especially if your data has more noise, you might need to tweak these thresholds for better matching.
This workflow needs HTML files to extract text
This workflow doesn’t crawl a website or fetch pages by entering a URL. You need to download HTML files (rendered or source) for consumption.
Use parallel processing and Cloud APIs
Two sub-processes take the most time:
Downloading HTML files from Google Drive
Creating vector embeddings
If you can use parallel processing in n8n and execute these sub-processes in parallel, the process will be done much faster. Additionally, if you can use cloud APIs for embedding, it may save some you some processing time as well.
Use efficient SQL queries
Since I am from a non-tech background and not a coder, I used a mix of Gemini, Perplexity and Claude to create SQL codes for this workflow. If you’re better at it, you can run computationally efficient queries that would help you achieve better results with less computation expense and time.

## 🔗 Nodes Used

Postgres, Google Drive, Filter, Recursive Character Text Splitter, Convert to File, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
