# 📖 Build a support knowledge base from historical Gmail emails with OpenAI and PostgreSQL

> ⚡ **114 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# KB Builder — Historical Emails
### n8n Workflow Template

---

## 📘 Description

This workflow automates the process of building a structured Knowledge Base (KB) from your existing Gmail inbox by processing historical email threads, extracting customer-support conversation pairs, classifying them with AI, generating vector embeddings, and storing everything in a PostgreSQL database — ready to power AI-assisted draft generation in downstream workflows.

The workflow is triggered manually and fetches the last N emails from your connected Gmail account. Each email is parsed, filtered, and deduplicated before being processed. A thread-level fetch retrieves the full conversation context, separating customer messages from support replies. An AI classification step categorises each thread into a defined scenario type. Vector embeddings are generated for semantic similarity search. Qualified threads are inserted into three database tables — `kb_data` for clean Q&A pairs, `scenario_patterns` for reusable handling logic, and `corrections` for diverse real-world examples — with strict deduplication to keep the KB clean and non-redundant.

---

## ⚙️ What This Workflow Does (Step-by-Step)

**📥 Manual Trigger** — Run on demand whenever you want to import a batch of historical emails into the KB. No scheduling required.

**📬 Fetch Emails from Gmail** — Pulls the last N emails (configurable, default 100) from your Gmail account using OAuth2. Returns full email metadata including thread IDs, sender, subject, labels, and body.

**🔍 Parse & Filter** — Extracts structured fields from each email: sender address, subject, body (cleaned of links and quoted history), date, and thread ID. Filters out emails from your own domain (outbound support replies) and auto-generated emails (no-reply, notifications, newsletters). Only genuine inbound customer emails proceed.

**🧵 Fetch Full Thread** — For each qualified email, fetches the entire Gmail thread using the thread ID. Retrieves all messages in the conversation to identify the original customer message and the latest support reply.

**🗂️ Assemble Thread Context** — Reconstructs the conversation by separating customer messages from support replies. Builds a clean `conversationText` block used as AI input. Flags threads with no support reply for conditional handling.

**🤖 AI Classification** — Calls GPT-4o-mini (or Claude) with the assembled conversation. Returns a structured JSON output containing: scenario category, a concise Q&A pair, a handling pattern description, key entities, sentiment, resolution status, and a summary.

**🔢 Generate Embeddings** — Calls the OpenAI Embeddings API to generate a 1536-dimension vector for both the KB entry and the correction record. Used for semantic similarity search in the downstream draft-generation workflow.

**🔁 Duplicate Detection & DB Insert** — Performs cosine similarity checks against existing records before inserting. KB entries and scenario patterns are blocked if a match exceeds 92% similarity. Corrections are inserted freely (deduped at 92%) since diverse examples improve AI draft quality. New records are written to three tables: `kb_data`, `scenario_patterns`, and `corrections`.

---

## 🧩 Prerequisites

- **Gmail account** — OAuth2 credentials connected in n8n. The account must be the support inbox you want to import from.
- **OpenAI API key** — Used for GPT-4o-mini classification (~$0.002–0.005 per thread) and text-embedding-3-small for vector generation (~$0.0001 per record).
- **PostgreSQL database** — With the `pgvector` extension enabled. Must have the three tables set up per the schema below.
- **n8n instance** — Self-hosted or cloud. Requires the PostgreSQL and OpenAI nodes.

---

## 🗄️ Database Schema

### Table: `kb_data`
| Field | Type | Notes |
|---|---|---|
| id | SERIAL PRIMARY KEY | Auto-increment |
| thread_id | TEXT | Gmail thread ID |
| subject | TEXT | Email subject |
| category | TEXT | AI-assigned scenario type |
| question | TEXT | Customer issue / question |
| answer | TEXT | Support resolution |
| entities | TEXT | Key entities extracted by AI |
| sentiment | TEXT | Customer sentiment |
| resolution_status | TEXT | Resolved / Unresolved |
| embedding | vector(1536) | OpenAI embedding for similarity search |
| source | TEXT | `historical_import` |
| created_at | TIMESTAMP | Insert timestamp |

### Table: `scenario_patterns`
| Field | Type | Notes |
|---|---|---|
| id | SERIAL PRIMARY KEY | Auto-increment |
| category | TEXT | Scenario type |
| pattern_description | TEXT | Handling logic summary |
| example_subject | TEXT | Representative subject line |
| embedding | vector(1536) | OpenAI embedding |
| source | TEXT | `historical_import` |
| created_at | TIMESTAMP | Insert timestamp |

### Table: `corrections`
| Field | Type | Notes |
|---|---|---|
| id | SERIAL PRIMARY KEY | Auto-increment |
| gmail_thread_id | TEXT | Gmail thread ID |
| original_email_body | TEXT | Customer's original message |
| human_sent_text | TEXT | Actual support reply sent |
| ai_draft_text | TEXT | NULL for historical imports |
| diff_summary | TEXT | Import note or live diff |
| classification | TEXT | Scenario category |
| embedding | vector(1536) | OpenAI embedding |
| source | TEXT | `historical_import` |
| created_at | TIMESTAMP | Insert timestamp |

---

## 💰 Cost Estimate

| Item | Estimated Cost |
|---|---|
| Gmail OAuth2 | Free |
| GPT-4o-mini (100 threads classification) | ~$0.20–0.50 |
| text-embedding-3-small (100 records × 2 embeddings) | ~$0.02 |
| PostgreSQL + pgvector (self-hosted) | ~$5–15/mo |
| n8n self-hosted (AWS t3.small) | ~$10–15/mo |
| **Total per 100-email import run** | **~$0.25–0.75** |

---

## ⚙️ Setup Instructions

1. **Gmail** — Connect your Gmail account in n8n using OAuth2. Ensure the account is the support inbox. Grant read permissions for messages and threads.

2. **PostgreSQL** — Create a new database, enable the `pgvector` extension (`CREATE EXTENSION IF NOT EXISTS vector`), then create the three tables using the schema above.

3. **OpenAI** — Add your OpenAI API key as an n8n credential. Used for both the chat completion node (classification) and the HTTP Request node (embeddings).

4. **Customise the AI prompt** — Open the **AI Classification** node and update the system prompt to reflect your business type, support tone, and the scenario categories relevant to your domain (e.g. Refund Request, Order Status, Technical Issue, Billing Query).

5. **Set your domain filter** — In the **Parse & Filter** node, update the `YOUR_DOMAIN` variable to your support team's email domain so outbound replies are correctly excluded from customer email processing.

6. **Set fetch limit** — In the **Fetch Emails** node, set the `limit` parameter to the number of historical emails you want to import per run. Start with 5–10 to validate the pipeline before running at scale.

7. **Run manually** — Click **Execute Workflow**. Monitor the output of each node to verify parsing, classification, and DB inserts are working correctly.

---

## 💡 Key Benefits

✔ **Converts your inbox into a structured KB** — no manual tagging or categorisation required  
✔ **AI classification** assigns scenario types and extracts Q&A pairs automatically  
✔ **Vector embeddings** enable semantic similarity search in downstream draft workflows  
✔ **Smart deduplication** keeps KB and scenario tables clean — no near-duplicate entries  
✔ **Corrections table accumulates diverse examples** — improves AI draft quality over time  
✔ **Thread-aware** — reconstructs full conversations, not just individual emails  
✔ **Modular AI node** — swap GPT-4o-mini for Claude or any other model with minimal changes  
✔ **One-time historical import** feeds directly into live draft-generation workflows  

---

## 👥 Perfect For

- Support teams wanting to automate email draft generation with AI trained on their own history  
- Founders or small teams building a knowledge base from years of accumulated support emails  
- Developers building AI-powered support automation on top of Gmail  
- Anyone who wants their AI drafts to sound like their own team — not generic templates  

---

## 🔗 Related Workflows

This workflow is **Step 1** in a two-workflow system:

- **KB Builder — Historical Emails** *(this workflow)* — Imports historical threads to seed the KB
- **AI Draft Generator** *(coming soon)* — Monitors new inbound emails, retrieves semantically similar KB entries and corrections, and generates personalised reply drafts delivered to your inbox for one-click review and send

## 🔗 Nodes Used

Postgres, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
