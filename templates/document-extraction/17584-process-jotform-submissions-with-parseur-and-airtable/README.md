# 🔬 Process Jotform submissions with Parseur and Airtable

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow triggers on new Jotform submissions, checks for an uploaded document, downloads the file from Jotform, sends submission details to Parseur for extraction, and then saves the submission data (including a document link) into Airtable.

## How it works
1. Triggers when a new submission is received for the specified Jotform form.
2. Checks whether the submission includes an “Upload Document” answer and stops if no file is present.
3. Builds a Jotform file download URL from the submission metadata and downloads the uploaded file via an HTTP request.
4. Sends the submission details and the document URL to Parseur by emailing content to the configured Parseur inbox.
5. Searches Airtable for an existing record matching the Jotform Submission ID.
6. Creates a new record in Airtable with the submitter’s details, Submission ID, and the uploaded document URL.

## Setup
1. Connect your Jotform account (or API access) and set the correct Form ID in the Jotform trigger.
2. Replace the hardcoded Jotform API key in the file download URL and confirm the form includes an “Upload Document” field label that matches the check.
3. Configure your Parseur inbox (recipient address) and add Parseur credentials if required for your workspace.
4. Add an Airtable credential (Personal Access Token) and confirm the Base ID, Table, and field names (Email, Full Name, Phone Number, Service Type, Submission ID, Upload Document) match your Airtable schema.

## 🔗 Nodes Used

Airtable, HTTP Request, Jotform Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
