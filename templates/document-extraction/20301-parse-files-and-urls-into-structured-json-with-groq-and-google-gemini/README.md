# 🔬 Parse files and URLs into structured JSON with Groq and Google Gemini

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This sub-workflow accepts files or a URL from a parent workflow, extracts readable text from many formats, optionally converts that text into structured JSON using Groq and Google Gemini models, and returns one normalized result per input.

## How it works
1. Triggers when executed by another n8n workflow and receives binary attachments and an optional `extraction` object that can define required fields.
2. Splits incoming attachments into one item per file (or converts a provided URL into a fetchable text source) and builds a JSON Schema from `extraction.field_schemas`.
3. Routes each item by MIME type and extracts content using native n8n extractors (PDF, JSON, CSV, Excel, Google Sheets and text) or fetches web pages as text via an HTTP request.
4. For image files, converts the image to a compatible format and uses a vision-capable LLM to extract visible information into JSON and add `content_class` and `class_confidence`.
5. If a schema was provided, sends the extracted text to an LLM to produce structured JSON that matches the requested schema.
6. Returns `{ status, error, data: { text, content_class, class_confidence } }` for every input. File types it has no route for come back with a standardized `unsupported` status and an error payload, so the parent workflow keeps running.

## Setup
1. Add a credential for a vision-capable LLM to the **Vision LLM** node, which extracts structured data from images.
2. Add a credential for an LLM to the **Text LLM** node, which structures extracted text into schema-compliant JSON. A free tier is enough, and any chat model node works in either place.
3. From the parent workflow, use an Execute Workflow node to call this workflow and pass either `binary_files` (attachments) or a `url`, plus optional `extraction.field_schemas` and instructions for the fields you want returned.

## Requirements
- One vision-capable LLM and one text LLM with structured output support. The template ships with Google Gemini and Groq nodes, which both have free tiers.
- A parent workflow that calls it through an Execute Workflow node

## Customization
- Add a file type with a new rule in **Route by File Type**
- Use `class_confidence` (0 to 1) in the parent to auto-accept, review or flag each result

## Additional info
[Node-by-node documentation](https://github.com/runfish5/micro-services/blob/main/projects/n8n/03_any-file2json-converter/workflows/mainflow.md) · Used by [smart-folder2table](https://github.com/runfish5/micro-services/blob/main/projects/n8n/02_smart-table-fill/workflows/smart-folder2table.json) and [inbox-attachment-organizer](https://github.com/runfish5/micro-services/blob/main/projects/n8n/04_inbox-attachment-organizer/README.md)

## 🔗 Nodes Used

Edit Image, HTTP Request, Google Drive, Execute Workflow Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
