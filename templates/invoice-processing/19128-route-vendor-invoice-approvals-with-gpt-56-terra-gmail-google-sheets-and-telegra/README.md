# 🧾 Route vendor invoice approvals with gpt-5.6-terra, Gmail, Google Sheets and Telegram

> ⚡ **5 views** · 🧾 [Invoice Processing](../)

## Description

Invoice approvals without the bottleneck. Vendor invoices arrive via webhook, AI checks them against your vendor and policy data, and each one is either auto-approved or routed to a human reviewer. Every decision logged to Sheets, everyone notified.

*Last updated: September 2026.*

## Quick Overview
This workflow receives vendor invoices via a webhook, uses OpenAI with Google Sheets-based vendor and approval policy data to decide auto-approval vs human review, logs every invoice to Google Sheets, and sends outcome notifications through Gmail and Telegram.

## How it works
1. Receives an invoice submission via a POST webhook request.
2. Normalizes the incoming fields and validates that vendor email, invoice number, and amount are present.
3. If required fields are missing, sends a Telegram alert and emails an intake-error notice.
4. If valid, uses an OpenAI chat model that consults Google Sheets (VendorMaster and ApprovalPolicy) to produce an approval decision, suggested approver, reason, and confidence.
5. Parses the AI output, calculates default due dates and approval deadlines, and applies deterministic rules to force human review when the amount is over 500,000 or the vendor is not in the known-vendor list.
6. Appends the invoice record and decision details to an Invoices tab in Google Sheets.
7. Sends Gmail and Telegram notifications either confirming auto-approval to the vendor and finance, or requesting review from the suggested approver and alerting finance.

## Setup
1. Create/prepare a Google Sheets file with VendorMaster, ApprovalPolicy, and Invoices tabs (with columns matching the workflow mappings) and update the document ID if you use a different spreadsheet.
2. Add Google Sheets OAuth2 credentials that can access the spreadsheet.
3. Add an OpenAI API credential for the OpenAI chat model used by the AI agent.
4. Add Gmail OAuth2 credentials and update the recipient addresses (including the invalid-intake notification address and the approver fallback like finance@yourcompany.com).
5. Add Telegram bot credentials and set the target chat ID for finance alerts.
6. Copy the webhook URL for the ap/invoice endpoint and configure your invoice source system to POST the required fields (vendor_name, vendor_email, invoice_number, amount, and optional currency/category/due_date).

### Quick Answers
**When does a human step in?**  
When the amount is over 500,000 or the vendor is not on the known-vendor list.  
**Where are the rules kept?**  
VendorMaster and ApprovalPolicy tabs in Google Sheets, decisions in the Invoices tab.  
**Who gets notified?**  
Vendors and finance on auto-approval; the suggested approver plus finance on review cases.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
