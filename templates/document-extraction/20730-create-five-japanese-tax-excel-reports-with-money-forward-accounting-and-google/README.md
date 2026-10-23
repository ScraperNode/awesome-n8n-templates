# 🔬 Create five Japanese tax Excel reports with Money Forward Accounting and Google Drive

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow pulls journal entries from Money Forward Accounting for a selected office and calendar year, classifies them into five Japanese tax-prep report types, and generates or updates five XLSX files in Google Drive using a Google Sheets template.

## How it works
1. Starts manually and exchanges your Money Forward API credentials for an access token, then verifies the tenant and lists accessible offices.
2. Calculates the accounting periods that overlap the configured calendar year and fetches all Money Forward journal entries across those periods (with pagination).
3. Fetches the Money Forward account master, selects fixed-asset accounts, and merges this with the retrieved journals.
4. Classifies journal entry lines into five categories (withholding tax, rent, fees ≥ JPY 3,000, consumables ≥ JPY 50,000, and fixed assets), then formats rows for each report.
5. Groups the formatted rows into five report datasets and determines a client folder name based on the Money Forward office.
6. Finds or creates the client folder and year subfolder in Google Drive, then prepares five export jobs pointing to that destination.
7. For each report, copies the Google Sheets template, appends the report rows, exports the sheet as XLSX, uploads or overwrites the matching XLSX file in Google Drive, and deletes the temporary spreadsheet copy.

## Setup
1. Add Money Forward API credentials for HTTP Header Auth and ensure the account has access to the target Money Forward Accounting office.
2. Add Google Drive OAuth2 and Google Sheets OAuth2 credentials with permission to create folders, copy files, upload/update XLSX files, and edit spreadsheets.
3. Create a Google Drive root folder and a Google Sheets template whose first sheet (ID 0) has headers A:J: クライアント名, 帳票種類, 日付, 摘要, 勘定科目, 補助科目, 借方, 貸方, 支払先, 仕訳ID (and format columns G:H as numbers).
4. In “Configure Report Settings”, replace the placeholders with your Money Forward office code, target year, Google Drive root folder ID, and Google Sheets template spreadsheet ID.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
