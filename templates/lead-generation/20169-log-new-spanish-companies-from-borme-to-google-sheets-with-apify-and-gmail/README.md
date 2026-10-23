# 🎣 Log new Spanish companies from BORME to Google Sheets with Apify and Gmail

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Every weekday, add the companies incorporated in Spain on the previous business day to Google Sheets. Apify reads the official BORME gazette, n8n turns each incorporation into one row (name, province, purpose, address, capital, PDF link) and Gmail sends a short summary.

## How it works
1. Runs on a schedule at 09:00 Monday to Friday.
2. Sends the selected provinces and act types to the Apify BORME Corporate Acts Scraper actor and retrieves the resulting dataset for the most recent business day.
3. Extracts one structured row per company (company name, province, registry number, start of operations, corporate purpose, address, share capital and a link to the official BORME PDF) from the notice text. People named in the notice are not copied.
4. Appends the company rows to the Google Sheets spreadsheet and sheet you select.
5. Builds an HTML summary with counts per province and a preview list of companies.
6. Sends the summary email through Gmail to the configured recipient.

## Setup
1. Create an Apify API token, add it as an Apify credential in n8n (and on self-hosted n8n install the verified community node `@apify/n8n-nodes-apify`).
2. Connect Google Sheets credentials and select the target spreadsheet and sheet in the Google Sheets append step.
3. Create a sheet whose header row is exactly: date, province, companyName, registryNumber, actType, startOfOperations, corporatePurpose, address, capital, otherActs, bormeId, sourceUrl (the append step maps columns by name).
4. Connect Gmail in the e-mail step and set your own recipient address, or delete that step if you only want the sheet.
5. Update the provinces and actTypes values in the Settings step to match the regions and corporate acts you want to track.

## Requirements
- Apify account (the free plan includes monthly usage credit). Billed per corporate act returned plus a small start fee per run: https://apify.com/regdata/borme-corporate-acts-scraper?fpr=getregdata
- Google Sheets, and optionally Gmail for the summary e-mail
- Uses the verified Apify node: available on n8n Cloud; on self-hosted n8n install @apify/n8n-nodes-apify

## Customization
- provinces: ["MADRID", "BARCELONA"], or [] for all of Spain (300-450 incorporations a day, so raise the $1 cost cap in the Apify node to about $3)
- actTypes: ["Nombramientos"], ["Disolución"] or ["Ampliación de capital"] to track appointments, dissolutions or capital increases instead of new companies
- Send the rows to HubSpot, Pipedrive or Airtable instead of Google Sheets

## Additional info
Typical cost: Madrid alone has about 80-120 new companies per business day, so one run costs roughly $0.40-0.60 on your Apify account. The Apify node stops a run above $1. On Spanish public holidays BORME is not published and the workflow sends nothing.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
