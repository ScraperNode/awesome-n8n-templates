# 📊 Track AI search citations with ChatGPT, Claude, Gemini, Perplexity, Notion and Slack

> ⚡ **100 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly (or manually) to test multiple keyword prompts across ChatGPT, Claude, Gemini, and Perplexity, then analyzes whether your brand is mentioned, stores citation metrics in Notion, and sends a Slack alert when a brand mention is missing.

## How it works
1. Runs on a weekly Monday 9AM schedule or starts manually.
2. Loads your brand name, website URL, seed keywords, and competitor domains from an editable configuration.
3. Generates up to 25 prompt variations (5 prompts × up to 5 keywords) and processes them in small batches.
4. Sends each prompt to OpenAI (ChatGPT), Anthropic (Claude), Google Gemini, and Perplexity to collect responses for cross-engine comparison.
5. Analyzes each response to detect brand and competitor mentions, estimate mention position, capture available citations, and compute a citation score.
6. Requests Z.ai (BigModel GLM-4.5) to produce a small set of optimization recommendations based on the citation analysis.
7. Stores the daily citation snapshot in a Notion database and posts a Slack alert when the brand is not mentioned for a given engine and keyword.

## Setup
1. Add credentials for OpenAI, Anthropic, Google Gemini, Perplexity (HTTP header auth), Z.ai/BigModel (HTTP header auth), Notion, and Slack.
2. Edit the Lite Config values (brandName, wpUrl, seedKeywords, and competitors) to match your site and target queries.
3. Create or select a Notion database for tracking and replace the database ID used for the Notion “create page” action, ensuring the listed properties exist (Date, Engine, Keyword, Brand Mentioned, Mention Count, Position, Citation Score, and Client).
4. Update the Slack channel mapping (or set a fixed channel) so alerts post to the correct destination for your workspace.
5. Run the workflow once manually to verify responses and data storage, then enable the weekly schedule.

## 🔗 Nodes Used

HTTP Request, Slack, Notion, Schedule Trigger, OpenAI, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
