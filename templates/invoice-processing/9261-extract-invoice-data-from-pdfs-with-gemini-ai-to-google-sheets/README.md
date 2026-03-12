# 🧾 Extract invoice data from PDFs with Gemini AI to Google Sheets 📄

> ⚡ **115 views** · 🧾 [Invoice Processing](../)

## Description

## 📄 Automated Invoice Processing (n8n + AI + Google Workspace)

This workflow automates the extraction and processing of invoice data from PDFs stored in a Google Drive folder. It leverages **Google Drive, Google Sheets, and Gemini AI** to streamline invoice management.

### Key Features
- **Automatic Detection:** Monitors a Google Drive folder for new invoices.
- **AI-Powered Extraction:** Uses Gemini AI to extract structured data including Supplier, Buyer, Items, Total Amount, Tax, and Payment Terms.
- **Data Logging:** Appends extracted invoice information to a Google Sheet and tracks processed documents to avoid duplicates.
- **Notifications:** Sends email alerts once invoices are successfully processed.
- **Flexible & Extensible:** Can be integrated with ERP/CRM systems, Slack/Telegram notifications, or OCR for scanned PDFs.

💡 **Perfect for:** Small to medium businesses, accountants, and operations teams looking to reduce manual invoice data entry and improve accuracy.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Google Drive Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
