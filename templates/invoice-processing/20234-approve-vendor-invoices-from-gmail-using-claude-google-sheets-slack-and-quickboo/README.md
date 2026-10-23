# 🧾 Approve vendor invoices from Gmail using Claude, Google Sheets, Slack and QuickBooks

> ⚡ **14 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Turn vendor invoices from Gmail into approved QuickBooks bills. Claude reads each PDF, code checks it against your vendors, POs, log and QuickBooks, Slack approvers decide, and every outcome is logged, labelled and followed up.

## How it works
1. A Gmail trigger catches each email with a PDF and calls this workflow once per email, so every invoice runs and waits for approval on its own.
2. The PDF is saved to a Google Drive folder, then one Anthropic API call reads it and returns vendor, invoice number, dates, amounts, PO number, bank details and line items as fixed JSON.
3. It reads your Vendors, Purchase orders and Invoice log tabs and searches QuickBooks Online for a bill with the same number. Code checks the vendor, sender domain, bank details, arithmetic, open PO balance and duplicates, then picks auto-approve, approve or hold.
4. Small, clean, PO-matched invoices approve themselves. Others go to a Slack approver by direct message with a time limit, plus a second approver above your limit. Whoever raised the PO never approves its invoice.
5. Every outcome is logged and posted to your AP channel. Approved invoices become QuickBooks bills with one line per invoice line. Changed bank details alert finance and never reply to the sender. Fixable problems get a reply asking the vendor for a corrected invoice, and Gmail labels show the result.
6. Each weekday morning a digest lists approved bills coming due and invoices still waiting on a person. An error trigger posts any failure to Slack.

## Setup
1. Create a Google Sheet with the tabs Vendors, Purchase orders and Invoice log, using the column headers in the canvas note, and add each vendor's QuickBooks vendor ID and expense account ID.
2. Fill in the Settings node: sheet ID, Drive folder ID, Slack user and channel IDs, Gmail label IDs, QuickBooks company ID, and your approval limits.
3. Connect Gmail, Google Drive, Google Sheets, Slack and QuickBooks Online credentials, and add a Header Auth credential named x-api-key with your Anthropic API key.
4. Choose this workflow as its own error workflow in Workflow settings. Test from Each invoice starts here with the pinned sample (run it twice to see the duplicate hold), then unpin Read the invoice with Claude and activate.

## Requirements
- Gmail, Google Drive, Google Sheets, Slack and QuickBooks Online accounts, plus an Anthropic API key

## Customization
- Change limits and tolerances in Settings, add your own checks in Check and route, or point Create the bill in QuickBooks at Xero or another accounting API.

## Additional info
Built by Amplence (amplence.com), an n8n automation agency. The checks and the design choices behind them: amplence.com/blog/n8n-invoice-approval-workflow

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Execute Sub-workflow, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
