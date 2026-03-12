# 🔬 Document Q&A with RAG: Query PDF content using Weaviate and OpenAI

> ⚡ **2,419 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# RAG over a PDF with Weaviate
This workflow allows you to upload a PDF file and ask questions about it using the Question and Answer Chain and the Weaviate Vector Store nodes.

## Who it's for
This workflow is the simplest possible implementation of RAG with Weaviate in n8n. It's intended to act as an extendable template for RAG over your own documents.

## Prerequisites
1.  **An existing Weaviate cluster.** You can view instructions for setting up a **local cluster** with Docker [here](https://weaviate.io/developers/weaviate/installation/docker-compose#starter-docker-compose-file) or a **Weaviate Cloud** cluster [here](https://weaviate.io/developers/wcs/quickstart).
2.  **API keys** to generate embeddings and power chat models. We use [OpenAI](https://openai.com/), but feel free to switch out the models as you like.
3.  **Self-hosted n8n instance.** See this [video](https://www.youtube.com/watch?v=kq5bmrjPPAY&t=108s) for how to get set up in just three minutes.

## How it works
### Part 1: Manually upload data
In this example, we manually upload a 100+ page article from arXiv called ["A Survey of Large Language Models"](https://arxiv.org/pdf/2303.18223). But you can replace this with your own more advanced data pipeline, if you wish.
### Part 2: Embed and load data into Weaviate collection
Here, we generate embeddings for the full-text of the article and store them in Weaviate.
### Part 3: Perform RAG over PDF file with Weaviate
In this part of the workflow, you can enter your query by running the Chat Node and get a RAG response grounded in context via the Question and Answer Chain node.


## How to run the workflow
1. Go through the prerequisites, creating a Weaviate cluster (can be local or cloud), downloading self-hosted n8n, and adding your API keys and other credentials.
2. Select the embedding and chat models you'd like to use.
3. Upload a PDF file you want to ask questions about.
4. Execute the rest of the workflow.

## 🔗 Nodes Used

Question and Answer Chain, Embeddings OpenAI, OpenAI Chat Model, Vector Store Retriever, Recursive Character Text Splitter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
