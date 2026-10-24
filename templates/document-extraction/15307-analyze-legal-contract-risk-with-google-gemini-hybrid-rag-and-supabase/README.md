# 🔬 Analyze legal contract risk with Google Gemini hybrid RAG and Supabase

> ⚡ **210 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### 🚀 What This Workflow Does
This workflow transforms any PDF legal contract into a detailed AI-powered risk report — in under 5 minutes. Upload a contract, and the system automatically splits it into clauses, analyses each one using Hybrid RAG (semantic + keyword search), scores risk as HIGH / MEDIUM / LOW, and delivers plain-English explanations with safer alternative wording.

---

### 🔥 Why Hybrid RAG?
Most dangerous clauses don't use obvious legal keywords.
**"The Client accepts full responsibility for all third-party claims"** is an indemnification clause — but keyword search misses it.
Hybrid RAG combines:
- **Vector Search (pgvector)** — finds semantically similar risky patterns
- **BM25 Keyword Search** — catches explicit legal red flags
- **RRF Reranking** — merges both results with clause-type boosting

---

### 🔍 What It Does
- Accepts a PDF contract via webhook (with async job_id tracking)
- Splits contract into individual numbered clauses
- Classifies each clause type using Google Gemini (indemnification, IP, termination, etc.)
- Generates vector embeddings and searches a Supabase knowledge base
- Scores each clause HIGH / MEDIUM / LOW using regex + AI
- AI Agent (Gemini Flash) explains risk in plain language + suggests safer wording
- Aggregates all results into a single JSON report
- Saves report to Supabase (frontend polls for result asynchronously)

---

### ⚙️ Architecture (Two Pipelines)
**Pipeline 1 — Ingestion:** Builds the knowledge base of risky clause patterns in Supabase
**Pipeline 2 — Query:** Analyses new contracts against the knowledge base

Both pipelines run in the same workflow — the branch splits at Extract Embedding.

---

### 🧠 Key Technical Decisions
- **Async architecture** — Frontend fires request + polls Supabase. No timeout issues.
- **job_id tracking** — Preserved across all nodes via ...$json spread
- **RRF Reranking** — Combines vector + BM25 scores with type-based boost multipliers
- **Regex Risk Scorer** — First-pass risk classification before expensive LLM call
- **Gemini Flash** — Fast, cost-efficient LLM for per-clause annotation

---

### 📦 Requirements
- **Google Gemini API key** — for clause classification + embeddings + AI Agent
- **Supabase project** — with pgvector extension enabled
- **Supabase tables:** `legal_clauses` (knowledge base) + `reports` (results)
- **Supabase functions:** `match_clauses()` + `keyword_search_clauses()`
- **Frontend (optional):** HTML/CSS/JS web app hosted on Netlify

---

### 💡 Example Use Cases
- Freelancers reviewing client contracts before signing
- Startups evaluating vendor or investor agreements
- Legal ops teams standardising contract review at scale
- Business owners catching risky clauses without legal fees

---

### 🎯 Output
- Per-clause: risk_level, plain-English explanation, risk_reason, safer_alternative, key_obligations, legal_area
- Summary: overall_risk_score, risk_distribution, legal_areas map, high_risk_clauses list
- Stored as JSON in Supabase `reports` table, keyed by job_id

## 🔗 Nodes Used

HTTP Request, Webhook, Supabase, AI Agent, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
