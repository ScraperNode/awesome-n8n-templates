# 🔬 Monitor vendor compliance documents and expiries with Google Drive, OpenAI, Sheets, Gmail, and Slack

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Google Drive folder for new vendor compliance PDFs, uses OpenAI to classify and extract key fields, logs and tracks them in Google Sheets, flags uncertain items in Slack, and runs a daily compliance check that emails vendor reminders and sends a digest via Gmail and Slack.

## How it works
1. Triggers when a new file is created in a specific Google Drive “Vendor Compliance Inbox” folder.
2. Checks whether the uploaded file is a PDF and posts a Slack message when a non-PDF file is skipped.
3. Downloads the PDF, extracts its text, and uses an OpenAI chat model to classify the document and extract vendor name, issuer, issue/expiry dates, coverage amount, summary, and confidence.
4. Matches the document to a vendor from the Google Sheets “Vendors” tab, validates the extraction (for example, missing expiry or low confidence), upserts the record into the Google Sheets “Documents” tab, and moves the file to a processed Drive folder.
5. Posts a Slack alert when the document needs human review (for example, no vendor match, partial match, low confidence, missing expiry for expiring document types, or bank information).
6. Runs daily at 8 AM to read vendors and documents from Google Sheets, evaluate each active vendor against tier-based requirements, and append the results to a “Compliance Log” tab.
7. Emails vendors (via Gmail) when reminders are due and sends a daily compliance digest to the compliance owner by Gmail and a summary message to Slack.

## Setup
1. Add credentials for Google Drive, Google Sheets, Gmail, Slack, and OpenAI (Chat) used by the workflow.
2. Create a Google Sheet with tabs named “Vendors”, “Documents”, and “Compliance Log”, and select the correct spreadsheet in all Google Sheets steps.
3. Create and select two Google Drive folders (the inbox to watch and the processed folder to move files into), then drop the trigger webhook-less polling folder selection into the Drive trigger.
4. Choose the Slack channels for “Unsupported File”, “Review Needed”, and the daily summary messages.
5. Update the values in the Configuration step (company name, compliance inbox, owner email, reminder windows, and testMode) and adjust tier requirements in the rules step if needed.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail, Google Drive Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
