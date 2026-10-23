# 🔬 Match packing list PDFs to purchase orders with docling-serve and Ollama

> ⚡ **45 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow checks an SFTP “pending” folder for packing list PDFs, converts them to OCR text with docling-serve, and uses Ollama (Gemma) to extract structured line items and match them to a purchase order, logging results and moving files to completed or error folders.

## How it works
1. Runs every hour and lists files in the SFTP `pending` folder.
2. Filters for PDFs, downloads each file from SFTP, and logs a PENDING status to an n8n Data Table.
3. Uploads the PDF to docling-serve for OCR conversion (RapidOCR, English) and stops with an error status if conversion fails.
4. Sends the converted Markdown text to an Ollama Gemma chat model to extract a normalized packing-list JSON (PO number, parties, and line items).
5. Loads the matching purchase order data and cross-references PO vs packing-list SKUs and quantities to determine whether the document matches.
6. If SKU count matches but SKU text differs, uses an Ollama-based healing step to detect likely OCR-misread SKUs, applies the corrections, and re-runs the cross-reference.
7. Writes the final status (COMPLETED or ERROR) to the n8n Data Table and moves the PDF in SFTP into a folder named after the status (for example, `completed/` or `error/`).

## Setup
1. Create and configure an SFTP credential, and ensure the server has `pending/` plus destination folders matching the workflow’s status-based paths (for example, `completed/` and `error/`).
2. Set up docling-serve locally (or update the HTTP endpoint) so `http://127.0.0.1:5001/v1/convert/file` is reachable from n8n.
3. Configure an Ollama credential and ensure the `gemma4:12b-mlx` model is available on your Ollama instance.
4. Create an n8n Data Table (or select the existing one) used as `document_processor_log` to store file name, status, and details.
5. Replace the dummy purchase-order lookup with your real purchase order data source, or ensure the extracted `po_number` matches one of the provided sample orders.

## Requirements
- You will need a (S)FTP server setup with 3 folders: `pending`, `completed` and `failed`
- A n8n data table with 3 columns: `fileName`, `status`, `details`
- [Ollama](https://ollama.com/) or other AI service
- [docling-serve](https://github.com/docling-project/docling-serve/tree/main)

## Customization
- Change the credentials for Ollama in Agent nodes.
- Change the credentials for FTP Nodes
- The move file FTP Node uses the status in lowercases as folder name. If the folder names on the (S)FTP server are not `pending`, `completed` and `failed` then change the set nodes in the `Log status and move file` section.
- Set your data table in all data table nodes
- Change docling-serve endpoint in HTTP node named "Post PDF to docling-serve"

## Additional info
Test files can be found in the [github repository of this template](https://github.com/atetz/n8n-templates/tree/main/ai-document-matching)

## 🔗 Nodes Used

HTTP Request, FTP, Schedule Trigger, Filter, AI Agent, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
