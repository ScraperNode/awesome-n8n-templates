# 📊 Generate SEO meta tags and content briefs from SERP analysis with Claude AI

> ⚡ **652 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for
This workflow is for SEO managers, content strategists, and digital agencies who need to produce optimised meta tags, H1s, and full content briefs at scale — one per keyword — without doing manual competitor research.

## How it works
1. The workflow is triggered manually and reads client information and SEO keyword data from two Google Sheets tabs.
2. Items are filtered to keep only keywords that have not yet been processed (no existing H1).
3. A batch loop iterates over each keyword and calls the Apify SERP actor via HTTP POST to retrieve competitor URLs.
4. Organic results are split out, limited to the top 10, and each URL is scraped with Firecrawl to retrieve full page content.
5. A JavaScript node consolidates the scraped data into structured competitor blocks (meta title, meta description, headings).
6. A first Claude AI agent analyses the competitor data to generate optimised meta title, meta description, and H1 (structured JSON output).
7. A second Claude AI agent uses the same context plus the generated H1 to produce a full SEO content brief.
8. Both outputs are written back to the correct row in Google Sheets, and the loop advances to the next keyword.

## How to set up
- [ ] **Duplicate the template spreadsheet**: [Google Sheets Template](https://docs.google.com/spreadsheets/d/1pVE4jSJAVw4QWXKM5EiviMhN_3OBHKTVkiQ_i95wGrg) and save it to your Google Drive
- [ ] Connect a **Google Sheets** OAuth2 credential and point the two read nodes to your spreadsheet (tabs: *Client information* and *SEO*)
- [ ] Add your **Apify API key** and verify the actor ID in the HTTP Request node
- [ ] Add your **Firecrawl API key** to the scrape node
- [ ] Add your **Anthropic API key** to the Claude Sonnet model node (shared by both AI agents)
- [ ] Configure the **Update SEO Row in Sheets** node to map columns correctly in your sheet
- [ ] Review the **Filter Valid SEO Items** node conditions if your sheet uses different column names

## Requirements
- Google Sheets account (OAuth2)
- Apify account with access to a SERP-scraping actor
- Firecrawl account
- Anthropic (Claude) API key

## How to customize
- Adjust the **Take Top 10 Results** node to scrape more or fewer competitor URLs per keyword.
- Modify the JSON schema in the **Parse Structured JSON Output** node to add fields such as OG title or additional meta variants.
- Swap the Claude model or rewrite the system prompts in either AI agent to match a different language, tone of voice, or content framework.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
