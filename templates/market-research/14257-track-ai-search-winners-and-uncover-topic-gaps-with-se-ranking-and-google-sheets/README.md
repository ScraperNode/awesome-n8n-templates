# 📊 Track AI search winners and uncover topic gaps with SE Ranking and Google Sheets

> ⚡ **123 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Track who wins AI search and find the topics you're missing with SE Ranking

![Screenshot 20260323 at 00.16.30.png](fileId:5082)

## Who is this for
- SEO teams comparing AI search visibility against competitors
- Content strategists planning editorial calendars around AI search gaps
- Marketing managers reporting share of voice across ChatGPT, Perplexity, and Gemini

## What this workflow does
See who's winning AI search across all major LLMs, then find the organic keyword gaps and unanswered questions your competitors are capturing that you're not — and save everything to Google Sheets.

## What you'll get
- AI search leaderboard with share of voice across ChatGPT, Perplexity, Gemini, AI Overviews, and AI Mode
- Organic keyword gaps where competitors rank but you don't, sorted by volume
- Question keywords your audience asks around your seed topic — ready to write against
- Prompts where you already appear in AI search results
- SEO topics where your competitor shows up in AI answers but you don't

## How it works
1. Add your domain and 2 competitors in the form — it looks up the AI search leaderboard across all 5 LLM engines and shows who's winning
![Screenshot 20260323 at 06.53.28.png](fileId:5083)
2. Pulls organic keyword gaps against both competitors sorted by volume, filtered for English keywords
3. Finds question keywords your audience asks around your seed topic, filtered by informational intent
4. Gets the top prompts where you already show up in AI search results
5. Pulls your competitors' top SEO prompts and compares against your footprint to find where they appear but you don't
6. Saves all five data sets to separate tabs in Google Sheets

## Requirements
- SE Ranking community node installed
- SE Ranking API token ([Get one here](https://online.seranking.com/admin.api.dashboard.html))
- Google Sheets account (optional)

## Setup
1. Install the [SE Ranking community node](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking)
2. Add your SE Ranking API credentials
3. Connect your Google Sheets account and set a spreadsheet URL in each export node
4. Activate the workflow — n8n generates a unique form URL you can share or embed
5. Open the form, fill in your domain and competitors, and the workflow runs automatically

## Customization
- Change `volume_min` in the Configuration node to raise or lower the keyword volume threshold
- Change `source` in the Configuration node for a different regional database (us, uk, de, fr, es, etc.)
- Swap `seed_topic` in Configuration to any keyword your business targets to get a fresh set of questions

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
