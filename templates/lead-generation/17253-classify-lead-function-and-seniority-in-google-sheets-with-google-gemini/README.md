# 🎣 Classify lead function and seniority in Google Sheets with Google Gemini

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow reads contacts from Google Sheets, uses Google Gemini to classify each contact’s job function and seniority from their job title and company name, and writes the Function, Seniority, and Confidence Score back to the same sheet.

## How it works
1. Starts manually when you click Execute workflow.
2. Reads rows from a specified Google Sheets worksheet and maps your column headers to the workflow’s expected fields.
3. Keeps only contacts that have a Job Title and no existing Seniority value.
4. Normalizes job titles and company names, deduplicates identical Job Title + Company pairs, and batches the unique combinations to save LLM tokens.
5. Waits between batches to respect rate limits, then sends each batch to Google Gemini to return Function, Seniority, and a confidence score for every original row ID.
6. Parses Gemini’s JSON response and updates the matching rows in Google Sheets with Function, Seniority, and Confidence Score.

## Setup
1. Add Google Sheets OAuth credentials and set the Google Document ID and Sheet ID in the Global Settings values.
2. Add a Google Gemini (PaLM) API credential for the Google Gemini node.
3. Ensure your sheet has columns for #, Job Title, Company Name (recommended), Function, Seniority, and Confidence Score, and update the column name settings if your headers differ.
4. Adjust Batch Size and Wait Time in Global Settings to control Gemini batching and throttling before activating the workflow.

## Requirements
- Google Sheet
- Gemini API Key

## Customization
- Update column names in the **Global Settings** node if your sheet uses different headers.
- Change the **Batch Size** in the **Global Settings** node to control how many contacts are sent to Gemini at once.
- Change the **Wait Time** in the **Global Settings** node to control how many seconds the workflow will wait before hitting the Gemini API again.

## 🔗 Nodes Used

Google Sheets, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
