# 📊 Build backlink prospecting lead lists with Apify and Google Sheets

> ⚡ **97 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs manually or on a schedule to pull search queries and excluded domains from Google Sheets, launches Apify’s Link Prospecting Tool, then uses an Apify “run succeeded” webhook to fetch the resulting datasets and append leads and newly discovered domains back into Google Sheets.

## How it works
1. **Scrape search results**: get results for your queries across Google Search, ChatGPT, Gemini, Copilot, and Perplexity.
2. **Filter domains**: remove any sources that already gave you a backlink.
3. **Filter irrelevant domains**: filter out competitor and social media domains.
4. **Enrich leads**: get contact details for each source so you can run cold outreach.
5. **Save results**: save leads in Google Sheets.
6. **Blacklist known domains**: exclude all domains for which you got contact details, so they're skipped on the next run.

## Setup
1. Create or copy the provided Google Sheets template, then set the spreadsheet ID and the correct sheet tabs for queries, excluded domains, and output sheets in the Google Sheets nodes.
2. Add Google Sheets OAuth2 credentials to allow reading from and appending to the spreadsheet.
3. Add Apify OAuth2 credentials, select the Link Prospecting Tool actor, and update the actor input values (brand, ownDomains, and organicResult).
4. Copy the n8n webhook URL and configure it in Apify Actor integrations as an HTTP request that triggers on “Run succeeded.”
5. (Optional) Adjust the schedule trigger interval if you want recurring runs (for example, monthly).

## Additional info
## Use cases
- **SEO teams**: identify backlink opportunities for link-building campaigns.
- **Affiliate managers**: identify influencers to recruit for your affiliate program.
- **Content marketing**: find relevant websites for guest posting.
- **Competitive analysis**: find articles that mention your competitors.

## 🔗 Nodes Used

Google Sheets, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
