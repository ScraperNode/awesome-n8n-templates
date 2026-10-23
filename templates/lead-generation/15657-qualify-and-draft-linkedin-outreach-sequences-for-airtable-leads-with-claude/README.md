# 🎣 Qualify and draft LinkedIn outreach sequences for Airtable leads with Claude

> ⚡ **19 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

&gt; ⚠️ **Self-hosted only** — This template uses a community node (`@mendable/n8n-nodes-firecrawl`) and cannot run on n8n Cloud.

## Who it's for

This workflow is for B2B sales teams and growth operators who want to automatically enrich, qualify, and write personalized LinkedIn outreach messages for a list of leads stored in Airtable — without touching the workflow logic to change targeting criteria.

## How it works

1. A manual trigger sets the Airtable base and table IDs, then fetches the AI prompt used for qualification.
2. Leads are retrieved from Airtable and fed into a batch loop, one at a time.
3. For each lead, Apify scrapes their LinkedIn profile. Unavailable profiles are flagged in Airtable and skipped.
4. If a company LinkedIn URL exists, Apify fetches company info. If a website URL is present, Firecrawl scrapes the homepage and a code node cleans the resulting markdown.
5. LinkedIn posts are fetched via Apify, sorted, and consolidated with profile fields into a structured dataset.
6. A Claude AI agent evaluates the lead against the qualification prompt stored in Airtable. Unqualified leads are flagged and the loop continues.
7. For qualified leads, a second Claude AI agent drafts a three-part personalized outreach message sequence, which is saved back to Airtable.

## How to set up

- [ ] Connect your Airtable credentials and set the correct Base ID and Table ID in the **Set Airtable Base and Table** node
- [ ] Create Airtable tables for prompts, leads, and message storage with the expected field names
- [ ] Add your Apify API key and configure the three actor calls (LinkedIn profile, company info, posts)
- [ ] Add your Firecrawl API key for the **Scrape Company Homepage** node
- [ ] Add Anthropic API credentials for both Claude AI agent nodes
- [ ] Review and update the structured output schemas in both **Structured Output Parser** nodes

## Requirements

- Airtable account with leads table and prompt table
- Apify account (three actors: LinkedIn profile scraper, company scraper, post scraper)
- Firecrawl account
- Anthropic (Claude) API access
- n8n self-hosted instance

## How to customize

- Update the qualification and message-drafting prompts directly in Airtable — no workflow changes needed to adjust targeting logic or tone.
- Add extra enrichment steps (e.g., email finder, firmographic APIs) between the company URL check and the LinkedIn post fetch.
- Swap the manual trigger for a scheduled trigger to process new leads automatically on a daily or weekly cadence.

## 🔗 Nodes Used

Airtable, HTTP Request, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
