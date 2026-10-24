# 🧾 Rename Japan e-bookkeeping receipts and invoices with Gemini and Google Drive

> ⚡ **8 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Helps Japanese businesses digitizing paper invoices and receipts under Japan's Electronic Bookkeeping Act. Files in a Google Drive INPUT folder are read with Google Gemini OCR, then copied to OUTPUT with a compliant searchable filename (date_partner_amount_type) or to SKIP for human review. Originals are never modified.

## How it works
1. Runs manually to start processing.
2. Lists up to the configured maximum number of files in a Google Drive INPUT folder and iterates through them one at a time.
3. Downloads each file from Google Drive, detects its MIME type, base64-encodes the content, and prepares a Gemini request payload.
4. Sends supported images and PDFs to the Google Gemini generateContent API to extract document count, transaction date, partner, amount, and document type as JSON.
5. Builds a compliant filename in the format YYYYMMDD_partner_amount_type.ext when the response indicates a single valid document with required fields.
6. Copies the original file to a Google Drive OUTPUT folder using the new filename, or copies it to a SKIP folder unchanged when the file type is unsupported or the extraction is ambiguous (non-document/multiple documents/missing fields).

## Setup
1. Create three Google Drive folders for INPUT, OUTPUT, and SKIP, then paste their folder IDs into the configuration step and set the per-run maxFiles value.
2. Add a Google Drive OAuth2 credential and select it in all Google Drive steps.
3. Add your Google Gemini API key (from Google AI Studio) to the x-goog-api-key header in the Gemini HTTP request step.
4. Place invoices/receipts (supported: PDF, JPG/JPEG, PNG, WEBP, HEIC/HEIF, TIFF) into the INPUT folder and run the workflow.

## Requirements
- A Google Drive account and credential
- A Google Gemini API key from Google AI Studio

## Customization
- Change maxFiles in the Config node to process more files per run
- Edit the Gemini prompt to extract additional fields
- Enable Retry On Fail on the Gemini node to absorb temporary rate limits

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
