# 🎣 Automate JotForm submissions to Google Sheets

> ⚡ **55 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow is a simple example showing how to fetch submissions from JotForm using its API and then use that data in another service — in this case, Google Sheets.

## It demonstrates the basics of:

- Connecting to an API

- Parsing the response

- Looping through results

- Sending processed data to another app

## How It Works

1. Manual Trigger
Starts the workflow manually.
(Can be replaced with a schedule or webhook trigger for automation.)

2. HTTP Request – Get Submissions from JotForm
Fetches all submissions for a specific form from the JotForm API.

3. Code Node – Parse API Response
Converts the API’s JSON response into individual submission items.

4. Split In Batches – Loop Through Each Submission
Processes submissions one at a time to avoid hitting API rate limits.

5. Wait Node
Adds a short delay before sending data to the next API.

6. Google Sheets – Append Submission Data
Sends the selected fields from each JotForm submission into a Google Sheet:



## Adaptations
You can modify this workflow to:

Send JotForm results to CRM systems like HubSpot or Pipedrive

Trigger email or Slack notifications for each new submission

Store submissions in a database for reporting and analytics

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
