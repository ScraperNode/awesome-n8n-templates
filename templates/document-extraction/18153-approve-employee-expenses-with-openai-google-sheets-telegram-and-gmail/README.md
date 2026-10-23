# 🔬 Approve employee expenses with OpenAI, Google Sheets, Telegram, and Gmail

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Expense approvals without the back-and-forth. Submit an expense through a webhook and the workflow categorizes it, decides whether a manager needs to sign off, logs it to Google Sheets, and notifies the right person on Telegram and Gmail, with a monthly summary for the manager.

*Last updated: September 2026.*

## Quick Overview
This workflow receives employee expense submissions via webhook, uses OpenAI to categorize and flag expenses for approval, logs each submission to Google Sheets, and sends Telegram notifications to either a manager for approval or the employee for confirmation. When approval is needed, the manager also gets the full expense details by email, and on the 1st of every month the manager receives an AI-written summary report of the month's expenses on Telegram.

## How it works
1. Receives an employee expense submission via a POST webhook request.
2. Normalizes the incoming fields (timestamp, expense ID, employee name, amount, vendor, description, and currency).
3. Sends the expense details to OpenAI to clean the amount, assign a category, and determine whether manager approval is required.
4. Parses the AI response and prepares the final structured fields for downstream use.
5. Appends the expense record to a Google Sheets "Expenses" sheet with an AUTO_APPROVED or PENDING_APPROVAL status.
6. Sends a Telegram message to the manager when approval is needed and emails the manager the full expense details through Gmail, otherwise sends an auto-approval confirmation to the employee on Telegram.
7. On the 1st of every month at 09:00, reads the Expenses sheet, filters the current month, and sends an AI-written monthly expense report (total, count, pending items) to the manager on Telegram.

## Setup
1. Create and enable a webhook endpoint in [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) and configure your expense form/tool to POST fields like employee_name, amount, vendor, description, currency, and optionally expense_id to the webhook URL.
2. Add an OpenAI credential and select the chat model to use for expense analysis.
3. Add a Google Sheets OAuth credential, set the target spreadsheet/document ID, and ensure it contains an "Expenses" sheet with matching columns (e.g., expense_id, received_at, employee_name, amount, currency, vendor, category, description, status, ai_reason).
4. Create a Telegram bot, add a Telegram credential in [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin), and replace the chatId values with the manager and employee chat IDs you want to notify.
5. Connect your Gmail OAuth2 credentials and update the manager email address used for the approval email.
6. Adjust the approval rules (for example the 50+ threshold and unclear/personal criteria) in the OpenAI system message to match your expense policy.

### Quick Answers
**What does the AI decide?**
It cleans the amount, assigns a category, and determines whether manager approval is required.

**How do managers approve?**
When approval is needed the manager gets a Telegram notification plus the full expense details by email; otherwise the employee gets an auto-approval confirmation on Telegram.

**Where is every expense recorded?**
Each submission is appended to the Expenses sheet in Google Sheets with an AUTO_APPROVED or PENDING_APPROVAL status.

**When does the monthly report arrive?**
On the 1st of every month at 09:00, with the month's total, count, and pending items, sent to the manager on Telegram.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
