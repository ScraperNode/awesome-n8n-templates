# 🎣 Serve a company enrichment API with Bright Data and OpenAI GPT-5.6

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow exposes a webhook-based company enrichment API that accepts a domain, fetches the company website, pricing page, and Google search results via Bright Data, then uses OpenAI (GPT-5.6) to generate a short sales-ready summary and returns a fixed JSON profile response.

## How it works
1. Receives a GET or POST request on a webhook endpoint with a company domain provided in JSON, form-encoded fields, or the query string.
2. Normalizes the input into a clean domain/brand and rejects invalid domains by returning a 400 JSON error response.
3. In parallel, uses Bright Data Web Unlocker to fetch the company home page and /pricing page, and uses Bright Data SERP to run a Google search for the brand.
4. Extracts key signals from the site and pricing content (positioning, product cues, plans, prices, and whether it looks sales-led) and pulls profile links and recent mentions from search results.
5. Combines all lookup results into a single, fixed-shape company profile JSON that includes a checks object indicating which lookups succeeded.
6. Sends the structured findings to OpenAI (GPT-5.6) to write a 40–70 word paragraph summary that stays within the retrieved evidence.
7. Returns the enriched profile JSON (including the summary and timestamp) in the webhook response.

## Setup
1. Create a Bright Data Header Auth credential and provide access to a Web Unlocker zone and a SERP zone.
2. Add an OpenAI credential for the Chat model used to generate the summary.
3. Update the workflow settings for your Bright Data zone names and desired search country if they differ from the defaults.
4. Activate the workflow, copy the webhook Production URL, and configure your calling app (or curl) to send a domain to that endpoint.

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
