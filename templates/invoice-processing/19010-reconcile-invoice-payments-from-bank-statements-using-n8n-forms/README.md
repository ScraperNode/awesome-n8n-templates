# 🧾 Reconcile invoice payments from bank statements using n8n Forms

> ⚡ **34 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow collects an Open Invoices .xlsx and a Bank Statement .xlsx via an n8n Form, matches bank credits to invoices by reference and amount, and returns a styled HTML reconciliation report that highlights exact matches, partial matches, unpaid invoices, and unmatched deposits.

## How it works
1. Receives two uploaded .xlsx files (Open Invoices and Bank Statement) from an n8n Form submission.
2. Extracts rows from each spreadsheet into structured items.
3. Compares bank credit transactions to open invoices by checking whether the bank reference contains the full invoice ID or its last three digits, then evaluates whether the credited amount matches the invoice total.
4. Groups results into exact matches, partial matches with discrepancies, unpaid invoices, and unmatched deposits, and calculates summary metrics like totals collected and match rate.
5. Renders the reconciliation results into a printable HTML dashboard and displays it as the form completion response.

## Setup
1. Configure the workflow form URL/path as needed and share the form link with users who will upload the files.
2. Ensure your Open Invoices export includes the columns “Invoice ID” and “Total Amount Due”, and your Bank Statement export includes “Credit”, “Debit”, “Value Date”, and “Reference / Description”, or update the matching code to use your headers.
3. If your invoice IDs or bank reference format differs, adjust the code logic that extracts and matches invoice identifiers (full ID or last three digits).

## 🔗 Nodes Used

n8n Form Trigger, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
