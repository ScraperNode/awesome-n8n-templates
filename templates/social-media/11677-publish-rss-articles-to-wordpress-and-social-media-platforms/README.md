# 📱 Publish RSS articles to WordPress and social media platforms

> ⚡ **93 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who it's for
This **n8n workflow** automatically fetches RSS articles, extracts featured images, and publishes them across multiple social media platforms. The workflow runs on a schedule, processes news articles from an RSS feed, extracts the main image from each article, and posts the content with images to various platforms including WordPress, Facebook, Telegram, LinkedIn, and Discord.

## Features
* **Scheduled Publishing**: Auto-posts content on your set schedule
* **RSS Integration**: Fetches latest articles from specified sources
* **AI Image Extraction**: Identifies and extracts featured images
* **Image Optimization**: Downloads and resizes for platform-ready display
* **Multi-Platform Posting**: Supports WordPress, Facebook, Telegram, LinkedIn, Discord
* **Notifications**: Confirms posts via WhatsApp, Telegram, Gmail, and Discord
* **Content Validation**: Ensures valid images before posting

## How It Works
1. The workflow triggers on a schedule to check for new RSS articles
2. It reads the RSS feed from the configured news source
3. Each article's link is processed by an AI agent to extract the featured image URL
4. The image is downloaded and converted to binary data
5. The content is published simultaneously to:
   - WordPress as a blog post with the image set as featured
   - Facebook as an image post
   - Telegram channel as an image post
   - LinkedIn (both personal profile and company page)
   - Discord channel
6. After successful publishing, notifications are sent to multiple channels

## Requirements
- **OpenAI API credentials** for image extraction using the AI Agent
- **WordPress API credentials** for posting articles and media
- **Facebook Graph API credentials** for page posting
- **Telegram Bot API credentials** for channel posting
- **LinkedIn OAuth2 API credentials** for profile and company page posting
- **Discord Bot API credentials** for channel posting
- **Rapiwa API credentials** for WhatsApp notifications
- **Gmail OAuth2 credentials** for email notifications

## Important Notes
- **RSS Feed Configuration**: The workflow requires a valid RSS feed URL to function properly
- **Image Processing**: All images are resized to 5000x5000 pixels for consistency
- **Content Validation**: The workflow includes a check to ensure valid image URLs exist before proceeding with posting
- **Platform-Specific Formatting**: Each platform receives appropriately formatted content and image dimensions
- **Notification System**: After successful posting to all platforms, confirmation messages are sent via multiple channels


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
