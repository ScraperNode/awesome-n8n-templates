# 🔬 Clean and validate inbound contact records with Gemini and Google Sheets

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow exposes a POST webhook that cleans and normalizes messy inbound records with Google Gemini, validates the result against strict formatting rules, and then either upserts valid data into Google Sheets or quarantines failures and returns an HTTP 422 response.

## How it works
1. Receives a JSON record via a POST webhook endpoint.
2. Defines the target field schema and cleaning rules to apply to the incoming data.
3. Uses Google Gemini to transform the raw record into minified JSON that matches the target schema.
4. Validates the Gemini output by parsing JSON and checking required fields plus email, E.164 phone, and YYYY-MM-DD date formats.
5. If validation fails, sends the previous output and the specific validation errors back to Google Gemini for a second repair pass and validates again.
6. Upserts valid records into a Google Sheets tab (using email as the key) and returns the cleaned JSON to the caller.
7. Appends records that still fail after two attempts to a Google Sheets Quarantine tab and returns an HTTP 422 rejection response.

## Setup
1. Add Google Gemini (PaLM) API credentials for the Gemini chat model used in both cleaning passes.
2. Add Google Sheets OAuth2 credentials and select the target spreadsheet for both the clean-record and quarantine writes.
3. Create two tabs in the spreadsheet named “Clean Records” and “Quarantine”, and ensure the clean tab has an email column suitable for upserts.
4. Update the target schema and rule text to match the fields and validation requirements you want to enforce.
5. Activate the workflow, copy the production webhook URL, and configure your source system to POST records to it.

## 🔗 Nodes Used

Google Sheets, Webhook, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
