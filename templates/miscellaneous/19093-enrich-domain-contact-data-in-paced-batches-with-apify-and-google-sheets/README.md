# 🔧 Enrich domain contact data in paced batches with Apify and Google Sheets

> ⚡ **0 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow runs every Monday, reads a Google Sheets list of domains, enriches them in paced 10-domain batches using an Apify actor to extract contact details, and appends the results back to Google Sheets with overall email and phone hit-rate metrics.

## How it works
1. Runs every Monday at 08:00 on a schedule.
2. Reads a list of domains from Google Sheets.
3. Processes the domains in batches of 10 and sends each batch to the Apify “contact-details-scraper” actor to collect emails, phone numbers, and LinkedIn links.
4. Normalizes Apify results to keep a single consolidated row per domain and pauses for 30 seconds before starting the next batch.
5. After all batches finish, aggregates the full run and calculates overall email and phone coverage percentages.
6. Appends the enriched domain rows, including run date and hit-rate fields, to a target Google Sheets sheet.

## Setup
1. Add Google Sheets credentials and set the source spreadsheet/sheet for reading domains and the destination spreadsheet/sheet for appending the enriched results.
2. Ensure your source sheet has a column named `domain` containing one domain (or URL) per row.
3. Add an Apify credential, confirm the actor ID `dami_studio~contact-details-scraper` is available to your account, and adjust the max charge limit if needed.
4. (Optional) If you want notifications, connect Slack credentials and set the channel, and/or connect Gmail credentials and set the recipient email address.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
