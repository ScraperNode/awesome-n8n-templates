# 🎬 Automated NASA Image & Content Publisher for WordPress and Multi-Social Media

> ⚡ **6 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who Is This For?
This workflow is perfect for content creators, digital marketers, and social media managers who want to automatically syndicate their content across multiple platforms. It's ideal for businesses, bloggers, and media outlets looking to maintain a consistent presence across WordPress, Facebook, Instagram, Telegram, and LinkedIn without manual posting efforts.

## What This Workflow Does
This workflow automates content distribution by monitoring RSS feeds and NASA's Picture of the Day API. It downloads images, applies branded watermarks with custom text and borders, resizes them for optimal display, and publishes the content with captions to multiple social platforms simultaneously. The workflow creates WordPress posts with featured images, shares to Facebook pages, posts to Instagram business accounts, sends to Telegram channels, and publishes to both LinkedIn profiles and company pages.

## Key Features
* Monitors RSS feeds and NASA API for new content
* Downloads and processes images automatically
* Adds branded watermarks with custom text, borders, and colors
* Resizes images to optimal dimensions (1080x1080)
* Creates WordPress posts with featured images and metadata
* Posts to Facebook pages with image and caption
* Publishes to Instagram business accounts
* Sends content to Telegram channels
* Posts to both LinkedIn profiles and company pages
* Maintains consistent branding across all platforms
* Handles multiple content sources in parallel

## Requirements
* **RSS Feed URLs** (content sources to monitor)
* **WordPress API Credentials** (for creating posts and uploading media)
* **Facebook Graph API Access** (for page and Instagram posting)
* **Telegram Bot API Token** (for channel posting)
* **LinkedIn OAuth2 Credentials** (for profile and page posting)
* **Image Processing Tools** (built into n8n)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Edit Image, HTTP Request, RSS Read, Telegram, Wordpress, Facebook Graph API

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
