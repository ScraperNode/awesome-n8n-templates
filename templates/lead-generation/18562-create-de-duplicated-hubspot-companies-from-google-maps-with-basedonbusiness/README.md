# 🎣 Create de-duplicated HubSpot companies from Google Maps with BasedOnBusiness

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects Google Maps business leads via BasedOnBusiness based on a form submission, filters for established companies with websites, and creates new HubSpot company records while skipping any domain that already exists in HubSpot to prevent duplicates.

## How it works
1. Receives search criteria from an n8n form submission (category, city, country code, lead count, and minimum reviews).
2. Starts a BasedOnBusiness scrape job for the Google Maps query and polls BasedOnBusiness every 15 seconds until the job finishes or fails.
3. Fetches the scrape results from BasedOnBusiness and splits them into individual business items.
4. Filters out businesses that are permanently closed, missing a website, or below the minimum review count threshold.
5. Normalizes each business website into a bare domain and prepares the HubSpot company fields (name, domain, website, phone, address, city, country, and a Google Maps facts description).
6. For each company, searches HubSpot by domain and creates a new HubSpot company only when no existing match is found.

## Setup
1. Create a BasedOnBusiness API key with `scrapes:read` and `scrapes:write` scopes and add it to an HTTP Bearer Auth credential used by the BasedOnBusiness HTTP requests.
2. In HubSpot, go to Settings > Integrations > Service Keys and create a service key with the `crm.objects.companies.read` and `crm.objects.companies.write` scopes. In n8n, paste it into a HubSpot App Token credential; both HubSpot nodes use that one credential.
3. Review the form defaults (lead count and minimum reviews) and adjust any filter thresholds to match your qualification criteria before activating the workflow.

## Requirements
- A BasedOnBusiness account and API key with the `scrapes:read` and `scrapes:write` scopes — https://www.basedonb.com/ (API reference and setup guide: https://www.basedonb.com/en/docs)
- A HubSpot account. The free CRM plan is enough.

## Customization
- Raise the Minimum reviews form field to keep only established businesses, or set it to 0 to take everything that has a website.
- Swap the Skip Existing branch for a HubSpot Company > Update node if you would rather refresh known records than leave them alone.
- Map more Google Maps fields into Create Company in HubSpot, for example the rating as a custom property.

## Additional info
A search costs BasedOnBusiness credits equal to the Number of leads you request, not the number of companies that survive the filter or get created in HubSpot. Businesses with no website are dropped on purpose: the domain is what HubSpot deduplicates on.

## 🔗 Nodes Used

HTTP Request, HubSpot, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
