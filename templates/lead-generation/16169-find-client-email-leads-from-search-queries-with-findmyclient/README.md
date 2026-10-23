# 🎣 Find client email leads from search queries with FindMyClient

> ⚡ **79 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow runs a FindMyClient search for a keyword, polls for completion, and extracts any returned email addresses. If emails are found, it splits them into individual items for optional saving to Google Sheets and sending via Gmail.

## How it works
1. Starts when you manually execute the workflow in n8n.
2. Sets a search query and sends it to the FindMyClient API to start a search job.
3. Captures the returned job ID, then repeatedly calls the FindMyClient result endpoint with a 30-second wait between checks until the job status is completed.
4. Extracts the email list from the completed result payload.
5. Stops with an error if no emails are returned, or splits the emails into one item per email address.
6. Optionally saves each email to Google Sheets and/or sends it by Gmail (both steps are currently disabled in the template).

## Setup
1. Replace the FindMyClient API token value in the HTTP request headers with your own.
2. Update the search keyword in the query field to match what you want to look up.
3. If you enable the optional outputs, add Google Sheets credentials and set the target spreadsheet details, and add Gmail credentials and configure the recipient/message settings.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
