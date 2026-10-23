# 🎣 Find and score LinkedIn B2B leads with Bright Data, GPT-5.6, Google Sheets and Slack

> ⚡ **24 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects an ICP via an n8n form, uses OpenAI GPT-5.6 and Bright Data to find and enrich LinkedIn company pages, scores each company with evidence, then logs qualified and rejected leads to Google Sheets and posts a qualified-leads digest to Slack.

## How it works
1. Receives an ICP, target country, and desired company count from an n8n form.
2. Uses OpenAI (GPT-5.6) to turn the ICP into five different Google queries that target LinkedIn company pages.
3. Calls the Bright Data SERP API for each query, extracts valid LinkedIn company URLs, deduplicates them by company slug, and caps the list to the requested maximum.
4. Sends the LinkedIn URLs to Bright Data’s LinkedIn dataset scraper to enrich each company with profile details such as industry, size, headquarters, specialties, and about text.
5. Uses OpenAI (GPT-5.6) to score each company (0–100) against the ICP, including quoted evidence, missing criteria, and a likely objection, and merges the score back into the company record.
6. Appends qualified and rejected companies to separate tabs in Google Sheets based on a minimum score threshold.
7. Aggregates the qualified companies and posts a ranked digest to a Slack channel.

## Setup
1. Create a Bright Data account, set up a SERP API zone, and add an HTTP Header Auth credential (Authorization: Bearer <API_KEY>) that is used by both Bright Data HTTP requests.
2. Add OpenAI credentials for the two GPT-5.6 model steps used for query planning and company scoring.
3. Add Google Sheets credentials and replace the placeholder spreadsheet URL/ID in both Google Sheets append steps, ensuring the workbook has “Qualified” and “Rejected” sheets.
4. Add Slack credentials and set the target channel (for example, #alerts) for the digest message.
5. Review and adjust the configuration values (SERP zone name and minimum score threshold) in the workflow settings before running.

## Requirements
- Bright Data account with a SERP API zone (the free tier includes 5,000 credits per month), plus OpenAI, Google Sheets and Slack credentials

## Customization
- min_score in Set Search Parameters sets the qualification bar (default 60). Rejected companies are logged deliberately, so start the bar low, read what got thrown away, then tighten it. The five search angles are prompt-driven, so you can bias them toward hiring signals or technology adoption for your market.

## Additional info
The scoring step will not return a bare number. It has to quote the evidence it used from the company's own LinkedIn text, list what is missing, and name the likeliest objection, so a low score can be checked rather than trusted. Rejected companies are written to their own sheet for the same reason: a lead filter you cannot audit is a lead filter you cannot tune. Two operational notes. The country field is a dropdown because Bright Data's SERP gl parameter takes a two-letter code, and a country name silently invalidates the request. The LinkedIn enrichment uses Bright Data's sync scrape endpoint, which gives up after about a minute; past roughly 25 companies it returns a snapshot_id instead of rows, and the workflow detects that and tells you to move to the async endpoint.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, OpenAI Chat Model, n8n Form Trigger, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
