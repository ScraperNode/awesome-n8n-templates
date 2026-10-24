# 🔬 Generate DOCX documents from Gmail using OpenAI, Google Sheets and Drive

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow monitors Gmail for document-generation requests, validates the sender, looks up available DOCX templates in Google Sheets and Google Drive, uses OpenAI to select and fill the right template, converts the result to DOCX via a Pandoc HTTP service, uploads it to Google Drive, and replies by email.

## How it works
1. Triggers when a new email is received in Gmail.
2. Extracts the sender, subject, and body text, then authorizes the request based on allowed sender domains and a required keyword.
3. Reads a template catalog from Google Sheets and formats it into a searchable list for the AI.
4. Uses OpenAI to match the email request to a single template and extract recipient details and other fields, replying by Gmail with an “unable to match” message if no template fits.
5. Downloads the matched DOCX template from Google Drive and uses OpenAI to reproduce it as filled GitHub-flavored Markdown.
6. Sends the Markdown to a Pandoc conversion HTTP endpoint to generate a DOCX file.
7. Uploads the generated DOCX to a Google Drive folder and replies to the original Gmail thread with the document attached and a Drive link.

## Setup
1. Connect Gmail OAuth2 credentials for the Gmail trigger and the two Gmail reply actions.
2. Connect Google Sheets OAuth2 and Google Drive OAuth2 credentials, and create a Google Sheet catalog with columns Title, Aliases, FileId, and FileName pointing to DOCX templates in Drive.
3. Add OpenAI credentials for the two OpenAI steps (template matching and template filling).
4. Provide an HTTP Header Auth credential for the Pandoc conversion service and set the Pandoc service URL and reference DOCX name.
5. Update the configuration values for catalogSpreadsheetId, catalogSheet, outputFolderId, allowedSenderDomains, and subjectKeyword to match your environment.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
