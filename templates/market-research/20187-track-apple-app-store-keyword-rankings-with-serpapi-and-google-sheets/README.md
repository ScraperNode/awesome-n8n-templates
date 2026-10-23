# 📊 Track Apple App Store keyword rankings with SerpApi and Google Sheets

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily (or manually) to check Apple App Store search rankings for a configured keyword list using SerpApi, then appends each keyword’s rank, result count, group, and date to a Google Sheets tab for ongoing ASO tracking.

## How it works
1. Runs on a daily schedule or via a manual trigger for testing.
2. Builds a queue of keywords and settings (including SerpApi API keys, App Store app ID, locale, and Google Sheets IDs) from an in-workflow configuration.
3. Processes keywords one at a time and waits 1 second between requests to reduce the chance of hitting rate limits.
4. Queries the SerpApi Apple App Store Search API for each keyword and requests up to the configured number of results.
5. Parses the SerpApi organic results to find your app’s position by matching the configured App Store ID, or records a value like ">N" (or "ERROR") when not found or when the API returns an error.
6. Appends one row per keyword to Google Sheets with keyword, group, position, apps (results count), and date.

## Setup
1. Create a SerpApi account and add one or more SerpApi API keys in the workflow configuration (replacing the placeholder values) and enable at least one keyword group.
2. Set your numeric Apple App Store app ID, storefront country/language, and desired result limit in the configuration.
3. Create a Google Sheets spreadsheet with a tab named `position` and columns `keyword`, `group`, `position`, `apps`, and `date`, then paste the spreadsheet ID into the configuration.
4. Connect your Google Sheets OAuth2 credentials in the Google Sheets append step.
5. Run the workflow once with the manual trigger to confirm rows append correctly, then enable the daily schedule if desired.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
