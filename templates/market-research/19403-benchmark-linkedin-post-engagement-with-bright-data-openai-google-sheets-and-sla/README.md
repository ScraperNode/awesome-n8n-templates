# 📊 Benchmark LinkedIn post engagement with Bright Data, OpenAI, Google Sheets and Slack

> ⚡ **17 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to scrape recent LinkedIn company posts with Bright Data, benchmark your engagement rate against competitor pages by format, and use OpenAI to generate a short recommendation. It logs per-company metrics to Google Sheets and sends a summary digest to Slack.

## How it works
1. Runs every Monday morning (or manually) and loads your LinkedIn company page URL, competitor URLs, crawl limits, and the target Google Sheets URL.
2. Triggers a Bright Data dataset crawl to discover the latest posts for all listed company pages in one request, then polls Bright Data until the snapshot is ready.
3. Downloads the snapshot results and normalizes each post by the crawled company page (to handle repost attribution), deriving post format and engagement rate based on reactions and comments per follower.
4. Aggregates original (non-repost) posts per company to calculate medians and cadence metrics, including median engagement rate overall and by post format.
5. Compares your company’s medians against the median of competitor pages overall and per format, then sends the benchmark to OpenAI to produce a concise recommendation grounded in peer examples.
6. Appends one metrics row per company to Google Sheets and posts a formatted digest (including any pages that returned no posts) to a Slack channel.

## Setup
1. Add a Bright Data HTTP Header Auth credential with `Authorization: Bearer <YOUR_API_KEY>` and ensure the referenced Bright Data LinkedIn dataset is available in your account.
2. Update the Settings values for `your_company_url`, `competitor_urls`, `max_pages`, `posts_per_page`, and `min_post_chars` with the LinkedIn company page URLs you want to benchmark.
3. Create a Google Sheet with columns `run_date`, `company`, `posts`, `followers`, `median_engagement_rate`, `best_format`, and `posts_per_week`, then add Google Sheets credentials and paste the sheet URL into `sheet_url`.
4. Add an OpenAI credential for the Chat model used to write the recommendation.
5. Add a Slack credential and set the destination channel (for example `#marketing`) where the digest should be posted.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
