# 🎫 Triage and route inbound emails with OpenAI, Slack, Gmail, and Sheets

> ⚡ **9 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls an IMAP inbox, uses OpenAI to classify each email by urgency, and then routes it to Slack, Google Sheets, or Gmail based on category and confidence, while logging every decision to a Google Sheets audit log.

## How it works
1. Polls an IMAP mailbox every minute for new emails.
2. Sends the email subject and plain-text body to OpenAI (gpt-4o-mini) to return a JSON classification with category, confidence, and reason.
3. Posts low-confidence classifications (confidence < 0.7) to a Slack channel for human review.
4. Routes high-confidence emails by category into urgent, invoice, or routine paths.
5. Posts urgent emails to a Slack #ops-alerts channel with the sender and the model’s reason.
6. Appends invoice email data to an Invoices sheet in Google Sheets.
7. Adds a Gmail label to routine emails and appends all outcomes to a DecisionLog sheet in Google Sheets.

## Setup
1. Configure the IMAP connection in the Email Trigger to monitor your target mailbox.
2. Add an OpenAI API credential (or n8n OpenAI/LangChain credential) for the classification step.
3. Add Slack credentials and set (or create) the #triage-review and #ops-alerts channels used for notifications.
4. Add Google Sheets credentials and replace YOUR_LEDGER_SHEET_ID and YOUR_AUDIT_SHEET_ID with your spreadsheet IDs, ensuring the Invoices and DecisionLog tabs exist.
5. Add Gmail credentials and update the label ID (Label_routine) to a label that exists in your Gmail account.

## 🔗 Nodes Used

Email Trigger (IMAP), Google Sheets, Slack, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
