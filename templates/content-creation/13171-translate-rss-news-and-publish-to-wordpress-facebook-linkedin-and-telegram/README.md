# 🎬 Translate RSS news and publish to WordPress, Facebook, LinkedIn and Telegram

> ⚡ **55 views** · 🎬 [Content Creation & Video](../)

## Description

## Who it's for
This **n8n workflow** is designed for content curators, digital marketers, and social media managers who want to automate the process of discovering, translating, and publishing news content from multiple reputable sources. It provides a complete end-to-end system capable of **reading RSS feeds**, extracting articles and images, translating them into a specific language, and automatically publishing the final content to WordPress, Facebook, LinkedIn, and Telegram.

## **Features**
- Reads news from multiple RSS sources (TechCrunch, The - Verge, Analytics India Mag, Wired, The Next Web)
- Publishes content to WordPress, Facebook, LinkedIn Profile, LinkedIn Page, and Telegram
- Supports multiple languages with automatic translation (Bengali configured)
- Extracts article images, resizes them, adds watermarks, and uploads to WordPress
- Automatically creates WordPress posts and sets featured images
- Sends notification updates through Discord, Telegram, WhatsApp, and Gmail
- Runs automatically every hour
- Processes multiple articles from different feeds at once

## Requirements
- Google Translate API credentials for translation
- WordPress API access for content and media management
- Social media API credentials (Facebook, Telegram, LinkedIn)
- Notification service credentials (Discord, WhatsApp, Gmail)
- Access to the specified RSS feeds

## Important Notes
* Workflow runs on an hourly schedule to fetch the latest news
* Extracts featured images from articles and processes them for publication
* Content is automatically translated to Bengali (language code: "bn")
* Images are resized and watermarked before social media posting
* WordPress posts are created with translated content and featured images
* Notifications are sent after processing all items from the RSS feeds
* The workflow includes wait periods to prevent API rate limiting

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Edit Image, HTTP Request, RSS Read, Telegram, Discord, Wordpress

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
