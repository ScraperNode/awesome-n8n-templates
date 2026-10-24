# 📊 Generate a Google Ads keyword plan from seed keywords with Keyword Planner and OpenAI

> ⚡ **195 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this template for?

This workflow is built for **digital marketers, SEO/PPC specialists, and business owners** who run or plan Google Ads campaigns and need a fast, structured way to discover and evaluate keywords. Instead of manually exporting data from Google Keyword Planner and sorting it in spreadsheets, this template automates the entire process — from raw seed keywords to a fully enriched, AI-analyzed keyword plan saved directly in Google Sheets.

## What this workflow does

This n8n workflow connects Google Keyword Planner, OpenAI chat model, and Google Sheets to deliver a production-ready keyword research pipeline:

1. **User submits a form** with their website URL, company name, industry/niche, seed keywords, and products/services
2. **Google Keyword Planner API** returns keyword ideas with real search volume, competition level, and CPC bid range data
3. **OpenAI chat model (e.g, GPT-5.4-mini)** analyzes all keyword ideas in business context — scoring relevance, classifying intent (informational, navigational, commercial, transactional), assigning keyword type (branded, competitor, product, application, etc.), and generating additional relevatn high-intent keyword suggestions.
4. **Google Sheets** receives two outputs: a structured keyword plan sheet (AI-enriched, evaluated, scored, and classified) and a raw keyword ideas sheet (all Keyword Planner results)

The result is a complete, ready-to-use keyword strategy document your team can act on immediately.

## How to set up

1. **Google Ads API** — Create a Google Ads Developer Token and OAuth 2.0 credentials. Add your Google Ads Customer ID to the workflow. Follow the [official Google Ads API quickstart](https://developers.google.com/google-ads/api/docs/get-started/introduction).
2. **OpenAI** — Add your OpenAI API credentials to the OpenAI chat model node.
3. **Google Sheets** — Connect your Google account via OAuth 2.0. The workflow automatically creates a new spreadsheet for each run — no manual sheet setup required.
4. **Configure the HTTP Request node** — Update the Customer ID, Developer Token, and geo/language targeting to match your market.
5. **Activate the workflow** and submit the form to run your first keyword research & planning session.

## Requirements

- n8n (cloud or self-hosted)
- Google Ads account with API access and a Developer Token
- OpenAI API key (GPT-4.1-mini or higher recommended)
- Google account with Sheets access

## What you get in the output

The workflow automatically creates a new Google Spreadsheet on every run with two sheets:

### 📊 Keyword Plan

AI-evaluated, scored, and classified keywords ready for Google Ads — filtered to relevance score 5 or higher:

- `keyword` — the keyword text
- `searchIntent` — informational, commercial, transactional, or navigational
- `keywordType` — branded, competitor, product/service, feature/spec, synonym, application, or solution
- `source` — Keyword Planner or AI
- `seedKeyword` — which seed keyword this idea originated from
- `relevanceScore` — AI score (1–10) based on your business context
- `avgMonthlySearches` — monthly search volume from Google Keyword Planner
- `competition` — LOW / MEDIUM / HIGH
- `recommendedBid` — AI-calculated CPC bid recommendation in USD
- `recommendedMatchType` — recommended Google Ads match type (Broad, Phrase, or Exact)

### 📋 All Keyword Ideas

Raw, unfiltered output from Google Keyword Planner — useful as a reference or for manual review:

- `keyword` — the keyword text
- `avgMonthlySearches` — monthly search volume
- `competition` — LOW / MEDIUM / HIGH
- `competitionIndex` — numeric competition score (0–100)
- `lowTopOfPageBid` — low end of the estimated CPC range in USD
- `highTopOfPageBid` — high end of the estimated CPC range in USD

## How to customize this workflow

- **Change the AI model** — swap GPT-5.4-mini for Claude, Gemini, or any LLM supported by n8n
- **Add geo/language targeting** — modify the HTTP request body to filter results by country and language
- **Adjust the relevance threshold** — edit the AI prompt to change the minimum relevance score for inclusion
- **Add Slack or email notifications** — append a notification node after the Google Sheets write to alert your team when a new keyword plan is ready
- **Connect to a CMS or ad platform** — pipe the output directly into your Google Ads campaigns or content calendar

## 🔗 Nodes Used

Google Sheets, HTTP Request, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
