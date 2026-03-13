# 🎬 Generate, translate and publish AI content to WordPress and socials with GPT-4.1 and Google Sheets

> ⚡ **23 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for
This **n8n workflow** is designed for content creators, digital marketers, and social media managers who want to automate their entire content creation and publishing process across multiple platforms. It provides a complete end-to-end system capable of taking a **single specific idea** and automatically generating a full piece of content from it—complete with images, translations, and platform-optimized formatting. The workflow then publishes the final content to WordPress, Facebook, LinkedIn, and Telegram.

## **Features**
* **Multi-platform publishing:** WordPress, Facebook, LinkedIn, Telegram
* **AI-powered content generation using OpenAI (LangChain):** Can generate a **full article or content piece from a single specific idea or topic**
* **Multi-language support:** Automatic translation via Google Translate API
* **Automatic image processing:** Resizing, optimization, and WordPress upload
* **Google Sheets integration:** For topic management, content queueing, and status tracking
* **Notifications:** Send updates via Discord, Telegram, WhatsApp, and Gmail
* **Flexible workflow triggers:** Supports both manual form submissions and automated scheduled publishing


## Requirements
- OpenAI API access for content generation
- Google Translate API credentials
- WordPress API access
- Social media API credentials (Facebook, Telegram, LinkedIn)
- Google Sheets OAuth2 credentials
- Google Drive access for image storage

#### Configure Credentials
- **Google APIs**: Configure Google Sheets, Google Drive, and Google Translate with proper OAuth2 credentials
- **OpenAI API**: Set up with appropriate model access (gpt-4.1-mini)
- **WordPress API**: Configure with your WordPress site credentials
- **Social Media APIs**: Set up each platform with proper API keys and target IDs
- **Notification Services**: Configure each service with proper API keys and target IDs

## Important Notes
* Form captures topic, type, user, word count, company info, domain, language, and image
* AI content generation uses customizable prompts
* Images resized up to 5000x5000 px before upload
* Content can be translated via Google Translate API
* Workflow publishes text and image posts across platforms
* Google Sheets tracks content status in real-time

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Telegram, Google Drive, Discord

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
