# 🧾 Extract invoice data from Gmail PDFs to Google Sheets with OpenAI and Slack

> ⚡ **25 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow monitors Gmail for emails with PDF attachments, extracts invoice fields with OpenAI, logs the results to a Google Sheets bookkeeping spreadsheet, and posts high-value invoices to Slack for approval.

## How it works
1. Triggers every minute when Gmail finds a new email matching the search query and downloads its attachments.
2. Extracts text from the first PDF attachment in the email.
3. Sends the extracted text to OpenAI (gpt-4o-mini) to return structured invoice data (vendor, dates, amounts, currency, category, and summary) as JSON.
4. Appends the extracted invoice fields to a Google Sheets worksheet and marks the entry as Unpaid with the current received timestamp.
5. Checks whether the invoice total is greater than or equal to 1000.
6. Posts a Slack message to a selected channel to request approval for invoices that meet the high-value threshold.

## Setup
1. Connect your Gmail, OpenAI, Google Sheets, and Slack credentials in n8n.
2. Update the Gmail search query in the Gmail trigger to target the invoice emails you want to process (for example, by label, sender, or subject).
3. Replace YOUR_GOOGLE_SHEET_ID with your spreadsheet ID and ensure the target sheet has columns matching Vendor, Invoice #, Invoice Date, Due Date, Currency, Category, Tax, Total, Status, and Received.
4. Set the Slack channel to post into and adjust the approval threshold amount (currently 1000) to match your policy.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
