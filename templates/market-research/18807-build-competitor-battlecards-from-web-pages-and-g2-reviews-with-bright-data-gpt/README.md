# 📊 Build competitor battlecards from web pages and G2 reviews with Bright Data, GPT-5.6 and Google Docs

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a competitor’s key website pages and G2 reviews via Bright Data, uses OpenAI (GPT-5.6) to generate a quote-backed sales battlecard, then writes it to Google Docs, posts the link to Slack, and returns the document link and contents to the original form submitter.

## How it works
1. Receives a form submission with the competitor’s domain (and optional name), your product, and any notes on where you keep losing.
2. Uses Bright Data SERP to find key competitor pages (homepage, pricing, customers/case studies, product/features) and fetches the selected pages with Bright Data Web Unlocker.
3. Extracts and trims readable text (including price lines when present) from the fetched competitor pages to create a concise evidence set.
4. Uses Bright Data SERP to find the competitor’s G2 reviews URL and, if found, fetches and parses “like” and “dislike” review excerpts plus rating metadata.
5. Combines the website evidence and review evidence into a single evidence pack and prompts OpenAI (GPT-5.6) to draft a battlecard with required sections and direct quotes.
6. Verifies that each quoted line can be found in the fetched evidence, removes any lines with unverifiable quotes, and counts how many were dropped.
7. Formats the final text for Google Docs, creates and populates a new Google Doc, posts the document link to a configured Slack channel, and displays the link and full battlecard back to the form submitter.

## Setup
1. Create a Bright Data SERP zone and a Bright Data Web Unlocker zone, and add an HTTP Header Auth credential for the Bright Data API request.
2. Add credentials for OpenAI, Google Docs (Google account/Drive access), and Slack.
3. Update the Settings values as needed, including the Drive folder ID (or keep `root`), the Slack channel name, and your Bright Data zone names.
4. Enable the form trigger and share its URL with the people who should be able to request battlecards (and configure form authentication if required).

## 🔗 Nodes Used

HTTP Request, Slack, Google Docs, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
