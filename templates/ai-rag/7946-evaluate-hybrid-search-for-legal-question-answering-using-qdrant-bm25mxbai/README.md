# 🔍 Evaluate hybrid search for legal question-answering using Qdrant & BM25/mxbai

> ⚡ **2,075 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

## Evaluate Hybrid Search on Legal Dataset
*This is the second part of **"Hybrid Search with Qdrant & n8n, Legal AI."**
The first part, [**"Indexing"**](https://n8n.io/workflows/7945-hybrid-search-with-qdrant-and-n8n-legal-ai-indexing/), covers preparing and uploading the dataset to Qdrant.*

### Overview
This pipeline demonstrates how to perform **Hybrid Search** on a [Qdrant collection](https://qdrant.tech/documentation/concepts/collections/#collections) using questions and text chunks (containing answers) from the  
[LegalQAEval dataset (isaacus)](https://huggingface.co/datasets/isaacus/LegalQAEval).

On a small subset of questions, it shows:  
- How to set up hybrid retrieval in Qdrant with:  
  - [BM25](https://en.wikipedia.org/wiki/Okapi_BM25)-based keyword retrieval;
  - [mxbai-embed-large-v1](https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1) semantic retrieval;  
  - **Reciprocal Rank Fusion (RRF)**, a simple zero-shot fusion of the two searches;
- How to run a basic evaluation:  
  - Calculate **hits@1** — the percentage of evaluation questions where the top-1 retrieved text chunk contains the correct answer  


After running this pipeline, you will have a quality estimate of a simple hybrid retrieval setup.  
From there, you can reuse Qdrant’s **Query Points** node to build a **legal RAG chatbot**.  

### Embedding Inference
- By default, this pipeline uses [**Qdrant Cloud Inference**](https://qdrant.tech/documentation/cloud/inference/) to convert questions to embeddings.  
- You can also use an **external embedding provider** (e.g. OpenAI).  
  - In that case, minimally update the pipeline, similar to the adjustments showed in **Part 1: Indexing**.  

### Prerequisites
- **Completed Part 1 pipeline**, *"Hybrid Search with Qdrant & n8n, Legal AI: Indexing"*, and the collection created in it;
- All the requirements of **Part 1 pipeline**;

### Hybrid Search
The example here is a **basic hybrid query**. You can extend/enhance it with:
- Reranking strategies;  
- Different fusion techniques;
- Score boosting based on metadata;
- ...  

More details: [Hybrid Queries in Qdrant](https://qdrant.tech/documentation/concepts/hybrid-queries/).  

#### P.S.
- To ask retrieval in Qdrant-related questions, join the [Qdrant Discord](https://discord.gg/ArVgNHV6).  
- Star [Qdrant n8n community node repo](https://github.com/qdrant/n8n-nodes-qdrant) &lt;3

## 🔗 Nodes Used

HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
