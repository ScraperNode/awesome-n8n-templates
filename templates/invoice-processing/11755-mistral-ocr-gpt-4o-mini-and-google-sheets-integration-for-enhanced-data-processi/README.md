# 🧾 Mistral OCR, GPT-4o-mini, and Google Sheets integration for enhanced data processing

> ⚡ **166 views** · 🧾 [Invoice Processing](../)

## Description

Process multiple invoices automatically using Mistral's dedicated OCR model—at approximately $0.002 per page. Upload batches of PDF, PNG, or JPG invoices through a simple form, extract structured financial data with AI, validate results with confidence scoring, and save everything to Google Sheets.

## What this workflow does

1. Accepts multiple invoice uploads via n8n Form Trigger
2. Processes files in batch with rate limiting
3. Converts each file to base64 and sends to Mistral OCR API
4. Extracts 9 standard fields using GPT-4o-mini Information Extractor
5. Validates data and assigns confidence scores (high/medium/low)
6. Saves all results to Google Sheets with status tracking

## Fields extracted

Invoice Number, Date, Vendor Name, Tax ID, Subtotal, Tax Rate, Tax Amount, Total Amount, Currency

## Use cases

- Accountants processing client invoices in bulk
- Small businesses digitizing paper receipts
- Bookkeepers automating repetitive data entry
- Finance teams building searchable invoice databases

## Setup requirements

- Mistral API Key (console.mistral.ai) — HTTP Header Auth credential
- OpenAI API Key (platform.openai.com)
- Google Sheets OAuth connection
- Google Sheet with 15 columns (template in workflow notes)

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenAI Chat Model, n8n Form Trigger, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
