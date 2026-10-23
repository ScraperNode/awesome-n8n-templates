# 🎬 Plan weekly SEO content from Google Trends and news with Apify, OpenAI and Google Sheets

> ⚡ **35 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly (or on demand via an n8n form) to pull rising Google Trends searches and related Google News via Apify, scores and briefs them, uses OpenAI to generate structured content ideas, then appends them to a Google Sheets content calendar and emails a ranked digest via Gmail.

## How it works
1. Runs every Monday at 8:00 or when a user submits the n8n form with topics, country, and an optional email address.
2. Calls Apify’s Google Trends API to fetch related rising queries for the topics, filters irrelevant breakouts, and skips searches already used in previous executions.
3. Selects a balanced set of this week’s best new searches across topics and stops if there are no new trends to cover.
4. Calls Apify’s Google News Scraper to collect recent articles for each selected search and computes a priority score from growth, press coverage, and topic momentum.
5. Sends a fact-only brief to OpenAI (gpt-5-mini) and parses a structured response containing one content idea per search (title, format, target search, why now, and a 3-point outline).
6. Appends the ranked ideas with sources and tracking fields to Google Sheets and sends a formatted HTML digest to the configured recipient via Gmail.

## Setup
1. Create an Apify account, generate an API token, and add it as an HTTP Bearer Auth credential used by both Apify HTTP requests.
2. Add an OpenAI credential for the Chat Model and ensure the selected model (gpt-5-mini) is available in your account.
3. Connect Google Sheets credentials and select the target spreadsheet/document ID and sheet for the content calendar append step.
4. Connect Gmail credentials for sending email and set your default topics, country, language, audience, ideas-per-week, and recipient email in the settings step.
5. If using the on-demand form, open the form trigger to copy its public URL and share it with anyone who should be able to request ideas.

## Requirements
- An Apify account. A weekly run costs about $0.06, covered by the free plan's monthly credits.
- An OpenAI account or n8n's free OpenAI credits (one gpt-5-mini call per run).
- Google Sheets and Gmail accounts.

## Customization
- Change the prompt in Write content ideas to match your brand voice, or swap the model for Claude, Gemini or Mistral.
- Write the ideas in any language and for any country by editing Your settings.
- Send the digest to Slack, Notion or Trello instead of Gmail.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
