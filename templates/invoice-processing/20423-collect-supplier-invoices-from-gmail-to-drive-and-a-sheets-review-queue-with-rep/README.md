# 🧾 Collect supplier invoices from Gmail to Drive and a Sheets review queue with Repondea

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Stop downloading supplier invoice attachments and retyping their fields into Sheets. This configurable workflow collects labelled Gmail invoices, archives originals in your private Drive and prepares eight suggested fields in a Sheets review queue. You check and correct before export.

## How it works
1. The Gmail trigger polls one unread message carrying your invoice label and downloads its attachments. Supported invoice files are split and processed sequentially. PDFs must contain one to three pages; PNG and JPEG are also accepted, up to 5 MB per file. One invoice per attachment. Mixed messages skip unsupported files; messages without a supported invoice stop before being marked read.
2. For each attachment, the workflow searches Sheets for its stable source_key. An existing row is preserved, including your corrections and review status. It searches your configured private Drive folder for an archived original before uploading again. These lookups prevent sequential replay of the same message attachment; a forwarded copy has a different key and still needs human duplicate checking.
3. Repondea reads the document using a revocable account key stored in an n8n Header Auth credential. No model API key is required. The proposed fields are supplier, invoice number, invoice date, due date, currency, net total, tax and gross total. They are written as RAW cells with warnings, TO_REVIEW status and links to the original and Gmail message. Successful document pages consume the account's monthly quota.
4. Only after all supported attachments reach the review queue does the workflow mark the email read. Failures stop processing and leave it unread. Inspect the execution and recover it; an older message can require marking it unread and testing the Gmail trigger explicitly, because backfill is not guaranteed. Extraction succeeded but the Sheets write failed? Another extraction can consume pages again. No automatic extraction retry is enabled. Check every TO_REVIEW row against its original, correct the fields, set REVIEWED and export only reviewed rows. The workflow makes no payment or accounting entry.

## Setup
1. Import the workflow and connect Gmail, Google Drive and Google Sheets credentials. Create a Gmail label Repondea-Factures and change the trigger query if your label differs. Apply it only to supplier invoice emails; a Gmail filter can label known suppliers. Create a PRIVATE Drive folder and replace YOUR_DRIVE_FOLDER_ID in both the archive search query and upload node. Google credentials remain in your own n8n instance.
2. Create a spreadsheet tab named Invoices with these exact headers: source_key, supplier, invoice_number, invoice_date, due_date, currency, net, tax, total, review_status, warnings, original_url, gmail_url. Replace YOUR_SHEET_ID in both Sheets nodes. Create a Repondea Invoice CSV account, verify its email and generate a revocable key. Select a Header Auth credential on Extract invoice fields with Name Authorization and Value Bearer followed by a space and the key. Keep the key out of the workflow JSON.
3. Before activation, label a fictional invoice email and run the trigger test. Check the private original link, all fields and TO_REVIEW row, then verify that the email was marked read. Serialize executions with n8n concurrency=1; simultaneous searches and appends are not an atomic duplicate guarantee. When recovering a failed execution, preserve completed rows and any manual corrections. The workflow waits 15 seconds between reads for the API's five-per-minute limit. The complete setup guide and tested JSON are at https://repondea.com/en/invoice-csv/n8n/gmail?source=n8n-gmail-invoice-csv .

## Requirements
- An n8n instance, a Gmail mailbox, private Drive folder, Google Sheet and verified Repondea account are required. Tested end to end in n8n 2.42.3 on 7 October 2026 with fictional invoices and our own private Google files; these are internal tests, not client results. Five pages per month are free without a card; optional Pro includes 50 pages for EUR 9/month. Extraction may be wrong and requires human review. This is a configurable workflow running in your n8n instance, not a hosted Gmail connector.

## Customization
- Adjust the supplier filter, invoice label and private destinations for your process. Preserve the source_key lookups, sequential execution and final mark-read placement. A TO_REVIEW row is an advisory review state, not an approval to pay. Check supplier plus invoice number to identify forwarded copies. No banking, accounting-posting or tax-filing integration is provided. Import exported CSV fields as text where appropriate for untrusted documents.

## Additional info
Recovery tested internally: a revoked key leaves the message unread and consumes no document pages; a completed REVIEWED row is preserved on replay; a message with two supported PDFs is marked read only after its supported attachments finish. Originals stay in your private Drive and fields in your Sheet. Repondea retains account and usage data, not documents or extracted fields. OpenRouter and its reading provider receive document images and apply their own retention terms; n8n may retain inputs/results in execution history, so configure retention. The separate upload-workflow video explains account/key/field review and does not demonstrate this Gmail/Drive/Sheets setup. Full guide and workflow download: https://repondea.com/en/invoice-csv/n8n/gmail?source=n8n-gmail-invoice-csv .

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
