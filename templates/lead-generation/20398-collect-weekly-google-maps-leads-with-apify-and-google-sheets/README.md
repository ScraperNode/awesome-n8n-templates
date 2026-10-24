# 🎣 Collect weekly Google Maps leads with Apify and Google Sheets

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs every Monday to fetch new Google Maps business leads via an Apify actor, filters them using an AI-based target description, and appends the matched leads to a Google Sheets worksheet.

## How it works
1. Runs every Monday at 08:00 on a schedule.
2. Sets the Google Maps search query, location, ideal-customer description, and maximum number of leads to retrieve.
3. Calls the Apify actor (scoutforge/google-maps-leads) to collect only new leads that match the provided target description.
4. Appends the returned lead records to a selected Google Sheets spreadsheet and worksheet.

## Setup
1. Add an Apify token as an HTTP Header Auth credential with header name `Authorization` and value `Bearer YOUR_APIFY_TOKEN_HERE`.
2. Update the search query, location, target description, and max leads in the configuration step to match your prospecting needs.
3. Connect your Google Sheets account, then select the target spreadsheet and sheet where leads should be appended.

## Requirements
- Apify account (free accounts get 10 leads per run)
- Google account with Google Sheets

## Customization
- Add several search queries or change the schedule
- Send leads to Airtable or a CRM instead of Google Sheets
- Add an email outreach step after the leads are saved

## Additional info
The actor filters businesses with an AI relevance check before charging, so you only pay for leads that match your target description. Pricing is per lead delivered ($0.035). Start with maxLeads set to 10 to test the workflow on a free Apify account.

Actor page: https://apify.com/scoutforge/google-maps-leads

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
