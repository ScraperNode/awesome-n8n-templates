# 🔬 Validate single and bulk US phone numbers with Searchbug and Google Sheets

> ⚡ **16 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a single phone number or a CSV upload via an n8n form, validates and normalizes US 10-digit numbers, enriches them using the Searchbug Phone Validator API, and appends the results (carrier, line type, VoIP, DNC/TCPA flags, and more) to Google Sheets.

## How it works
1. Receives a submission from an n8n form where the user enters one phone number or uploads a CSV file.
2. Routes the input as single entry or bulk CSV, then normalizes the field to a consistent `phone` value.
3. Filters out any records that are not 10-digit US phone numbers to avoid unnecessary API calls.
4. Strips non-numeric characters and sends each valid phone number to the Searchbug Phone Validator (api_lnp3) endpoint.
5. Extracts key fields from the Searchbug JSON response (or marks the lookup as failed) and appends the flattened results to a Google Sheets tab.

## Setup
1. Add your Searchbug `co_code` and `pass` values to the HTTP request query parameters used for the Searchbug API call.
2. Connect a Google Sheets credential and set the target Spreadsheet ID and sheet/tab name where results should be appended.
3. Create the destination sheet with header columns that match the saved fields (for example: `phone`, `phone_type`, `carrier`, `voip`, `dnc`, `tcpa`, `ported`, `state`, `timezone`, `cnam`, `location_code`, `formatted_phone`, `lata`, `local_time`, `ocn`, `validated_at`, `validation_status`).
4. If using bulk mode, upload a CSV that contains a phone column named `phone`, `Phone`, or `PHONE`, then activate the workflow and share the form URL as needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
