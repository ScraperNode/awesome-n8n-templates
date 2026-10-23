# 🔬 Verify single or bulk emails with Searchbug, Google Sheets, and Slack

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a single email or a CSV upload via an n8n form, verifies each address with the Searchbug Email Verification API, appends the results to Google Sheets, and posts a valid/invalid count summary to a Slack channel.

## How it works
1. Receives a submission from an n8n form that includes either a single email address or an uploaded CSV file.
2. Routes the run to single-email processing or parses the uploaded CSV into one item per row.
3. Normalizes each record to a consistent `email` field regardless of CSV header capitalization.
4. Verifies each email by calling the Searchbug Email Verification API and continues even if some requests error.
5. Extracts key fields (status, domain, MX, SMTP provider, and related flags) into a clean result object.
6. Appends each verification result as a new row in a Google Sheets tab.
7. Aggregates totals (valid/invalid/total) and posts a summary message to Slack.

## Setup
1. Add your Searchbug credentials by filling in the `CO_CODE` and `PASS` query parameters in the HTTP request to Searchbug.
2. Connect your Google Sheets account, set your target spreadsheet and the “Email Verification” sheet (or update the document and sheet names), and ensure the header columns match the fields being appended.
3. Connect your Slack account and select the channel where the workflow posts the verification summary.
4. If you submit CSV files, ensure the uploaded file is a .csv and includes an `email` column (any of `email`, `Email`, or `EMAIL` works).

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
