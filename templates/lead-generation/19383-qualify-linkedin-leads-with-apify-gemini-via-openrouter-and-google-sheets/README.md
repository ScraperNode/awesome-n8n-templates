# 🎣 Qualify LinkedIn leads with Apify, Gemini via OpenRouter, and Google Sheets

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow pulls LinkedIn profiles with Apify, extracts key fields, uses an OpenRouter (Gemini) AI agent to score and draft Turkish outreach messaging, and saves the qualified lead details to a Google Sheets spreadsheet.

## How it works
1. Starts when you manually execute the workflow.
2. Uses Apify’s LinkedIn Profile Search Scraper actor to fetch a list of LinkedIn profiles matching a configured search query.
3. Extracts and normalizes lead fields, including email (from profile text) and a website domain if present.
4. Sends the collected profiles to an OpenRouter chat model (Google Gemini) to score each lead, explain the score in Turkish, and propose a Turkish outreach angle.
5. Parses the AI output into structured lead records with score, reason, and outreach angle.
6. Appends each lead as a new row in Google Sheets.

## Setup
1. Connect your Apify account credentials and configure the Apify actor input (search query and max items) to match your target audience.
2. Add an OpenRouter API credential and ensure the selected model (google/gemini-2.5-pro) is available in your account.
3. Connect your Google Sheets OAuth credential and update the spreadsheet, sheet name, and column mapping to match your Google Sheet.

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
