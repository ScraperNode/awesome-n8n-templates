# 🔬 Generate and email PDF certificates with Google Sheets, Apify, and Gmail

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow reads participant data from Google Sheets, generates personalized PDF certificates via the Apify Bulk Certificate & Diploma PDF Generator, downloads each PDF, and emails it to the matching recipient using Gmail.

## How it works
1. Runs manually to start the certificate generation process.
2. Reads participant rows from Google Sheets and combines them with the certificate design and text settings.
3. Sends the prepared records to Apify’s Bulk Certificate & Diploma PDF Generator to create one PDF certificate per participant.
4. Matches each generated certificate back to the participant’s email address using the certificate ID.
5. Downloads each certificate PDF from the provided Apify URL.
6. Sends each participant an email via Gmail with their certificate PDF attached.

## Setup
1. Connect Google Sheets OAuth credentials, then select the target spreadsheet and sheet in the Google Sheets read step.
2. Connect Gmail OAuth credentials for the account that sends the certificate emails.
3. Create an n8n HTTP Header Auth credential named “Apify API token” with header name `Authorization` and value `Bearer <YOUR_APIFY_TOKEN>`, and select it in both Apify HTTP requests.
4. Ensure your Google Sheet includes `name` and `email` columns (plus any optional fields you reference like `course` and `date`), then customize the certificate text/design and email subject/sender name in the Settings step.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
