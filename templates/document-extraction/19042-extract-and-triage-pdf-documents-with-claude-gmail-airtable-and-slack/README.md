# 🔬 Extract and triage PDF documents with Claude, Gmail, Airtable and Slack

> ⚡ **9 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow ingests PDF documents from an n8n upload form or Gmail attachments, extracts their text, uses Anthropic Claude to detect the document type and extract structured fields, and then stores results in Airtable while sending review and success notifications to Slack.

## How it works
1. Triggers when a user uploads a PDF through an n8n form or when a new Gmail message arrives with a PDF attachment.
2. Extracts text from the PDF and normalizes the input metadata (source, submitter, optional document type hint, and raw text).
3. Sends the extracted text to the Anthropic Messages API (Claude) to auto-detect the document type (if needed), extract type-specific fields, and return missing required fields plus a confidence score.
4. Parses the Claude response as JSON and prepares a structured output containing the detected type, extracted fields, validation notes, and confidence.
5. If required fields are missing, confidence is below 0.6, or the type is unknown, posts a Slack alert and logs the item to an Airtable “Needs Review” table.
6. Otherwise, routes the document by type (Invoice/Resume/Contract/Application) and creates a record in the matching Airtable table.
7. Sends a Slack message confirming the document was successfully processed and stored.

## Setup
1. Create an Anthropic API key and add it to an n8n credential referenced by the HTTP request (or update the request headers to match your credential setup).
2. Connect Gmail OAuth2 if you want the email intake path enabled, and ensure incoming messages match the search query `has:attachment filename:pdf`.
3. Connect Airtable credentials and replace the base ID and table IDs for Invoices, Resumes, Contracts, Applications, and Needs Review.
4. Connect Slack credentials and replace the review and general channel IDs used for notifications.
5. For the form upload path, run a test submission and set the PDF extractor’s `binaryPropertyName` to the actual file field name produced by the form.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Gmail, Gmail Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
