# 🔬 Track and log receipt expenses in Google Sheets with Gmail, Drive, and Claude

> ⚡ **21 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow monitors Gmail and a Google Drive folder for receipts, uses Anthropic Claude to extract expense details from email bodies, PDFs, and images, archives attachments to Google Drive, and appends validated expenses to a Google Sheets log with a link to the original receipt.

## How it works
1. Triggers every minute when new Gmail messages matching the query `label:receipts` arrive and downloads any attachments.
2. Normalizes the email content, and if an attachment exists, uploads it to Google Drive to generate a permanent Drive link.
3. Triggers every minute when a new file is created in a specified Google Drive folder, downloads the file, and normalizes it as a receipt input.
4. Routes each item as PDF, image, or email-body text, extracting PDF text when needed.
5. Uses Anthropic Claude (text or vision) to extract structured receipt fields (vendor, date, total, currency, category, and payment method) and flags whether the content is a real receipt.
6. Filters out non-receipts and appends the remaining expenses to Google Sheets, including the receipt link and a timestamp.

## Setup
1. Connect credentials for Gmail, Google Drive, and Google Sheets, and select the target Google Sheets document and sheet for logging.
2. Add an Anthropic credential and select the Claude model for both the text and vision extraction steps.
3. In Gmail, create and apply a “receipts” label (or update the Gmail query) so receipt emails are captured.
4. In Google Drive, choose a folder to watch for uploaded receipt photos/PDFs and a folder to store archived email attachments.
5. Create the Google Sheet columns used by the workflow (Date, Vendor, Total, Currency, Category, Payment Method, Source, Receipt Link, Logged At).

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger, Gmail Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
