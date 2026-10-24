# 🧾 Process email invoices with OCR, GPT-4, Slack, QuickBooks and Google Sheets

> ⚡ **2,054 views** · 🧾 [Invoice Processing](../)

## Description

## Overview
This workflow automates invoice processing directly from your email inbox.

It captures invoice attachments, extracts structured data using OCR and AI, validates totals, and securely processes invoices. If issues are detected, it routes them for human review. Approved invoices are recorded in QuickBooks and logged for auditing.

---

## How It Works

1. **Email Trigger**
   Monitors a Gmail label and downloads invoice attachments automatically.

2. **Configuration & Metadata**
   Sets OCR API, thresholds, and captures invoice details like vendor, timestamp, and file hash.

3. **File Processing**
   Routes PDFs to a text extractor and images to an OCR API.

4. **AI Data Extraction**
   AI converts raw text into structured invoice data with confidence scores.

5. **Validation**
   Recalculates totals and verifies subtotal, tax, and final amounts.

6. **Data Privacy**
   Masks sensitive fields like PAN, GST, and bank account details.

7. **Review Decision**
   Flags invoices for review if validation fails or confidence is low.

8. **Human Review (if needed)**
   Sends Slack alert and waits for approval before proceeding.

9. **Accounting Integration**
   Creates a bill in QuickBooks for approved invoices.

10. **Audit Logging**
   Stores processing details in Google Sheets for traceability.

11. **Notifications**
   Sends a success message after processing is complete.

---

## Setup Instructions

1. Connect Gmail trigger and configure the invoice label (e.g., "AP Inbox")
2. Add OCR API endpoint in the configuration node
3. Connect OpenAI credentials for data extraction
4. Connect Slack for alerts and notifications
5. Connect QuickBooks for bill creation
6. Add Google Sheets ID for audit logging
7. Configure:
   - Validation tolerance  
   - Confidence threshold  
8. Test with sample invoice emails
9. Activate the workflow

---

## Use Cases

- Automating accounts payable workflows  
- Reducing manual invoice data entry  
- Validating invoices before accounting entry  
- Handling invoice approvals with human-in-the-loop  
- Maintaining audit logs for compliance  

---

## Requirements

- Gmail account (with label setup)
- OpenAI API credentials
- OCR API (e.g., OCR.space or Google Vision)
- Slack workspace
- QuickBooks account
- Google Sheets (for audit logs)
- n8n instance with file handling enabled

---

## Notes

- You can adjust validation tolerance and confidence thresholds based on your needs.
- Extend validation logic in the Code node for stricter financial checks.
- Replace QuickBooks or Google Sheets with your preferred tools if needed.
- Ensure secure handling of sensitive financial data in production environments.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, QuickBooks Online, Gmail Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
