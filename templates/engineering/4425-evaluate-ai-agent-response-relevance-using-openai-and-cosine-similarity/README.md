# ⚒️ Evaluate AI agent response relevance using OpenAI and cosine similarity

> ⚡ **1,117 views** · ⚒️ [Engineering](../)

## Description

### This n8n template demonstrates how to calculate the evaluation metric "Relevance" which in this scenario, measures the relevance of the agent's response to the user's question.

The scoring approach is adapted from the open-source evaluations project [RAGAS](https://docs.ragas.io/) and you can see the source here 
[https://github.com/explodinggradients/ragas/blob/main/ragas/src/ragas/metrics/_answer_relevance.py](https://github.com/explodinggradients/ragas/blob/main/ragas/src/ragas/metrics/_answer_relevance.py)

### How it works
* This evaluation works best for Q&A agents.
* For our scoring, we analyse the agent's response and ask another AI to generate a question from it. This generated question is then compared to the original question using cosine similarity.
* A high score indicates relevance and the agent's successful ability to answer the question whereas a low score means agent may have added too much irrelevant info, went off script or hallucinated.

### Requirements
* n8n version 1.94+
* Check out this Google Sheet for a sample data [https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing)

## 🔗 Nodes Used

HTTP Request, AI Agent, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
