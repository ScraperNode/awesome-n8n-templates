# 📊 Monitor Reddit brand mentions and send lead alerts with Apify and Slack

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Searches Reddit posts and comments for your brand, product or competitor keywords every six hours via Apify, with no Reddit API app or OAuth. Removes seen threads, filters real hits, optionally scores buying intent with OpenAI, and alerts Slack. Slack, email and Discord delivery included; enable whichever you use.

## How it works
1. Runs every 6 hours, or once by hand to test.
2. Configure Keywords & Channels holds your keywords, subreddits, negative keywords, lookback window and delivery targets — the only node you edit.
3. Search Reddit for Keywords runs the Apify Reddit Lead Scraper and returns matching posts and comments, capped at $0.50 per run.
4. Skip Already-Seen Mentions remembers every thread URL across executions so each mention is alerted once.
5. Filter Relevant Mentions keeps items with a real keyword hit in the title or body and drops posts from your own Reddit account.
6. Score Buying Intent with AI (disabled by default) labels each thread alert or ignore with OpenAI so only leads, questions and complaints get through.
7. Post Lead to Slack sends the alert; Gmail, Discord and Google Sheets branches are included and disabled.

## Setup
1. Open Search Reddit for Keywords. If n8n shows Install, click it (workspace owner only on n8n Cloud). Add an Apify API key credential — free at console.apify.com → Settings → Integrations.
2. Open Configure Keywords & Channels and set keywords (comma-separated, quotes for exact phrases), optional subreddits, and your Slack channel.
3. Click Execute workflow — real Reddit threads appear in the Apify node's output before you connect anything else.
4. Add a Slack credential to Post Lead to Slack and invite the app to your channel.
5. Activate. To use email or Discord instead, enable that branch and delete the rest; to use AI scoring, enable the classifier and add an OpenAI credential to its model.

## Requirements
- Apify account and API key (free plan works; the default schedule costs about $3.60/month plus results)
- Slack credential — or Gmail / Discord webhook / Google Sheets if you switch branches
- OpenAI credential only if you enable AI scoring

## Customization
- Change the schedule interval and set hours_back to interval + 1 so nothing is fetched twice
- Edit negative_keywords to tune signal; defaults strip promo, job-post, crypto and homework noise
- Add competitor names to keywords — the Slack message already shows which keyword matched
- Set searchComments to false in the Apify input to cut cost and noise
- Wire the classifier's ignore output to Log Mention to Sheet to keep a record without alerting

## Additional info
Uses the verified Apify community node. On n8n Cloud, only the workspace owner can install it; an Install button appears inside the node.

## 🔗 Nodes Used

Google Sheets, Slack, Discord, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
