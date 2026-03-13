# 🎣 Scrape RSS job posts, deduplicate with Google Sheets, and send Telegram alerts

> ⚡ **51 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **Who is this for**


This workflow is perfect for job seekers, recruiters, freelancers, and anyone actively monitoring job boards who wants to automate their search — getting instant Telegram alerts for new matching jobs without manually refreshing pages or missing time-sensitive postings.

## **What this workflow does**
It automatically scrapes job posts from RSS feeds or job board APIs on a schedule, filters them by your target roles, locations, and keywords, deduplicates results against previously seen jobs stored in Google Sheets, and sends formatted Telegram alerts with job details and direct apply links for every new matching position.

## **How it works**


- Schedule Trigger runs every 6 hours (configurable) to check for new job posts.
- HTTP Request fetches job data from an RSS feed or job board API (default: RemoteOK).
- Parse & Extract normalizes raw data into clean job objects with title, company, location, URL, salary, tags, and posting date.
- Keyword Filter matches jobs against your configurable target roles, locations, and exclude terms — only relevant jobs pass through.
- Deduplication checks each job against a Google Sheet of previously seen jobs. Only truly new jobs continue.
- Log to Sheet saves every new job to Google Sheets for tracking and history.
- Telegram Alert sends a formatted message with job details, tags, salary, and a direct apply link.

## **Setup steps**

- Schedule — Adjust the interval in the Schedule Trigger node (default: every 6 hours). Set to every 1 hour for active searches.
- Job Source URL — Replace the URL in the HTTP Request node with your target job board RSS feed or API endpoint. Examples: RemoteOK (https://remoteok.com/api), Arbeitnow (https://www.arbeitnow.com/api/job-board-api), or any RSS feed from LinkedIn, Indeed, etc.
- Keywords — Edit the arrays in the Keyword Filter node: targetRoles, targetLocations, and excludeTerms.
- Google Sheets — Connect your Google Sheets OAuth credential. Create a spreadsheet with columns: Title, Company name, Location, Url, Description, Posted date, Salary, Matched Role, Scraped date. Set the spreadsheet ID in both Sheet nodes.
- Telegram — Create a bot via @BotFather, get your Chat ID, connect the Telegram credential, and set your Chat ID in the alert node.
- Test — Run the workflow manually once to verify jobs flow through correctly.

## **Requirements**


- Google Sheets account with OAuth credentials
- Telegram bot (created via @BotFather) with bot token and chat ID
- n8n instance (cloud or self-hosted)
- A job board with an RSS feed or public API

## **How to customize**

- Add multiple HTTP Request nodes for different job boards and merge results with a Merge node.
- Change the cron to every 1 hour for high-priority searches.
- Add salary range filtering in the keyword filter code.
- Replace Telegram with Slack, Discord, WhatsApp, or email alerts.
- Add an AI node (Ollama, OpenAI) to score and rank jobs by relevance before alerting.
- Adjust the Parse & Extract node field mappings when switching to a different job board API.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
