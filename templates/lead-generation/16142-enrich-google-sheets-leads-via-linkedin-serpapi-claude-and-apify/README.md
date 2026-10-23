# 🎣 Enrich Google Sheets leads via LinkedIn, SerpAPI, Claude and Apify

> ⚡ **45 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow enriches leads from Google Sheets by finding and validating LinkedIn profile URLs with SerpAPI and Anthropic, then scraping matched profiles with Apify to extract a relevant company and discover its website domain via SerpAPI, saving results back to Google Sheets.

## How it works
1. Starts manually and reads lead rows from Google Sheets for LinkedIn enrichment.
2. Searches Google via SerpAPI for likely LinkedIn results, filters out unwanted domains/file types, and keeps the best candidates.
3. Uses Anthropic to validate the best match (LinkedIn profile or company website) from the search results and writes the selected URL, confidence, and status back to Google Sheets.
4. Runs a second search pass for selected rows using SerpAPI with the lead’s employer name included, validates again with Anthropic, and updates Google Sheets.
5. Reads rows marked as having a LinkedIn URL and processes them in batches with a wait to reduce rate-limit issues.
6. Scrapes each LinkedIn profile with Apify to collect emails and work history, selects a relevant property-management-related company, and then uses SerpAPI to find and extract the company’s website domain.
7. Updates Google Sheets with the chosen company, job title, LinkedIn details, extracted domain, and flags indicating whether to proceed to downstream email-finding steps.

## Setup
1. Connect a Google Sheets OAuth2 credential and replace YOUR_GOOGLE_SHEET_ID (and sheet tab selection) in all Google Sheets nodes.
2. Add your SerpAPI API key in both SerpAPI HTTP Request nodes and update the search query location terms (for example, YOUR_LOCATION/Ontario) to match your targeting.
3. Add an Anthropic credential, confirm the model selection, and edit the AI system prompt keywords (industry, titles, and location rules) to match your use case.
4. Add your Apify token in the Apify HTTP Request node and ensure the referenced LinkedIn scraper actor is available in your Apify account.
5. Ensure your Google Sheet contains the required columns used by the workflow (for example First Name, Last Name, Employer Name, enrichment_status, serp_url, is_linkedin, ai_reason, company_name, job_title, domain, proceed_to_prospeo, and row_number).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
