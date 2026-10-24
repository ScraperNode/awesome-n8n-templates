# 🔬 Evaluate KYB risk scores from Google Sheets with Ambriel and save reports to Google Drive

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs monthly (choose your own schedule schedule) to read company records from Google Sheets, evaluate each company’s KYB risk using Ambriel, writes the resulting score and risk level back to the sheet, and downloads the generated report to upload it into a Google Drive folder.

## How it works
1. Runs on a schedule once every month.
2. Reads all company rows from a Google Sheets spreadsheet.
3. Processes each row one at a time and sends the company registration number to Ambriel to run a KYB assessment and force report generation.
4. Updates the same Google Sheets row with the returned KYB score and risk level.
5. Requests the report download link from Ambriel and continues only if the report is successfully available.
6. Downloads the report file via HTTP and uploads it to a specified folder in Google Drive.

## Setup
1. Connect your Ambriel API credentials and confirm the workflow’s country code and registration number field mapping match your KYB use case.
2. Connect your Google Sheets OAuth credentials and set the spreadsheet ID and sheet tab that contain your company list (including a unique row_number column for updates).
3. Connect your Google Drive OAuth credentials and set the destination folder where the Ambriel KYB reports should be uploaded.
4. Review the schedule interval (currently every month) and adjust it to your desired run frequency.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
