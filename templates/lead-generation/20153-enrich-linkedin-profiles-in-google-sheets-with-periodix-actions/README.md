# 🎣 Enrich LinkedIn profiles in Google Sheets with Periodix Actions

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Paste LinkedIn profile URLs into Google Sheets and get full profiles: name, headline, location, About, work history with dates, education, skills, languages, certifications, open profile, premium, followers, and connections. 1,000 profiles for $10 a month: 18x less than Clay's and about half of Apify's 

## How it works
1. Manually starts the workflow to begin an enrichment run.
2. Reads LinkedIn profile URLs from the Input tab in Google Sheets and reads existing results from the Enriched tab.
3. Builds a deduplicated queue by skipping profiles that are already enriched and removing duplicates from the input list.
4. Processes the queue in batches and uses Periodix Actions to fetch each LinkedIn profile with profile-view notifications disabled.
5. Normalizes the returned profile data into flat columns such as current role, past roles, education, skills, languages, follower count, and enrichment status.
6. Appends the normalized profile row to the Enriched tab in Google Sheets and continues until all queued profiles are processed.

## Setup
1. Create a Periodix Actions account at actions.periodix.net (free trial available), install the verified Periodix Actions node (works on n8n Cloud and self-hosted), and select your connected LinkedIn profile in the Get Profile node.
2. Connect your Google Sheets account via OAuth2 and set your Sheet ID in all three Google Sheets nodes.
3. Create two tabs: Input with a linkedin_url column, and Enriched with these headers: linkedin_url, public_identifier, provider_id, first_name, last_name, headline, location, current_title, current_company, current_role_since, past_roles, education, skills, languages, summary, open_profile, premium, network_distance, followers, status, enriched_at.
4. Add LinkedIn profile URLs to the Input tab and run the workflow.

## Requirements
- A Periodix Actions account with a connected LinkedIn profile (free trial available)
- A Google account with Sheets access
- n8n Cloud or self-hosted

## Customization
- Replace the last node with HubSpot, Notion, or any CRM node to push enriched profiles straight to your pipeline
- Add an AI step after Normalize Profile to score each person against your ICP or draft a personalized opener
- Switch the Manual Trigger to a Schedule Trigger to enrich large lists over several days: Get Profile handles up to 100 profiles per day per connected LinkedIn profile, and reruns skip anyone already enriched
- Use provider_id from the output to send connection requests or messages with the same Periodix Actions node

## Additional info
Periodix Actions connects through LinkedIn's own infrastructure, not a browser scraper: no cookies, no CAPTCHA, no scraper fingerprint. Unlike Apify actors, it is one maintained API with the same output fields for search, profiles, companies, and engagement, so your n8n mappings keep working when LinkedIn changes. 
Built on the infrastructure behind Periodix: 0 LinkedIn accounts lost across 25,000 connected profiles in the last 24 months.
Pricing starts at $10/month per connected LinkedIn profile with 1,000 results included, and every next 2,000 results for just $10, or $49/month unlimited. 
Each enriched profile counts as one result.
Periodix is rated 4.9/5 on G2. 
Start here: https://actions.periodix.net/dashboard/register?utm_source=n8n&utm_medium=template&utm_campaign=enrich-profiles

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
