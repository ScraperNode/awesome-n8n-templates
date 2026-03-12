# 🎣 Automatically enrich companies in your HubSpot, Salesforce or Close CRM

> ⚡ **47 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This n8n template automatically enriches company records in your CRM using CompanyEnrich and keeps your data up to date without manual work.

This workflow is ideal for RevOps, Sales Ops, and GTM teams who want cleaner CRM data for segmentation, scoring, and outbound workflows.

## Good to know
- Company enrichment is performed by domain, so a valid company domain is required.
- The template includes HubSpot, Salesforce, and Close CRM paths. Disable the CRM nodes you don’t use and remove their connection into the Extract Domain node.
- The workflow processes companies in batches to avoid rate limits.
- Enrichment is only applied when the API request is successful.

## How it works
1. A Schedule Trigger runs the workflow on a recurring basis (weekly by default).
2. Extracts the domain seeds of the companies for CompanyEnrich enrichment API. Pulls companies from:
- HubSpot: accounts created/updated within the time window (and can fetch full records if needed)
- Salesforce: accounts created/updated within the time window (and can fetch full records if needed)
- Close CRM: leads created within the time window via the Close search endpoint
3. The company domain is safely extracted, even if stored in different fields.
4. Each domain is sent to the CompanyEnrich enrichment API.
5. The workflow checks whether the enrichment request was successful.
6. Enriched data is mapped into HubSpot-compatible fields.
7. The corresponding HubSpot company record is updated.
8. The workflow continues looping until all companies are processed.


## How to use
1. HubSpot
- Create a HubSpot private app with Company read + write scopes.
- Add your HubSpot credentials to the HubSpot nodes (get companies + update company).

2. Salesforce
- Connect your Salesforce account on all Salesforce nodes used in the workflow.

3. Close CRM
- In the Close CRM node, create a Basic Auth credential.
- Put your Close CRM API key in the username field.
- Append a colon: to the end of the API key.
- Leave the password field empty. ⚠️ Important: If you don’t add: and keep password blank, authentication will fail.
4. Add your CompanyEnrich API key as an HTTP credential.
5. Adjust the schedule if you want the workflow to run daily or on-demand.
6. Make sure your HubSpot companies have a domain set.
7. Once active, the workflow will keep your company data enriched automatically.

## Requirements
1. CompanyEnrich API key
2. n8n instance with HTTP Request node enabled
3. At least one CRM connection:
- HubSpot private app token, or
- Salesforce OAuth, or
- Close CRM API key (Basic Auth with : rule)

## Customising this workflow
- Change the schedule to run more frequently or trigger via webhook.
- Add filters to enrich only specific company segments or pipelines.
- Map additional enriched fields to custom HubSpot properties.

## 🔗 Nodes Used

Function, HTTP Request, HubSpot, Salesforce, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
