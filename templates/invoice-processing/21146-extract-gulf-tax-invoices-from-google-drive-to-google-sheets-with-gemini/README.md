# 🧾 Extract Gulf tax invoices from Google Drive to Google Sheets with Gemini

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow watches a Google Drive folder for new invoice PDFs or images, extracts Arabic/English invoice data with Google Gemini, normalizes numbers and dates, appends invoice and line-item rows to Google Sheets, and then moves each file to either a Processed or Needs review folder.

## How it works
1. Triggers when a new file is created in a specified Google Drive inbox folder.
2. Downloads the new file from Google Drive and sends it to Google Gemini to extract invoice fields and line items as a single JSON object.
3. Normalizes extracted data by converting Arabic-Indic digits, attempting Hijri (Umm al-Qura) to Gregorian date conversion, validating KSA/UAE VAT number formats, and checking totals/VAT calculations and model confidence.
4. Appends one normalized invoice row to the Invoices tab in Google Sheets.
5. Expands the extracted line items into one row per item and appends them to the Line items tab in Google Sheets.
6. Moves the original Google Drive file to the Needs review folder when validation flags issues, otherwise moves it to the Processed folder.

## Setup
1. Create credentials for Google Drive, Google Sheets, and a Google Gemini (Google AI Studio) API key.
2. Create three Google Drive folders (inbox, processed, needs review) and select the inbox folder in the trigger, then paste the processed/review folder IDs into the configuration values.
3. Create a Google Sheets spreadsheet with tabs named Invoices and Line items, and replace the spreadsheet ID in the configuration values.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
