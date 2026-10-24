# 🎣 Qualify LinkedIn leads and draft multi-step outreach with Airtable, Apify and Claude

> ⚡ **15 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow pulls unprocessed leads from Airtable, enriches them with LinkedIn profile, company, and post data via Apify, optionally scrapes the company website with Firecrawl, then uses Anthropic Claude to qualify leads and draft multi-step LinkedIn outreach messages, saving results back to Airtable.

## How it works
1. Runs when you manually execute the workflow.
2. Reads qualification and writing prompts from Airtable, then searches Airtable for leads where the “Réponse” and “Match” fields are empty.
3. Iterates through each lead and uses Apify to fetch LinkedIn profile details, marking the Airtable record as “Likedin pas dispo” when the profile cannot be retrieved.
4. For available profiles, uses Apify to fetch company details when a company LinkedIn URL exists and, if a website is available, uses Firecrawl to scrape the homepage and clean the returned markdown.
5. Uses Apify to fetch recent LinkedIn posts for the lead and selects a relevant recent personal post URL to include in the enrichment dataset.
6. Sends the consolidated lead, company, homepage, and post data to Anthropic Claude to decide whether the lead matches the qualification criteria, marking non-matching leads as “False” in Airtable.
7. For qualified leads, enriches the record with Lusha email data, uses Anthropic Claude to draft three outreach messages, and updates Airtable with the messages, selected post-to-like URL, email address, and “Match” set to “True”.

## Setup
1. Create an Airtable personal access token connection and update the Base ID and Table ID used to read leads and write back match status and drafted messages.
2. Ensure Airtable contains a “Prompt” table (ID: tbl79RXFmWNAuHbEL) with entries for Agent = “Qualification” and Agent = “Rédaction”, plus the lead fields referenced in the workflow (including “LinkedIn profile”, “Match”, and “Réponse”).
3. Add Apify API credentials and confirm the Apify actors used for LinkedIn profile details, company details, and posts are accessible from your Apify account.
4. Add a Firecrawl API key for homepage scraping.
5. Add an Anthropic API key for the two Claude agents and keep the structured output schemas aligned with the expected fields (match boolean and message_1/message_2/message_3 objects).
6. Add a Lusha API key (HTTP header auth) for the email enrichment request and confirm your account allows email reveal for LinkedIn URLs.

## 🔗 Nodes Used

Airtable, HTTP Request, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
