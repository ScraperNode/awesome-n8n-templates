# 🔬 Validate supplier onboarding documents with Gemini, Gmail and Google Workspace

> ⚡ **35 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives supplier onboarding submissions via webhook, downloads and parses PDF documents, extracts structured fields with Google Gemini, validates required documents and data, and then either emails correction instructions via Gmail or saves validated suppliers to Google Sheets and Google Drive.

## How it works
1. Receives a supplier submission via a POST webhook containing supplier details and an array of document URLs.
2. Splits the documents array and processes each document in a loop by downloading the file from its URL and extracting text from the PDF.
3. Sends the extracted text to Google Gemini to produce structured JSON fields (company, tax, contact, insurance, and certification data) and normalizes the model output.
4. Aggregates all processed documents and runs validation checks for required document types, required fields per document, cross-document company name consistency, expiration dates, and basic email/tax ID formatting.
5. If validation fails, generates a detailed issue list, refines the message with Google Gemini, and sends a rejection/correction email to the supplier via Gmail.
6. If validation passes, builds a supplier master record, appends it to a Google Sheets supplier database, creates a supplier folder in Google Drive, uploads the original documents, and emails confirmations to the internal team and the supplier via Gmail.

## Setup
1. Configure the webhook source to POST supplier_name, supplier_email, and body.documents items that include at least url, type, and filename for each document.
2. Add credentials for Google Gemini (Google PaLM/Gemini API) and ensure the selected model is available in your account.
3. Connect Gmail credentials for sending supplier and internal notification emails, and replace placeholder links like [YOUR_RESUBMISSION_PORTAL_URL] and [LINK_TO_SUPPLIER_PROFILE].
4. Connect Google Sheets credentials and update the spreadsheet/document ID, sheet (tab) name, and column mappings to match your supplier database.
5. Connect Google Drive credentials and set the parent folder ID where new supplier folders and uploaded documents should be created.

## Additional info
## How To Customize Nodes

* **Validation Logic**

  * Modify rules inside "Validate Supplier Documents" code node
  * Add/remove required fields or checks

* **AI Extraction Fields**

  * Update prompt in Gemini node to extract additional fields

* **Email Templates**

  * Customize HTML content in Gmail nodes

* **Storage**

  * Replace Google Sheets with database (e.g., PostgreSQL)
  * Change Drive structure as needed


## Add-ons (Enhancements)

* Integrate with ERP/CRM systems
* Add Slack or Teams notifications
* Implement approval workflows (manual review step)
* Add OCR for scanned/non-PDF files
* Add audit logs and compliance tracking


## Use Case Examples

1. Vendor onboarding automation for procurement teams
2. Compliance verification for insurance and certification documents
3. Supplier registration portals with automated validation
4. Third-party risk management workflows
5. Enterprise vendor database creation

There can be many more use cases depending on your business needs.


## Troubleshooting Guide

| Issue                       | Possible Cause                  | Solution                                    |
| --------------------------- | ------------------------------- | ------------------------------------------- |
| Webhook not triggering      | Incorrect endpoint or method    | Verify webhook URL and POST method          |
| Documents not processed     | Invalid document URLs           | Ensure URLs are accessible and valid        |
| AI extraction fails         | Invalid response format         | Check Gemini API response and parsing logic |
| Validation always failing   | Missing required document types | Ensure all 3 required types are provided    |
| Email not sent              | Gmail not configured            | Reconnect Gmail credentials                 |
| Google Sheets error         | Column mismatch                 | Ensure exact column names exist             |
| Files not uploaded          | Drive folder ID incorrect       | Verify parent folder ID                     |
| Internal email not received | `sendTo` field empty            | Add recipient email                         |


## Need Help?

If you need assistance setting up this workflow, customizing validation rules or extending it with advanced features, our n8n workflow development team at **WeblineIndia** is here to help.

We specialize in building scalable automation workflows tailored to your business needs right from supplier onboarding to complex enterprise integrations.

[Reach out to WeblineIndia](https://www.weblineindia.com/contact-us.html) for:

* Workflow customization
* API integrations
* AI-powered automation solutions
* End-to-end implementation support
* [Hiring n8n workflow developer](https://www.weblineglobal.com/hire/n8n-developers/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Gmail, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
