# 🎣 Deduplicate CSV leads and rank key contacts with OpenRouter Claude Haiku

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow accepts a uploaded CSV/XLSX leads file, groups rows by organization, and deduplicates to one contact per company. If multiple named contacts exist, it calls OpenRouter (chat completions) to pick the most senior person, then exports a cleaned CSV plus a JSON cleanup report.

## How it works
1. Receives a leads file upload and a “Max Rows in Cleaned CSV” limit via an n8n Form trigger.
2. Extracts rows from the uploaded spreadsheet and groups them by organization, deduping repeated people/roles and marking entries as Named or Generic when no person name exists.
3. Limits processing to the first N organizations (based on your configured max rows) while a separate branch computes a full-file summary report.
4. Routes organizations with a single candidate contact directly to the output without using AI.
5. Sends organizations with multiple candidate contacts to OpenRouter to select the most senior contact, then matches the returned number back to the chosen row.
6. Merges the AI-selected and directly selected contacts into one dataset and converts it to a cleaned_leads.csv file.
7. Converts the summary metrics into a cleanup_report.json file.

## Setup
1. Create an OpenRouter API key and add it to n8n as an HTTP Header Auth credential (Authorization: Bearer YOUR_KEY) used by the OpenRouter request.
2. In the Configuration step, set the correct Excel sheet name (if using XLSX) and choose the OpenRouter model ID you want to use.
3. Upload a CSV/XLSX file that includes an organization/company column and (optionally) name and job title columns that match the workflow’s header detection logic (or adjust the header hints in the grouping code).

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
