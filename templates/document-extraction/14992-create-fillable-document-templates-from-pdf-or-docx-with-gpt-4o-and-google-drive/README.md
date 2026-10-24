# 🔬 Create fillable document templates from PDF or DOCX with GPT-4o and Google Drive

> ⚡ **145 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 📄Template Creator

## Who is this for

This template is built for legal professionals, operations teams, and agencies that work with recurring document types — contracts, NDAs, invoices, lease agreements, proposals — and want to stop rebuilding templates from scratch. If you have an OpenAI API key, a Google Drive account, and a self-hosted Gotenberg instance, you can turn any uploaded document into a clean, reusable fill-in-the-blank template in seconds.

## What it does

The workflow accepts any uploaded PDF or DOCX file, uses a two-pass AI process to identify the document type and extract variable fields, replaces all variable content with labeled `[BRACKET]` placeholders, renders the result to PDF, and returns a shareable Google Drive link — fully automated from upload to delivery.

## How it works

A **Webhook Trigger** receives the uploaded file (PDF or DOCX) from your form or API client and passes the binary content downstream for processing.

**Identify Document** is a GPT-4o pass that reads the document and determines two things: the document type (e.g., Employment Contract, NDA, Lease Agreement, Project Proposal) and the specific variable fields that type of document typically contains. This classification step ensures the second pass has precise, context-aware instructions to work from.

**Templatize Document** is a second GPT-4o pass that uses the identified document type and field list to replace all variable content — names, dates, amounts, addresses, party details — with clearly labeled `[BRACKET]` placeholders, while preserving all static boilerplate and document structure verbatim.

**Convert to PDF** sends the finished template text to your self-hosted [Gotenberg](https://gotenberg.dev/) instance, which returns a clean, print-ready PDF — no third-party PDF service or API key required.

**Upload to Google Drive** saves the PDF to your designated Drive folder and sets public link sharing, so the template is immediately accessible and shareable.

**Return Response** delivers a JSON payload back to the caller containing the Google Drive file URL and any metadata, completing the webhook request.

## How to set up

1. In **Webhook Trigger**, update the path if needed (default: `general-template-creator`).
2. On both **Identify Document** and **Templatize Document**, select your OpenAI credential.
3. In **Upload to Google Drive**, select your Google Drive credential and confirm the target folder ID.
4. In **Convert to PDF**, update the Gotenberg base URL to match your self-hosted instance.
5. Install the community node `n8n-nodes-word2text` for DOCX support (see the ⚠️ warning sticky in the workflow).

## Requirements

- OpenAI API key (GPT-4o used on both AI passes)
- Google Drive account with OAuth2 configured in n8n
- Self-hosted [Gotenberg](https://gotenberg.dev/) instance (for PDF rendering)
- Community node `n8n-nodes-word2text` installed on your n8n instance
- **Self-hosted n8n** — required for community node support and Gotenberg integration
- A form or API client capable of POSTing a file to a webhook URL — a [sample form](https://iportgpt.com/n8n_assets/template_creator_form.html) is available for testing

## How to customize the workflow

- **Reduce cost** — Swap GPT-4o for GPT-4.1-mini on the **Identify Document** node. The classification task is lightweight and the smaller model handles it reliably at lower cost.
- **Type-specific prompts** — Add a Switch node after **Identify Document** to route different document types to specialized templatization prompts tuned for contracts, invoices, or proposals.
- **Subfolder sorting** — Pass the identified document type into the Drive folder path in **Upload to Google Drive** to automatically sort output templates by document category.
- **Additional output formats** — Add a parallel branch after **Templatize Document** to also save the raw template text to SharePoint, Airtable, or a Google Sheet for searchability.
- **Batch processing** — Wrap the workflow in a loop trigger to process a folder of documents at once rather than one at a time via webhook.

Visit [automatedintelligentsolutions.com](https://automatedintelligentsolutions.com) for more information and workflows.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, AI Agent, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
