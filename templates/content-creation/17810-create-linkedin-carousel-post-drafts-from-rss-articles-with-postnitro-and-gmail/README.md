# 🎬 Create LinkedIn carousel post drafts from RSS articles with PostNitro and Gmail

> ⚡ **6 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow polls the TechCrunch RSS feed for new articles, uses PostNitro to generate carousel content from each article URL, creates a PostNitro draft scheduled for the next day (LinkedIn document format), and sends Gmail notifications for both successful draft creation and generation failures.

## How it works
1. Runs every minute when the TechCrunch RSS feed has new items.
2. Limits processing to the first 10 RSS items received in a run.
3. Sends each article link to PostNitro AI to generate a carousel design from the article URL.
4. Creates a PostNitro scheduled post in DRAFT status for the generated design, scheduled for one day in the future with LinkedIn document settings.
5. Sends a Gmail email confirming the new draft is ready for review.
6. If PostNitro AI generation errors, sends a Gmail email with the error and the article link.

## Setup
1. Add PostNitro API credentials and update the brand ID, preset ID, template ID, and selected account IDs to match your PostNitro workspace.
2. Add Gmail OAuth2 credentials and set the recipient address and message content for both notification emails.
3. Update the RSS feed URL and polling interval to the source you want to monitor.
4. Adjust the item limit and the scheduled time offset (currently +1 day) to match how many articles you want to process and when drafts should be created.

## 🔗 Nodes Used

Gmail, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
