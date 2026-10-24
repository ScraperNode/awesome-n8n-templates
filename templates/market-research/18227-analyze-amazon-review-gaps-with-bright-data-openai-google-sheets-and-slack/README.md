# 📊 Analyze Amazon review gaps with Bright Data, OpenAI, Google Sheets, and Slack

> ⚡ **30 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects Amazon product URLs via an n8n form, pulls reviews from Bright Data, extracts complaint and praise themes with OpenAI (GPT-5.6), identifies competitive gaps versus up to three competitors, then logs findings to Google Sheets and posts a digest to Slack.

## How it works
1. Receives your product URL and up to three competitor Amazon URLs through an n8n form.
2. Triggers the Bright Data Amazon reviews dataset for all submitted products and polls the snapshot status every 30 seconds until the results are ready (up to 10 minutes).
3. Downloads the review data, cleans duplicated fields, and keeps a weighted set focused on critical and most-helpful reviews per product.
4. Sends each product’s review set to OpenAI (GPT-5.6) to extract structured complaint themes, praise themes, and feature requests.
5. Compares your complaint themes to competitors’ praise themes to identify overlapping “competitive gaps” and uses OpenAI (GPT-5.6) to write a short competitive brief.
6. Appends one row per top complaint and gap to Google Sheets and posts a formatted digest (including the brief) to a Slack channel.

## Setup
1. Add a Bright Data API key as an HTTP Header Auth credential using an `Authorization: Bearer <YOUR_KEY>` header.
2. Add an OpenAI credential and ensure the GPT-5.6 model selected in the OpenAI nodes is available to your account.
3. Connect Google Sheets and set the target spreadsheet URL and the “Review themes” sheet name (or update the workflow to match your sheet).
4. Connect Slack and set the target channel name in the configuration values (for example, `#product`).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
