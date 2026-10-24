# 🎣 Run LinkedIn outreach with Google Gemini, Apify, Google Sheets, and PhantomBuster

> ⚡ **67 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a plain-English LinkedIn audience description via an n8n form, uses Google Gemini to generate a search URL, pulls matching leads from Apify, writes five personalized icebreakers to Google Sheets, and drip-launches a PhantomBuster agent every 15 minutes.

## How it works
1. Receives a form submission with a plain-English description of your target LinkedIn audience.
2. Uses Google Gemini to turn the audience description into a JSON response containing an Apollo-style search URL, then parses and extracts the `searchUrl` value.
3. Calls the Apify API to run an actor and return up to 100 lead records matching the configured filters.
4. Limits processing to the first five leads to control outreach volume.
5. Uses Google Gemini to generate a short, unique connection-message icebreaker for each lead based on their profile fields.
6. Appends or updates each lead in Google Sheets with contact details, LinkedIn URLs, and the generated icebreaker.
7. Waits 15 minutes per lead and then triggers a PhantomBuster agent via HTTP request to start the outreach action.

## Setup
1. Create and add credentials for Google Gemini (PaLM API) and update the model selection if needed.
2. Add an Apify API token and (optionally) adjust the actor input filters (location, titles, total results) in the Apify request.
3. Add a Google Sheets OAuth connection, set your target spreadsheet URL/ID and sheet name, and ensure the sheet has columns matching the fields being written.
4. Add your PhantomBuster API key and confirm the agent ID and launch endpoint match the PhantomBuster agent you want to run.
5. Open the n8n form trigger, copy the public form URL, and share it with whoever will start campaigns.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
