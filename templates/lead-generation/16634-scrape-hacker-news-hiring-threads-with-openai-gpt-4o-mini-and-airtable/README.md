# 🎣 Scrape Hacker News hiring threads with OpenAI GPT-4o-mini and Airtable

> ⚡ **13 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually runs a scraper that finds the latest Hacker News “Ask HN: Who is hiring?” thread via the Algolia HN Search API, pulls each job comment from the Hacker News Firebase API, uses OpenAI to structure postings into fields, and saves the results to Airtable.

## How it works
1. Starts when you manually execute the workflow.
2. Queries the Algolia Hacker News Search API for recent “Ask HN: Who is hiring?” stories and keeps only the relevant thread metadata.
3. Filters the results to the most recent thread (created within the last 30 days) and fetches the full thread from the Hacker News Firebase API.
4. Iterates through the thread’s comment IDs, fetching each individual job comment from the Hacker News Firebase API.
5. Extracts and cleans the job text to remove HTML/entities and normalize links and whitespace.
6. Sends the cleaned text to OpenAI (GPT-4o-mini) to extract a structured JSON record (company, title, location, type, salary, description, and URLs).
7. Creates a new record in Airtable for each structured job posting.

## Setup
1. Add an Airtable credential and set the target base and table in the Airtable create step.
2. Add an OpenAI credential for the GPT-4o-mini chat model.
3. Add an HTTP Header Auth credential for the Algolia request and ensure the Algolia headers/query body match the HN Search endpoint used in the workflow.
4. Disable or remove the optional item limit if you want to process all job comments instead of a small test sample.

## 🔗 Nodes Used

Airtable, HTTP Request, Filter, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
