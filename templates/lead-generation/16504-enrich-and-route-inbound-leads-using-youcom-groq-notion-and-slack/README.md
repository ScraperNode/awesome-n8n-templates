# 🎣 Enrich and route inbound leads using You.com, Groq, Notion, and Slack

> ⚡ **6 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives inbound lead details via webhook, enriches the company using You.com search and website content extraction, generates a one-page profile and fit score with Groq, then routes hot leads to Slack, logs all leads to Notion, and returns the enriched result in the webhook response.

## How it works
1. Receives a POST webhook request containing a company name and/or domain and normalizes the input into consistent fields.
2. Rejects the request with a 400 response if neither a company name nor a domain is provided.
3. Uses You.com Web Search to gather recent company signals (for example funding, news, and leadership changes) and resolves a best-guess company URL.
4. Uses You.com Content Extraction to pull website content and combines the search signals and site content into a single enrichment context.
5. Uses Groq (Llama 3.3 70B) to generate a concise one-page company profile and then scores the lead against the defined fit criteria with structured output.
6. If the fit score meets or exceeds the hot-lead threshold, posts an alert message to a selected Slack channel with an @mention.
7. Logs the lead, fit score, tier, and profile summary to a Notion database and returns the full enriched profile and score in the webhook response (or a clean 502 error if enrichment fails).

## Setup
1. Use a self-hosted n8n instance and install the community node package `@youdotcom-oss/n8n-nodes-youdotcom`.
2. Add credentials for You.com, Groq, Slack, and Notion.
3. Configure the webhook URL in your lead source to send a POST payload containing a `company`/`companyName` and/or `domain`.
4. Update the fit criteria, hot-score threshold, and Slack mention ID in the configuration step.
5. Select your Slack channel and connect the Notion node to a database that includes properties for Fit Score (number), Tier (select), and Summary (rich text).

## Requirements
- Self-hosted n8n with the community node @youdotcom-oss/n8n-nodes-youdotcom
- A You.com API key (you.com/platform)
- A Groq API key (console.groq.com)
- A Notion integration and a target database with Fit Score (number), Tier (select), and Summary (rich text)
- A Slack app with chat:write scope

## Customization
- Edit the scoring prompt and fit criteria to match your ICP
- Raise or lower the hot-score threshold to control how many leads alert the team
- Route Warm and Cold tiers to different Slack channels, or skip the alert below a tier
- Extend the Notion mapping to capture key reasons and recommended action
- Swap the Groq model on the two model nodes without touching the rest of the flow

## Additional info
Self-hosted n8n only, because the You.com integration is a community node. Every external call has an error branch that returns a clean 502 instead of crashing the run.

## 🔗 Nodes Used

Slack, Webhook, Notion, Basic LLM Chain, Structured Output Parser, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
