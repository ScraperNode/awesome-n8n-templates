# 🔬 Pdf to markdown converter with LlamaCloud parser

> ⚡ **456 views** · 🔬 [Document Extraction & Analysis](../)

## Description

PDF to Markdown Converter (LlamaCloud)
Description:
How it works
This workflow extracts structured content from complex PDFs using LlamaCloud's advanced parsing engine:

Download PDF – Retrieves your PDF from Google Drive (or any source)
Upload to LlamaCloud – Sends the PDF to LlamaCloud's parsing API and receives a job ID
Poll for completion – Automatically checks parsing status every 30 seconds until complete
Retrieve markdown – Fetches the clean, structured markdown output with preserved tables, layouts, and formatting

The workflow handles complex PDFs with multi-column layouts, tables, and embedded images that traditional parsers struggle with.
Set up steps
Time estimate: ~5 minutes
You'll need to configure one main integration:

LlamaCloud API key – Sign up at cloud.llamaindex.ai, generate an API key, and create a Generic Header Auth credential in n8n with Authorization: Bearer YOUR_API_KEY
Google Drive OAuth (optional) – Connect your Google account if using the Drive node, or replace with any PDF source

Once configured, the workflow automatically handles parsing, retry logic, and markdown extraction. Output is ready for AI processing or content transformation workflows.

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
