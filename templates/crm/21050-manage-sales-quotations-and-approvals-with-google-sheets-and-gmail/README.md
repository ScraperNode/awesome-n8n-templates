# 🤝 Manage sales quotations and approvals with Google Sheets and Gmail

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow collects sales quotation requests via an n8n Form, looks up product pricing in Google Sheets, calculates discount and margin, and either auto-approves or requests manager approval via Gmail before logging outcomes to Google Sheets and emailing customers.

## How it works
1. Receives a new sales quotation request through an n8n Form submission.
2. Validates required fields, email formats, and that quantity and discount values are within allowed ranges.
3. Looks up the requested product in a Google Sheets Product Master and stops the flow if the product is missing or inactive.
4. Calculates subtotal, discount amount, net amount, cost, gross profit, and gross margin using the product pricing and requested quantity.
5. Checks the request against pricing policy thresholds (maximum auto-approval discount and minimum profit margin) to determine whether manager approval is required.
6. If approval is required, sends an approval request to the manager via Gmail, waits for the manager’s decision via a form, then logs the approved/rejected result to Google Sheets and notifies the customer or sales executive by email.
7. If approval is not required, automatically marks the quotation as approved, logs it to Google Sheets, and emails the approved quotation details to the customer via Gmail.

## Setup
1. Connect Google Sheets OAuth2 credentials and ensure the spreadsheet includes a Product_Master sheet (with Product Code, Product Name, Unit Price, Unit Cost, Status) and a Quotation_Log sheet with matching columns.
2. Connect Gmail OAuth2 credentials for sending manager, customer, and sales executive emails.
3. Update the manager email address and policy thresholds (max auto-approval discount and minimum profit margin) in the workflow configuration values.
4. Verify the Google Sheets document ID and sheet tabs selected for product lookup and quotation logging match your environment.
5. Share the quotation request form URL with sales executives and ensure they can submit requests with valid product codes from the Product_Master sheet.

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
