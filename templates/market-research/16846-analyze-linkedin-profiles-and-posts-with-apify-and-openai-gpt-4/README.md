# 📊 Analyze LinkedIn profiles and posts with Apify and OpenAI GPT-4

> ⚡ **34 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a LinkedIn profile URL via an n8n form, scrapes the profile’s recent posts with Apify, analyzes the profile and each post using OpenAI models, and stores the resulting profile summary and per-post insights in n8n Data Tables.

## How it works
1. Receives a LinkedIn profile URL when a user submits the built-in n8n form.
2. Extracts the LinkedIn username from the URL and runs an Apify actor to scrape the profile’s posts into a dataset.
3. Generates an overall competitive-intelligence style profile analysis from the scraped posts using an OpenAI chat model and parses the result into structured JSON.
4. Saves the structured profile summary, themes, messaging patterns, and content ideas to an n8n Data Table.
5. Loops through each scraped post, stores the raw post text and engagement metrics in an n8n Data Table, and marks it as unprocessed.
6. Analyzes each post with an OpenAI chat model to extract structured insights (topic, takeaway, engagement insight, and suggested use) and updates the corresponding Data Table row as processed.

## Setup
1. Configure the n8n Form Trigger and share the form URL with users who will submit LinkedIn profile links.
2. Add an Apify API token in n8n and ensure the selected Apify actor (LinkedIn Profile Posts Scraper) is available in your Apify account.
3. Add OpenAI credentials in n8n for the two chat models used (gpt-4.1-mini and gpt-4.1).
4. Create or select two n8n Data Tables for storing profile summaries and scraped posts, and update the template to point to your table IDs if needed.
5. Adjust the Apify actor input limits (for example, maxPostsPerProfile) to match how many posts you want to scrape per run.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
