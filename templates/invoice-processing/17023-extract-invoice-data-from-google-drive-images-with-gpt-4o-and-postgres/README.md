# 🧾 Extract invoice data from Google Drive images with GPT-4o and Postgres

> ⚡ **41 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow watches a Google Drive folder for new invoice images, extracts key invoice fields with OpenAI vision, checks for duplicates in Postgres, and then stores the invoice or moves the file into processed, duplicate, or failed folders.

## How it works
1. Triggers every hour when a new file is created in a specific Google Drive folder.
2. Downloads the new file from Google Drive and sends the image to OpenAI (GPT-4o) to extract invoice fields as JSON.
3. Cleans and parses the AI response into structured invoice data, routing invalid or unparseable results to a failed path.
4. Checks Postgres to see if an invoice with the same vendor name, invoice number, and total already exists.
5. If the invoice is a duplicate, moves the source file in Google Drive to a duplicate folder.
6. If the invoice is not a duplicate, inserts the invoice into the Postgres invoices table (status set to processed) and moves the source file to a processed folder.

## Setup
1. Connect Google Drive OAuth2 credentials and set the incoming, processed, duplicate, and failed folder IDs to match your Drive structure.
2. Add an OpenAI API credential and ensure the selected model (gpt-4o) is available for image analysis.
3. Add Postgres credentials and create an invoices table with columns for vendor_name, invoice_number, invoice_date, due_date, currency, subtotal, tax, total, po_number, and status.

## 🔗 Nodes Used

Postgres, Google Drive, Google Drive Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
