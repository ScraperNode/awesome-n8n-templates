# 🧾 Process, validate, and approve invoices with OpenAI GPT-4o and Google Sheets

> ⚡ **3 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow receives invoice PDFs via a webhook, extracts and validates invoice data with OpenAI, checks for duplicates in Google Sheets, and routes invoices for automatic or manual approval while notifying vendors and finance via Gmail.

## How it works
1. Receives an invoice submission via a POST webhook that includes vendor details and a PDF file.
2. Extracts text from the PDF and uses OpenAI to convert it into structured invoice fields (amounts, dates, line items, and payment info).
3. Normalizes the extracted data, validates required fields, and emails the vendor via Gmail if key fields are missing.
4. Searches Google Sheets for an existing invoice with the same invoice number and, if found, flags it as a duplicate and notifies finance by email.
5. For non-duplicate invoices, uses OpenAI to categorize the invoice and assess priority, risk level, and whether approval is required, then verifies the total matches subtotal plus tax.
6. Auto-approves low-value, low-risk invoices, or emails an approval request and waits for a decision submitted via a webhook.
7. Writes the final invoice record (including approval status) to Google Sheets and emails a completion notice to the finance team.

## Setup
1. Add OpenAI credentials for the two AI steps (invoice extraction and invoice analysis).
2. Add a Gmail credential for vendor, approver, finance, and admin notification emails.
3. Add a Google Sheets credential, replace `YOUR_GOOGLE_SHEET_ID`, and ensure an `Invoices` sheet exists with an `invoice_number` column for lookups/updates.
4. Update the placeholder email addresses (finance-team@yourcompany.com, finance-review@yourcompany.com, manager-approvals@yourcompany.com, admin@yourcompany.com) to your real recipients.
5. Implement an approval endpoint that posts an approval webhook payload (including a `decision` field like `approved` or `rejected`) to the workflow’s wait/resume webhook URL.

## Requirements
- n8n instance with the @n8n/n8n-nodes-langchain package installed (for the Agent, Chat Model, and Structured Output Parser nodes)
- An OpenAI API credential (or any LangChain-compatible chat model credential swapped into the two Chat Model nodes)
- A Gmail account connected via OAuth2 credential for the notification and approval emails
- A Google Sheets account with a sheet containing columns matching the invoice record fields (invoice_number, vendor, invoice_date, due_date, subtotal, tax, total, currency, category, priority, risk_level, approval_status, processed_at)
- A way to POST invoice files and metadata to the webhook endpoint, such as a form, an internal tool, or an email to webhook bridge

## Customization
- Adjust the auto approval thresholds (amount, risk level) in the Switch - Determine Approval Path node to match your company's policy
- Edit the system prompts in the two AI Agent nodes to change what counts as high risk or how invoices are categorized
- Swap the Wait node's resume method (webhook) for a form trigger or Slack approval if you want a different approval experience
- Replace Google Sheets with a database node (Postgres, Airtable, etc.) if you'd rather store records elsewhere
- Add extra validation rules or required fields in the Code - Validate Required Fields node for stricter intake requirements

## Additional info
This workflow helps automate invoice processing and approval in n8n, covering extraction, validation, duplicate detection, AI-based categorization, and final storage with notifications. Before use, configure the Gmail, Google Sheets, and OpenAI credentials, and update the relevant nodes with your own account details, sheet ID, and approval rules. The AI Agent prompts, extraction fields, output schema, and approval thresholds can all be customized to fit your use case, along with the duplicate-detection logic and storage destination. Test each step, including the approval Wait node, before running the workflow in a production environment.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
