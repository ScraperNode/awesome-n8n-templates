# 📊 Find SEO keyword opportunities with SE Ranking, AI search, and Google Sheets

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

![image.png](fileId:4237)

## Who is this for
- SEO agencies doing competitor analysis for clients
- Content teams planning content strategies
- Marketing teams tracking competitive performance
- SEO professionals measuring AI search visibility

## What this workflow does
Automatically discover competitors, analyze keyword gaps, identify quick wins, and track your visibility across AI search engines (ChatGPT, Perplexity, Gemini, AI Overview).

## What you'll get
- Domain performance baseline (keywords, traffic, traffic value)
- Top 5 competitors discovered by keyword overlap
- Keyword gap analysis with up to 500 filtered opportunities
- Lost keywords you recently ranked for (quick wins)
- Topic expansion from related keyword research
- AI visibility metrics across 4 search engines
- Priority-scored opportunities (HIGH/MEDIUM/LOW)
- Actionable recommendations per keyword
- Automated export to Google Sheets

## How it works
1. Fetches your domain's worldwide performance metrics
2. Discovers top 5 organic competitors automatically
3. Analyzes keyword gaps for each competitor
4. Identifies keywords you recently lost rankings for
5. Expands top opportunities into topic clusters
6. Tracks AI search visibility (ChatGPT, Perplexity, Gemini, AI Overview)
7. Scores and prioritizes all opportunities
8. Exports structured data to Google Sheets

## Requirements
- SE Ranking account with API access ([Get one here](https://online.seranking.com/admin.api.dashboard.html))
- SE Ranking node v1.3.5+ installed ([Install from npm](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking))
- Google Sheets account (optional)

## Setup
1. Install the [SE Ranking community node v1.3.5+](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking)
2. Add your SE Ranking API credentials
3. Update the Configuration node with:
   - Your domain and brand name
   - Target country code (us, uk, de, etc.)
   - Minimum search volume threshold
   - Maximum keyword difficulty
   - Known competitors for AI comparison (optional)
4. Connect Google Sheets credentials (optional)
5. Select or create a spreadsheet for export (optional)

## Customization
- Adjust `min_volume` and `max_difficulty` for more/fewer opportunities
- Change `source` for different countries (us, uk, de, fr, etc.)
- Modify `competitor_count` to analyze more or fewer competitors
- Add `known_competitors` for AI Leaderboard comparison
- Filter `ai_engines` list to track specific AI platforms only

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
