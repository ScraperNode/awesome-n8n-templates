# 🧾 Approve Slack expense receipts and post invoices to Xero with Textract and OpenAI

> ⚡ **3 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow captures expense receipt images shared in Slack, extracts key fields with AWS Textract, categorizes the spend with OpenAI, requests manager approval in Slack, then creates an authorised ACCPAY invoice in Xero with the receipt attached and logs the outcome to Google Sheets.

## How it works
1. Triggers when a file is shared in Slack and downloads the shared file.
2. Filters events to receipt image uploads and sends the image to AWS Textract AnalyzeExpense to extract vendor, total, date, and currency.
3. Uses OpenAI to assign a single expense category from a fixed list and normalizes the extracted fields while checking Textract confidence thresholds.
4. If the extraction is low confidence, sends a Slack message asking the uploader to resend a clearer photo.
5. If the extraction is confident, posts a Slack approval request that pauses until a manager approves or rejects.
6. On approval, maps the category to a Xero account code, creates an authorised Xero ACCPAY invoice (routing via one of two Xero API requests), reattaches the original receipt image as an invoice attachment, and appends an “approved” entry to Google Sheets.
7. On rejection, notifies the original Slack user and appends a “rejected” entry to Google Sheets.

## Setup
1. Connect Slack OAuth credentials with permission to receive file_share events, download files, send messages, and use interactive approvals, then set the trigger and approval channel/user to match where receipts and approvals happen.
2. Add AWS credentials with permission for Textract AnalyzeExpense and ensure the Slack-downloaded file is provided as binary data to Textract.
3. Add an OpenAI API credential for the chat categorization request.
4. Connect Xero via OAuth2, confirm the Xero Tenant ID header is set for your organisation, and adjust the invoice details (e.g., due date policy, tax type, and Contact naming) if needed.
5. Connect Google Sheets credentials and update the spreadsheet and sheet (tab) used for the ExpenseAudit lookup/log so it matches your document structure, then adjust the category-to-account-code mapping if your chart of accounts differs.

## Requirements
- Slack bot (files + messaging) and an approval channel
- AWS IAM with Textract AnalyzeExpense
- OpenAI API credential
- Xero OAuth connected to org INTUZ (tenant already configured)
- Google Sheet n8n poc → tab ExpenseAudit
- Workflow published (draft ≠ live)

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, AWS Textract, OpenAI, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
