# 📊 Track competitor pricing and news changes in Google Sheets with Gemini, Gmail and Slack

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Monitor competitor websites and news automatically every week. Built for founders, marketers and sales teams, this workflow detects pricing, product and messaging changes, uses Google Gemini to rate what matters to your business, logs every change in Google Sheets and sends a short brief by Gmail and Slack.

## How it works
1. Runs every Monday at 8 AM (you can change the schedule).
2. Reads your competitor pages and last week's snapshots from Google Sheets, skipping rows marked as inactive.
3. Fetches each page, turns the HTML into clean text and compares it line by line with the last snapshot.
4. Saves each page's status and text to the Snapshots tab. If a fetch fails, the last good copy is kept, so outages are never reported as changes.
5. Sends only the changed lines to Google Gemini, which rates each change, labels it and explains why it matters. Noise is dropped and real changes go to the Change Log tab.
6. Collects each competitor's headlines from the last 7 days with Google News RSS (no API key needed).
7. Gemini writes a weekly brief with top moves, threats, opportunities and recommended actions, sent as an HTML email via Gmail and as a summary to Slack.

## Setup
1. Create a Google Sheet with three tabs and these header rows. Competitors: Competitor, Page URL, Page Type, News Keywords, Active. Snapshots: Page URL, Competitor, Page Type, Status, Last Checked, Last Changed, Content. Change Log: Date, Competitor, Page Type, Page URL, Significance, Change Type, Headline, What Changed, Why It Matters.
2. Add one row per competitor page to watch in the Competitors tab. Set Active to "no" to pause a row.
3. Open the Settings node: paste your Google Sheet URL, describe your company and what you sell, and enter the email recipients.
4. Connect Google Sheets (four nodes), Gmail (Email Brief) and a free Google Gemini API key from aistudio.google.com (both Gemini nodes).
5. Connect Slack and set your channel in Post to Slack (default #competitor-intel), or delete that node.
6. Click Execute workflow once to save a baseline, then publish the workflow so it runs every week.

## Requirements
- Google account with Google Sheets and Gmail
- Google Gemini API key (the free tier works for weekly runs)
- Slack workspace (optional)

## Customization
- Change the schedule in the Every Monday 8 AM node. Daily works well for pricing pages.
- Edit the significance rules in the AI Change Analyst prompt to match your market.
- Use the News Keywords column (for example "Notion" software) when a competitor has a common name.
- Replace Fetch Page with a scraping API such as Firecrawl for sites that load content with JavaScript.
- Swap Gemini for another model by replacing the two Gemini chat model nodes.

## Additional info
- The first run only saves a baseline. Change reports start from the second run; news is included from the first run.
- Only the changed lines of each page are sent to the AI, so a weekly run needs very few AI calls. If you hit the Gemini free tier's daily limit, pick another Flash model in the Gemini nodes or enable billing.
- Only monitor public pages, and respect each website's terms of use.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
