# 🧾 Reconcile bank payments with ERP invoices, Google Sheets, and Slack

> ⚡ **33 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs on a schedule (or manually) to reconcile bank/PSP transactions against open invoices from an ERP via HTTP APIs, auto-applying exact matches, routing partial matches to Slack for approval, logging unmatched payments as exceptions in Google Sheets, and posting a reconciliation summary to Slack.

## How it works
1. Runs on a schedule or via a manual trigger and loads configuration values like API URLs, matching tolerances, Google Sheets IDs, and Slack channels.
2. Fetches incoming payment transactions from a bank/PSP API and open invoices from an ERP/accounting API.
3. Compares each payment to invoices using deterministic rules (reference match first, then amount/currency plus a date window) and labels it as matched, partial, or unmatched.
4. For matched payments, updates the invoice in the ERP as paid via an HTTP request and appends the outcome to a Google Sheets audit log.
5. For partial matches, posts the candidate invoices to Slack for human review, waits for a decision, and then either applies the payment in the ERP and logs it to the audit sheet or flags it as a rejected exception and alerts Slack.
6. For unmatched payments, writes an exception row to a Google Sheets exceptions sheet and notifies finance in Slack.
7. Aggregates run-level counts and totals across all processed payments and posts a summary message to Slack.

## Setup
1. Create HTTP Header Auth credentials for your bank/PSP and ERP endpoints, and replace the example API URLs and ledger base URL in the configuration values.
2. Add Google Sheets credentials and set the audit and exceptions spreadsheet IDs, ensuring the target sheets exist (for example, tabs named “AuditLog” and “Exceptions”).
3. Add Slack credentials and set the channel names for review, exceptions, and summary notifications.
4. If you use the manual review path, configure Slack (or an external callback) to resume the wait step by sending an approval payload (for example, `approved: true` and optionally `selectedInvoiceId`).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
