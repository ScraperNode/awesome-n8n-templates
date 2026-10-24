# 📊 Analyze SEO visibility and opportunities with TalorData, GPT-4o, Google Sheets, and Gmail

> ⚡ **40 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow accepts an SEO brief and uses TalorData Google Search results plus OpenAI to produce evidence-backed visibility insights for a target domain and competitors, then logs structured records to Google Sheets and emails a client-ready HTML report via Gmail.

## How it works
1. Receives an SEO brief via a POST webhook (or optionally via a manual run or weekly schedule after connecting the default brief).
2. Validates and normalizes the target domain, keywords, competitors, locale settings, and search depth, then creates one Google Search task per keyword.
3. Queries Google Search through the TalorData SERP community node for each keyword using the configured country, language, and region.
4. Extracts and normalizes organic results, determines the target domain’s rank and competitor presence, and derives deterministic opportunity signals from SERP evidence.
5. Sends the evidence-only dataset to OpenAI (gpt-4o) to generate a structured SEO analysis, then filters the model output to allowed keywords and evidence links.
6. Appends unified visibility, competitor, and opportunity rows into Google Sheets for tracking.
7. Generates a concise HTML report from the validated results and emails it to the configured recipient using Gmail.

## Setup
1. Install the community node package `n8n-nodes-talordata-serp` (v0.1.9+) and create a TalorData SERP API credential for the TalorData Google Search node.
2. Add an OpenAI credential for both language model nodes (gpt-4o) used for analysis and HTML report generation.
3. Connect Google Sheets OAuth, then select the target spreadsheet document and worksheet in the Google Sheets append step and ensure the sheet has matching columns for the mapped fields.
4. Connect Gmail OAuth and set the recipient email address in the Gmail send step.
5. If you want manual or scheduled runs, connect “Set Default SEO Brief” to the SEO brief validation step and adjust the default domain, keywords, locale, and search depth as needed.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
