# 📱 Share new Shopify products to WordPress, Facebook, Instagram, LinkedIn and more using OpenAI

> ⚡ **23 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for
This **n8n workflow** is designed for Shopify store owners, e-commerce managers, and digital marketers who want to automate their product promotion across multiple platforms. The workflow automatically creates promotional content for new products and distributes them across various social media and content management platforms.

## Key Features
* Automatically detects new Shopify products
* AI converts product descriptions into clear bullet points
* Optimizes images for each platform
* Publishes formatted posts to WordPress
* Shares content across multiple social platforms
* Sends notifications after successful posts

## Requirements
- **Shopify Access Token**: For detecting new products in your store
- **OpenAI API Credentials**: For enhancing product descriptions
- **WordPress API Credentials**: For creating posts and uploading media
- **Social Media Platform Credentials**:
  - Facebook Graph API
  - Telegram Bot API
  - LinkedIn OAuth2 API
  - Discord Bot API
- **Notification Service Credentials**:
  - Gmail OAuth2
  - Rapiwa API (for WhatsApp)

## Workflow Steps
1. **Shopify Trigger**: Detects when a new product is created in your Shopify store
2. **Image Processing**: Extracts and processes product images from the Shopify data
3. **Content Enhancement**: Uses OpenAI to convert HTML product descriptions into concise, customer-friendly bullet points
4. **WordPress Integration**: Creates a blog post on your WordPress site with the product information
5. **Multi-Platform Sharing**: Automatically shares the product on: `Facebook page`, `Telegram channel`, `LinkedIn profile and page`, `Discord channel`, `Instagram`
6. **Notification System**: Sends completion notifications through multiple channels (Telegram, Gmail, Discord, WhatsApp)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Edit Image, HTTP Request, Telegram, Discord, Shopify Trigger, Wordpress

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
