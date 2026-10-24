# 🔬 Sync documentation vectors from GitHub with Ollama and Qdrant

> ⚡ **23 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to sync the n8n-io/n8n-docs GitHub repository into a Qdrant vector collection by fetching Markdown files, chunking them by section, generating embeddings with Ollama, and storing the chunks with metadata for retrieval.

## How it works
1. Runs every day at 3:00 AM using a schedule trigger.
2. Fetches the latest commit SHA from the n8n-io/n8n-docs GitHub repo and compares it to a previously stored SHA in Qdrant to skip processing when nothing changed.
3. Deletes all existing points from the Qdrant n8n_docs collection to prevent duplicate vectors before re-ingesting.
4. Pulls the recursive file tree from GitHub, filters for docs/*.md files, and generates raw GitHub URLs plus basic metadata for each page.
5. Downloads the raw Markdown content in batches and splits each page into heading-based sections, enriching each chunk with additional metadata and size-based sub-chunking.
6. Generates embeddings for each chunk with Ollama (nomic-embed-text) and inserts the embedded documents into the Qdrant n8n_docs collection.
7. Writes the latest GitHub commit SHA back to Qdrant as a dedicated state point so the next run can detect changes.

## Setup
1. Create or choose a Qdrant collection named "n8n_docs" configured for 768 dimensions and Cosine distance (matching nomic-embed-text), and update the Qdrant base URL (currently http://qdrant:6333) if your instance runs elsewhere.
2. Set up an Ollama instance with the nomic-embed-text model available and add the Ollama credentials in n8n.
3. Ensure the workflow can reach the GitHub API endpoints (and add authentication if needed for higher rate limits) since it fetches commit SHAs, repository trees, and raw Markdown files.

## Requirements
- Qdrant Vector DB: Running locally via Docker or remotely (Qdrant Cloud / self-hosted).
- Ollama Instance: Local or remote Ollama service with the nomic-embed-text model pulled (ollama pull nomic-embed-text).
- GitHub Access: Outbound connectivity to api.github.com (GitHub Personal Access Token recommended to prevent unauthenticated 60 req/hr rate limits).

## Customization
- Target Any Documentation Repo: Modify the GitHub repo node parameters to ingest your own internal Markdown/GitBook repositories instead of n8n-io/n8n-docs.
- Alternative Embedding Models: Swap nomic-embed-text for models like bge-m3 or all-minilm in the Ollama node (remember to match your Qdrant vector size accordingly).
- Execution Trigger: Adjust the schedule trigger time or swap it for a manual or webhook trigger for on-demand re-indexing.
- Batch Sizing: Adjust chunk batch sizes to balance ingestion speed against local hardware capabilities.

## Additional info
Part of the n8n RAG Suite

This workflow is part of the modular n8n RAG Suite. For complete Docker Compose deployment files, companion vector sync workflows, and the agentic retrieval chat assistant, check out the repository on GitHub:

GitHub Repo: https://github.com/jdm6457/n8n-rag-suite

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Default Data Loader, Qdrant Vector Store, Embeddings Ollama

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
