# 🧾 Capture, classify, and log Gmail PDF invoices with Gemini and Google Drive

> ⚡ **25 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for incoming emails with PDF invoices, uses Google Gemini to extract and classify invoice data, uploads the PDF to a corporate or personal Google Drive location, and appends the extracted metadata and file link to Google Sheets.

## How it works
1. Triggers every minute by checking Gmail for new emails and downloads any attachments.
2. Filters the execution to only continue when the email contains at least one PDF attachment, then splits attachments into individual items.
3. Sends each PDF to Google Gemini to extract invoice fields (date, vendor, amount, taxes, category, payment method) and generate a suggested filename.
4. Routes the invoice based on Gemini’s classification as either corporativo or pessoal.
5. Uploads the PDF to the corresponding Google Drive destination (corporate or personal) using the suggested filename.
6. Appends a new row to Google Sheets with the extracted invoice data, the Gmail sender address, and the Google Drive file URL.

## Setup
1. Connect credentials for Gmail, Google Gemini, Google Drive, and Google Sheets.
2. In the Google Gemini prompt, replace [NOME_DA_SUA_EMPRESA] with your real company name so the corporate/personal classification works correctly.
3. Set the target Google Drive IDs and folder locations for both the corporate and personal upload steps.
4. Select your Google Sheets spreadsheet and worksheet, and ensure the sheet has columns that match the appended fields (e.g., Data da Fatura, Fornecedor, Valor, URL do Arquivo).

## Requirements
- n8n (recent version), Gmail account, Google Gemini API access, Google Drive, and Google Sheets. OAuth2 credentials must be configured for Gmail, Google Drive, and Google Sheets. Users must also configure their own Google Gemini credential.

## Customization
- Replace the default company name in the Gemini prompt with your own company name. Configure separate Google Drive destinations for corporate and personal invoices, select your target Google Sheets spreadsheet and worksheet, and customize invoice categories or classification rules as needed.

## Additional info
This template does not include credentials or API keys. After importing the workflow, follow the included Sticky Notes to configure each integration before activation. Test the workflow with sample PDF invoices before using it in production.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
