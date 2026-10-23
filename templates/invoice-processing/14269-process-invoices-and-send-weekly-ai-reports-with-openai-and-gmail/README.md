# 🧾 Process invoices and send weekly AI reports with OpenAI and Gmail

> ⚡ **69 views** · 🧾 [Invoice Processing](../)

## Description

## Overview
This workflow automates invoice handling from upload to reporting using AI.

Users submit invoices through a simple form. The workflow extracts key details, validates the data, stores valid invoices, and sends email notifications. It also generates a weekly summary report automatically.

This helps reduce manual data entry and ensures consistent invoice processing.

---

## How It Works

1. **Form Submission**
   Users upload an invoice (PDF or image) along with their email.

2. **Initial Storage**
   The raw submission is stored for tracking and reference.

3. **Text Extraction**
   The uploaded file is processed to extract text content.

4. **AI Data Extraction**
   AI converts the raw text into structured invoice data such as invoice number, vendor, date, currency, and totals.

5. **Validation**
   The workflow checks:
   - Date format (YYYY-MM-DD)
   - Allowed currencies
   - Total amount validity

6. **Conditional Flow**
   - If valid → invoice is stored and a success email is sent  
   - If invalid → an error email is sent with details

7. **Weekly Reporting**
   A scheduled trigger runs weekly to:
   - Fetch all validated invoices
   - Generate a summary report using AI
   - Send the report via email

---

## Setup Instructions

1. Add your OpenAI credentials (used for data extraction and reporting)
2. Connect Gmail credentials for sending emails
3. Configure Data Tables:
   - `invoice_form_submissions`
   - `validated_invoices`
4. Update the **Workflow Configuration** node:
   - Set report recipient email
   - Adjust allowed currencies if needed
5. Ensure the file field (`invoiceFile`) is correctly mapped
6. Test with a sample invoice
7. Activate the workflow

---

## Use Cases

- Automating invoice processing for small businesses
- Reducing manual accounting data entry
- Validating invoices before storing them
- Generating weekly financial summaries
- Handling invoice submissions from clients or teams

---

## Requirements

- OpenAI API credentials
- Gmail account (for sending emails)
- n8n Data Tables (or replace with your preferred database)
- n8n instance with file upload support

---

## Notes

- Make sure to fix the IF condition:
  Use `{{$json.validation.isValid}}` instead of accessing `isValid` directly.

- You can extend validation rules in the Code node based on your business needs.

- The reporting section can be customized to include more insights or formats.

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
