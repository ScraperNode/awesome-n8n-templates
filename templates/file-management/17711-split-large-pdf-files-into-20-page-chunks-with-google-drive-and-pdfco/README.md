# 📁 Split large PDF files into 20-page chunks with Google Drive and PDF.co

> ⚡ **2 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow manually pulls PDF files from a Google Drive folder, uses PDF.co to detect page counts and split each PDF into 20-page chunks, then uploads the resulting chunk PDFs to a target Google Drive folder.

## How it works
1. Starts when you manually execute the workflow in n8n.
2. Searches Google Drive for a specific source folder and lists the files inside it.
3. Downloads each file from Google Drive and uploads it to PDF.co to obtain a hosted file URL.
4. Requests PDF metadata from PDF.co to get the total page count and builds a pages list that splits the PDF into 20-page ranges.
5. Calls the PDF.co split endpoint to generate a set of chunk PDF URLs for the specified page ranges.
6. Downloads each chunk PDF from PDF.co, assigns a numbered filename based on the original document name, and uploads the chunk files to a Google Drive output folder.

## Setup
1. Add Google Drive OAuth2 credentials and set the source and destination folder IDs for the search and upload steps.
2. Add a PDF.co API credential and ensure your PDF.co workspace allows file upload, info, and split operations.
3. Adjust the chunk size in the splitting logic (default 20 pages) if you want different page ranges per output file.

## Customization
- The chunk size is customizable, the Google drive can be replaced with OneDrive node

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
