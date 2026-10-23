# 🧾 Process AP invoices from Gmail and Drive with Gemini, Sheets and QuickBooks

> ⚡ **16 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors Gmail and a Google Drive folder for new invoice attachments, extracts invoice data using Google Gemini (text or vision), validates confidence scores, logs results to Google Sheets, creates vendor bills in QuickBooks Online, and alerts a Slack user when invoices need manual review.

## How it works
1. Triggers every minute when an unread Gmail message with an invoice attachment arrives or a new file is created in a specific Google Drive folder.
2. Normalizes the incoming email attachment or Drive file metadata and downloads the file from Google Drive when needed.
3. Routes the document by MIME type, extracting embedded text from PDFs or sending images (and scanned PDFs with no text) to Google Gemini vision analysis.
4. Uses Google Gemini to extract structured invoice fields (vendor, dates, totals, line items, and payment details) and normalizes the output into a consistent invoice JSON payload.
5. Checks whether key fields meet the 0.9 confidence threshold for vendor name, invoice number, and total amount.
6. For high-confidence invoices, appends the extracted data to a Google Sheets “Invoices_Raw” tab and creates a vendor bill in QuickBooks Online.
7. For low-confidence invoices, appends the record to a Google Sheets “Invoices_Exceptions” tab and sends a Slack message to the finance reviewer with key details and confidence scores.

## Setup
1. Connect credentials for Gmail, Google Drive, Google Sheets, Slack (OAuth2), Google Gemini, and QuickBooks Online (OAuth2).
2. Update the Gmail search filter and select the Google Drive folder to watch for incoming invoices.
3. Create or select the Google Sheets spreadsheet and ensure the “Invoices_Raw” and “Invoices_Exceptions” sheets contain matching columns for the fields being appended.
4. Replace the QuickBooks sandbox realm/company ID, vendor reference, account reference, and hardcoded dates in the QuickBooks bill request with your production mappings.
5. Set the Slack target user/channel and message settings for low-confidence invoice review.

## Requirements
- Required Integrations -Gmail -Google Drive -Google Gemini -QuickBooks Online -Google Sheets -Slack Required Credentials -Gmail OAuth2 -Google Drive OAuth2 -Google Gemini API -Google Sheets OAuth2 -QuickBooks OAuth2 -Slack OAuth2 Required Inputs -Supplier invoices in PDF format -Scanned invoice images -Gmail attachments or Google Drive uploads

## Customization
- Invoice Sources Configure: -Gmail mailbox filters -Google Drive folders -Supported attachment types AI Extraction Rules Customize Gemini prompts to extract: -Vendor details -Invoice numbers -Tax information -Purchase order references -Banking details -Line items Accounting Configuration -QuickBooks company -Vendor mappings -Expense account mappings -Tax handling -Currency settings Reporting & Audit Logs -Modify Google Sheets tracking fields to match your AP process.

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Google Drive Trigger, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
