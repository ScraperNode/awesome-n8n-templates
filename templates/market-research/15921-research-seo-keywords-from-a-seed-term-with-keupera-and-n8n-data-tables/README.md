# 📊 Research SEO keywords from a seed term with Keupera and n8n data tables

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects a seed keyword via an n8n form, triggers Keupera keyword research, polls until the job completes, and stores the resulting keyword list (intent, volume, difficulty, CPC, and more) in an n8n Data Table (exchangeable).

## How it works
1. Receives a seed keyword from an n8n form submission.
2. Sends the keyword, website ID, language, and country to the Keupera Keyword Research API to start an asynchronous research job.
3. Waits briefly and then polls the Keupera job status endpoint until the research status is marked as completed.
4. Extracts and splits the returned keyword results into individual keyword items.
5. Creates an n8n Data Table named for the seed keyword and Keupera job ID.
6. Inserts each keyword result as a row in the Data Table, including term, intent, volume, language, difficulty, opportunity, funnel stage, keyword group, and CPC.

## Setup
1. Create a Keupera account and copy your API key and Website ID from the Keupera dashboard.
2. Update the workflow’s Keupera values (API key in the HTTP Authorization headers and the website ID value used when building the request body).
3. Set the desired language and country values used for the Keupera research request.
4. Ensure your n8n instance has Data Tables enabled (or replace the Data Table steps with another destination such as Google Sheets or Notion).

## Requirements
- You need a Keupera API key.

## Customization
- You can choose where to save the keyword research results.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
