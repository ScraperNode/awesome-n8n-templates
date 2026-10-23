# 🎣 Enrich existing HubSpot company records with Veridion

> ⚡ **6 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow manually enriches existing HubSpot companies using Veridion, skipping records already marked as enriched and updating HubSpot with matched company details like industry, location, and key firmographics.

## How it works
1. Runs when you manually execute the workflow.
2. Fetches up to 100 companies from HubSpot and includes key properties such as name, domain, phone, and the custom veridion_enriched flag.
3. Stops with a clear error if the veridion_enriched property is missing, otherwise filters to only companies not yet marked as enriched.
4. Retrieves full details for each selected HubSpot company and sends its name, domain/website, and phone to Veridion for enrichment.
5. Checks whether Veridion returns a match and skips companies without a match.
6. Maps key Veridion fields and updates the HubSpot company record with enriched details and sets veridion_enriched to true.

## Setup
1. Create the HubSpot company custom properties veridion_enriched (boolean/checkbox) and veridion_industry (single-line text).
2. Add HubSpot App Token credentials and ensure the HubSpot company list request includes veridion_enriched, veridion_industry, name, domain/website, phone, and hs_object_id.
3. Add Veridion API credentials and confirm your HubSpot companies have at least a name plus a domain/website or phone for best matching.

## 🔗 Nodes Used

HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
