# 📱 Route Telegram channel posts to X, Threads, and LinkedIn using @mentions

> ⚡ **90 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow listens to messages in a designated Telegram channel and automatically posts them to X (Twitter), Threads, and LinkedIn based on simple @mention tags. Write your content once, tag which platforms you want, and let automation handle the rest.

Key Features

1. Smart Channel Routing: Use @mentions to specify destinations (@x, @threads, @linkedin, or @all)
2. Clean Message Parsing: Automatically removes @mentions and hashtags before posting
3. Success Notifications: Get confirmation messages in Telegram when posts succeed
4. Error Handling: Receive alerts for invalid channel tags or posting failures
5. Multi-Platform Support: Post to X, Threads, and LinkedIn simultaneously or individually
6. Bitwise Flag System: Efficient routing logic using binary flags for platform selection

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, X (Formerly Twitter), LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
