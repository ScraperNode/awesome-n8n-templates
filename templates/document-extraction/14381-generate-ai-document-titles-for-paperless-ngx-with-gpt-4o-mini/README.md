# 🔬 Generate AI document titles for Paperless-ngx with GPT-4o Mini

> ⚡ **573 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## What it does
This template automatically generates a professional, structured title for newly-ingested Paperless-ngx documents using AI (OpenAI GPT), then removes a processing tag to mark the document as handled.

## How it works
1. A webhook fires when a document needs titling (e.g., from a Paperless post-consumption script)
2. The document URL is validated, then the OCR text is fetched from the Paperless API
3. All PII is scrubbed from the text using n8n's Guardrails node before sending to AI
4. GPT generates a title using the format: `[YYYY-MM-DD] - [Document Type] - [Subject]`
5. The specified processing tag is looked up and removed, then the document is updated

## Requirements
- An AI provider account, such as OpenAI, Anthropic, Gemini. As configured the template uses OpenAI, but any model should work.
- A running Paperless-ngx instance that has network accessibility to your n8n server
  
## How to use
Needs to be set up in conjunction with a running Paperless-ngx instance. See Paperless-ngx instructions [here](https://purplesquirreltechnology.com/articles/2026/03/20/automatically-title-your-documents-with-ai-using-paperless-ngx-and-n8n/)

## Customization
- Edit the system message in the AI Agent node (Generate Document Name) to change the document naming convention and other guidelines
- Change the workflows on your Paperless-ngx instance to suit different needs.

## 🔗 Nodes Used

HTTP Request, Webhook, Stop and Error, AI Agent, OpenAI Chat Model, Guardrails

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
