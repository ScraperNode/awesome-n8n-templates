# 📁 Auto-file emailed documents to Clio matters in Google Drive with compliance logs

> ⚡ **4 views** · 📁 [File Management](../)

## Description

## Quick Overview
This workflow monitors an IMAP intake mailbox, matches inbound email attachments to a Clio contact and open matter, and files the documents into the correct Google Drive matter folder while logging outcomes to a compliance audit sub-workflow and alerting staff when no confident match is found.

## How it works
1. Receives a new email via IMAP, extracts the sender, subject, received date, and any attachments.
2. If there are no attachments, it stops processing with no further action.
3. Searches Clio for a contact matching the sender’s email and only accepts an exact email match.
4. Retrieves the contact’s open Clio matters and selects a matter only when there is exactly one open matter or the matter number appears in the email subject.
5. Searches Google Drive for a folder for the matched matter under the configured parent folder, creating the folder if it does not exist.
6. Uploads each attachment to the matter folder in Google Drive with the received date prefixed in the filename.
7. Aggregates the upload results and calls a separate compliance audit workflow to log the successful auto-filing event.
8. If the contact or matter cannot be confidently identified, it logs the exception via the compliance audit workflow and emails staff a manual-filing alert with the original attachments.

## Setup
1. Add IMAP credentials for your intake mailbox and confirm the trigger reads from the correct folder (for example, INBOX).
2. Create a Clio OAuth2 credential and set the CLIO_BASE_URL variable used by the HTTP requests.
3. Add a Google Drive OAuth2 credential and set the GENERATED_DOCS_FOLDER_ID variable for the parent folder where matter folders are searched/created.
4. Set GUARDRAIL_WORKFLOW_ID to the ID of your compliance audit sub-workflow and ensure it accepts the provided inputs (channel, message, matter_id, recipient, template_id).
5. Add SMTP (or email) sending credentials and set FIRM_FROM_EMAIL to the address that receives manual filing alerts.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, HTTP Request, Google Drive, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
