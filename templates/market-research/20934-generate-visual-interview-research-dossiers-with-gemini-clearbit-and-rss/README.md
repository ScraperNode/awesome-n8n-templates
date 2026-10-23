# 📊 Generate visual interview research dossiers with Gemini, Clearbit, and RSS

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects company and role inputs via an n8n Form, discovers the company domain, scrapes the website, Google News RSS, and Hacker News, then uses Google Gemini to synthesize a structured interview dossier and renders it as a printable, downloadable HTML “PDF-style” report with charts and diagrams.

## How it works
1. Receives company name, optional website URL, target role, and optional job description from an n8n Form submission.
2. Uses Clearbit Autocomplete to auto-discover the company domain (or falls back to the provided URL) and generates logo and website screenshot URLs via Clearbit Logo and WordPress MShots.
3. Scrapes the company website text through Jina Reader while also fetching recent headlines from Google News RSS and related threads from the Hacker News Algolia API.
4. Aggregates the scraped content into a single research context that includes source URLs for news items and discussion threads.
5. Sends the context to Google Gemini to generate a JSON interview dossier with ratings, key metrics, a Mermaid ecosystem diagram, and a verified evidence log.
6. Builds a printable HTML dossier that embeds a QuickChart radar chart, a Mermaid.ink-rendered diagram, the website snapshot, and clickable citations, then displays it in the browser and also creates an HTML file for download.

## Setup
1. Add Google Gemini (PaLM) API credentials for the Google Gemini Chat Model node.
2. Ensure the workflow’s n8n Form trigger is accessible to users who will submit requests (and share the form URL as needed).
3. If you want to avoid domain-guess fallbacks, provide a company website URL in the form or confirm Clearbit Autocomplete can resolve your target companies.
4. Verify outbound network access to Clearbit Autocomplete/Logo, Jina Reader (r.jina.ai), WordPress MShots, Google News RSS, Hacker News Algolia, QuickChart, and Mermaid.ink in your environment.

## 🔗 Nodes Used

HTTP Request, RSS Read, Basic LLM Chain, n8n Form Trigger, Convert to File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
