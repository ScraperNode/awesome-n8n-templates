# 📊 Track new UK government tenders to Google Sheets with Slack alerts

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/JKZzNF-5Ksw

This workflow runs on a schedule to fetch procurement notices from the UK Contracts Finder API, filters for active non-award tenders, stores new items in Google Sheets, and posts a Slack message summarizing any newly detected tenders.

## How it works
1. Runs on a scheduled trigger.
2. Requests the latest notices from the UK Contracts Finder (contractsfinder.service.gov.uk) OCDS Search endpoint.
3. Splits the response into individual tender items and normalizes key fields such as title, buyer, value, deadline, location, and notice URL.
4. Filters the items to keep only tenders that are marked as active and not tagged as awards.
5. Checks Google Sheets for an existing row with the same tender ID and keeps only tenders that do not already exist in the sheet.
6. Appends the new tenders to Google Sheets, aggregates them into a single list, generates a formatted summary, and posts it to a Slack channel.

## Setup
1. Create or select a Google Sheets spreadsheet with columns matching the workflow fields (at minimum an `id` column used for de-duplication).
2. Add a Google Service Account credential in n8n and share the target spreadsheet with the service account email.
3. Add a Slack OAuth credential in n8n and set the target channel for the message.
4. Update the Google Sheets document ID and sheet tab, the Slack channel, and the schedule interval to match your environment and desired run frequency.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
