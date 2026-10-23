# 📊 Track Reddit keyword mentions with Apify and send alerts to Slack and Gmail

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Get every new Reddit post that mentions your brand, your competitors or your product category, once a day, as Slack messages and an email digest. It uses the Reddit Scraper Actor on Apify, so no Reddit API key or app is needed.

## How it works
1. Every morning at 08:00, a schedule starts the workflow.
2. The Apify node runs the Reddit Scraper Actor. It searches all of Reddit for each keyword, newest first, and keeps posts from the last day.
3. A filter keeps only posts.
4. Remove Duplicates drops any post that an earlier run already sent.
5. One branch posts each mention to Slack, with the keyword that matched.
6. The other branch groups the mentions by keyword into one HTML email and sends it with Gmail.

## Setup
1. Add the verified Apify community node (@apify/n8n-nodes-apify) if your n8n does not have it yet.
2. Add an Apify API credential with the token from Apify Console, Settings, API & Integrations. The free Apify plan includes monthly credit.
3. Connect Slack and pick a channel, connect Gmail, or both. Delete the branch you do not need.
4. In the Settings node, enter your keywords (comma-separated) and your email address. Setup takes about 5 minutes.

## Requirements
- An Apify account (sign up free: https://console.apify.com/sign-up?fpr=tl88um)
- The verified Apify community node (@apify/n8n-nodes-apify)
- Slack, Gmail, or both

## Customization
- Search only one subreddit by adding withinCommunity to the Apify input.
- Put a phrase in double quotes inside a keyword to match it exactly.
- Add searchComments: true to catch mentions in comments too.
- Results cost $2 per 1,000 on Apify. The Apify node caps each run at $2.

## Additional info
Made for marketing, PR, product and founder teams who ran keyword alerts through the Reddit node, Reddit search RSS or a paid social listening tool. This workflow uses the Reddit Scraper Actor (https://apify.com/harshmaur/reddit-scraper?fpr=tl88um), so it keeps working after Reddit closes its public API and RSS. It uses a community node (Apify). On self-hosted n8n, install it under Settings > Community nodes.

## 🔗 Nodes Used

Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
