# 🔬 Clean Google Sheets contact data for phone, email, and dates on an hourly schedule

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs hourly to read rows from Google Sheets, normalize phone numbers, email addresses, and dates, and write back only the rows that changed while adding an _email_valid flag for downstream filtering.

## How it works
1. Runs every hour on a schedule.
2. Reads all rows from a specified Google Sheets worksheet.
3. Normalizes the configured phone, email, and date columns, adds an _email_valid boolean, and flags whether any of those fields changed.
4. Filters the results to keep only rows where the normalized values differ from the originals.
5. Updates the changed rows back in Google Sheets by matching on the row_number column.

## Setup
1. Add a Google Sheets OAuth2 credential in n8n with access to the target spreadsheet.
2. In both Google Sheets nodes, set the documentId (spreadsheet ID) and sheetName (tab name) to your target sheet.
3. In the code step, update PHONE_COL, EMAIL_COL, DATE_COL, and DEFAULT_COUNTRY_PREFIX to match your column headers and default dialing code.
4. Ensure your sheet includes a row_number column (as returned by the Google Sheets read operation) so updates can match the correct rows.

## Additional info
Want more automation power? Check out the full data-cleaning suite: https://shop.lumnika.com/sheets-data-cleaner.html?src=n8ncreators

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
