# 📁 Export Google Sheets data to CSV or Excel and send via Gmail

> ⚡ **31 views** · 📁 [File Management](../)

## Description

## Quick Overview
This workflow collects a Google Sheet export request via an n8n Form, reads the requested tab from Google Sheets, converts the data to CSV or Excel, and emails the generated file to the requester using Gmail.

## How it works
1. Receives a sheet export request through an n8n Form that captures the Google Sheet ID, optional tab name, desired format (CSV or XLSX), output file name, and recipient email address.
2. Reads the rows from the specified Google Sheets document and tab.
3. Validates the inputs, stops with an error if the email or Sheet ID is invalid, and aborts if the sheet is empty or the tab name is incorrect.
4. Routes the data to either a CSV or XLSX conversion based on the selected export format.
5. Generates the file (CSV or Excel) from the sheet rows and attaches it to an email.
6. Sends the exported file to the user via Gmail, including basic details like file name, format, row count, and the source Sheet ID.

## Setup
1. Connect a Google Sheets OAuth2 credential with access to the spreadsheets you want to export.
2. Connect a Gmail OAuth2 credential for sending emails and confirm the sender name and email settings.
3. Activate the workflow and share the source Google Sheets with the connected Google account so the read operation succeeds.

## 🔗 Nodes Used

Google Sheets, Spreadsheet File, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
