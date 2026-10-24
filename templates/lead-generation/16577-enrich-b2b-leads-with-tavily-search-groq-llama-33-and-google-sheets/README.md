# 🎣 Enrich B2B leads with Tavily search, Groq Llama 3.3, and Google Sheets

> ⚡ **28 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives a company name via webhook, runs three Tavily web searches (company info, recent news, and key people), uses Groq (Llama 3.3 70B) to synthesize a structured lead profile, optionally appends the results to Google Sheets, and returns the enriched profile in the webhook response.

## How it works
1. Receives a POST webhook request containing a company name and an optional domain.
2. Queries the Tavily Search API for company overview details, then searches Tavily again for recent news and key executives/leadership.
3. Sends the combined search results to a Groq LLM agent to generate a sales-ready lead enrichment profile as strict JSON (company details, products, signals, news, pain points, and outreach angles).
4. Parses the AI output, extracts valid JSON if possible, and flattens key fields into a single row-friendly structure.
5. If parsing succeeds, appends the enriched lead data to a Google Sheets spreadsheet and returns the full profile in the webhook response.
6. If parsing fails, returns an HTTP 422 error response with the raw AI output for troubleshooting.

## Setup
1. Create a Groq API key, add it as an n8n Groq credential, and select it in the Groq LLM node.
2. Create a Tavily API key and replace `YOUR_TAVILY_API_KEY` in all three Tavily HTTP Request nodes.
3. (Optional) Add Google Sheets OAuth2 credentials, set the Google Sheet document ID (replace `YOUR_GOOGLE_SHEET_ID`), and ensure the target sheet (named “Leads”) has matching column headers for the flattened fields.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
