# 🎬 Analyze LinkedIn top posts with Apify and OpenAI and log 7 ideas to Sheets

> ⚡ **31 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow helps you turn your best-performing LinkedIn posts into a repeatable content creation system. It pulls LinkedIn post data from Apify, normalizes and ranks the posts by impressions, identifies the strongest-performing content, and sends the top posts to OpenAI for pattern analysis. Based on those insights, it generates 7 new LinkedIn post ideas, then saves both the insights and generated posts to Google Sheets for easy review and planning.

It is ideal for founders, creators, consultants, marketers, and social media teams who want to use real LinkedIn performance data to guide new content creation with a faster and more structured workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
