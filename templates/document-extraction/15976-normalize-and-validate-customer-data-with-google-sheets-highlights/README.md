# 🔬 Normalize and validate customer data with Google Sheets highlights

> ⚡ **12 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow manually pulls raw customer records from Google Sheets, normalizes and scores key fields (name, phone, address, gender, dates), then routes results to either a normalized master sheet or a review queue and uses the Google Sheets API to highlight missing cells.

## How it works
1. Starts on a manual trigger and reads raw customer data from a Google Sheets sheet named `raw_input`.
2. Maps incoming columns into a consistent internal structure (record ID, source, dates, and postal code) for downstream processing.
3. Normalizes customer fields (name formatting, phone and postal-code digits, gender mapping, prefecture/address splitting, and date formatting) and computes a completeness score plus a review reason.
4. Checks whether the record meets the quality threshold (completeness score 6 80) to determine if it is acceptable.
5. Appends accepted records to the `normalized_master` sheet and sends a Google Sheets batchUpdate request to highlight any empty cells.
6. Appends records needing attention to the `review_queue` sheet and sends a Google Sheets batchUpdate request to highlight empty cells for faster review.

## Setup
1. Create a Google Sheets OAuth2 credential in n8n and connect it to this workflow.
2. Replace `YOUR_SPREADSHEET_ID` in all Google Sheets and HTTP Request nodes with your target spreadsheet ID.
3. Ensure the spreadsheet contains sheets named `raw_input`, `normalized_master`, and `review_queue` with columns that match the fields written by the workflow (for example: name, email, phone, prefecture, address, birth_date, status, completeness_score, and review_reason).
4. Verify the sheet tab IDs used for highlighting (1144211222 for `normalized_master` and 1278913705 for `review_queue`) match your spreadsheet, and update them if they differ.
5. (Optional) Adjust the quality threshold (currently completeness score 6 80) and normalization rules in the code to match your data requirements.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
