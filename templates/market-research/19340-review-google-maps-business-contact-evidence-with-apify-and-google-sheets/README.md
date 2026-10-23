# 📊 Review Google Maps business contact evidence with Apify and Google Sheets

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Give a local agency a reviewable list of businesses from a Google Maps search. Keep public phone numbers, website links and source evidence together, with clear reasons for manual review.

## How it works
1. One bounded Apify run supplies source records, coverage and billing evidence.
2. The workflow checks the complete dataset before Google Sheets delivery.
3. Stable source keys update existing rows on repeat. Unobserved earlier rows remain, so the Sheet is a current review register, not a complete history.
4. COMPLETE describes the declared source window; CAPPED remains a labelled sample.
5. Source failures stop delivery. Verified empty results create no data rows.
6. Listing contact evidence and website fetch results remain separate. An uncertain or failed website check becomes MANUALLY_VERIFY_WEBSITE, never proof that a business needs a new site. NO_SUPPORTED_WEBSITE_PITCH means the source does not support that offer. Public phone availability does not establish permission to contact someone.

## Setup
1. Import the workflow into an empty n8n canvas. Use your own Apify account and a Header Auth credential on all five HTTP nodes.
2. Connect Google Sheets OAuth2 on Upsert review register.
3. Create the supplied tab and import the exact [CSV header](https://raw.githubusercontent.com/bulatovicluka1989-rgb/luminar-apify-examples/main/actors/google-maps-contact-website-opportunity-leads/n8n-google-maps-review/sheet-header.csv).
4. Enter its spreadsheet ID in Review settings and run manually.

## Requirements
- The template is free; Apify usage is paid. The default $1 cap is a maximum, not a quoted price. Repeated results can incur charges again. Only Sheet delivery retries automatically.

## Customization
- Change the search, location and country. Up to 20 businesses are supported. The maximum is an upper limit, not a guaranteed result count. Keep settings stable and run sequentially to update the same scope. [Setup details](https://raw.githubusercontent.com/bulatovicluka1989-rgb/luminar-apify-examples/main/actors/google-maps-contact-website-opportunity-leads/n8n-google-maps-review/README.md).

## Additional info
![Workflow canvas](https://raw.githubusercontent.com/bulatovicluka1989-rgb/luminar-apify-examples/main/actors/google-maps-contact-website-opportunity-leads/n8n-google-maps-review/workflow.png)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
