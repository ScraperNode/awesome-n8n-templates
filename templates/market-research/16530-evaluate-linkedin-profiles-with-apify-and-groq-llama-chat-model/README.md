# 📊 Evaluate LinkedIn profiles with Apify and Groq Llama chat model

> ⚡ **60 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a LinkedIn profile URL via an n8n form, scrapes the public profile data using the Apify LinkedIn Profile Scraper actor, analyzes the results with a Groq-hosted Llama model, and displays an HTML-formatted evaluation back to the user.

## How it works
1. Receives a LinkedIn Profile URL when a user submits the n8n form.
2. Prepares the LinkedIn URL along with the Apify API token and Groq API key used for downstream requests.
3. Sends the profile URL to the Apify `harvestapi/linkedin-profile-scraper` actor and retrieves the scraped dataset items.
4. Passes the scraped profile JSON to a Groq chat model via an LLM chain to generate an HTML evaluation with a score and recommendations.
5. Displays the generated HTML evaluation to the user as the form completion message.

## Setup
1. Add a valid Apify API token and ensure the Apify actor endpoint (`harvestapi/linkedin-profile-scraper`) is accessible for your account.
2. Add Groq API credentials in n8n and confirm the selected model (meta-llama/llama-4-scout-17b-16e-instruct) is available to your Groq account.
3. Replace the placeholder API key values in the workflow (or move them to n8n credentials/environment variables) and verify the form field label matches `LinkedIn Profile URL`.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, n8n Form Trigger, Groq Chat Model, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
