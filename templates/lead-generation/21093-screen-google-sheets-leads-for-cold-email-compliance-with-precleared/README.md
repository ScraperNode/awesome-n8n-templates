# 🎣 Screen Google Sheets leads for cold email compliance with Precleared

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs every morning to read new leads from Google Sheets, checks each email address with the Precleared API for cold email compliance, and writes the verdict and supporting details back to the same sheet.

## How it works
1. Runs every day at 09:00 on a schedule.
2. Loads sender settings (sender country, pitch, and a per-run check limit) and reads leads from a Google Sheets worksheet.
3. Keeps only rows that have an email address and do not yet have a verdict.
4. Limits the number of leads processed per run and sends each lead to the Precleared API for a compliance check.
5. Prepares the update fields from the Precleared response (verdict, rule/reason, next step, footer requirements, receipt ID, timestamp, and any error note).
6. Updates the matching lead row in Google Sheets (matched by email) with the verdict and related compliance details.

## Setup
1. Create a Google Sheets spreadsheet with columns for at least: email, address_source, verdict, rule, next_step, footer_requirement, receipt_id, checked_at, and note.
2. Add a Google Sheets OAuth credential in n8n and select the target document and sheet in both the read and update Google Sheets steps.
3. Set your sender_country, pitch, and max_checks_per_run values to match your use case.
4. (Optional) Add a Precleared API key and configure the HTTP request to send it as an Authorization: Bearer … header if you want higher limits than unauthenticated/free usage.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
