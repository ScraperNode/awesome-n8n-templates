# 📊 Scan Japanese tech news for market-entry signals and notify Slack

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Send a service description and Japanese keywords, and this workflow scans three major Japanese news and press-release feeds for matching articles — returning the raw matches with links plus a plain-language summary, and notifying Slack when something is found. No AI step, no API key or credential required.

## How it works
1. Receives a POST request with a service name and an array of Japanese keywords (competitor names are optional), validating that the required fields are present before doing any work.
2. Fetches three official Japanese RSS/RDF feeds — ITmedia Business Online, Impress Watch, and PR TIMES — extracting each article's title, link, publish date, and description directly from the raw XML with a lightweight regex-based parser that works across both RSS 2.0 and RDF/RSS 1.0 without depending on a specific XML-to-JSON node's nesting behavior.
3. Filters the combined articles down to only the ones whose title or description contain one of your keywords, sorts them by most recent first, and caps the result at 15 articles. A feed that fails to fetch is skipped rather than failing the whole run.
4. Builds a plain-language, non-AI summary of what was found — or an honest "no matching articles in this scan" message if nothing matched — and returns it as the webhook's JSON response.
5. If at least one article matched, also posts a short preview to Slack via an Incoming Webhook; nothing is posted when there are no matches, to avoid noise.

## Setup
1. Import this workflow. No credential needs to be created or assigned — there is nothing to authenticate against for the core scanning and response functionality.
2. (Optional) Create a Slack Incoming Webhook and paste its URL into the "Set: Slack webhook URL" node if you want match notifications posted to a channel. Skip this step entirely if you only need the HTTP response.
3. Activate the workflow and copy the webhook's production URL.
4. Send a POST request with a JSON body containing at least serviceName (string) and keywordsJa (a non-empty array of Japanese search terms — the feeds are Japanese-language, so English keywords will not match).

## Requirements
- An n8n instance (Cloud or self-hosted)
- (Optional) A Slack Incoming Webhook URL, only needed if you want Slack notifications — no Slack app or OAuth required
- No other external API key, credential, or paid service is required

## Customization
- Swap in different RSS/RDF feeds (or add more) in the three "Fetch ... feed" nodes to focus on your own industry or region
- Extend the matching logic in "Parse & filter articles" to also check categories, authors, or other metadata your feeds expose
- Add a Claude (or other LLM) step after "Parse & filter articles" if you'd rather get an AI-written interpretation instead of raw article data — see this creator's PUB-001/PUB-003/PUB-004/PUB-006 templates for that pattern
- Deliver results to email, Notion, or a spreadsheet instead of (or in addition to) Slack

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
