# ⚒️ Evaluation metric: summarization

> ⚡ **1,131 views** · ⚒️ [Engineering](../)

## Description

### This n8n template demonstrates how to calculate the evaluation metric "Summarization" which in this scenario, measures the LLM's accuracy and faithfulness in producing summaries which are based on an incoming Youtube transcript.

The scoring approach is adapted from [https://cloud.google.com/vertex-ai/generative-ai/docs/models/metrics-templates#pointwise_summarization_quality](https://cloud.google.com/vertex-ai/generative-ai/docs/models/metrics-templates#pointwise_summarization_quality)

### How it works
* This evaluation works best for an AI summarization workflows.
* For our scoring, we simple compare the generated response to the original transcript.
* A key factor is to look out information in the response which is not mentioned in the documents.
* A high score indicates LLM adherence and alignment whereas a low score could signal inadequate prompt or model hallucination.

### Requirements
* n8n version 1.94+
* Check out this Google Sheet for a sample data [https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1YOnu2JJjlxd787AuYcg-wKbkjyjyZFgASYVV0jsij5Y/edit?usp=sharing)

## 🔗 Nodes Used

Webhook, Google Drive, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
