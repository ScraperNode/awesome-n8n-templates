# 📊 Identify competitor content gaps across ChatGPT, Perplexity & Gemini with SE Ranking

> ⚡ **93 views** · 📊 [Market Research & Insights](../)

## Description

![Zrzut ekranu 20251218 o 15.29.43.png](fileId:3780)

## Who is this for

- Marketing teams tracking AI SEO performance
- Content strategists planning editorial calendars
- SEO teams doing competitive intelligence

## What this workflow does

Identify content opportunities by analyzing where competitors outrank you in AI search and traditional SEO.

## What you'll get

- AI visibility gaps across ChatGPT, Perplexity, and Gemini
- Keyword gaps with search volume and difficulty
- Competitor backlink authority metrics
- Prioritized opportunities with HIGH/MEDIUM/LOW scoring
- Actionable recommendations for each gap

## How it works

1. Fetches AI search visibility for your domain and competitor
2. Compares metrics across ChatGPT, Perplexity, and Gemini
3. Extracts competitor's top-performing prompts and keywords
4. Analyzes competitor backlink authority
5. Calculates opportunity scores and prioritizes gaps
6. Exports ranked opportunities to Google Sheets

## Requirements

- Self-hosted n8n instance
- SE Ranking community node installed
- SE Ranking API token ([Get one here](https://online.seranking.com/admin.api.dashboard.html))
- Google Sheets account (optional)

## Setup

1. Install the [SE Ranking community node](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking)
2. Add your SE Ranking API credentials
3. Update the Configuration node with your domain and competitor
4. Connect Google Sheets for export (optional)

## Customization

- Change `source` for different regions (us, uk, de, fr, etc.)
- Adjust volume/difficulty thresholds in Code nodes
- Modify priority scoring weights

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
