# 📊 Competitor LinkedIn monitor with Airtop

> ⚡ **953 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Automating LinkedIn Competitive Monitoring

## Use Case

Automatically track and summarize LinkedIn posts from key executives at competitor companies. This agent provides structured insights into hiring trends, product announcements, strategic shifts, and thought leadership, helping teams stay informed and responsive without manual monitoring.

## What This Automation Does

This automation monitors and summarizes LinkedIn posts from competitor profiles and shares the results on Slack. It uses the following input parameters:

* **Airtop Profile**: A browser profile authenticated to LinkedIn. [Create one](https://portal.airtop.ai/browser-profiles)
* **Google Sheet**: A document listing LinkedIn profile URLs of competitors, [copy this one](https://docs.google.com/spreadsheets/d/1TknyHS8ie0KONgF4-KFGR76I74egHLt7-M9sIxjQXGY/edit?usp=sharing).
* **Slack Channel**: The destination for sharing summarized post insights.

## How It Works

1. **Trigger**: The workflow is scheduled to run weekly at a specific time.
2. **Data Collection**: Retrieves the list of competitor LinkedIn URLs from a Google Sheet.
3. **Browser Automation**: Uses Airtop to navigate to each LinkedIn profile and analyze up to 5 recent posts.
4. **Summarization**: Summarizes number of recent posts, main topics, and engagement levels using Airtop’s AI.
5. **Slack Notification**: Posts a formatted summary to a predefined Slack channel.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys) — free to generate.
2. An [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated to LinkedIn.
3. Google Sheet with competitor post URLs, [copy this one](https://docs.google.com/spreadsheets/d/1TknyHS8ie0KONgF4-KFGR76I74egHLt7-M9sIxjQXGY/edit?usp=sharing).
4. Slack Bot credentials with access to the target channel.

## Next Steps

* **Expand Coverage**: Add more competitor profiles to the Google Sheet to scale monitoring.
* **Integrate with CRM**: Feed summarized insights into your CRM for competitor tracking.
* **Enhance Analysis**: Include post-level engagement metrics over time for trend analysis.

Read more about [competitve analysis using Linkedin](https://www.airtop.ai/automations/competitor-linkedin-monitor-n8n)

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
