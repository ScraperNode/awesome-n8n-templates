# 🔬 Sanitize Google Drive markdown text with a local Ollama model

> ⚡ **11 views** · 🔬 [Document Extraction & Analysis](../)

## Description

How it works
- Downloads markdown documents from a Google Drive folder containing private information, uses the Ollama model to identify and extract sensitive data, and stores the sanitized text in a single combined markdown document. 

Setup Steps
-  Google cloud OAuth credentials for accessing google drive.
- A local Ollama model (currently using Ollama 3.1).
- Local instance of N8N (for example, running in docker).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Drive Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
