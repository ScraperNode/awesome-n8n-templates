# 🔬 Import reconciled bank statements into Google Sheets with Google Drive and OpenAI

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Drive folder for new bank-statement PDFs or CSVs, extracts transactions with OpenAI, reconciles opening/closing balances, and appends only new (non-duplicate) transactions to Google Sheets with rule-based categorization, while logging every import and emailing you when a statement fails reconciliation.

## How it works
1. Triggers when a new file is created in a specified Google Drive folder.
2. Downloads the statement and extracts text from the file (PDF text extraction or CSV-to-text).
3. Sends the extracted text to OpenAI to return structured JSON containing account details, statement period, balances, and a transaction list.
4. Validates that opening balance plus all transaction amounts equals the closing balance (in integer cents) and optionally identifies the first running-balance mismatch.
5. If the statement does not reconcile, logs the refused import to Google Sheets and sends a Gmail email explaining the discrepancy and any suspected sign error.
6. If the statement reconciles, reads category rules and existing transaction fingerprints from Google Sheets, categorizes transactions, and keeps only transactions not previously imported.
7. Appends the new transactions to the Google Sheets Transactions tab and writes a summary entry to the Import log tab.

## Setup
1. Connect Google Drive credentials, choose the folder to watch, and ensure n8n has permission to download files from it.
2. Connect an OpenAI credential (Chat Model) and select the model used to extract statement data.
3. Connect Google Sheets credentials and set the spreadsheet and sheet names for Transactions, Rules, and Import log in all Google Sheets nodes.
4. Prepare your Google Sheet tabs/columns, including a Transactions column named Fingerprint and a Rules tab with Match, Category, and Direction (in/out/any).
5. Connect Gmail credentials, replace the recipient address in the email action, and confirm your Gmail account can send messages from n8n.

## Requirements
- n8n (self-hosted or Cloud); built and tested on n8n 2.x
- A Google Drive folder for statements (PDF or CSV) and one Google Sheet with Transactions, Rules and Import log tabs
- An OpenAI API key, or any OpenAI-compatible provider
- Gmail for the alert when a statement doesn't reconcile

## Customization
- Stricter checks: add your own rules to the balance check, such as refusing statements that overlap a closed month
- Other sources: replace the Drive trigger with a Gmail trigger on your bank's statement emails
- Accounting tools: swap the Sheets append for QuickBooks, Xero or a database; the fingerprint keeps re-imports safe there too

## Additional info
What you get: one importable workflow file (JSON, 17 nodes) with setup notes pinned beside every step, delivered as an instant download after checkout. Use it in unlimited workflows of your own or your clients'. Payments are handled by Paddle (merchant of record). 14-day full refund, no questions asked. Questions before or after buying: hello@hundredships.com. This is a data-import tool, not accounting or financial advice.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Drive Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
