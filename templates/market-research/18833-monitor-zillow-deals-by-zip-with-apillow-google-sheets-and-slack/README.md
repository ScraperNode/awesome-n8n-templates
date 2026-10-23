# 📊 Monitor Zillow deals by ZIP with APIllow, Google Sheets, and Slack

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to fetch for-sale listings for selected ZIP codes from the APIllow API, calculates each listing’s $/sqft against the ZIP’s median, appends new listings to Google Sheets without duplicates, and posts deal and error alerts to Slack.

## How it works
1. Runs every day at 8am on a schedule.
2. Submits a ZIP-code for-sale property search to the APIllow API and receives an asynchronous job ID.
3. Polls the APIllow results endpoint every 10 seconds until the job status is marked complete, sending an error message to Slack if an API call fails after retries.
4. Flattens the returned listings, calculates each property’s price per square foot, and computes the median $/sqft per ZIP from the same batch.
5. Reads existing rows from a Google Sheets “Deals” worksheet and removes any listings whose ZPID is already tracked.
6. Appends the remaining new listings (including $/sqft, ZIP median, and discount %) to Google Sheets.
7. Posts a Slack deal alert for any newly logged listing priced at or below the configured threshold of the ZIP median.

## Setup
1. Create an APIllow Header Auth credential with the header name `x-api-key` and your APIllow key value.
2. Add Google Sheets OAuth credentials, create a spreadsheet with a “Deals” sheet and matching columns (including a `zpid` column), and replace `YOUR_SHEET_ID` in both Google Sheets nodes.
3. Add Slack credentials, set the deal-alert channel in the deal message step, and set an error-alert channel in the error message step.
4. Update the ZIP codes, deal threshold, and max items in the workflow configuration values to match your monitoring preferences.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
