# 🧾 Approve employee expense receipts with Gmail, Google Sheets, and OpenAI

> ⚡ **12 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow processes expense receipts emailed to Gmail, extracts receipt data with OpenAI, checks it against rules and historical data stored in Google Sheets, and routes claims for manager/finance approval, then runs a weekly payout with missing-receipt chasers and payment tracking.

## How it works
1. Triggers when new emails arrive in a dedicated Gmail inbox and downloads any attachments.
2. Loads Employees, Policy, prior Claims, and Card transactions from Google Sheets to use as reference data for validation and matching.
3. Splits each email into individual receipt items (image, PDF, or forwarded email text) and uses OpenAI to extract structured receipt fields, then normalizes dates and amounts.
4. Fetches historical exchange rates from the Frankfurter (ECB) API and checks each receipt for age, currency conversion, company card matches, duplicates, and policy limits to decide reimbursable amounts and whether approval is required.
5. Emails the appropriate approver (employee’s manager or finance) via Gmail with an approve/decline action when needed, otherwise auto-approves within-policy claims.
6. Writes one row per receipt line to the Claims tab in Google Sheets with the decision details, then emails the employee a line-by-line outcome summary.
7. Every Friday, reads approved unpaid claims and employee banking details from Google Sheets, emails chasers for unmatched company card spend, and sends finance a single Gmail approval to release the payout.
8. If finance approves, marks the related claim lines as paid in Google Sheets and emails each employee a remittance advice, and if the workflow run fails it alerts finance by Gmail.

## Setup
1. Add Gmail credentials for the receipts mailbox and for sending approval, outcome, chaser, payout, and failure-alert emails.
2. Add Google Sheets credentials and create one spreadsheet with tabs named Employees, Policy, Claims, and Card transactions.
3. Add an OpenAI API credential (used by the OpenAI vision/chat model for receipt extraction).
4. Update the spreadsheet ID and finance email address in both Set nodes (Set Expense Policy and Set Payout Settings), and set the expenses mailbox address in Set Payout Settings.
5. Populate the Employees, Policy, and Card transactions tabs with the required columns (including employee email/manager email, policy category limits, and card transaction IDs/amounts/card last4) so matching and approvals work correctly.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Gmail Trigger, Schedule Trigger, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
