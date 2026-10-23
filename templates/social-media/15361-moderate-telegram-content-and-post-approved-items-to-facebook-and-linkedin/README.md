# 📱 Moderate Telegram content and post approved items to Facebook and LinkedIn

> ⚡ **140 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works

1. Triggers when a Telegram callback query is received.
2. Evaluates the message with a conditional statement.
3. Directs the flow based on language or action choice.
4. Fetches data from Google Sheets once confirmed.
5. Posts the confirmed content to Facebook and LinkedIn.

## Setup steps

- Configure Telegram credentials in the Telegram Trigger and other Telegram nodes.
- Set up Google Sheets API access for the 'Get row(s) in sheet' node.
- Set up Facebook Graph API access.
- Configure LinkedIn API access for the 'Create a post' node.

## Customization

Adjust the language-specific nodes to handle any additional languages needed.

## Part of the AI Content Master system

This workflow works together with the Generator workflow:
- 👉 AI Content Master — Multilingual Content Generator with GPT-4o and Telegram: https://n8n.io/workflows/15360

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Facebook Graph API, LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
