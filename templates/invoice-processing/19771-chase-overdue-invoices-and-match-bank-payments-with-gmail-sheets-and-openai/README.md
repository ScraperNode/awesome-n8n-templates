# 🧾 Chase overdue invoices and match bank payments with Gmail, Sheets, and OpenAI

> ⚡ **6 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow uses Google Sheets as an AR ledger, matches bank payments to open invoices each weekday morning, then emails consolidated overdue statements via Gmail and escalates edge cases; it also uses OpenAI to classify incoming reply intent and updates invoice statuses, promises, and a chase log.

## How it works
1. Runs on a weekday schedule at 7am to read Payments and open Invoices from Google Sheets and allocate each bank line to invoices using reference parsing, exact-amount matching, or invoice-combination matching.
2. Writes updated invoice balances back to the Invoices tab and marks each bank line as allocated/part-allocated/unallocated in the Payments tab in Google Sheets.
3. Aggregates any payment-matching exceptions (for example ambiguous combinations, unknown payers, short payments, or overpayments) and emails a single report to the AR clerk via Gmail.
4. Runs on a weekday schedule at 9am to load Customers, Invoices, Payments, and the Chase log from Google Sheets and decide one collection action per customer based on grace periods, promises, disputes, unmatched cash, and minimum-balance thresholds.
5. Sends one consolidated overdue statement email per customer via Gmail, escalates accounts in dispute/over credit limit/missing an email to the account manager, or asks the finance lead for approval before handing an account to collections.
6. Appends the outcome of each customer decision (action, level, reason, amounts, and invoices) to the Chase log tab in Google Sheets so the next run can enforce spacing and escalation rules.
7. Polls Gmail every 15 minutes for replies, uses OpenAI (GPT-4 Mini) to extract intent and key details, updates promised dates or dispute status on the relevant invoice rows in Google Sheets, and emails anything needing manual follow-up to the AR clerk or account manager.

## Setup
1. Add Gmail credentials for sending emails, using the Gmail Trigger, and using the send-and-wait approval email.
2. Add an OpenAI credential for the information-extraction step that classifies and summarizes customer replies.
3. Create a Google Sheets spreadsheet with four tabs named Customers, Invoices, Payments, and Chase log, and add a Google Sheets credential with access to it.
4. Replace the placeholder sheet ID and set your AR clerk, finance lead, and account manager email addresses in the workflow’s configuration steps (the three Set nodes for collection policy, matching rules, and reply rules).
5. Review and adjust the collection thresholds (grace days, ladder escalation timing, chase floor, handover timing) and the payment-matching tolerances (fee tolerance and maximum combination size) to match your terms.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
