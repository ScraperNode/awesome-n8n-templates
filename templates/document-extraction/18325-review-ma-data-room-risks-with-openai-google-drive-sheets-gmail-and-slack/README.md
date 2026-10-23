# 🔬 Review M&A data room risks with OpenAI, Google Drive, Sheets, Gmail and Slack

> ⚡ **28 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow starts from an n8n form submission, reviews all documents in a Google Drive data room using OpenAI (gpt-4o-mini), logs per-document risk findings to Google Sheets, then compiles an executive summary and emails the report via Gmail, with Slack alerts for errors.

## How it works
1. Receives a form submission with the deal name, Google Drive folder ID, and a notification email address.
2. Creates a unique run ID and lists files in Google Drive for the provided data room context.
3. Loops through each file, downloads it from Google Drive, and extracts the document text.
4. Sends the extracted text to OpenAI (gpt-4o-mini) to classify the document and generate a JSON finding with risk level, flags, and a short summary.
5. Parses the AI output and appends each document’s finding to a Google Sheets “Due Diligence Findings” tab.
6. After all documents are processed, fetches all findings for the run from Google Sheets and sends them to OpenAI (gpt-4o-mini) to draft an executive due diligence summary.
7. Converts the summary to HTML and sends it to the submitted notification email via Gmail.
8. Posts error alerts to Slack for workflow failures and for issues returned by the OpenAI analysis and summary steps.

## Setup
1. Add credentials for Google Drive OAuth2, Google Sheets OAuth2, OpenAI API, Gmail OAuth2, and Slack OAuth2.
2. Replace `YOUR_GOOGLE_SHEET_ID` in both Google Sheets nodes and ensure the “Due Diligence Findings” sheet contains the columns used (runId, timestamp, documentName, category, riskLevel, summary, flags).
3. Update the Slack channel ID in the Slack alert nodes (some are hardcoded to `C0AN1UGL0RM`) to match your workspace and target channel.
4. Share the n8n form URL with your team and ensure submitters provide a Google Drive folder ID that your Google Drive connection can access.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
