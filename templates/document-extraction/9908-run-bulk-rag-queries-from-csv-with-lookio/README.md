# 🔬 Run bulk RAG queries from CSV with Lookio

> ⚡ **334 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This template processes a CSV of questions and returns an enriched CSV with RAG-based answers produced by your **Lookio** assistant. 

Upload a CSV that contains a column named **Query**, and the workflow will loop through every row, call the **Lookio API**, and append a **Response** column containing the assistant's answer. 

It's ideal for batch tasks like drafting RFP responses, pre-filling support replies, generating knowledge-checked summaries, or validating large lists of product/customer questions against your internal documentation.

## Who is this for?

* **Knowledge managers & technical writers:** Produce draft answers to large question sets using your company docs.
* **Sales & proposal teams:** Auto-generate RFP answer drafts informed by internal docs.
* **Support & operations teams:** Bulk-enrich FAQs or support ticket templates with authoritative responses.
* **Automation builders:** Integrate Lookio-powered retrieval into bulk data pipelines.

## What it does / What problem does this solve?

* **Automates bulk queries:** Eliminates the manual process of running many individual lookups.
* **Ensures answers are grounded:** Responses come from your uploaded documents via **Lookio**, reducing hallucinations.
* **Produces ready-to-use output:** Delivers an enriched CSV with a new **Response** column for downstream use.
* **Simple UX:** Users only need to upload a CSV with a **Query** column and download the resulting file.

## How it works

1. **Form submission:** User uploads a CSV via the **Form Trigger**.
2. **Extract & validate:** **Extract all rows** reads the CSV and **Aggregate rows** checks for a **Query** column.
3. **Per-row loop:** **Split Out** and **Loop Over Queries** iterate rows; **Isolate the Query column** normalizes data.
4. **Call Lookio:** **Lookio API call** posts each query to your assistant and returns the answer.
5. **Build output:** **Prepare output** appends **Response** values and **Generate enriched CSV** creates the downloadable file delivered by **Form ending and file download**.

## Why use Lookio for high quality RAG?

While building a native **RAG pipeline** in n8n offers granular control, achieving consistently **high-quality and reliable results** requires significant effort in data processing, chunking strategy, and retrieval logic optimization. **Lookio** is designed to address these challenges by providing a managed RAG service accessible via a simple API. 

It handles the entire **backend pipeline**—from processing various document formats to employing advanced retrieval techniques—allowing you to integrate a production-ready knowledge source into your workflows. This approach lets you **focus on building your automation in n8n**, rather than managing the complexities of a RAG infrastructure.

## How to set up

1. **Create a Lookio assistant:** Sign up at https://www.lookio.app/, upload documents, and create an assistant.
2. **Get credentials:** Copy your **Lookio API Key** and **Assistant ID**.
3. **Configure the workflow nodes:**
   * In the **Lookio API call** **HTTP Request** node, replace the **api_key** header value with your **Lookio API Key** and update **assistant_id** with your **Assistant ID** (replace placeholders like `&lt;your-lookio-api-key&gt;` and `&lt;your-assistant-id&gt;`).
   * Ensure the **Form Trigger** is enabled and accepts a **.csv** file.
4. **CSV format:** Ensure the input CSV has a column named **Query** (case-sensitive as configured).
5. **Activate the workflow:** Run a test upload and download the enriched CSV.

## Requirements

* An n8n instance with the ability to host Forms and run workflows
* A **Lookio** account (API Key) and an **Assistant ID**

## How to take it further

* **Add rate limiting / retries:** Insert error handling and delay nodes to respect API limits for large batches.
* **Improve the speed**: You could drastically reduce the processing time by parallelizing the queries instead of doing them one after the other in the loop. For that, you could use HTTP request nodes that would trigger your sort of sub-workflow. 
* **Store results:** Add an **Airtable** or **Google Sheets** node to archive questions and responses for audit and reuse.
* **Post-process answers:** Add an LLM node to summarize or standardize responses, or to add confidence flags.
* **Trigger variations:** Replace the **Form Trigger** with a **Google Drive** or **Airtable** trigger to process CSVs automatically from a folder or table.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
