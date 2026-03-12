# ⚒️ Evaluations metric: answer similarity

> ⚡ **1,111 views** · ⚒️ [Engineering](../)

## Description

### This n8n template demonstrates how to calculate the evaluation metric "Similarity" which in this scenario, measures the consistency of the agent.

The scoring approach is adapted from the open-source evaluations project [RAGAS](https://docs.ragas.io/) and you can see the source here [https://github.com/explodinggradients/ragas/blob/main/ragas/src/ragas/metrics/_answer_similarity.py](https://github.com/explodinggradients/ragas/blob/main/ragas/src/ragas/metrics/_answer_similarity.py)

### How it works
* This evaluation works best where questions are close-ended or about facts where the answer can have little to no deviation.
* For our scoring, we generate embeddings for both the AI's response and ground truth and calculate the cosine similarity between them.
* A high score indicates LLM consistency with expected results whereas a low score could signal model hallucination.

### Requirements
* n8n version 1.94+
* Check out this Google Sheet for a sample data [https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing)

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Chat Trigger, Evaluation Trigger, Evaluation

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
