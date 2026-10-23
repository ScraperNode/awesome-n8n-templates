# 🧾 Check invoice contract price compliance with Google Sheets and Telegram alerts

> ⚡ **4 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors a Google Sheets Invoices tab for new rows, compares each line’s invoiced unit price against the agreed contract price in a Contract Prices tab, logs the result to an Overcharge Report tab, and sends Telegram alerts only for overcharges or unknown item codes.

## How it works
1. Triggers every minute when a new row is added to the Invoices sheet in Google Sheets.
2. Reads the current Contract Prices sheet from the same Google Sheets document.
3. Matches each new invoice line to a contract line by Item Code and calculates price difference, overcharge amount, and a status (OK, OVERCHARGED, Undercharged - Check, or Item Not Found - Verify Code).
4. Appends the evaluated invoice line and status to the Overcharge Report sheet in Google Sheets to keep an audit trail.
5. Checks whether the status is OVERCHARGED or Item Not Found - Verify Code.
6. Sends a formatted Telegram message to your chat for flagged lines, and ends silently for everything else.

## Setup
1. Connect Google Sheets OAuth2 credentials for both the Google Sheets Trigger and Google Sheets nodes, and ensure the workflow points to your spreadsheet and the Invoices, Contract Prices, and Overcharge Report tabs.
2. Add a Telegram bot credential and set the Telegram chat ID where alerts should be delivered.
3. Ensure your sheet headers match the fields used for matching and calculations (for example Item Code, Invoiced Unit Price ($), Quantity, and Agreed Price ($)).

## 🔗 Nodes Used

Google Sheets, Telegram, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
