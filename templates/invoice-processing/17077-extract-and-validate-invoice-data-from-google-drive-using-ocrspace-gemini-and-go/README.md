# 🧾 Extract and validate invoice data from Google Drive using OCR.Space, Gemini, and Google Sheets

> ⚡ **325 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors a Google Drive folder for newly uploaded invoice files, extracts text with OCR.Space, uses Google Gemini to convert the OCR text into structured invoice fields, validates required values, then stores results in Google Sheets and sends Gmail notifications for success or manual review.

## How it works
1. Triggers when a new file is created in a specified Google Drive folder.
2. Downloads the uploaded invoice file from Google Drive and checks that the MIME type is PDF, JPG, JPEG, or PNG.
3. Sends the file to the OCR.Space API to extract the invoice text and stops if OCR reports a processing error.
4. Uses Google Gemini to convert the OCR text into structured JSON containing supplier, invoice metadata, amounts, currency, and line items.
5. Validates and normalizes the extracted fields, flags missing required values, and marks the record for manual review when needed.
6. If manual review is required, sends a Gmail alert listing missing fields; otherwise, appends key invoice fields to Google Sheets and sends a Gmail confirmation email.

## Setup
1. Connect Google Drive OAuth2 credentials and set the folder ID to watch for invoice uploads.
2. Provide an OCR.Space API key and ensure the HTTP request node uses it instead of the sample value.
3. Connect Google Gemini (PaLM) credentials and confirm the selected model is available in your account.
4. Connect Google Sheets OAuth2 credentials and update the spreadsheet/document ID and sheet tab where invoices should be appended.
5. Connect Gmail OAuth2 credentials and update the recipient email address(es) for manual review alerts and processing confirmations.

## Additional info
## How To Customize Nodes

### Invoice Upload Trigger

Customize:

- Polling frequency
- Folder location
- Trigger conditions

Possible enhancements:

- Multiple invoice folders
- Department-specific folders

### OCR Extraction Node

Customize:

- OCR language
- OCR provider
- Processing parameters

Possible alternatives:

- Google Vision API
- AWS Textract
- Azure Document Intelligence

### Gemini AI Extraction

Modify the prompt to extract additional invoice fields such as:

- Purchase Order Number
- Payment Terms
- Due Date
- GST Number
- Vendor Address

### Validation Logic

Update the Code node to:

- Add more required fields
- Define custom validation rules
- Add confidence scoring

### Google Sheets Storage

Add additional columns such as:

- Tax Amount
- Currency
- Invoice Date
- Processing Timestamp

### Email Notifications

Customize:

- Recipients
- Email templates
- Escalation rules
- Department routing

## Add-ons

The workflow can be extended with the following enhancements:

### ERP Integration

Push validated invoices into:

- SAP
- Oracle ERP
- Microsoft Dynamics
- NetSuite

### Accounting Integration

Automatically create records in:

- QuickBooks
- Xero
- Zoho Books

### Approval Workflow

Add multi-level invoice approval processes before payment.

### Duplicate Invoice Detection

Compare invoice numbers against historical records to identify duplicates.

### Vendor Master Validation

Verify supplier information against approved vendor databases.

### Dashboard & Reporting

Build real-time dashboards using:

- Google Looker Studio
- Power BI
- Tableau

### Cloud Storage Archival

Automatically archive processed invoices into:

- Google Drive
- Dropbox
- Amazon S3


## Use Case Examples

### 1. Accounts Payable Automation

Automatically process incoming supplier invoices and store validated records without manual entry.

### 2. Vendor Invoice Management

Centralize invoice collection, validation, storage, and notification processes.

### 3. Accounting Data Capture

Extract structured accounting data from scanned invoices and receipts.

### 4. Shared Services Operations

Support finance teams processing invoices from multiple departments or locations.

### 5. SMB Finance Automation

Enable small businesses to automate invoice processing without investing in expensive ERP systems.

### Additional Possibilities

This workflow can also be adapted for:

- Purchase orders
- Expense receipts
- Utility bills
- Vendor statements
- Financial document processing
- Accounts reconciliation workflows


## Troubleshooting Guide

| Issue                                     | Possible Cause                              | Solution                                      |
| ----------------------------------------- | ------------------------------------------- | --------------------------------------------- |
| Workflow does not trigger                 | Incorrect Google Drive folder configuration | Verify folder ID and Drive credentials        |
| File is ignored                           | Unsupported file format                     | Upload PDF, JPG, JPEG, or PNG files only      |
| OCR extraction fails                      | Invalid OCR.Space API key                   | Verify OCR.Space credentials and API quota    |
| OCR returns poor results                  | Low-quality scanned invoice                 | Upload higher-resolution documents            |
| Gemini extraction returns incomplete data | OCR text quality is poor                    | Improve scan quality and OCR accuracy         |
| Invoice marked for manual review          | Required fields are missing                 | Review invoice and update missing information |
| Google Sheets insertion fails             | Incorrect Sheet ID or permissions           | Verify sheet permissions and mapping          |
| Email notifications not sent              | Gmail OAuth issue                           | Reconnect Gmail credentials                   |
| Processing confirmation missing           | Workflow stopped before notification step   | Review execution logs in n8n                  |
| Currency values appear incorrect          | OCR misread invoice amounts                 | Enhance AI prompt or validation logic         |


## Need Help?

Whether you need help with:

- n8n installation and setup
- Google Drive integrations
- OCR optimization
- Gemini AI prompt engineering
- Invoice validation logic
- ERP or accounting integrations
- Custom approval workflows
- Advanced reporting dashboards
- Enterprise-grade invoice automation solutions

Our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) team at WeblineIndia can help you customize, optimize and scale this workflow to match your business requirements.

From simple invoice processing automations to complex AI-powered finance operations, professional guidance can significantly reduce implementation time and improve workflow reliability.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Google Drive Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
