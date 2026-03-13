# 📱 Automate LinkedIn content from Twitter AI posts with GPT-4 and Google Sheets

> ⚡ **999 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

How it works
- Automates daily LinkedIn post creation from trending AI tweets.
- Fetches latest tweets, processes content, checks for duplicates, converts to LinkedIn-ready format, schedules, and posts automatically.

Set up steps
- Setup required: Google Sheets, LinkedIn, Telegram, RapidAPI, and OpenAI/OpenRouter API credentials.
- Approximate setup time: 30-45 mins for all integrations and triggers.
- Detailed credential/config instructions are in sticky notes inside the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, LinkedIn, Schedule Trigger, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
