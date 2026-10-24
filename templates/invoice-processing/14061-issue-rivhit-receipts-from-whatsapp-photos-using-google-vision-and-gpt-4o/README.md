# 🧾 Issue Rivhit receipts from WhatsApp photos using Google Vision and GPT-4o

> ⚡ **36 views** · 🧾 [Invoice Processing](../)

## Description

## How it works

1. Courier sends an invoice photo to WhatsApp → AI extracts all details via Google Vision OCR
2. Courier sends a payment photo (check, bank transfer, credit card voucher) → AI matches it to the invoice
3. AI presents a summary and asks for confirmation
4. Once approved — receipt is created in Rivhit, invoice is closed, and the PDF is sent back to WhatsApp

Supports cash, checks, credit cards, bank transfers, and split payments. Includes automatic customer lookup by tax ID and Israeli bank code recognition.

## Set up steps

Takes about 10 minutes:

1. Set up a WAHA instance and point its webhook to this workflow
2. Add your Google Cloud Vision API key to the HTTP Request node
3. Add your Rivhit API token to the "api key" Set node
4. Replace the WhatsApp group ID in the Filter node with yours
5. Connect your OpenAI credentials
6. Activate and start sending photos!

See the sticky notes inside the workflow for detailed instructions.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
