# 📊 Monitor PR TIMES competitor press releases with OpenAI and Microsoft Teams

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every weekday morning, reads PR TIMES RSS feeds for a list of competitor company IDs, uses OpenAI to score relevance and generate short summaries, and posts a single Adaptive Card with the relevant updates to a Microsoft Teams channel via an incoming webhook.

## How it works
1. Runs every weekday morning on a schedule.
2. Loads a configured list of competitors (PR TIMES company_id values), a watch topic, a product description, an output language, and a lookback window.
3. Fetches each competitor’s PR TIMES RSS feed and keeps only releases published within the configured number of past days.
4. Skips releases that have already been processed in previous workflow executions using the release link as the deduplication key.
5. Sends each new release’s title and opening text to OpenAI to assign a relevance level (high/medium/low), a category, a short summary, and a “why it matters” line.
6. Keeps only high- and medium-relevance releases, aggregates them into a single list, and posts them to Microsoft Teams as one Adaptive Card message via a webhook.

## Setup
1. Update the competitor list (name and PR TIMES company_id), topic, product description, output language, and days_back value in the Prepare Competitor Settings node.
2. Add an OpenAI API credential and select it in the OpenAI GPT-5 Mini node.
3. Create a Microsoft Teams Workflows incoming webhook (for example, "Send webhook alerts to a chat") and paste the webhook URL into the Post to Microsoft Teams node.

## Requirements
- An OpenAI API key (or another chat model supported by the Basic LLM Chain)
- Microsoft Teams with the Workflows app
- Competitors that publish press releases on PR TIMES

## Customization
- Change the schedule or the number of days to look back.
- Edit the relevance rules in the Analyze and Summarize Release node to fit your market.
- Replace the Teams node with Slack, email, or another channel.

## Additional info
PR TIMES is a Japanese press release distribution service. Releases are usually written in Japanese, and the workflow can summarize them in English or any other language you set. Only the title and the opening text from the RSS feed are used, so the AI is told not to add facts that are not there.

## 🔗 Nodes Used

HTTP Request, RSS Read, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
