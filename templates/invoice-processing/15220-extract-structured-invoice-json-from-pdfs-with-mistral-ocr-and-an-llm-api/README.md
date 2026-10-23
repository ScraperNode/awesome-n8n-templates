# 🧾 Extract structured invoice JSON from PDFs with Mistral OCR and an LLM API

> ⚡ **298 views** · 🧾 [Invoice Processing](../)

## Description

# N8N AI LLM Unstructured Invoice data PDF OCR recognition to JSON output API

## What this workflow does
1. Accepts a PDF or image upload via Webhook as binary property "data"
2. Runs OCR with the Mistral OCR node
3. Normalizes OCR text
4. Sends OCR text to an LLM to extract structured JSON
5. Cleans and normalizes the JSON
6. Returns either:
   - status: ok
   - status: review_needed

## Setup
1. Import the workflow JSON into n8n
2. Create/attach Mistral AI credentials on the "Mistral OCR" node
3. Create/attach your choice LLM AI credentials on the OCR text to JSON converson node
4. Activate the workflow
5. POST a file to:
   /webhook/ocr-to-json

## Notes
- This starter is tuned for invoices/documents but can be adapted for receipts, purchase orders, or forms.
- Depending on your installed n8n version, the Mistral node parameter names may need minor adjustment after import.
- The workflow returns review_needed when confidence is below 0.5.

## 🔗 Nodes Used

HTTP Request, Webhook, Mistral AI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
