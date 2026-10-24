# 🧾 Reconcile bank payments to invoices with webhooks, Gmail and data tables

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow accepts bank statement data via an authenticated webhook (or a manual fixture), reconciles payments to open invoices using deterministic matching logic, and stores the results in n8n Data Tables while sending an operator summary email through Gmail.

## How it works
1. Receives a POST webhook request with statement JSON, validates an import token, and returns a 401 response if authentication fails.
2. Builds a normalized statement contract and loads existing transactions and unresolved review items from n8n Data Tables to prevent duplicate processing.
3. Reconciles each bank row against open invoices and payer aliases using deterministic rules (invoice-number detection, exact amount matching, and subset-sum totals), creating allocations, review-queue items, and paid signals where safe.
4. Writes transactions, invoices, allocations, review rows, paid signals, and a run summary into six n8n Data Tables.
5. Reads back the just-written rows for the current execution, verifies the expected counts and key sets, and commits “seen” markers to workflow static data to block replay.
6. Sends the operator summary via Gmail and responds to the webhook with a controlled JSON status and reconciliation counts.

## Setup
1. Create six n8n Data Tables (Recon_Bank_Transactions, Recon_Invoices, Recon_Allocations, Recon_Review_Queue, Recon_Paid_Signals, Recon_Run_Summaries) and replace every REPLACE_WITH_TABLE_ID value with your table IDs.
2. Set the BANK_IMPORT_TOKEN workflow variable and configure your source system to send it in the Authorization bearer token or the X-Bank-Import-Token header.
3. Add a Gmail credential, then replace ops@example.com with your operator email address in both Gmail send steps.
4. (Optional) Run the manual trigger once to generate a fixture-based reconciliation run and confirm that writes, readback verification, and email delivery work end-to-end.

## 🔗 Nodes Used

Webhook, Gmail, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
