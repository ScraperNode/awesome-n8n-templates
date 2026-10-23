# 📁 Export Google Sheets to CSV or Excel and email files with Gmail

> ⚡ **27 views** · 📁 [File Management](../)

## Description

## Quick Overview
This workflow collects a Google Sheet ID and export preferences via an n8n Form, reads the selected tab from Google Sheets, converts the rows to CSV or Excel (XLSX), and sends the generated file as a Gmail attachment to the requester.

## How it works
1. Receives a request through an n8n Form that asks for an email address, Google Sheet ID, optional tab name, export format (CSV or XLSX), and an optional file name.
2. Reads the rows from the specified Google Sheets document and tab.
3. Validates the email and Sheet ID, checks that the sheet contains data, and attaches export metadata (format, filename, MIME type, row count) to the items.
4. Routes the run based on the selected format to generate either an XLSX file or a CSV file.
5. Sends an email via Gmail to the provided address with the exported file attached.

## Setup
1. Connect a Google Sheets OAuth2 credential with access to the spreadsheets you want to export.
2. Connect a Gmail OAuth2 credential for the account that sends the export emails.
3. Activate the workflow and share the form URL, then ensure requesters provide the correct Sheet ID and (if used) the exact tab name.

## 🔗 Nodes Used

Google Sheets, Spreadsheet File, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
