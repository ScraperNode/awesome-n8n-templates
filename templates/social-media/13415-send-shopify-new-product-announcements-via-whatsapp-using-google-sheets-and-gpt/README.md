# 📱 Send Shopify new product announcements via WhatsApp using Google Sheets and GPT-4.1 mini

> ⚡ **9 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?
This workflow is designed for e-commerce store owners, digital marketers, and Shopify merchants who want to automate their product announcement and marketing campaigns. It's particularly useful for businesses that rely on WhatsApp marketing to inform customers about new products and want to streamline their notification process while ensuring message delivery to verified numbers only.

## Key Features
* Triggers automatically for new Shopify products
* Extracts and processes product images and media
* Converts HTML descriptions into concise AI-powered bullet points
* Verifies WhatsApp numbers before sending
* Sends personalized WhatsApp messages with product info and images
* Updates Google Sheets with verification and delivery status
* Adds delays to prevent API rate limits
* Manages both verified and unverified numbers

## Workflow Does
This workflow automates announcing new Shopify products via WhatsApp. It extracts product images, converts HTML descriptions into AI-powered bullet points, fetches customer contacts from Google Sheets, verifies WhatsApp numbers, and sends personalized messages with product details. Message status is tracked in Google Sheets, marking numbers and messages appropriately, with built-in rate limiting to ensure smooth delivery.

## Requirements
- Shopify store with webhook access for product creation events
- Google Sheets account with customer contact information
- Rapiwa account for WhatsApp verification and messaging
- OpenAI API credentials for text processing
- Properly configured Google Sheets with columns for: `WhatsApp numbers`, `Customer names`, `Verification status, `Message status`, `Product URLs`

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, Shopify Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
