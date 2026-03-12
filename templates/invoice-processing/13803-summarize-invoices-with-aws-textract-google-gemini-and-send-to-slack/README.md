# 🧾 Summarize invoices with AWS Textract, Google Gemini, and send to Slack

> ⚡ **2 views** · 🧾 [Invoice Processing](../)

## Description

### Who’s it for
This workflow is built for finance teams, operations managers, founders, and businesses that process invoices regularly and want to eliminate manual document handling. It’s especially useful for teams that need quick, structured invoice insights delivered directly to their communication tools.

---

### What it does / How it works
This workflow automates the entire invoice-processing pipeline from upload to notification.

1. A user uploads an invoice file through an n8n form trigger.
2. The uploaded file is securely stored in **AWS S3**.
3. **AWS Textract** analyzes the invoice and extracts text and structured data such as vendor name, totals, and line items.
4. The extracted data is sent to **AI Agent**, which summarizes the invoice and highlights key financial details.
5. The AI-generated summary is sent as a direct message to a selected user in **Slack**.

All steps run automatically after the form submission.

---

### Requirements
- AWS credentials with access to:
  - Amazon S3
  - AWS Textract
- Google Gemini (PaLM) API credentials
- Slack API credentials
- An existing S3 bucket to store uploaded invoice files

---

### How to set up
1. Connect your AWS credentials in n8n with permissions for S3 and Textract.
2. Specify the S3 bucket name where invoice files should be uploaded.
3. Add and authenticate your Google Gemini API credentials.
4. Connect your Slack account and choose the user or channel for notifications.
5. Test the workflow by submitting an invoice through the n8n form.

---

### How to customize the workflow
- Update the Gemini prompt to extract specific fields such as tax, due date, or invoice number.
- Route invoices differently based on total amount or vendor.
- Send Slack messages to a channel instead of a direct message.
- Store extracted invoice data in a database or spreadsheet.
- Add approval or alert steps for high-value invoices.

## 🔗 Nodes Used

Slack, AWS S3, AWS Textract, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
