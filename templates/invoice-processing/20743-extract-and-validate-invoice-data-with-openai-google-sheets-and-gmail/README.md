# 🧾 Extract and validate invoice data with OpenAI, Google Sheets, and Gmail

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow receives uploaded invoice files via a webhook, uses OpenAI to extract structured invoice fields, checks and logs invoices in Google Sheets, and emails status updates via Gmail, optionally posting clean invoices to your accounting system through a configurable HTTP request.

## How it works
1. Receives an invoice file upload via a webhook endpoint.
2. Validates the uploaded file type and extracts text from the PDF content.
3. Uses OpenAI to extract invoice fields (vendor, invoice number/dates, totals, currency, and line items) from the extracted text.
4. Reads the existing “Invoices” tab in Google Sheets to detect duplicates by vendor name and invoice number, and emails you via Gmail if a duplicate is found.
5. Validates line-item totals against the extracted invoice total and flags low-confidence extractions, sending a Gmail review email when manual review is needed.
6. Posts non-flagged invoices to your accounting software via an HTTP request, appends the invoice record with status to Google Sheets, and responds to the webhook with a JSON “received” message.
7. Runs daily at 8:00 AM to read the Google Sheets log, filter invoices still marked “review,” and emails you a reminder list via Gmail.

## Setup
1. Add credentials for OpenAI, Google Sheets OAuth2, and Gmail OAuth2.
2. Update both CONFIG nodes with your owner email address and the Google Sheets document ID, and create a sheet tab named “Invoices” with columns for at least date, status, vendor_name, invoice_number, total_amount, and currency.
3. Configure the “Post to Accounting - HTTP” request with your QuickBooks/Xero (or other accounting system) endpoint and authentication method.
4. Copy the production webhook URL for the invoice upload webhook and configure your upload form or upstream system to POST the invoice file to it.

## Requirements
- An OpenAI API key, a Google account (Sheets + Gmail), and a QuickBooks or Xero account (or any accounting API you can reach over HTTP).

## Customization
- Extend the extractor schema with extra fields (PO number, tax rate, cost center), tighten or loosen the duplicate/totals rules in the Code nodes, swap the Sheets log for your ERP, or add a Slack notification alongside the Gmail alerts.

## Additional info
Who's it for: Bookkeepers, accountants, and small businesses drowning in supplier invoices — anyone who still types invoice data into accounting software by hand — plus agencies that want an AP automation service to sell.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
