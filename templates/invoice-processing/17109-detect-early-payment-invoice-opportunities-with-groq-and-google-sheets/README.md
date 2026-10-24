# 🧾 Detect early payment invoice opportunities with Groq and Google Sheets

> ⚡ **27 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow runs daily to fetch invoice data from an HTTP endpoint, calculate early-payment savings and annualized ROI, and use Groq (Llama 3.3) to prioritize eligible discounts. It logs eligible and expired invoices to Google Sheets and emails a digest of HIGH-priority recommendations via Gmail.

## How it works
1. Runs every day at 9:00 to start an invoice scan.
2. Fetches invoice records from an external HTTP API endpoint.
3. Calculates potential savings, days saved by paying early, annualized ROI, and whether each invoice is still eligible before the discount deadline.
4. Routes eligible invoices to Groq (Llama 3.3) to return a JSON decision with a YES/NO recommendation, HIGH/MEDIUM/LOW priority, and a short reason, then normalizes the AI response.
5. Appends eligible invoice evaluations (including ROI, savings, priority, recommendation, and reason) to a Google Sheets log.
6. Filters for invoices marked YES and HIGH priority, aggregates them into a daily batch, and emails a plain-text digest to the finance team via Gmail.
7. Marks ineligible invoices as expired with a skip reason and appends them to a separate Google Sheets audit log.

## Setup
1. Add a Groq API credential and ensure the selected Groq model is available in your account.
2. Add Google Sheets OAuth2 credentials and update the spreadsheet ID, sheet tabs, and column headers to match your logging sheets.
3. Add Gmail OAuth2 credentials and set the target recipient(s) for the finance summary email.
4. Update the invoice API URL to your real invoice source and ensure each record includes amount, discount_percent, discount_deadline, payment_due, vendor, and vendor_email fields.
5. Adjust the available cash amount and the ROI/cash threshold rules in the prompt and/or data preparation step to match your finance policy.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
