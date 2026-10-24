# 📊 Find and triage keyword cannibalization with Search Console, OpenAI, and Gmail

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow checks Google Search Console for queries where multiple site URLs appear, verifies whether the overlaps are real by fetching each URL’s redirect/canonical/hreflang signals, uses an OpenAI chat model to recommend which page should own each query, and emails a weekly Gmail digest.

## How it works
1. Runs every Monday morning on a schedule or starts manually after a site migration.
2. Queries the Google Search Console Search Analytics API for two 28‑day windows grouped by query and page, then groups results to find queries with multiple URLs and filters out operator queries (for example, site:) and long zero-click AI Mode prompts.
3. If any candidates remain, fetches each distinct URL once without following redirects and extracts the HTTP status, Location header, canonical URL, and hreflang alternates.
4. Classifies each query’s top URL pair as a redirect, canonical duplicate, hreflang/locale alternate, or a real overlap, and suppresses pairs already reported unless impressions have grown significantly.
5. Sends only the real, reportable overlaps to an OpenAI-compatible chat model in a single prompt to recommend which URL to keep and what action to take on the other.
6. Upserts the reported pairs into an n8n Data Table for history and builds a digest that includes ruled-out counts and the actionable shortlist.
7. Sends the digest email via Gmail to the configured recipient.

## Setup
1. Create Google API credentials (service account or OAuth as used by your instance) with access to the Search Console API, and add the account email as a user on the target Search Console property.
2. In the Settings node, set your Search Console property ID (for example, sc-domain:example.com or https://example.com/), thresholds (days, min impressions, max query length), locale prefixes, and the digest recipient email address.
3. Create an n8n Data Table named query_overlaps with columns pair_key, query, urls, verdict, impressions, and last_seen.
4. Add a Gmail credential for sending the digest email.
5. Add an OpenAI-compatible credential/model configuration for the LangChain ChatOpenAI node and select the model you want to use.

## Requirements
- A Google service account whose email has been added as a user on the Search Console property. Owning the Cloud project grants nothing on its own.

## Customization
- locale_prefixes in Settings is what stops language versions of one page being reported as competitors. Set it to the path prefixes your site uses, or empty it if it has none.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
