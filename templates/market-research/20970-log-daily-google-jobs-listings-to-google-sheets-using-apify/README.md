# 📊 Log daily Google Jobs listings to Google Sheets using Apify

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every morning to search Google Jobs via Apify for a list of job queries and appends the results as dated rows in a Google Sheets spreadsheet.

## How it works
1. Runs every day at 07:00 on a schedule.
2. Defines the job search queries plus the target country and location to search.
3. Uses Apify (hirepulse/google-jobs-scraper actor) to scrape Google Jobs for each query and return the dataset results.
4. Filters the results to keep only records that include a job title.
5. Formats each job into a single Google Sheets row, adding today’s date and fields like company, location, salary, posting age, source, and apply URL.
6. Appends the formatted rows to the selected Google Sheets worksheet.

## Setup
1. Add an Apify connection/credential and ensure you have access to the hirepulse/google-jobs-scraper actor (paid Apify plan may be required for full results).
2. Add a Google Sheets OAuth connection and select the target spreadsheet (document ID) and worksheet (sheet name) to append rows to.
3. Update the queries, country code, and location values to match the roles and region you want to track.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
