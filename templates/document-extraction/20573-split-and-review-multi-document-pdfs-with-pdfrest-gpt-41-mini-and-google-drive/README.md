# 🔬 Split and review multi-document PDFs with pdfRest, GPT-4.1-mini, and Google Drive

> ⚡ **28 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Upload a PDF containing multiple documents, use AI to suggest document groups, and review titles, categories, and page ranges in a guided form. pdfRest creates separate PDFs and a downloadable ZIP with a page manifest, with optional Google Drive filing.

## How it works
1. Receives a PDF through an n8n upload form and verifies that exactly one valid PDF was provided.
2. Uses pdfRest to inspect the PDF, run OCR to create a searchable master copy, and split the master into individual page PDFs.
3. Uses pdfRest to convert each page to Markdown, then compiles a full-page inventory while preserving original page numbers and flagging low-text pages.
4. Sends the combined extracted text to OpenAI (via the n8n LangChain Information Extractor) to propose contiguous document boundaries with document type, title, counterparty, and evidence-based reasoning.
5. Presents editable titles, categories, and start/end page numbers for each proposed document. Reviewers can exclude groups or add up to two additional groups, then approve or cancel.
6. Checks that every page belongs to exactly one included group. Invalid ranges receive clear correction messages, with edits preserved across up to three review submissions. Validated groups are sorted by start page, split into separate PDFs, and given descriptive filenames.
7. Optionally uploads the split PDFs to Google Drive, then builds a page-to-document manifest, compresses the PDFs and manifest into a ZIP, and returns it as a download.

## Setup
1. Add a pdfRest API credential and connect it to all pdfRest nodes (PDF info, OCR, split pages, convert to Markdown, and split approved documents).
2. Add an OpenAI API credential in the AI model node and select a model available to your account.
3. Review and adjust the Settings values (maxPages, maxTextCharacters, and ocrLanguages) to match your expected batch sizes and languages.
4. If you enable Google Drive filing (saveToDrive = true), add a Google Drive credential and set outputFolderId to a real destination folder ID.

## Requirements
- Requires the pdfRest API Toolkit node, pdfRest and OpenAI or Anthropic credentials, and Google Drive credentials only when optional Drive filing is enabled.

## 🔗 Nodes Used

Google Drive, OpenAI Chat Model, n8n Form Trigger, Information Extractor, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
