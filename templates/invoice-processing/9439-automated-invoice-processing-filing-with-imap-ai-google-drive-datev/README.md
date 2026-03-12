# 🧾 Automated invoice processing & filing with IMAP, AI, Google Drive & DateV

> ⚡ **1,008 views** · 🧾 [Invoice Processing](../)

## Description

## This n8n template demonstrates how to automatically process incoming invoice emails using AI to extract structured data, organize files in Google Drive, log everything in Google Sheets, and forward to your accounting system, completely hands-free.
Use cases are many: Perfect for freelancers managing client invoices, small businesses handling supplier bills, accounting departments processing high invoice volumes, or anyone who wants to eliminate manual data entry and maintain a perfectly organized invoice archive!

### Good to know
- The AI extraction works with most standard invoice formats but may require prompt adjustments for unusual layouts.
- Ensure your IMAP email account allows external app connections and has sufficient storage for the archive folder.
- Google Drive folder structure is automatically created if it doesn't exist yet.

### How it works
- The IMAP Email trigger monitors your inbox for new messages with attachments.
JavaScript splits multiple attachments into separate items, ensuring each invoice is processed individually.
PDF text extraction reads the content from each invoice file.
- An AI model (like OpenAI or Gemini) analyzes the extracted text and identifies key fields: company name, invoice number, date, amount, VAT, and more.
- Additional date metadata is generated (month, year, formatted dates) for smart categorization.
- The invoice PDF is uploaded to a temporary "Incoming Files" folder on Google Drive for safe processing.
- The workflow searches for or creates the correct monthly folder (e.g., "Invoices / October 2025") in your Drive structure.
The invoice is moved to the final destination with a clean, standardized filename: 2025-10-02_Company-Name_InvoiceNumber.pdf.
- All extracted data is logged to Google Sheets for easy tracking, reporting, and audit trails.
- The finalized invoice is forwarded to your DateV accounting email inbox.
- The original email is automatically moved to an archive folder, keeping your inbox clean and organized.

### How to use
- The IMAP trigger is configured for continuous monitoring, but you can adjust the polling interval based on your needs.
- Customize the AI prompt to match your specific invoice formats or extract additional fields relevant to your business.
- The folder structure on Google Drive can be modified to match your existing organization system.

### Requirements
- IMAP-enabled email account (Gmail, Outlook, or any email provider supporting IMAP)
- Google Drive account for file storage
- Google Sheets for invoice logging
- AI model access (OpenAI, Gemini, or compatible LLM for data extraction)
- DateV email address (or replace with your preferred accounting system)

### Customising this workflow
- Replace the DateV email step with integrations to other accounting platforms like Xero, QuickBooks, or Lexoffice.
- Add conditional logic to route different invoice types to different folders or sheets.
- Extend the AI extraction to include line items, payment terms, or custom fields specific to your industry.
- Connect additional notifications via Slack, Teams, or SMS when high-value invoices are received.

Disclaimer: The node to move the e-mail is a community-node, so it’s only for self-hosting.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Google Sheets, Google Drive, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
