# 📊 Send weekly brand and competitor intel digests to Slack with Claude web search

> ⚡ **29 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to search the web (including Reddit) for your brand, competitors, and industry keywords using Anthropic Claude web search, then synthesizes the most relevant findings into a ranked digest and posts a grouped summary to a chosen Slack channel.

## How it works
1. Runs every Monday at 8:00 AM on a weekly schedule.
2. Builds a tracking list from your brand name, competitor names, and industry topics, and labels each keyword as brand, competitor, or industry.
3. For each keyword, calls the Anthropic Messages API with Claude web search enabled to find concrete mentions from the past N days and returns a small JSON list of results with real URLs.
4. Parses, normalizes, and deduplicates all findings across keywords (primarily by URL) into a single combined list.
5. Sends the combined findings back to Claude to rank and refine the top business-relevant items while keeping the preset category types and original URLs.
6. Formats the ranked results into a Slack message grouped by Brand, Competitors, and Industry, and posts the weekly digest to your selected Slack channel.

## Setup
1. Add an Anthropic API credential in n8n and ensure your account has access to Claude web search (used by the two Anthropic HTTP requests).
2. Add a Slack API credential in n8n with permission to post messages to your target channel.
3. Update the configuration values for brand name, comma-separated competitors and topics, Slack channel ID, and lookback window (days) before activating the workflow.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
