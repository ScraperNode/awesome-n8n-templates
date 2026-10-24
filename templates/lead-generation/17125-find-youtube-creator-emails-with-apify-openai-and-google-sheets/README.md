# 🎣 Find YouTube creator emails with Apify, OpenAI and Google Sheets

> ⚡ **87 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow searches YouTube via Apify for videos matching a keyword, deduplicates the resulting channels, scrapes each channel’s About description, uses OpenAI to extract contact email addresses, and appends channels with emails to a Google Sheets tab.

## How it works
1. Starts when you manually execute the workflow.
2. Sends a keyword-based search request to the Apify YouTube Scraper to retrieve recent YouTube results and their channel URLs.
3. Deduplicates the results so each channel URL is processed only once.
4. Scrapes each channel’s About/description data using an Apify YouTube Scraper request.
5. Uses OpenAI to extract and de-obfuscate any email addresses found in the channel description.
6. Keeps only channels where at least one email address was extracted.
7. Appends the channel name, channel URL, extracted emails, search query, and the current date to Google Sheets.

## Setup
1. Add an Apify API token using an HTTP Header Auth credential (Authorization: Bearer <token>) and connect it to both Apify HTTP Request steps.
2. Add an OpenAI API key credential and choose the model name you want to use in the Configuration values.
3. Connect your Google Sheets OAuth credential, then set the target spreadsheet document ID and sheet/tab (for example, the “creator_emails” sheet).

## Additional info
# Find YouTube creator emails with OpenAI and save them to Google Sheets

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Find-YouTube-creator-emails-with-OpenAI-and-save-them-to-Google-Sheets-39d3d6550fd981499d2bcb788aabc262)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
