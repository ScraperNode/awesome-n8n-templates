# 🔬 Analyze documents & web content with GPT-4o Q&A assistant

> ⚡ **611 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Document Analyzer and Q&A Workflow

AI-powered document and web page analysis using n8n and GPT model. Ask questions about any local file or web URL and get intelligent, formatted answers.

## Who's it for

Perfect for researchers, developers, content analysts, students, and anyone who needs quick insights from documents or web pages without uploading files to external services.

## What it does

- **Analyzes local files**: PDF, Markdown, Text, JSON, YAML, Word docs
- **Fetches web content**: Documentation sites, blogs, articles
- **Answers questions**: Using GPT model with structured, well-formatted responses

**Input format:** `path_or_url | your_question`

**Examples:**
```
/Users/docs/readme.md | What are the installation steps?
https://n8n.io | What is n8n?
```

## Setup

1. Import workflow into n8n
2. Add your OpenAI API key to credentials
3. Link the credential to the "OpenAI Document Analyzer" node
4. Activate the workflow
5. Start chatting!

## Customize

**Change AI model** → Edit "OpenAI Document Analyzer" node (switch to `gpt-4o-mini` for cost savings)

**Adjust content length** → Modify `maxLength` in "Process Document Content" node (default: 15000 chars)

**Add file types** → Update `supportedTypes` array in "Parse Document & Question" node

**Increase timeout** → Change timeout value in "Fetch Web Content" node (default: 30s)

---

## 🔗 Nodes Used

HTTP Request, Read Binary File, AI Agent, OpenAI Chat Model, Extract from File, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
