# 🔬 Vision RAG and image embeddings using Cohere Command-A and Embed v4

> ⚡ **1,452 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Cohere's new multimodal model releases make building your own Vision RAG agents a breeze. If you're new to Multimodal RAG and for the intent of this template, it means to embed and retrieve only document scans relevant to a query and then have a vision model read those scans to answer.

The benefits being (1) the vision model doesn't need to keep all document scans in context (expensive) and (2) ability to query on graphical content such as charts, graphs and tables.

### How it works
* Page extracts from a technology report containing graphs and charts are downloaded, converted to base64 and embedded using Cohere's Embed v4 model.
* This produces embedding vectors which we will associate with the original page url and store them in our Qdrant vector store collection using the Qdrant community node.
* Our Vision RAG agent is split into 2 parts; one regular AI agent for chat and a second Q&A agent powered by Cohere's Command-A-vision model which is required to read contents of images.
* When a query requires access to the technology report, the Q&A agent branch is activated. This branch performs a vector search on our image embeddings and returns a list of matching image urls. These urls are then used as input for our vision model along with the user's original query.
* The Q&A vision agent can then reply to the user using the "respond to chat" node.
* Because both agents share the same memory space, it would be the same conversation to the user.

### How to use
* Ensure you have a Cohere account and sufficient credit to avoid rate limit or token usage restrictions.
* For embeddings, swap out the page extracts for your own. You may need to split and convert document pages to images if you want to use image embeddings.
* For chat, you may want to structure the agent(s) in another way which makes sense for your environment eg. using MCP servers.

### Requirements
* Cohere account for Embeddings and LLM
* Qdrant for vector store

## 🔗 Nodes Used

HTTP Request, AI Agent, Embeddings Cohere, Simple Memory, Code Tool, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
