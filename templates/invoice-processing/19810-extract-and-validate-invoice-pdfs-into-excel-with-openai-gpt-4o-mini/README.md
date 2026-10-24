# 🧾 Extract and validate invoice PDFs into Excel with OpenAI GPT-4o-mini

> ⚡ **7 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs on a daily schedule, reads invoice PDFs from a local folder, extracts structured invoice data with OpenAI (gpt-4o-mini), validates required fields and subtotal math, and writes per-invoice Excel outputs plus an execution report while archiving PDFs into valid/invalid/error folders.

## How it works
1. Runs on a schedule and detects whether n8n is running in a local deployment with access to the filesystem.
2. Creates an initial execution-report Excel file, then reads all PDF invoices from the configured local input folder.
3. For each PDF, extracts text from the document and flags unreadable PDFs for error handling.
4. Cleans the extracted text and sends it to OpenAI (gpt-4o-mini) with a strict JSON schema to extract invoice header fields and line items.
5. Normalizes the AI response, validates required fields and line-item/subtotal consistency, and formats the results into invoice and line-item rows.
6. Writes an Excel file for each invoice to the local output folder and routes the source PDF to local valid/invalid/error folders, deleting it from the input folder.
7. Updates counters for total/valid/invalid/error files and overwrites the execution-report Excel file with final counts and end time.

## Setup
1. Run n8n Community Edition self-hosted (for local file access) and allow filesystem usage (for example by setting `NODE_FUNCTION_ALLOW_BUILTIN=fs,path` and restricting access with `N8N_RESTRICT_FILE_ACCESS_TO=/invoices`).
2. Create and mount an `/invoices` directory with `input`, `output`, `valid`, `invalid`, and `error` subfolders so the workflow can read and move PDFs and write Excel files.
3. Add an OpenAI API credential in n8n and ensure the OpenAI node is authorized to use your account.
4. Place invoice PDF files into `/invoices/input` and adjust the schedule time if needed.

## Requirements
- n8n Community Edition running locally
- Docker
- OpenAI API key
- Local `invoices` folder with the required subfolders

## Customization
- The workflow is designed for invoice PDFs but can be adapted to other document types.
- You can customize:
- The document extraction fields
- Validation rules
- Output Excel structure
- Input and output folders
- File-processing logic
- OpenAI model and extraction instructions
- For other document types, update the extraction and validation logic to match the structure and requirements of those documents.

## 🔗 Nodes Used

Schedule Trigger, Read/Write Files from Disk, Convert to File, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
