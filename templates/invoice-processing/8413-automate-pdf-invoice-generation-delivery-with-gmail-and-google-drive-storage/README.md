# 🧾 Automate PDF invoice generation & delivery with Gmail and Google Drive storage

> ⚡ **510 views** · 🧾 [Invoice Processing](../)

## Description

## How it works
Automatically generates professional PDF invoices from webhook data and delivers them via email while storing backups in Google Drive. Perfect for freelancers, small businesses, and service providers who need automated billing workflows.

## Set up steps
Configure environment variables for company information (name, address, email, phone). Set up your PDF generation API service account (PDFShift recommended). Configure SMTP email credentials for invoice delivery. Set up Google Drive OAuth2 for cloud storage. Deploy the workflow and test with sample invoice data.

## Key features
- Smart invoice number generation if not provided
- Automatic tax calculations with configurable rates
- Professional HTML templates with company branding
- Parallel processing for email and storage
- Comprehensive error handling and validation
- Detailed success confirmation responses

## Required environment variables
- `COMPANY_NAME` - Your business name
- `COMPANY_ADDRESS` - Business mailing address  
- `COMPANY_EMAIL` - Billing contact email
- `COMPANY_PHONE` - Business phone number
- `PDF_API_URL` - PDF generation service endpoint
- `PDF_API_KEY` - API authentication key
- `GDRIVE_INVOICE_FOLDER_ID` - Google Drive folder ID

## API requirements
PDF generation service (PDFShift, HTML/CSS to PDF API, or similar), SMTP email service for delivery, Google Drive API access for storage.

## Input format
```json
{
  "customerName": "John Smith",
  "customerEmail": "john@example.com", 
  "items": [
    {"description": "Web Design", "quantity": 1, "price": 500}
  ],
  "dueDate": "2025-02-15"
}

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
