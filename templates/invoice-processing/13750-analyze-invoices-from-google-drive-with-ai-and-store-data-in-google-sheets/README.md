# 🧾 Analyze invoices from Google Drive with AI and store data in Google Sheets

> ⚡ **28 views** · 🧾 [Invoice Processing](../)

## Description

## Who this template is for

This workflow is designed for teams and businesses that receive invoices in Google Drive and want to automatically extract structured financial data without manual processing. It is ideal for finance teams, operators, and founders who want a simple way to turn invoices into usable data.

No accounting software is required, and the workflow works with common invoice formats such as PDFs and images.

## What this workflow does

This workflow monitors a Google Drive folder for newly uploaded invoices. When a file is detected, it uses AI to extract key invoice information such as issuer, date, total amount, taxes, currency, and description.

The extracted data is automatically cleaned, structured, and stored in Google Sheets, creating a centralized and searchable invoice database.

## How it works

1. The workflow starts when a new file is added to a Google Drive folder
2. Each file is processed individually and classified based on its type (PDF or image)
3. The file is then downloaded and analyzed using an AI model optimized for document or image understanding
4. Key invoice fields such as issuer, date, total amount, taxes, currency, and description are extracted and normalized into structured fields
5. The AI output is appended to a Google Sheets table — a short wait step ensures reliable sequential writes when multiple invoices are processed at the same time

## How to set up

1. Select the Google Drive folder where invoices will be uploaded
2. Connect your OpenAI credentials for document and image analysis
3. Choose the Google Sheets file that will store the extracted invoice data
4. Activate the workflow and upload an invoice to test it

## Requirements

- Google Drive account
- Google Sheets account
- OpenAI API credentials
- n8n instance (cloud or self-hosted)

## How to customize the workflow

You can adjust the fields extracted from invoices, add validation rules, connect the data to accounting tools, or extend the workflow with reporting and notification steps.

## 🔗 Nodes Used

Google Sheets, Telegram Trigger, Google Drive, Google Drive Trigger, OpenAI, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
