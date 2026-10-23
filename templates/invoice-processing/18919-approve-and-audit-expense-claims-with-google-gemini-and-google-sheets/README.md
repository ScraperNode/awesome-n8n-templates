# 🧾 Approve and audit expense claims with Google Gemini and Google Sheets

> ⚡ **21 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow accepts expense receipts via a web upload webhook or email (IMAP), uses Google Gemini to extract claim details, checks policy rules and past spend in Google Sheets, and either auto-approves and logs the claim or emails a manager for approval and updates the ledger.

## How it works
1. Receives a receipt either through a webhook file upload or via an email inbox attachment.
2. Splits and normalizes each supported attachment (PDF or image) and captures the submitting employee’s name and email from the webhook payload or email sender.
3. Sends the receipt file to Google Gemini to extract one or more expense claims (vendor, date, amount, tax, category, and an initial auto-approve flag).
4. Reads policy thresholds and ledger history from Google Sheets to detect duplicates, compute employee/category metrics, and determine the final risk flag and approval requirement.
5. Logs each claim to a Google Sheets ledger and, for web uploads, returns an immediate JSON response indicating “Auto-Approved” or “Pending Approval.”
6. For pending claims, sends a Gmail approval email with approve/reject links, then updates the Google Sheets ledger status and notifies the employee by email when a decision is made.
7. Provides a separate webhook endpoint that looks up a claim by ID in Google Sheets and returns the current approval status.

## Setup
1. Add credentials for Google Gemini (PaLM/Gemini API), Google Sheets OAuth2, IMAP (for the email inbox), and Gmail OAuth2 (to send approval and notification emails).
2. Create or update a Google Sheets spreadsheet with a “Policy Rules” sheet (including Category and Max Amount columns), a “Ledger” sheet (for claims and status), and an “Audit Log” sheet, then set the correct spreadsheet and sheet IDs in the Google Sheets nodes.
3. Configure your frontend or upload client to POST the receipt file to the webhook path `upload-receipt` (multipart form field `data`) and allow CORS if needed.
4. Set the manager approver email address and the approve/reject link base URL used in the Gmail approval message to match your n8n instance domain and the `expense-decision` webhook path.
5. If using email intake, configure your mailbox to receive receipts and ensure attachments are included, since the workflow processes PDF and image attachments for extraction.

## 🔗 Nodes Used

Email Trigger (IMAP), Google Sheets, Webhook, Gmail, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
