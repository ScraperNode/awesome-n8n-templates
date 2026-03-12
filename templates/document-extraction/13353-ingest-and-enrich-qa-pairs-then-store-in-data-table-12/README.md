# 🔬 Ingest and enrich Q&A pairs then store in Data Table [1/2]

> ⚡ **691 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow serves an n8n Form to end user to capture a Question and Answer pair (to be used by an Q&A AI Agent in a separate workflow).

The workflow:
- Appends a `isTrusted` field depending on email domain
- Adds AI-generated tags relevant to the Question and Answer pair
- Stores the Q&A pair in an n8n Data Table 

This template is part of the official n8n quick start tutorial (2026). [Watch it here](https://www.youtube.com/watch?v=GuaKeDS6UKU).

## 🔗 Nodes Used

Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
