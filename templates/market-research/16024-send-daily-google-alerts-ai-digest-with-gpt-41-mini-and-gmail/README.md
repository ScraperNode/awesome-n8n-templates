# 📊 Send daily Google Alerts AI digest with GPT-4.1-mini and Gmail

> ⚡ **28 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to fetch multiple Google Alerts RSS feeds, uses OpenAI GPT-4.1-mini to score and summarize each alert with sentiment and recommended actions, then compiles the most relevant items into a branded HTML digest and sends it via Gmail.

## How it works
1. Runs every 24 hours on a schedule.
2. Loads a list of Google Alerts RSS feed URLs (with a name and category for each) and fetches each feed as XML.
3. Parses each feed’s Atom entries from the last 48 hours and extracts the title, link, summary, published date, and feed metadata.
4. Skips any feeds that have no recent entries.
5. Sends each parsed alert to OpenAI (GPT-4.1-mini) to generate a relevance score (1–10), one-sentence insight, sentiment, and recommended action.
6. Keeps only alerts with a relevance score of 4 or higher, aggregates them into a single list, and builds a grouped, sorted HTML email digest.
7. Sends the HTML digest email via Gmail with a subject line that reflects the number of relevant alerts.

## Setup
1. Get your Google Alerts RSS feed URL. Go to google.com/alerts, find an existing alert, click the RSS icon at the bottom, and copy the feed URL.
2. Open node 2. Code — Set Alert Feed URLs and replace YOUR_ALERT_NAME with a descriptive name for the alert, replace YOUR_GOOGLE_ALERTS_RSS_URL with the RSS URL you just copied, and set the category value to any label you want (for example Brand Monitoring or Competitor Intelligence). To add more feeds, duplicate the object inside the array following the commented examples in the code.

3. Open the OpenAI — GPT-4.1-mini Model step and connect your OpenAI API credential.

4. Open node 11. Gmail — Send Digest Email, connect your Gmail OAuth2 credential, and replace REPLACE_WITH_YOUR_EMAIL@example.com with your actual email address.

5. Open node 10. Code — Build HTML Email Digest and find YOUR_BRAND_NAME near the bottom of the code in the footer line — replace it with your company or personal name.

6. Activate the workflow. It will run automatically every 24 hours. To test immediately, use the manual Execute option on node 1. Schedule — Every 24 Hours.


## Requirements
- Active n8n instance (self-hosted or cloud)
- One or more Google Alerts set up at google.com/alerts with RSS feed enabled
- OpenAI account with GPT-4.1-mini API access
- Gmail account connected via OAuth2 for sending the digest
- No additional accounts or API keys required — Google Alerts RSS feeds are publicly accessible

## Customization
- Add more Google Alerts feeds — in node 2. Code — Set Alert Feed URLs, duplicate the object inside the alertFeeds array and add any additional RSS feed URL with its own name and category; each feed is fetched and analyzed independently every day
- Lower or raise the relevance filter threshold — in node 8. IF — Filter Relevance (Score 4 or Above), change the value from 4 to any number between 1 and 10 to include more or fewer alerts in the daily digest
- Change the digest frequency — in node 1. Schedule — Every 24 Hours, change the interval from 24 hours to 12 hours for twice-daily digests or to 48 hours for every-other-day delivery
- Add a Slack notification for high-priority alerts — after node 9. Aggregate — Collect All Alerts, add a Slack step that filters for alerts with analysis_relevance of 8 or above and posts a quick message to a brand monitoring channel
- Extend the article lookback window — in node 4. Code — Parse RSS Entries, change the 48 in the hoursDiff comparison to 72 or 96 to catch alerts from the past 3 or 4 days — useful if you run the workflow less frequently

## Additional info
The Google Alerts RSS feed URL must be copied exactly from your Google Alerts dashboard. Go to google.com/alerts, find your alert, and look for the RSS feed icon at the bottom of the alert row. If you do not see the RSS icon, make sure you are signed into your Google account and the alert is set to deliver via RSS.

The workflow parses Atom-format XML which is the format Google Alerts uses for its RSS feeds. Standard RSS XML from other sources uses a different tag structure and may not parse correctly with this workflow without modifying node 4. Code — Parse RSS Entries.

The relevance filter at node 8. IF — Filter Relevance (Score 4 or Above) means alerts GPT scores as 1, 2, or 3 are dropped and never appear in the email. If your digest is empty today, it may mean all alerts scored below 4 — you can temporarily lower the threshold to 1 in that node to test that feeds and parsing are working correctly.

Replace YOUR_BRAND_NAME in node 10. Code — Build HTML Email Digest — this text appears in the email footer and in the subject line that recipients see. Leaving the placeholder unchanged will show YOUR_BRAND_NAME in every email you receive.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
