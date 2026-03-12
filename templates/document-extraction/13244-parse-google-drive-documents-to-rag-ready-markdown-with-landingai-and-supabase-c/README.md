# 🔬 Parse Google Drive documents to RAG-ready Markdown with Landing.ai and Supabase cache

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Make your unstructured large documents LLM ready markdown using LandingAI Document Parsing.

- Automatically watches a Google Drive folder, submits new documents to Landing.ai for parsing, caches processed files in - Supabase to avoid reprocessing, and reliably polls results with retry and timeout handling.
---

## Use Cases
- Automated document ingestion for RAG pipelines  
- Invoice, contract, or report parsing  
- AI-powered document analysis workflows  
- Knowledge base ingestion from Google Drive  
- Preventing duplicate document processing in ETL pipelines  
---

External services:
- Google Drive
- Landing.ai
- Supabase
---

## Credentials Required

### Required
- Google Drive OAuth2
- Landing.ai API (HTTP Bearer Token)
- Supabase API
---

## How it works 

Once the pdf land in google drive location it trigger and it convert pdf (even more then 200 pages to LLM ready markdown). 
It also check in database if the parsing is already done or not, this help to avoid any unnecessary landingAI api call.  

## Setup Instructions

### Step 1: Google Drive
1. Create or select a folder in Google Drive
2. Copy the folder ID
3. Update the **Google Drive Trigger** node with this folder ID

### Step 2: Landing.ai
1. Create a Landing.ai account
2. Generate an API key
3. Add it in n8n as an **HTTP Bearer Auth** credential
4. Update the `organization-id` header if required

### Step 3: Supabase
1. Create a Supabase project
2. Create a table named `landing_parse_cache`
3. Add fields such as:
   - `file_id`
   - `document_name`
   - `mime_type`
   - `file_size_bytes`
   - `job_id`
   - `job_status`
   - `markdown`
   - `uploaded_at`
   - `workflow_run_id`
4. Connect Supabase credentials in n8n

## Expected Input
- A document uploaded into the configured Google Drive folder  
  (PDF, DOCX, or other supported formats)

---

## Expected Output
- Parsed markdown content stored in Supabase
- Metadata including:
  - File ID
  - File name
  - MIME type
  - File size
  - Job ID
  - Processing status
- Early exit if the document already exists in cache

---

## Error Handling & Edge Cases
- Cache check to prevent duplicate processing  
- Retry-based polling for async job completion  
- Timeout detection for stuck jobs  
- Large file output URL handling  
- Detailed logging for debugging and audits  

---

## Customization Ideas
- Push parsed output to a vector database
- Trigger Slack or email notifications
- Store results in cloud storage (S3, GCS)
- Extend into a RAG or AI agent pipeline
---

## Categories
- Document Processing
- AI & LLM
- Knowledge Management
- Automation

---

## Difficulty Level
Advanced


---

Happy Automating - from Alok

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
