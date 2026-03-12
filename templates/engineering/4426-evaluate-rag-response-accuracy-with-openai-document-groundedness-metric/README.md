# ⚒️ Evaluate RAG response accuracy with OpenAI: document groundedness metric

> ⚡ **1,671 views** · ⚒️ [Engineering](../)

## Description

### This n8n template demonstrates how to calculate the evaluation metric "RAG document groundedness" which in this scenario, measures the ability to provide or reference information included only in retrieved vector store documents.

The scoring approach is adapted from [https://cloud.google.com/vertex-ai/generative-ai/docs/models/metrics-templates#pointwise_groundedness](https://cloud.google.com/vertex-ai/generative-ai/docs/models/metrics-templates#pointwise_groundedness)

### How it works
* This evaluation works best for an agent that requires document retrieval from a vector store or similar source.
* For our scoring, we need to collect the agent's response and the documents retrieved and use an LLM to assess if the former is based off the latter.
* A key factor is to look out information in the response which is not mentioned in the documents.
* A high score indicates LLM adherence and alignment whereas a low score could signal inadequate prompt or model hallucination.

### Requirements
* n8n version 1.94+
* Check out this Google Sheet for a sample data [https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing)

## 🔗 Nodes Used

HTTP Request, AI Agent, Basic LLM Chain, Embeddings OpenAI, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
