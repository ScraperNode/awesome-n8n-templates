# 🔬 Fill legal intake documents from form data with DocuSign, Google Drive and email

> ⚡ **26 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow receives intake form submissions via webhook, validates required fields, generates practice-area-specific documents by merging data into Google Docs templates or creating DocuSign draft envelopes, then aggregates results, logs an audit entry by calling another n8n workflow, and emails the filled PDFs and DocuSign references to an attorney.

## How it works
1. Receives an intake form submission via a webhook endpoint.
2. Validates and normalizes the payload, and stops the run if required fields are missing.
3. Builds a list of documents to generate based on the submitted practice area and configured n8n Variables, then skips processing if no templates are available.
4. For each document, either copies a Google Docs template in Google Drive, replaces {{merge_tag}} placeholders via the Google Docs API, and exports the filled copy as a PDF, or creates a draft DocuSign envelope from a template with prefilled tabs.
5. Merges all generated document results into a single summary, attaching any PDFs and collecting DocuSign envelope IDs.
6. Calls a separate n8n workflow to log the document-generation summary to a compliance audit trail.
7. Sends an email to the firm reviewer with the generated PDFs attached and links/IDs for reviewing the Google Doc copies and DocuSign drafts.

## Setup
1. Configure the webhook URL in your intake form tool to send a POST request with JSON fields including full_name, email, and matter_type.
2. Add Google Drive OAuth2 credentials, enable both the Google Drive API and Google Docs API in Google Cloud, and set GENERATED_DOCS_FOLDER_ID plus the Google Docs template file ID Variables used by your practice areas.
3. Add DocuSign OAuth2 credentials, set DOCUSIGN_AUTH_BASE_URL, DOCUSIGN_RETAINER_TEMPLATE_ID, and DOCUSIGN_RETAINER_ROLE_NAME Variables, and ensure your DocuSign template tab labels match the workflow’s field mapping.
4. Set GUARDRAIL_WORKFLOW_ID to the ID of the audit/logging workflow you want to execute for compliance tracking.
5. Add SMTP email credentials and set FIRM_FROM_EMAIL and either FIRM_REVIEWER_EMAIL or FIRM_EMAIL to control who receives the review email.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Google Drive, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
