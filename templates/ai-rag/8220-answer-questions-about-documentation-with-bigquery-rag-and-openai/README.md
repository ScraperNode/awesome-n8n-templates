# 🔍 Answer questions about documentation with BigQuery RAG and OpenAI

> ⚡ **428 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

# BigQuery RAG with OpenAI Embeddings

This workflow demonstrates how to use **Retrieval-Augmented Generation (RAG)** with **BigQuery** and **OpenAI**.  
By default, you cannot directly use OpenAI Cloud Models within BigQuery.

### Try it

*This template comes with access to a **public BigQuery table** that stores part of the n8n documentation (about nodes and triggers), allowing you to try the workflow right away:  
[`n8n-docs-rag.n8n_docs.n8n_docs_embeddings`](https://console.cloud.google.com/bigquery?ws=!1m5!1m4!4m3!1sn8n-docs-rag!2sn8n_docs!3sn8n_docs_embeddings)*

*⚠️ **Important:** BigQuery uses the *requester pays* model.*
*The table is small (~40 MB), and BigQuery provides **1 TB of free processing per month**. Running 3–4 queries for testing should remain within the free tier, unless your project has already consumed its quota.  
More info here: [BigQuery Pricing](https://cloud.google.com/bigquery/pricing?hl=en)*


## Why this workflow?

Many organizations already use BigQuery to store enterprise data, and OpenAI for LLM use cases.  
When it comes to RAG, the common approach is to rely on dedicated vector databases such as **Qdrant**, **Pinecone**, **Weaviate**, or PostgreSQL with **pgvector**.  
Those are good choices, but in cases where an organization already uses and is familiar with BigQuery, it can be more efficient to leverage its built-in vector capabilities for RAG.

Then comes the question of the LLM. If OpenAI is the chosen provider, teams are often frustrated that it is not directly compatible with BigQuery.  
This workflow solves that limitation.

## Prerequisites

To use this workflow, you will need:
* A good understanding of BigQuery and its vector capabilities  
* A BigQuery table containing documents and an embeddings column  
  * The embeddings column must be of type **FLOAT** and mode **REPEATED** (to store arrays)  
* A data pipeline that **generates embeddings with the OpenAI API** and stores them in BigQuery

This template comes with a public table that stores part of the **n8n documentation** (about nodes and triggers), so you can try it out:  
`n8n-docs-rag.n8n_docs.n8n_docs_embeddings`

## How it works

The system consists of two workflows:
* **Main workflow** → Hosts the AI Agent, which connects to a subworkflow for RAG  
* **Subworkflow** → Queries the BigQuery vector table. The retrieved documents are then used by the AI Agent to generate an answer for the user.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
