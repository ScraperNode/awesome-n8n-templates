# 🎣 Validate phone numbers in Google Sheets using 1Lookup

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow runs hourly to read leads from Google Sheets, validates each unprocessed phone number using 1Lookup, and writes the status, line type, DNC flag, recommended action, and a timestamp back to the same sheet.

## How it works
1. Runs every hour on a schedule.
2. Reads rows from a Google Sheets worksheet and uses a configured column name (default `Phone`) to find each lead’s phone number.
3. Filters out rows with an empty phone value or an existing `phone_status` so only unchecked numbers are processed.
4. Sends each phone number to 1Lookup for validation and continues even if a lookup fails.
5. Prepares update values including `phone_status` (or `ERROR` on failure), `line_type`, `dnc_listed`, `action`, and `checked_at`.
6. Updates the original Google Sheets row by matching on `row_number` so only the validation columns change.

## Setup
1. Add Google Sheets credentials in n8n and select the target spreadsheet and sheet tab in both Google Sheets nodes.
2. Install the 1Lookup community node (`@momentum-labs/n8n-nodes-1lookup`) if needed and create a 1Lookup API credential using your API key.
3. Ensure your sheet includes a `row_number` field and add columns for `phone_status`, `line_type`, `dnc_listed`, `action`, and `checked_at`.
4. Update the `phone_column` value in the Settings step if your phone field is not named `Phone`.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
