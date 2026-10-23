# 📊 Monitor AI brand visibility and GEO gaps with OpenAI, Gmail and Slack

> ⚡ **146 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily to test whether Fairy Frills appears in AI shopping recommendations by querying OpenAI with 10 brand-focused questions (with and without web search), extracting mention and competitor data, generating a GEO gap analysis, and emailing a consolidated HTML report via Gmail.

## How it works
1. Runs every 24 hours on a schedule.
2. Generates 10 predefined shopping queries for Fairy Frills and includes the brand URL and a competitor list with each query.
3. Sends each query to OpenAI twice in parallel, once to gpt-4o-mini (no search) and once to gpt-4o-search-preview (web search enabled).
4. Combines the two model responses per query and uses OpenAI to extract structured metrics such as whether Fairy Frills is mentioned, mention count and position, competitor mentions, sentiment, and a key snippet.
5. Uses OpenAI again to perform a GEO (Generative Engine Optimization) gap analysis that explains why competitors ranked, why the target brand missed, and which content actions and exact phrases to add.
6. Deduplicates and aggregates insights across all checks, builds an HTML summary, and sends the daily GEO report email via Gmail.
7. Sends a Slack message when the workflow encounters an execution error.

## Setup
1. Add an OpenAI API credential for the OpenAI nodes used for answering, mention extraction, and GEO gap analysis.
2. Connect Gmail OAuth2 credentials and set the recipient email address in the Gmail send node.
3. Connect Slack OAuth2 credentials and replace YOUR_SLACK_CHANNEL_ID with the channel to receive workflow error alerts.
4. Review and edit the brand name, brand URL, competitor list, and the 10 queries in the query-builder code to match your business.
5. Activate the schedule trigger (or change the interval) to control how often the report is generated.

## 🔗 Nodes Used

Slack, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
