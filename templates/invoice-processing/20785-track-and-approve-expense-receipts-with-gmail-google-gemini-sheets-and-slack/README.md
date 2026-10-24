# 🧾 Track and approve expense receipts with Gmail, Google Gemini, Sheets and Slack

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow monitors Gmail for receipt/invoice email attachments, uses Google Gemini to extract expense details, validates and logs them to Google Sheets, alerts Finance in Slack when expenses exceed a limit, and emails confirmations; it also compiles a monthly Google Sheets summary and emails it to Finance.

## How it works
1. Triggers every minute when a Gmail message matching the receipt/invoice/expense query arrives with an attachment and downloads the attachment.
2. Sends the attachment image to Google Gemini to extract receipt fields (vendor, date, amount, tax, currency, category, payment method, and more) as JSON.
3. Parses and validates the AI JSON, enriches it with the Gmail sender as the employee fallback, assigns an expense ID, and flags whether the amount exceeds the configured expense limit.
4. Appends or updates the expense record in Google Sheets using the Expense ID as the matching key.
5. If the logged expense is above the limit, posts an approval-required alert to a Slack finance channel and then emails the employee a processed receipt notification.
6. If the logged expense is within the limit, emails the employee a processed receipt notification.
7. Runs monthly on a schedule, reads all rows from Google Sheets, calculates totals (amount, tax, averages, category and employee breakdowns, and highest expense), and emails the monthly report via Gmail.

## Setup
1. Connect credentials for Gmail (trigger + send), Google Sheets, Slack, and Google Gemini (PaLM/Gemini API) in n8n.
2. Create or select a Google Sheet with the columns used in the workflow (for example Expense ID, Employee, Vendor, Receipt Date, Amount, Tax, Currency, Category, Payment Method, Over Limit, Approval Status, Validation Status, and Processed At) and update the spreadsheet and sheet references.
3. Set the target Slack channel for finance approvals and replace the monthly report recipient email address (currently set to user@example.com).
4. Update the expense limit value in the validation step (currently 500) and ensure the Gmail search query matches how your organization receives receipts.
5. Ensure receipt emails include a readable first attachment (the workflow analyzes attachment_0) or adjust the binary property name if your emails contain multiple attachments.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
