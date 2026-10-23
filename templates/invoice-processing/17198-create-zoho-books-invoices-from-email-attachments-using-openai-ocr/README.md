# 🧾 Create Zoho Books invoices from email attachments using OpenAI OCR

> ⚡ **30 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors an IMAP inbox for emails with invoice attachments, uses OpenAI to OCR and extract structured invoice data, looks up customers and tax/currency settings in Zoho Books, and then creates a new Zoho Books invoice with the original attachment included.

## How it works
1. Triggers when a new email arrives via IMAP.
2. Filters for emails that contain attachments, then splits each attachment into its own item for processing.
3. Normalizes each attachment’s binary data and routes it to OpenAI for OCR based on whether it is a PDF or an image.
4. Fetches taxes, currencies, and active customer contacts from Zoho Books and prepares the data for matching and invoice creation.
5. Sends the OCR text plus Zoho Books tax metadata to OpenAI to validate that the document is a sales invoice and to return invoice and customer details as JSON.
6. Filters out non-invoice attachments, matches the extracted customer to an existing Zoho Books contact (with a configurable fallback), and posts a new invoice to Zoho Books using multipart upload to attach the original file.

## Setup
1. Add IMAP credentials for the mailbox that receives invoice emails.
2. Add Zoho Books OAuth2 credentials and ensure the connection has permission to read contacts/settings and create invoices.
3. Add an OpenAI API credential for the OCR and invoice-parsing steps.
4. In “Define Workflow Constants”, set your Zoho data center domain (for example, com/eu), your Zoho Books organization ID, and an “unknown_customer_static_id” fallback contact ID.
5. If you enable sender-based customer lookup, update “customerLookupIgnoreList” with internal/staff email addresses to prevent incorrect matches.

## 🔗 Nodes Used

Email Trigger (IMAP), HTTP Request, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
