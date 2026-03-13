# 📊 Automatically collect bug bounty tips from Twitter to Google Sheets

> ⚡ **336 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
Automatically monitors Twitter for bug bounty tips and educational content every 4 hours, then saves valuable insights to Google Sheets for easy reference and organization.

## Set up steps
- Get your API key from https://twitterapi.io/ (free tier available)
- Configure Google Sheets credentials in n8n
- Create a Google Sheet with the required columns
- Update the Sheet ID in the final node

## What you'll get
A continuously updated database of bug bounty tips, techniques, and insights from the security community, perfectly organized in Google Sheets with:
- Tweet content and URLs
- Engagement metrics (likes, retweets, replies)
- Formatted timestamps for easy sorting
- Automatic duplicate prevention

Perfect for security researchers, bug bounty hunters, and cybersecurity professionals who want to stay updated with the latest tips and techniques from Twitter's security community.

![image.png](fileId:2299)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
