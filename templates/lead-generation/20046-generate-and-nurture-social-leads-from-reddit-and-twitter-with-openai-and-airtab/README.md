# 🎣 Generate and nurture social leads from Reddit and Twitter with OpenAI and Airtable

> ⚡ **4 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow scans Reddit (via Google Custom Search), Twitter/X, and an RSS feed every 15 minutes for buying-intent posts, enriches and scores leads with Apollo, OpenAI, and Anthropic, queues drafts in Airtable, and routes human-reviewed outreach through Slack, with optional Gmail sending plus nurture, reporting, competitor monitoring, and 

## How it works
1. Runs every 15 minutes to search Reddit (via Google Custom Search), Twitter/X (recent search API), and an RSS feed, then normalizes the results into a common lead format.
2. Checks Airtable to deduplicate by source URL, then uses OpenAI (GPT-4o) to score buying intent and drops low-intent noise.
3. Saves new leads to Airtable and enriches each lead using Apollo (if an API key is available) or a Google search fallback, then uses Anthropic Claude to build a buyer profile and calculates a weighted total score.
4. Creates outreach drafts using a multi-step OpenAI + Anthropic flow for HOT leads (strategy, message writing, and spam/quality validation) or a single OpenAI draft for WARM leads, then saves the drafts to an Airtable outreach queue.
5. Posts the lead and draft variants to Slack #lead-review for human approval, then sends approved emails via Gmail with a randomized delay or posts ready-to-send copy to Slack for manual Reddit/LinkedIn outreach.
6. Runs a daily nurture sweep that decays lead scores in Airtable and uses OpenAI to decide whether to follow up, change approach, wait, or archive the lead.
7. Runs a competitor scan on a schedule to find Reddit complaints via Google search, scores opportunity with OpenAI, and saves qualifying leads to Airtable.
8. Posts a weekly pipeline report to Slack #lead-analytics using OpenAI-generated insights, while a global error trigger logs failures to Airtable and alerts Slack #lead-alerts.

## Setup
1. Create an Airtable base with the tables and fields referenced in the workflow (LEADS, OUTREACH_QUEUE, INTERACTIONS, ANALYTICS, COMPETITORS, SHADOW_MODE_LOG, and ERROR_LOGS) and update the base ID/table names to match.
2. Add credentials and replace placeholders for OpenAI (YOUR_OPENAI_KEY) and Anthropic (YOUR_ANTHROPIC_KEY) used for intent scoring, profiling, drafting, validation, nurturing decisions, competitor analysis, and reporting.
3. Set up Google Custom Search (API key and Search Engine ID) and update the Google Alerts RSS feed URL (YOUR_ALERT_ID) used for scanning Reddit via Google and monitoring RSS.
4. Provide a Twitter/X API Bearer token (YOUR_TWITTER_BEARER) for the recent search endpoint.
5. Connect Slack credentials and ensure the channels #lead-review, #outreach-ready, #lead-analytics, #shadow-mode, and #lead-alerts exist.
6. Connect Gmail OAuth2 credentials and ensure leads have an email address available before enabling automated email sending, and optionally set the APOLLO_API_KEY environment variable and replace YOUR_APOLLO_KEY to enable Apollo enrichment.

## 🔗 Nodes Used

Airtable, HTTP Request, RSS Read, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
