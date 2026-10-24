# 💬 Reply to Instagram DMs with keyword-based affiliate links via Meta Graph API

> ⚡ **296 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow is an automated Instagram DM responder that checks messages and replies with affiliate links based on keywords.

It runs on a schedule (every 15 minutes) or can be triggered manually. First, it loads configuration values such as the Meta access token and Instagram user ID. It then fetches conversations from all Instagram DM folders (Inbox, General, Pending, and Message Requests), merges them, and removes duplicates.

Each conversation is processed one by one. The workflow retrieves messages and loads two local files: one containing previously replied message IDs, and another containing product definitions with keywords and affiliate URLs.

For each message, it skips those already replied to or sent by the account itself. It then checks if the message text contains any defined keyword. If a match is found, it prepares a reply using the corresponding product link.

The workflow sends the reply through the Meta Graph API and immediately logs the message ID to prevent duplicate responses in future runs.

Overall, it automates repetitive DM replies, supports multiple products via keyword matching, and ensures messages are only handled once.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
