# 🧾 Create invoice drafts from chat or forms with Claude and Google Workspace

> ⚡ **6 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow accepts an invoice request from an n8n Form or Google Chat, reads customer and month using Anthropic Claude, pulls line items from Google Sheets, generates an invoice PDF from a Google Docs template in Google Drive, and creates a Gmail draft with the PDF attached.

## How it works
1. Receives an invoice request either from an n8n Form submission or a Google Chat webhook event.
2. For Google Chat requests, validates the sender email against an allowlist and replies with help text or an access error if the message is not eligible.
3. Loads Customers, Items, and Invoices tabs from Google Sheets and sends the customer list plus the request text to Anthropic Claude to extract the customer ID and billing month.
4. Verifies Claude’s extracted customer and month against the original request text, then calculates invoice lines, totals, tax, due date, and an invoice number from the Google Sheets data.
5. Stops with an error message if required data is missing, amounts are invalid, there are too many lines, or the invoice number already exists (unless marked void).
6. Copies a Google Docs invoice template in Google Drive, replaces placeholders via the Google Docs API, exports the document to PDF, and creates a Gmail draft addressed to the customer with the PDF attached.
7. Appends an invoice log row to the Invoices tab in Google Sheets and returns the result as a form completion page or a Google Chat reply with the document link.

## Setup
1. Add credentials for Google Sheets (OAuth2), Google Drive (OAuth2), Google Docs (OAuth2), Gmail (OAuth2), and Anthropic.
2. Create a Google Sheets file with tabs named Customers, Items, and Invoices, ensuring Customers includes customer_id/name/other_names/address/email/payment_terms_days and Items includes customer_id/month/description/quantity/unit_price.
3. Create a Google Docs invoice template containing the placeholders used by the workflow (for example: {{invoice_no}}, {{issue_date}}, {{due_date}}, {{customer_name}}, {{customer_address}}, {{period}}, {{lines}}, {{subtotal}}, {{tax_rate}}, {{tax}}, {{total}}, {{seller_name}}, {{seller_address}}, {{payment_details}}, {{notes}}).
4. In the workflow Config, paste your spreadsheet ID and template document ID and review seller details, currency/tax settings, invoice prefix, timezone, and email body.
5. If using Google Chat, create/configure a Google Chat app with the webhook production URL, change the webhook path to a long random string, and update the allowed_chat_users list to the emails permitted to create invoices.

## Requirements
- Google account with Google Sheets, Google Drive, Google Docs and Gmail (OAuth2)
- Anthropic API key (one short Claude Haiku 4.5 call per request)
- For the optional Google Chat entry: Google Workspace and an n8n instance reachable from the internet

## Customization
- Change the line format, the invoice number or the email text in "Build the invoice"
- Add a bank or a registration number to the template and to Config
- Send the draft link to Slack instead of Google Chat


## Additional info
Nothing is sent automatically: every invoice ends as a Gmail draft that a person checks and sends. The webhook does not verify Google's signed token; it relies on a long random path and a list of allowed emails. Two identical requests at the same moment may both pass the duplicate check (not tested). In Google Chat, the link preview of a new document may show the unfilled template; the document and PDF themselves are correct.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Gmail, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
