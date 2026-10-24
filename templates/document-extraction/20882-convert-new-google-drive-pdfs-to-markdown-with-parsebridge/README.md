# 🔬 Convert new Google Drive PDFs to Markdown with Parsebridge

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Drive folder for newly created PDFs, converts each PDF to Markdown using Parsebridge, and uploads the generated .md file to a separate Google Drive folder.

## How it works
1. Triggers every minute when a new file is created in a specified Google Drive folder.
2. Downloads the newly created file from Google Drive.
3. Checks the file MIME type and continues only if it is a PDF.
4. Sends the PDF binary to Parsebridge to extract and convert its contents into Markdown.
5. Creates a Markdown file (.md) from the Parsebridge `content` output and names it after the original PDF.
6. Uploads the generated Markdown file to the chosen destination folder in Google Drive.

## Setup
1. Connect a Google Drive OAuth2 credential on all three Google Drive nodes. Select the source folder to watch in Google Drive Trigger and the destination folder in Upload Markdown.
2. Create a Parsebridge API key at [dash.parsebridge.com](https://dash.parsebridge.com/?utm_source=n8n&utm_medium=template&utm_campaign=drive-pdf-to-markdown) (50 free pages on signup, no credit card) and add it as a Parsebridge API credential.
3. Ensure the workflow has access to the watched Drive location, then activate it and upload a PDF to the source folder to test.

## Requirements
- Google Drive account
- Parsebridge account (verified community node `n8n-nodes-parsebridge`)

## Customization
- Send `content` to an LLM, a vector store, Notion, or Slack instead of saving a file.
- Change the trigger to Gmail attachments or a webhook to convert PDFs from other sources.

## Additional info
Every PDF added to a Google Drive folder is converted to Markdown with [Parsebridge](https://parsebridge.com/integrations/n8n/?utm_source=n8n&utm_medium=template&utm_campaign=drive-pdf-to-markdown) and saved as a `.md` file in a second folder. Parsebridge runs the open-source Docling engine as an API: tables become Markdown tables, headings stay headings, and scanned pages get OCR.


## Who it's for
Teams that collect PDFs (reports, contracts, papers, manuals) in Google Drive and want clean Markdown for search, documentation, or as input for LLMs and RAG pipelines.

Each PDF page uses one Parsebridge credit. PDFs up to 50 MB are supported.

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
