# 📊 Analyze and modernize university curricula with GPT-4o and employment data

> ⚡ **77 views** · 📊 [Market Research & Insights](../)

## Description

Based on the workflow image, here is the complete n8n template submission:

---

**Title:**
`ai curriculum modernisation with learning outcome and industry demand alignment`

---

## How It Works
This workflow automates higher education curriculum analysis and modernisation using a multi-agent AI system. Designed for academic administrators, curriculum designers, and institutional planners, it eliminates manual effort in aligning course content with graduate employment outcomes and industry demand signals. The pipeline starts by concurrently loading graduate employment data, enrolment patterns, and extracting course syllabi from PDFs. These are merged and fed into a Curriculum Knowledge Base using semantic embeddings and text splitting. A Curriculum Modernisation Agent orchestrates two sub-agents: a Learning Outcome Alignment Agent (using semantic retrieval and cognitive load analysis) and an Industry Demand Forecast Agent (querying live employment data). Outputs are parsed and stored as structured analysis results, enabling institutions to make evidence-based curriculum decisions at scale.

## Setup Steps
1. Add OpenAI or compatible LLM API credentials to all Chat Model and Embedding nodes.
2. Connect graduate employment and enrolment data sources.
3. Set up vector store credentials for the `Curriculum Knowledge Base` node.
4. Configure `Employment Data Query Tool` with your labour market data source or API.
5. Update `Store Analysis Results` with your target storage destination.

## Prerequisites
- Vector store (e.g., Pinecone, Qdrant, or Supabase)
- Graduate employment & enrolment data (CSV or DB)
- Course syllabi in PDF format
## Use Cases
- Annual curriculum review aligned to graduate employment trends
## Customisation
- Swap embedding models for domain-specific academic corpora
## Benefits
- Automates labour-intensive curriculum mapping processes

## 🔗 Nodes Used

AI Agent, Embeddings OpenAI, OpenAI Chat Model, Structured Output Parser, Recursive Character Text Splitter, Code Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
