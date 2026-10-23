# 👥 Add new job postings from company career pages to Google Sheets with Apify

> ⚡ **0 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow runs every morning, uses Apify to fetch newly published job postings from specified company career pages, formats each job into a spreadsheet-friendly row, and appends or updates matching records in a Google Sheets tab using a stable jobId key.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Uses Apify (the careers-jobs Actor) to scrape job postings for the configured companies and filters results by keywords and other options, returning only new postings.
3. Transforms each job into a normalized row (company, title, location, workplace type, salary string, posted date, URL) and generates a unique jobId.
4. Appends new rows or updates existing rows in Google Sheets in the “Jobs” tab, matching records by jobId.

## Setup
1. Add an Apify API token credential and ensure the Apify community node (@apify/n8n-nodes-apify) is installed in your n8n instance.
2. Add a Google Sheets OAuth2 credential, then set your target spreadsheet ID and ensure it has a sheet tab named “Jobs”.
3. Update the Apify Actor input JSON to your company list and filters (for example titleKeywords, locations, remoteOnly, and maxResults) and keep jobId as a unique key column in the sheet.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
