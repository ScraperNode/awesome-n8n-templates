# 🎣 Turn closed-won HubSpot deals into lookalike prospects with CompanyEnrich

> ⚡ **51 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This n8n template automates turning your Closed-Won HubSpot deals into lookalike prospects using the CompanyEnrich Similar Companies API.

Instead of manually guessing who looks like your best customers, this workflow takes your top-performing companies from HubSpot, finds highly similar companies and pushes the results into a Google Sheet ready for outreach or further enrichment.

It’s ideal for GTM, sales, and growth teams who want to scale what already works.

## Good to know
- This workflow uses company domains as seeds for lookalike generation. Make sure your HubSpot company records have valid domains.
- Lookalike results are query-based, meaning the same company can appear in different runs if it matches the input at that moment.
- The Google Sheet uses the domain column to avoid duplicates when appending or updating rows.
- Credit usage depends on the number of similar companies returned by the CompanyEnrich API.

## How it works
1. The Schedule Trigger runs the workflow on a defined interval (weekly by default).
2. HubSpot companies are fetched using the HubSpot Get Companies node.
3. A custom filter selects the top-performing companies (based on revenue percentile).
4. Company domains are extracted and passed into the CompanyEnrich Similar Companies API.
5. Similar companies are returned and split into individual rows.
6. The enriched company data is cleaned and normalized.
7. Results are appended or updated in a connected Google Sheet.

## How to use
- Connect your HubSpot app with company read access.
- Add your CompanyEnrich API key to the HTTP Request node.
- Connect your Google Sheets account and select a sheet with a domain column.
- Adjust the schedule or top-percentage filter if needed.
- Activate the workflow and let it run automatically.

## Requirements
- HubSpot app (Company read access)
- CompanyEnrich API key
- Google Sheets account
- n8n instance with HTTP and HubSpot nodes enabled

## Customising this workflow
- Change the Top_Percent value to control how many of your best customers are used as seeds.
- Modify the schedule interval to run daily, weekly, or on demand.
- Extend the workflow to push results into a CRM, enrichment pipeline, or outbound tool.
- Add additional filters (industry, location, employee size) before writing to Sheets.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, HubSpot, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
