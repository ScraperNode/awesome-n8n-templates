# 🔬 Extract receipt data from Telegram and log expenses to Google Sheets with OpenAI

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow captures receipt images sent to a Telegram bot, creates a public image URL, uses OpenAI (gpt-4.1-mini) to extract vendor/date/amount/tax as JSON, and appends the results to a Google Sheets expense tracker.

## How it works
1. Triggers when a receipt image or document is sent to your Telegram bot and downloads the file.
2. Uploads the receipt image to UploadToURL to generate a permanent public link.
3. Sends the public image URL to OpenAI (gpt-4.1-mini) to analyze the receipt and return vendor, date, total amount, and tax as strict JSON.
4. Parses the JSON response and appends a new row with Vendor, Date, Tax, and Total Amount to Google Sheets.

## Setup
1. Create and connect a Telegram bot credential in n8n, then enable it on the Telegram Trigger node.
2. Add an UploadToURL credential so the workflow can upload images and produce a publicly accessible URL.
3. Add an OpenAI API credential with access to the gpt-4.1-mini model.
4. Connect Google Sheets OAuth2 credentials and update the target spreadsheet and sheet tab where rows should be appended, ensuring columns exist for Vendor, Date, Tax, and Total Amount.

## 🔗 Nodes Used

Google Sheets, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
