# 🧾 Generate Google Drive invoice PDFs from plain text with OpenAI and PDFCrowd

> ⚡ **16 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This sub-workflow accepts plain-text invoice details, uses OpenAI to extract and normalize invoice fields, renders a styled HTML invoice to PDF via PDFCrowd, uploads the PDF to Google Drive, and returns a shareable Drive link while clearing working tabs in Google Sheets.

## How it works
1. Receives invoice details as input from a parent workflow.
2. Uses OpenAI to parse the free text into a fixed set of invoice fields and calculations, with a structured output parser that retries and auto-fixes malformed JSON.
3. Adds company metadata and today’s invoice date, and maps the extracted values into the fields used for the invoice.
4. Builds a styled HTML invoice document from the structured fields.
5. Sends the HTML to the PDFCrowd API to generate an A4 PDF.
6. Uploads the generated PDF to a specified Google Drive folder and returns a view URL.
7. Clears rows in the “Invoice Input” and “Invoice Output” tabs in Google Sheets to prepare for the next run.

## Setup
1. Add an OpenAI API credential for the chat model used to extract and structure invoice data.
2. Add Google Drive and Google Sheets credentials, then set YOUR_DRIVE_FOLDER_ID and YOUR_GOOGLE_SHEET_ID to your target folder and spreadsheet.
3. Create a PDFCrowd account and replace the Authorization header with your base64-encoded username:apiKey value.
4. Update the invoice template placeholders in the HTML (company name, address, email, TRN, and payment details) and set YOUR_COMPANY_TAX_NUMBER in the invoice fields mapping.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Execute Workflow Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
