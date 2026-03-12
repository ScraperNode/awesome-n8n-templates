# 📖 Auto-update knowledge base with Drive, LlamaIndex & Azure OpenAI embeddings

> ⚡ **429 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This Workflow auto-ingests Google Drive documents, parses them with LlamaIndex, and stores Azure OpenAI embeddings in an in-memory vector store—cutting manual update time from ~30 minutes to under 2 minutes per doc.

## Why Use This Workflow?
 
**Cost Reduction:** Eliminates pays monthly fee on cloud just for store knowledge

## Ideal For

- **Knowledge Managers / Documentation Teams:** Automatically keep product docs and SOPs in sync when source files change on Google Drive.
- **Support Teams:** Ensure the searchable KB is always up-to-date after doc edits, speeding agent onboarding and resolution time.
- **Developer / AI Teams:** Populate an in-memory vector store for experiments, rapid prototyping, or local RAG demos.

## How It Works

1. **Trigger:** Google Drive Trigger watches a specific document or folder for updates.
2. **Data Collection:** The updated file is downloaded from Google Drive.
3. **Processing:** The file is uploaded to LlamaIndex cloud via an HTTP Request to create a parsing job.
4. **Intelligence Layer:** Workflow polls LlamaIndex job status (Wait + Monitor loop). If parsing status equals SUCCESS, the result is retrieved as markdown.
5. **Output & Delivery:** Parsed markdown is loaded into LangChain's Default Data Loader, passed to Azure OpenAI embeddings (deployment "3small"), then inserted into an in-memory vector store.
6. **Storage & Logging:** Vector store holds embeddings in memory (good for prototyping). Optionally persist to an external vector DB for production.

## Setup Guide

### Prerequisites

| Requirement | Type | Purpose |
|-------------|------|---------|
| n8n instance | Essential | Execute and import the workflow — use the [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) |
| Google Drive OAuth2 | Essential | Watch and download documents from Google Drive |
| LlamaIndex Cloud API | Essential | Parse and convert documents to structured markdown |
| Azure OpenAI Account | Essential | Generate embeddings (deployment configured to model name "3small") |
| Persistent Vector DB (e.g., Pinecone) | Optional | Persist embeddings for production-scale search |

### Installation Steps

1. Import the workflow JSON into your n8n instance: open your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) and import the file.
2. Configure credentials:
   - Azure OpenAI: Provide Endpoint, API Key and set deployment name.
   - LlamaIndex API: Create an HTTP Header Auth credential in n8n. Header Name: Authorization. Header Value: Bearer YOUR_API_KEY.
   - Google Drive OAuth2: Create OAuth 2.0 credentials in Google Cloud Console, enable Drive API, and configure the Google Drive OAuth2 credential in n8n.
3. Update environment-specific values:
   - Replace the workflow's Google Drive fileId with the GUID or folder ID you want to watch (do not commit public IDs).
4. Customize settings:
   - Polling interval (Wait node): adjust for faster or slower job status checks.
   - Target file or folder: toggled on the Google Drive Trigger node.
   - Embedding model: change Azure OpenAI deployment if needed.
5. Test execution:
   - Save changes and trigger a sample file update on Drive. Verify each node runs and the vector store receives embeddings.

## Technical Details

### Core Nodes

| Node | Purpose | Key Configuration |
|------|---------|-------------------|
| Knowledge Base Updated Trigger (Google Drive Trigger) | Triggers on file/folder changes | Set trigger type to specific file or folder; configure OAuth2 credential |
| Download Knowledge Document (Google Drive) | Downloads file binary | Operation: download; ensure OAuth2 credential is selected |
| Parse Document via LlamaIndex (HTTP Request) | Uploads file to LlamaIndex parsing endpoint | POST multipart/form-data to /parsing/upload; use HTTP Header Auth credential |
| Monitor Document Processing (HTTP Request) | Polls parsing job status | GET /parsing/job/{{jobId}}; check status field |
| Check Parsing Completion (If) | Branches on job status | Condition: {{$json.status}} equals SUCCESS |
| Retrieve Parsed Content (HTTP Request) | Fetches parsed markdown result | GET /parsing/job/{{jobId}}/result/markdown |
| Default Data Loader (LangChain) | Loads parsed markdown into document format | Use as document source for embeddings |
| Embeddings Azure OpenAI | Generates embeddings for documents | Credentials: Azure OpenAI; Model/Deployment: 3small |
| Insert Data to Store (vectorStoreInMemory) | Stores documents + embeddings | Use memory store for prototyping; switch to DB for persistence |

### Workflow Logic

- On Drive change, the file binary is downloaded and sent to LlamaIndex.
- Workflow enters a monitor loop: Monitor Document Processing fetches job status, If node checks status. If not SUCCESS, Wait node delays before re-check.
- When parsing completes, the workflow retrieves markdown, loads documents, creates embeddings via Azure OpenAI, and inserts data into an in-memory vector store.

## Customization Options

Basic Adjustments:
- Poll Delay: Set Wait node (default: every minute) to balance speed vs. API quota.
- Target Scope: Switch the trigger from a single file to a folder to auto-handle many docs.
- Embedding Model: Swap Azure deployment for a different model name as needed.

Advanced Enhancements:
- Persistent Vector DB Integration: Replace vectorStoreInMemory with Pinecone or Milvus for production search.
- Notification: Add Slack or email nodes to notify when parsing completes or fails.
- Summarization: Add an LLM summarization step to generate chunk-level summaries.

Scaling option:
- Batch uploads and chunking to reduce embedding calls; use a queue (Redis or n8n queue patterns) and horizontal workers for high throughput.

## Performance & Optimization

| Metric | Expected Performance | Optimization Tips |
|--------|----------------------|-------------------|
| Execution time (per doc) | ~10s–2min (depends on file size & LlamaIndex processing) | Chunk large docs; run embeddings in batches |
| API calls (per doc) | 3–8 (upload, poll(s), retrieve, embedding calls) | Increase poll interval; consolidate requests |
| Error handling | Retries via Wait loop and If checks | Add exponential backoff, failure notifications, and retry limits |

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Authentication errors | Invalid/missing credentials | Reconfigure n8n Credentials; do not paste API keys directly into nodes |
| File not found | Incorrect fileId or permissions | Verify Drive fileId and OAuth scopes; share file with the service account if needed |
| Parsing stuck in PENDING | LlamaIndex processing delay or rate limit | Increase Wait node interval, monitor LlamaIndex dashboard, add retry limits |
| Embedding failures | Model/deployment mismatch or quota limits | Confirm Azure deployment name (3small) and subscription quotas |

---

**Created by:** [khmuhtadin](https://khmuhtadin.com)  
**Category:** Knowledge Management
**Tags:** google-drive, llamaindex, azure-openai, embeddings, knowledge-base, vector-store

Need custom workflows? [Contact us](https://khaisa.studio/contact)

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, Simple Vector Store, Default Data Loader, Embeddings Azure OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
