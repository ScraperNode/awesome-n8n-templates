# 📊 Run a multi-agent SEO domain audit with SE Ranking and Claude

> ⚡ **75 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

![Zrzut ekranu 20260213 o 15.09.46.png](fileId:4380)

# Run a multi-agent SEO domain audit with SE Ranking and Claude

## Who is this for
- SEO agencies running competitor analysis for clients
- Content teams planning editorial strategies
- Marketing teams tracking competitive performance

## What this workflow does
Enter any domain and get a full SEO strategy report. Five AI agents analyze your technical health, backlinks, keywords, AI visibility, and competitors — then a Strategy Director builds a prioritized 90-day action plan.

## What you'll get
- Domain performance baseline (keywords, traffic, traffic value)
- Technical SEO audit with health score and Core Web Vitals
- Backlink profile with anchor text analysis
- Top competitors discovered by keyword overlap
- AI visibility across ChatGPT, Perplexity, Gemini, and AI Overviews
- Prioritized 90-day action plan from the Strategy Director
![Zrzut ekranu 20260213 o 15.19.06.png](fileId:4377)
![Zrzut ekranu 20260213 o 15.19.36.png](fileId:4379)
- Full report in Google Drive + metrics in Google Sheets

## How it works
1. You enter a domain, business description, and target market via a form
![Zrzut ekranu 20260213 o 15.13.12.png](fileId:4378)
2. Pulls domain overview, keywords, competitors, backlinks, and audit data in parallel
3. Checks AI search visibility across 4 engines
4. Four specialist agents analyze the data (Technical SEO, Links, Keywords, AI Visibility)
5. A Strategy Director agent reviews everything and builds a unified plan

6. Saves the report to Google Drive and metrics to Google Sheets

## Requirements
- SE Ranking community node v1.3.5+ ([Install from npm](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking))
- SE Ranking API token ([Get one here](https://online.seranking.com/admin.api.dashboard.html))
- Anthropic API key (for Claude)
- Google Drive + Sheets accounts (optional)

## Setup
1. Install the [SE Ranking community node v1.3.5+](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking)
2. Add your SE Ranking and Anthropic API credentials
3. Connect Google Drive and Google Sheets (optional)
4. Open the form, enter a domain, and run it

## Customization
- Change the target market dropdown to add more countries
- Swap Claude models for different cost/speed tradeoffs
- Add a Slack notification node at the end for team alerts

## 🔗 Nodes Used

Google Sheets, Google Drive, AI Agent, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
