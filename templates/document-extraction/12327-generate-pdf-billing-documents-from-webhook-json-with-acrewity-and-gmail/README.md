# 🔬 Generate PDF billing documents from webhook JSON with Acrewity and Gmail

> ⚡ **56 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## PDF Document Generator

## Who is this for?
Businesses and freelancers who need to generate professional PDF documents (invoices, quotes, receipts, estimates) from order/sales data.

## Supported Document Types
- **invoice** - Standard invoice with due date
- **quote** - Quote/proposal with validity period
- **estimate** - Cost estimate with validity period
- **receipt** - Payment receipt with payment method
- **proforma** - Proforma invoice with due date

## What it does
1. Receives order data via webhook
2. Builds styled HTML based on document type
3. Converts HTML to PDF using Acrewity
4. Returns the PDF as base64 in the response

## Setup
1. Configure your Acrewity API credentials (can use free account)
2. Activate the workflow
3. POST order data to the webhook URL (or use mock data to test)

## Sample POST body
```json
{
  "documentType": "invoice",
  "company": "Acme Electronics",
  "logoUrl": "https://example.com/logo.png",
  "documentNumber": "INV-2024-001",
  "customerName": "John Smith",
  "customerEmail": "john@example.com",
  "customerAddress": "123 Main St",
  "dueDate": "2024-02-15",
  "taxRate": 0.13,
  "notes": "Thank you!",
  "items": [
    {"name": "Widget", "quantity": 10, "price": 5.99}
  ]
}
```

## Notes
- taxRate is optional (0.13 = 13%, omit for no tax)
- logoUrl is optional (displays in header)
- Requires the Acrewity community node
- **Modify to fit your needs**

## 🔗 Nodes Used

Webhook, Gmail, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
