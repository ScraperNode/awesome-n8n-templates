# 📖 Turn your portfolio into an AI assistant with OpenAI, Claude, Pinecone and Gmail

> ⚡ **28 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

Deploy a personal AI assistant that answers recruiter questions about your skills and projects, then automatically emails your CV as a PDF attachment when requested. Upload your portfolio documents (resume, project writeups, case studies) to a Google Drive folder — the workflow chunks them into 600-character segments, embeds them with OpenAI, and stores them in Pinecone. A webhook-powered AI Agent (Claude Sonnet 4.5) retrieves the most relevant evidence using Pinecone + Cohere reranking, detects CV requests via structured output parsing, and sends your resume file via Gmail — all without any manual intervention.

## How it works

**Ingestion pipeline:**
1. Two Google Drive poll triggers fire every minute, detecting newly created or updated files in your monitored portfolio folder
2. Files are downloaded and enriched with metadata (source filename and upload timestamp)
3. The Default Data Loader extracts text from the binary file, the Recursive Character Text Splitter chunks it at 600 characters with 100-character overlap, and OpenAI `text-embedding-3-small` produces 1536-dimension vectors
4. Vectors are upserted into the `portfolio-docs` Pinecone index

**Chat agent pipeline:**
1. A webhook at `POST /webhook/portfolio-query` receives `{ "chatInput": "...", "sessionId": "...", "email": "..." }`
2. Claude Sonnet 4.5 is instructed to call the `portfolio_knowledge` tool (a Vector Store Tool backed by Pinecone) before answering — every response is grounded in retrieved evidence
3. Cohere `rerank-v3.5` reranks the top-5 Pinecone results to top-3 before they reach the LLM
4. A Structured Output Parser enforces `{ "answer": "...", "cvRequested": false }` — the `cvRequested` boolean is set by the LLM when it detects recruiter intent
5. An IF node branches on `cvRequested`: `true` → download CV PDF from Drive → Gmail attachment → respond `{ answer, cvSent: true }`; `false` → respond `{ answer, cvSent: false }` immediately
6. Buffer Window Memory retains the last 10 messages per `sessionId` for multi-turn conversations

**Error handling:** An Error Trigger catches any node failure and extracts `error_message`, `failed_node`, `workflow_name`, and `execution_url` into a clean object — ready to forward to Slack, email, or any alerting webhook.

## Use cases

- **Job seekers & freelancers** — A 24/7 recruiter-ready assistant that answers questions about your experience and sends your CV on request, even while you sleep
- **Portfolio websites** — A backend API endpoint that powers intelligent Q&A on your personal site without building custom infrastructure
- **Consultants & agencies** — Adapt the ingestion pipeline for a client-facing knowledge base; swap Gmail for any email or messaging node

## Setup

### Prerequisites

- A Pinecone account with an index named **`portfolio-docs`** (dimension: `1536`, metric: `cosine`, pod or serverless)
- A Google Drive folder containing your portfolio documents (PDF, DOCX, or plain text)
- Your CV stored as a PDF in Google Drive (note its file ID)
- n8n instance with the six credentials below configured

### Step 1 — Configure credentials

In n8n → Settings → Credentials, create one credential for each service:

| Credential name | Service |
|---|---|
| `Google Drive OAuth2` | Google Drive OAuth2 |
| `OpenAI API` | OpenAI |
| `Pinecone API` | Pinecone |
| `Anthropic API` | Anthropic |
| `Cohere API` | Cohere |
| `Gmail OAuth2` | Gmail OAuth2 |

### Step 2 — Set your Google Drive folder ID

Open **File Created Trigger** and **File Updated Trigger** (do both). In the **Folder to Watch** field, switch to **ID** mode and paste your folder ID.

&gt; Find your folder ID in the Drive URL: `https://drive.google.com/drive/folders/`**`YOUR_FOLDER_ID`**

### Step 3 — Set your CV file ID

Open **Download CV PDF**. In the **File** field, switch to **ID** mode and paste your CV file ID.

&gt; Find the file ID in: `https://drive.google.com/file/d/`**`YOUR_FILE_ID`**`/view`

### Step 4 — Personalize the system prompt

Open **Portfolio AI Agent** and edit the system message:
- Replace the generic role description with your name and specialization
- Adjust the tone (formal/casual) to match how you want to present yourself
- Update the call-to-action line to reference your actual contact details

### Step 5 — Ingest your documents

Move or upload your portfolio files into the monitored Drive folder. The ingestion pipeline will trigger automatically within one minute and populate Pinecone.

To verify ingestion: check your Pinecone index vector count — it should increase after each file is processed.

### Step 6 — Test the chat endpoint

Send a POST request to your webhook URL:

```bash
curl -X POST https://your-n8n-instance/webhook/portfolio-query \
  -H "Content-Type: application/json" \
  -d '{"chatInput": "What are your main technical skills?", "sessionId": "test-1"}'
```

Expected response:
```json
{ "answer": "...", "cvSent": false }
```

To test CV delivery, include `"email": "your@email.com"` and ask: `"Can you send me the CV?"`.

## Workflow details

- **Nodes**: 25 functional nodes + 4 documentation sticky notes
- **Triggers**: 4 (2 Google Drive poll triggers, 1 Webhook, 1 Error Trigger)
- **AI components**: Claude Sonnet 4.5 (×2 — agent + retrieval), OpenAI `text-embedding-3-small` (×2 — ingest + retrieval), Cohere `rerank-v3.5`, Pinecone Vector Store (×2 — insert + retrieve), Structured Output Parser, Buffer Window Memory
- **Canvas layout**: Three clearly labelled sections with grey sticky note backgrounds — Ingestion pipeline, AI Agent pipeline, Error Handling

## 🔗 Nodes Used

Webhook, Google Drive, Gmail, Google Drive Trigger, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
