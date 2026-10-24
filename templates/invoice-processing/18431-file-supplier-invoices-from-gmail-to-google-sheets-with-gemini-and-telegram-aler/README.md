# 🧾 File supplier invoices from Gmail to Google Sheets with Gemini and Telegram alerts

> ⚡ **14 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors Gmail for unread emails with PDF invoice attachments, extracts key invoice fields from the PDF text, checks Google Sheets for duplicates, and either appends a clean row to an Invoices sheet or sends a Telegram message to flag duplicates or unreadable invoices.

## How it works
1. Triggers every hour by scanning Gmail for unread emails that have a PDF attachment and downloads the attachment.
2. Extracts text from the attached PDF and parses it to identify supplier, invoice number, dates, totals, VAT details, and currency (including both UK and EU number formats).
3. If required fields are missing, sends a Telegram message listing what could not be read and stops without writing to Google Sheets.
4. Reads the existing rows from the Invoices sheet in Google Sheets and compares them to the parsed invoice using supplier + invoice number + total as the matching key.
5. If a duplicate is detected, sends a Telegram message explaining which invoice was blocked and does not append a new row.
6. If the invoice is complete and non-duplicate, formats a single clean record and appends it to the Invoices sheet in Google Sheets.

## Setup
1. Connect your Gmail account credentials and ensure incoming invoice emails arrive unread with PDF attachments so they match the Gmail search filter.
2. Connect your Google Sheets credentials and update the sheet URL to point to your spreadsheet that contains an Invoices sheet.
3. Connect your Telegram credentials, set your Telegram chat ID in the workflow settings, and confirm you can receive messages from your bot.

## Requirements
- A Gmail account that receives supplier invoices as PDF attachments
- A Google Sheet with an Invoices tab to file the rows into
- A Telegram bot and the chat id it should message

## Customization
- The field patterns for supplier, invoice number, dates and totals sit at the top of the parser code node
- The duplicate rule (supplier + invoice number + total) and the Telegram alert wording are plain JavaScript you can edit
- The trigger interval and the Gmail search filter decide how often and which emails are picked up

## 🔗 Nodes Used

Google Sheets, Telegram, Google Drive, Gmail, Gmail Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
