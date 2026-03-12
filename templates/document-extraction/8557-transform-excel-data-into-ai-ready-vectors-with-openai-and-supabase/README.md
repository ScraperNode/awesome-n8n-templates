# 🔬 Transform Excel data into AI-ready vectors with OpenAI and Supabase

> ⚡ **1,796 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Description
This workflow is a **practical, “dirty” solution** for real-world scenarios where frontline workers keep using Excel in their daily processes.  
Instead of forcing change, we take their spreadsheets as-is, clean and normalize the data, generate embeddings, and store everything in Supabase.

The benefit: frontline staff continue with their familiar tools, while **data analysts gain clean, structured, and vectorized data** ready for analysis or RAG-style AI applications.

## How it works
- **Frontline workers continue with Excel** – no disruption to their daily routines.  
- **Upload & trigger** – The workflow runs when a new Excel sheet is ready.  
- **Read Excel rows** – Data is pulled from the specified workbook and worksheet.  
- **Clean & normalize** – HTML is stripped, Excel dates are fixed, and text fields are standardized.  
- **Batch & switch** – Rows are split and routed into Question/Answer processing paths.  
- **Generate embeddings** – Cleaned Questions and Answers are converted into vectors via OpenAI.  
- **Merge enriched records** – Original business data is combined with embeddings.  
- **Write into Supabase** – Data lands in a structured table (`excel_records`) with vector and FTS indexes.  

## Why it’s “dirty but useful”
- **No disruption** – frontline workers don’t need to change how they work.  
- **Analyst-ready data** – Supabase holds clean, queryable data for dashboards, reporting, or AI pipelines.  
- **Bridge between old and new** – Excel remains the input, but the backend becomes modern and scalable.  
- **Incremental modernization** – paves the way for future workflow upgrades without blocking current work.  

## Outcome
Frontline workers keep their Excel-based workflows, while **data can immediately be structured, searchable, and vectorized in Supabase** — enabling AI-powered search, reporting, and retrieval-augmented generation.


## Required setup

**Supabase account**
- Create a project and enable the **pgvector** extension. 

**OpenAI API Key** 
  - Required for generating embeddings (`text-embedding-3-small`).  

**Microsoft Excel credentials**
  - Needed to connect to your workbook and worksheet.  

- ## Need Help
🔗 [LinkedIn – Wessel Bulte](https://www.linkedin.com/in/wessel-bulte/)

## 🔗 Nodes Used

HTTP Request, Postgres, Microsoft Excel 365, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
