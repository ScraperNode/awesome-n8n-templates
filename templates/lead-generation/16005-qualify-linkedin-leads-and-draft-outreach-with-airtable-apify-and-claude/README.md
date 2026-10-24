# 🎣 Qualify LinkedIn leads and draft outreach with Airtable, Apify and Claude

> ⚡ **14 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow pulls unprocessed leads from Airtable, enriches them with LinkedIn profile, company, website, and post data via Apify and Firecrawl, qualifies each lead with Anthropic Claude, and drafts a 3-step outreach sequence plus phone enrichment via Lusha back into Airtable.

## How it works
1. Runs manually when you click “Execute workflow” and sets the Airtable base/table to use before loading AI prompts from an Airtable “Prompt” table.
2. Searches Airtable for leads with empty “Réponse” and “Match” fields and processes them one by one.
3. For each lead, calls Apify to fetch LinkedIn profile details and marks the lead as “Likedin pas dispo” in Airtable if the profile is missing.
4. If available, optionally fetches the company’s LinkedIn data via Apify and, when a company website exists, scrapes the homepage with Firecrawl and cleans the returned markdown.
5. Fetches recent LinkedIn posts via Apify, selects a recent personal post to “like,” and compiles the lead’s profile, education, experience, company info, posts, and homepage content into a structured dataset.
6. Sends the dataset to an Anthropic Claude agent to decide whether the lead matches the qualification prompt, then updates Airtable with “Match=False” for unqualified leads.
7. For qualified leads, fetches a phone number from Lusha, generates three personalized outreach messages with a second Anthropic Claude agent, and saves the messages, phone number, and “Match=True” back to Airtable.

## Setup
1. Add Airtable personal access token credentials and update the Base ID and Table ID values used for your leads table (plus ensure the workflow can read the “Prompt” table).
2. Create or verify Airtable fields referenced by the workflow (including LinkedIn profile, Company name, Job title, Sub industry, Match, Réponse, Post à like, Premier message, Deuxième message, Troisième message, and Phone number).
3. Add Apify API credentials and ensure the referenced Apify actors are available for LinkedIn profile scraping, company scraping, and post scraping.
4. Add a Firecrawl API key for homepage scraping.
5. Add an Anthropic API key and confirm the Airtable prompts include entries for Agent = “Qualification” and Agent = “Rédaction” that return structured JSON outputs.
6. Add Lusha API credentials (header auth) and confirm your account has access to phone reveal for LinkedIn URLs.

## 🔗 Nodes Used

Airtable, HTTP Request, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
