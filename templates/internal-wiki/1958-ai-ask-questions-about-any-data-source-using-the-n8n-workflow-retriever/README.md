# 📖 AI: Ask questions about any data source (using the n8n workflow retriever)

> ⚡ **10,130 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This template aims to perform Q&A on data retrieved from another n8n workflow. Since that workflow can be used to retrieve any data from any service, this template can be used to ask questions about any data.

It uses a manual trigger, various AI nodes, and an OpenAI Chat Model to extract and provide relevant information based on a specific query.

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 🔗 Nodes Used

Question and Answer Chain, OpenAI Chat Model, Workflow Retriever

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
