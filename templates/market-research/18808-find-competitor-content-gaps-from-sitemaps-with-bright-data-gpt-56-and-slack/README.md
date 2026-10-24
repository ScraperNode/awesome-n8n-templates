# 📊 Find competitor content gaps from sitemaps with Bright Data, GPT-5.6 and Slack

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Compares your site with a competitor by crawling both sitemap trees through Bright Data, finds topic words in their URL slugs that never appear in yours, has GPT-5.6 rate the top gaps, then writes them to Sheets, Slack and the form page.

## How it works
1. Receives a form submission with your domain and a competitor domain.
2. Uses Bright Data Web Unlocker to fetch each site’s robots.txt, extracts declared sitemap URLs (or falls back to common sitemap paths), and validates responses as real XML.
3. Recursively crawls sitemap indexes to collect page URLs, skipping non-content and localized sitemap branches and stopping at the configured depth and per-site limits.
4. Compares the two sites by tokenizing URL slugs into topic words and ranks words that appear across many competitor URLs but none of yours.
5. Fetches a limited number of example competitor articles for the top gaps via Bright Data, extracts a title and opening text, and compiles a brief.
6. Sends the brief to OpenAI GPT-5.6 to summarize each gap’s angle and rate whether it is worth covering.
7. Appends one row per rated gap to Google Sheets, posts a formatted summary to a Slack channel, and shows the results as an HTML table in the form completion page.

## Setup
1. Create a Bright Data Web Unlocker zone and add it as an HTTP Header Auth credential, then set the matching zone name in the workflow settings.
2. Add credentials for OpenAI (Chat model), Google Sheets, and Slack.
3. Update the Google Sheets document URL/ID and ensure a tab named "gaps" exists (or change the target tab setting to your sheet name).
4. Set the Slack channel name in the settings (for example, #content) and ensure the workflow has permission to post there.
5. Open the form trigger, copy its public URL, and share it with whoever should submit domains for comparison.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
