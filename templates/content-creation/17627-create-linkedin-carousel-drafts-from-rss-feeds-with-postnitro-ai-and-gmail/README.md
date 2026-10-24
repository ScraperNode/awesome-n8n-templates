# 🎬 Create LinkedIn carousel drafts from RSS feeds with PostNitro AI and Gmail

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow polls the TechCrunch RSS feed for new articles, uses PostNitro AI to generate a LinkedIn carousel design from each article URL, saves it as a draft scheduled for the next day, and sends a Gmail notification for review or an error alert.

## How it works
1. Polls the TechCrunch RSS feed every minute for new articles.
2. Limits processing to one article per poll cycle.
3. Sends the article URL to PostNitro AI to generate a carousel design.
4. If generation succeeds, creates a PostNitro scheduled post in DRAFT status for LinkedIn and schedules it for one day later.
5. Emails a Gmail notification with the draft details and a review link.
6. If generation fails, emails a Gmail alert with the error information and the article URL.

## Setup
1. Add PostNitro API credentials and confirm the Brand ID, Preset ID, Template ID, and LinkedIn account ID used for creating drafts.
2. Add Gmail OAuth2 credentials and update the recipient email address used for success and error notifications.
3. Confirm or replace the RSS feed URL and polling frequency to match the source you want to monitor.
4. Update the review link in the success email body to the correct PostNitro app URL for your workspace.

## 🔗 Nodes Used

Gmail, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
