# 📊 Answer research questions using OpenAI GPT-4.1 and arXiv papers

> ⚡ **34 views** · 📊 [Market Research & Insights](../)

## Description

### How it works

* A **user query** is received via the Chat Trigger node.
* The **Planning Agent** decides whether the question requires a general knowledge answer or a research-oriented response.
* If a research query is detected, the **arXiv Search** node queries the arXiv API and retrieves recent relevant papers.
* **JSON Parsers** process the API response and extract metadata such as titles, abstracts, and links.
* The **arXiv-Grounded Agent** summarizes each paper and generates a final answer to the user question based strictly on retrieved content.
* The final response includes **summaries and clickable citations** from arXiv.

## 🔗 Nodes Used

Function, HTTP Request, AI Agent, OpenAI Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
