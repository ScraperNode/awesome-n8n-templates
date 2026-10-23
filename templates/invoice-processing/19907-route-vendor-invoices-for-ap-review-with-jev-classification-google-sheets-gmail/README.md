# 🧾 Route vendor invoices for AP review with Jev Classification, Google Sheets, Gmail, Telegram, and OpenAI

> ⚡ **37 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow receives vendor invoice submissions via webhook, uses Jev Classification to assess invoice completeness, logs the routing outcome to Google Sheets, and notifies Accounts Payable via Gmail and Telegram, plus sends a daily backlog brief generated with OpenAI.

## How it works
1. Receives an invoice submission via a POST webhook containing invoice_id, vendor_name, and invoice_text.
2. Rejects submissions with missing or empty invoice_text and emails the AP team in Gmail with the reason.
3. Sends usable invoice_text to Jev Classification to answer intake questions (PO/reference present, amount present, vendor identity present, bank details present, currency, and an overall completeness score).
4. Parses Jev’s answers to derive a missing-details list, confidence gates, and a routing decision.
5. Routes invoices to either ready for payment run, vendor follow-up, or human AP review, and appends the invoice and decision details to the “Invoice Intake” Google Sheets tab.
6. For the ready route, checks Google Sheets for duplicate invoice_id entries and either alerts AP in Telegram (duplicate) or emails AP in Gmail to queue the invoice for three-way match.
7. On a daily 17:00 schedule, reads the Google Sheets log, summarizes invoice counts by route, uses OpenAI (via a LangChain agent) to draft a short backlog brief, and emails it to the AP team.

## Setup
1. Configure the source system to POST to the workflow webhook URL with invoice_id, vendor_name, and invoice_text in the request body.
2. Add credentials for Jev Classification (TypeSafe), Google Sheets OAuth2, Gmail OAuth2, Telegram, and OpenAI.
3. Update the Google Sheets document ID and ensure it contains an “Invoice Intake” sheet with columns matching the logged fields (for example invoice_id, vendor_name, route, status, and routed_at).
4. Replace placeholder email addresses (ap-team@yourcompany.com and vendor-billing@example.com) and the Telegram chat ID with your real recipients.

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
