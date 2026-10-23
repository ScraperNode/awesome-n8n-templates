# 📊 Validate startup ideas and generate business plans with Claude and SendGrid

> ⚡ **114 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives a startup idea via webhook, uses Anthropic Claude to expand it, run market research, competitor analysis, and demand validation, then generates a structured business plan, emails it through SendGrid, logs a summary row to Google Sheets, and returns a JSON response to the webhook caller.

## How it works
1. Receives a startup idea via an HTTP POST webhook request.
2. Normalizes the submission details (idea, founder, industry, budget) and uses Anthropic Claude to expand the idea into a structured concept with an initial score.
3. Filters out ideas below the viability threshold (ideaScore < 4) to stop low-quality submissions early.
4. Uses Anthropic Claude to produce market sizing and persona research, then parses the results into structured market data.
5. Uses Anthropic Claude to analyze direct and indirect competitors and compute a competitive position score.
6. Uses Anthropic Claude to validate demand signals, risks, and go-to-market recommendations, then calculates a composite score and PROCEED/VALIDATE_FURTHER/PIVOT_OR_ABANDON recommendation.
7. Uses Anthropic Claude to generate a 10-section business plan, appends a tracking row to Google Sheets, emails the report via SendGrid, and responds to the webhook with key scores and the recommendation.

## Setup
1. Add an Anthropic credential and select it in each Anthropic Claude model connection used by the AI steps.
2. Configure SendGrid by replacing YOUR_SENDGRID_API_KEY in the Authorization header and setting the from/to email addresses used in the SendGrid request.
3. Connect Google Sheets OAuth2 credentials and replace YOUR_SHEET_ID in the Google Sheets API URL, ensuring the target spreadsheet has a StartupTracker sheet and matching columns.
4. Copy the production webhook URL for /startup-idea-inbound and configure the source system to POST the idea (and optional founderName, founderEmail, industry, budget) to it.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
