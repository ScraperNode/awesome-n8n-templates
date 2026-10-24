# 🔬 Verify tax IDs in PDF uploads with Groq, Google Sheets, Lovable, and Gmail

> ⚡ **46 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives tax document PDFs from a Lovable form webhook, extracts and parses the Tax ID with Groq, validates and matches it against a Google Sheets “TaxID_Database,” logs results to Google Sheets, emails the submitter via Gmail, and returns a JSON verdict back to Lovable.

## How it works
1. Receives a POST webhook from Lovable containing a base64-encoded PDF and submitter metadata.
2. Generates a request ID, normalizes the incoming fields, and checks Google Sheets “Verification_Log” for a recent run with the same filename to return a cached duplicate result.
3. If not a duplicate, extracts readable text from the PDF payload and sends it to Groq (OpenAI-compatible chat completions) to parse the tax ID and document details as JSON.
4. If no tax ID is extracted, immediately returns a JSON error response to Lovable indicating that no tax ID was found.
5. Validates and normalizes the extracted tax ID format, then looks it up in the Google Sheets “TaxID_Database” to determine match score, entity mismatch, and a preliminary verification status.
6. Sends the combined verification facts to Groq to produce a final compliance verdict with risk level, score, flags, summary, and recommended action.
7. Appends the full verification audit record to Google Sheets, updates the matched database row or logs unknown tax IDs, emails the submitter the outcome via Gmail, and responds to Lovable with the final JSON result.

## Setup
1. Configure the Lovable form (or other source) to POST to this workflow’s webhook URL and include at least `pdf_base64`, `file_name`, `submitted_by`, `email`, and `organization` fields.
2. Add Groq authentication for the HTTP requests (Header Auth) and ensure your Groq account has access to the specified model endpoint.
3. Connect Google Sheets OAuth2 credentials and update the spreadsheet ID/sheet tabs for “Verification_Log,” “TaxID_Database,” and “Unknown_TaxIDs,” ensuring headers start on row 3 as expected.
4. Connect Gmail OAuth2 credentials and confirm the recipient mapping uses the submitter email field you expect.
5. Review and adjust duplicate-cache behavior (currently based on filename and freshness from “Completed At” within 24 hours) to match your operational requirements.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
