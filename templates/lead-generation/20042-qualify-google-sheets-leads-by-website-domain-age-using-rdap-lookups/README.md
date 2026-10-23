# 🎣 Qualify Google Sheets leads by website domain age using RDAP lookups

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow reads lead rows from Google Sheets, extracts each website’s registrable domain, and uses rdap.org RDAP lookups to calculate domain registration age, then writes the results back to the same sheet as domain_created, years_registered, age_source, and checked_at.

## How it works
1. Runs manually and loads all rows from the specified Google Sheets tab.
2. Extracts a registrable domain from each website value, skipping rows without a website and marking shared-host or IP-based websites as unknown without calling RDAP.
3. Processes rows one at a time, waiting a configurable interval to stay within rdap.org rate limits.
4. Calls rdap.org to retrieve the RDAP record for each domain and extracts the registration date to calculate the number of full years since registration.
5. Retries RDAP requests on 429 and 5xx responses (or unreachable errors) with exponential backoff up to the configured maximum, otherwise records unknown with a reason.
6. Updates the original Google Sheets rows (matched by row_number) with domain_created, years_registered, age_source, and checked_at.

## Setup
1. Create a Google Sheets OAuth2 credential and select it in the Google Sheets nodes.
2. In your Google Sheet tab, ensure you have a website column header that matches the workflow setting and add the output headers domain_created, years_registered, age_source, and checked_at.
3. In the Settings step, fill in your Google Sheet document ID, confirm the tab name and website column header, and optionally adjust rdap_pace_seconds and max_retries to fit your rate-limit and retry preferences.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
