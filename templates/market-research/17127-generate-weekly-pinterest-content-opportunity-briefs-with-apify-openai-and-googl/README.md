# 📊 Generate weekly Pinterest content opportunity briefs with Apify, OpenAI and Google Sheets

> ⚡ **79 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Research a Pinterest niche with FetchCat's Pinterest Search Scraper, preserve every source pin in Google Sheets, and use one evidence-controlled OpenAI call to identify recurring themes, underrepresented angles, and five production-ready content briefs without claiming search volume or trend growth.

## How it works
1. Starts manually with one research niche and one to five exact Pinterest search phrases, plus locale, country, and a configurable result limit.
2. Runs fetch_cat/pinterest-search-scraper through a Cloud-compatible HTTP Request and collects 20 to 500 public pins per search with public detail enrichment enabled.
3. Validates, normalizes, and deduplicates returned pins. It stops before AI or destination writes when fewer than ten usable pins remain.
4. Builds stable Google Sheets rows, deterministic phrase counts, and a bounded evidence packet, then uses one structured gpt-5.4-mini request for analysis.
5. Removes invalid pin citations and rejects any finding that retains no supplied evidence, preventing unsupported recommendations from reaching the destination.
6. Upserts source pins and a readable brief into separate Pins and Research Brief tabs using stable same-day research keys to prevent duplicate rows.

## Setup
1. Import the workflow JSON into n8n Cloud or self-hosted n8n. It uses only built-in HTTP Request, Code, OpenAI, and Google Sheets nodes.
2. Make a copy of the [Pinterest Content Opportunity Research spreadsheet](https://docs.google.com/spreadsheets/d/13feoyCXh9aeo6i3rtXmoQco_6QPnWCk1sf0bjD3xjuI/edit?usp=sharing) in your Google Drive. Keep the Pins and Research Brief tab names and row-one headers unchanged, then select your copy in both Google Sheets nodes.
3. Add fetch_cat/pinterest-search-scraper to your Apify account. Create HTTP Header Auth using Authorization and Bearer YOUR_APIFY_TOKEN, then select it in the FetchCat request node.
4. Connect an OpenAI credential in 3. Analyze Content Landscape and Opportunities. The workflow is configured for one structured gpt-5.4-mini request.
5. Connect Google Sheets OAuth to both destination nodes, then select the same spreadsheet and the matching Pins or Research Brief tab in each node.
6. Edit 1. Set Your Research Niche with a niche, one to five exact searches, locale, country, and 20 to 500 results per search. Run manually and review evidence links.

## Requirements
- [FetchCat Pinterest Search Scraper](https://apify.com/fetch_cat/pinterest-search-scraper) on Apify; OpenAI API access; Google Sheets; n8n 2.26.8 or newer.

## Customization
- Change the niche, 1-5 exact search phrases, locale, country, and 20-500 results per search. Keep observed phrases separate from unvalidated search-expansion ideas.

## Additional info
This workflow analyzes only the Pinterest results returned for the supplied searches. It does not provide autocomplete discovery, monthly search volume, verified trend growth, clicks, sales, or demand. Creator, board, domain, destination, save, and repin fields remain blank when Pinterest does not expose them.

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
