# 🎣 Enrich Airtable company phones from website, LinkedIn, Google Maps, and Claude

> ⚡ **30 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

⚠️ **Self-hosted only** — This template uses a community node (Firecrawl) and cannot run on n8n Cloud.

&gt; 📸 Add a workflow screenshot at the top of this listing.

## Who it's for

This workflow is for sales teams, lead generation agencies, and growth operators who maintain a company database in Airtable and need to automatically enrich records with phone numbers from multiple web sources.

## How it works

1. A manual trigger fetches all Airtable records where the phone number field is empty.
2. Records are processed one by one through a loop.
3. Each company's website is scraped using Firecrawl, and the raw markdown is cleaned with a custom code node.
4. A Claude Sonnet AI agent analyzes the cleaned content and attempts to extract a phone number using a structured output parser.
5. If the AI finds no phone, the workflow falls back to an Apify LinkedIn scraper, first checking whether the company profile exists.
6. If LinkedIn also yields nothing, a second fallback calls an Apify Google Maps scraper to search by company name and location.
7. Whichever source returns a phone number, a code node normalizes the data and writes it back to Airtable. If no source finds a phone, the record is marked as unavailable.

## How to set up

- [ ] Connect your Airtable credentials and set the correct base and table in the **Search Airtable Records**, **Update Airtable Phone Found**, and **Update Airtable Phone Not Found** nodes
- [ ] Add your Firecrawl API key to the **Scrape Company Website** node
- [ ] Add your Anthropic API key to the **Claude Sonnet Model** sub-node inside **AI Phone Finder Agent**
- [ ] Add your Apify API token to both the **Fetch LinkedIn Phone via Apify** and **Fetch Google Maps Phone via Apify** nodes
- [ ] Review the **Clean Scraped Markdown** and **Refine and Merge Phone Data** code nodes to ensure field names match your Airtable schema

## Requirements

- Airtable account with a company database
- Firecrawl API key
- Anthropic API key (Claude Sonnet)
- Apify account with access to the LinkedIn Company Scraper and Google Maps Scraper actors

## How to customize

- Swap out either fallback source (LinkedIn or Google Maps) by bypassing the corresponding branch if you only have access to one Apify actor.
- Tune the AI system prompt inside the Claude Sonnet model to extract other contact details such as email addresses or physical addresses in addition to phone numbers.
- Replace the manual trigger with a scheduled trigger to run the enrichment automatically on a daily or weekly basis.

## 🔗 Nodes Used

Airtable, HTTP Request, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
