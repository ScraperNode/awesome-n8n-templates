# 📊 Flag Meta ad creative fatigue with Facebook Graph API and send ranked reports to Slack

> ⚡ **44 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning, pulls 14 days of daily ad-level insights from the Meta (Facebook Graph) API, detects creative fatigue by comparing yesterday’s CTR to each ad’s own historical average, and posts a ranked fatigue report to Slack via an incoming webhook.

## How it works
1. Runs daily on a cron schedule (default 10:00).
2. Loads configuration values such as the lookback window and fatigue thresholds.
3. Retrieves daily ad-level insights from the Meta (Facebook Graph) API for the configured ad account, including CTR, spend, and impressions.
4. Calculates each ad’s CTR drop by comparing yesterday’s CTR to that same ad’s average CTR across prior running days that meet minimum spend and impression thresholds, then labels ads as WARN/WATCH/OK/NEW and ranks the biggest drops.
5. Sends a formatted, monospaced Slack message containing the ranked table and summary counts to your Slack channel using an incoming webhook.

## Setup
1. Create or connect Facebook Graph API credentials with access to the target Meta ad account.
2. Set environment variables for META_AD_ACCOUNT_ID (your act_… ID) and SLACK_WEBHOOK_URL (your Slack incoming webhook URL).
3. Review and adjust the thresholds in the Config step (warnPct, watchPct, minSpend, minImpr, and minShowDrop) to match your reporting sensitivity.
4. Activate the workflow and confirm the Slack webhook posts successfully at the scheduled time.

## Requirements
- A Meta ad account with active, spending ads. A Facebook Graph API credential (access token with ads_read on that account).
- A Slack workspace with an incoming webhook URL. 

## Customization
- Swap the Slack node for email, Microsoft Teams, or a dashboard. Adjust warnPct, watchPct, minSpend, and minImpr in Config to match your account size and sensitivity. 
- Change the schedule time or trigger it manually. 
- For accounts with more than ~35 active ads, add pagination on the Facebook Graph API node to read beyond the first 500 daily rows. Extend the report with ad-set or campaign-level rollups.

## 🔗 Nodes Used

HTTP Request, Facebook Graph API, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
