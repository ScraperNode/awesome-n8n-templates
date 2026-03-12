# 🔬 Automate systematic literature reviews with Google Drive, GPT-4, Gemini, Qdrant and Airtable

> ⚡ **236 views** · 🔬 [Document Extraction & Analysis](../)

## Description

How it works
- Automates systematic literature review by downloading papers from Google Drive, extracting text, and evaluating them against strict inclusion/exclusion criteria using LLM agents

- Routes included papers to Qdrant vector stores with Gemini embeddings for semantic search, and excluded papers to a separate folder

- Logs all decisions to Airtable with PRISMA-compliant justification for complete audit trails

Set up steps
- Connect Google Drive credentials to access your paper folder

- Configure Airtable base and table for decision logging

- Add OpenAI (GPT-4) and Google Gemini API credentials for LLM evaluation and embeddings

- Set up Qdrant instances for vector storage (supports up to 3 collections)

- Keep detailed descriptions of your inclusion/exclusion criteria in the sticky notes inside your workflow

## 🔗 Nodes Used

Airtable, Google Drive, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
