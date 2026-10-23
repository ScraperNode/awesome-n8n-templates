# 🔧 Translate lab report PDFs for patients with Google Drive, OpenAI and Gmail

> ⚡ **55 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow watches a Google Drive folder for new lab-report PDFs, extracts their text, uses OpenAI (gpt-4o-mini) to structure and simplify results, translates the summary into the patient’s preferred language, and emails a Markdown report via Gmail, with error notifications sent to Slack.

## How it works
1. Triggers every minute when a new PDF is created in a specific Google Drive folder.
2. Downloads the PDF from Google Drive and extracts the raw text content.
3. Sends the extracted text to OpenAI (gpt-4o-mini) to extract structured patient/report fields, detect the report language, and capture raw findings.
4. Cleans and parses the OpenAI JSON response to reliably carry forward patient details, report metadata, and findings.
5. Uses OpenAI (gpt-4o-mini) to rewrite the raw findings into a warm, jargon-free plain-English Markdown summary with a “What to do next” section.
6. Uses OpenAI (gpt-4o-mini) to translate the Markdown summary into the patient’s preferred language while preserving formatting.
7. Builds a final Markdown report, converts it into a .md attachment, and sends it to the patient via Gmail.
8. Posts error details to a Slack channel if extraction, simplification, or translation fails.

## Setup
1. Connect Google Drive OAuth2 credentials and set the folder ID in the Google Drive trigger to the lab-reports folder you want to monitor.
2. Add an OpenAI API key credential (the workflow uses the gpt-4o-mini model for extraction, summarization, and translation).
3. Connect Gmail OAuth2 credentials and ensure the recipient expression resolves to a real patient email (the workflow uses `{{$json.patient_email}}`).
4. Connect Slack OAuth2 credentials and replace `YOUR_SLACK_CHANNEL_ID` with the channel where error alerts should be posted.
5. Upload a sample PDF to the watched Google Drive folder and verify you receive the email with the Markdown attachment and any errors appear in Slack.

## 🔗 Nodes Used

Slack, Google Drive, Gmail, Google Drive Trigger, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
