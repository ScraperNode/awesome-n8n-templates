# 📱 Send bulk WhatsApp promos for new Shopify products with OpenAI and Sheets

> ⚡ **8 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who Is This For?
This workflow is perfect for e-commerce store owners using Shopify who want to automatically announce new products to their customer base through personalized WhatsApp messages. It's ideal for businesses looking to increase product visibility and drive sales without manual outreach efforts.

## What This Workflow Does
This workflow automatically sends WhatsApp product announcements whenever a new product is added to your Shopify store. It processes product data by extracting images, generating product links, and converting HTML descriptions into clean, bullet-point feature lists using OpenAI. Customer data is pulled from Shopify, formatted, and phone numbers are verified on WhatsApp via the Rapiwa API. Personalized messages with product images, features, and purchase links are sent only to verified numbers. All verification and messaging activity is logged in Google Sheets, clearly tracking which contacts were verified and successfully reached.

## Features
* **Shopify Integration** that triggers automatically when new products are created
* **Image Processing** to extract and filter valid product images from Shopify
* **Product URL Generation** to create direct links to new products
* **AI-Powered Description Conversion** using OpenAI to transform HTML descriptions into concise bullet points
* **Customer Data Retrieval** from Shopify store via API
* **WhatsApp Number Verification** using Rapiwa to check if customer numbers are valid WhatsApp accounts
* **Personalized WhatsApp Messaging** with product details, features, and images
* **Dual-Path Logging** to Google Sheets, tracking both verified (sent) and unverified (not sent) messages
* **Batch Processing** to handle multiple customers efficiently
* **Rate Limiting** with wait steps to avoid API restrictions

## Requirements
- **Shopify Access Token API credentials** for accessing product and customer data
- **OpenAI API credentials** for converting HTML descriptions to bullet points
- **Rapiwa API credentials** for WhatsApp number verification and messaging
- **Google Sheets OAuth2 credentials** for logging message delivery status

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Shopify Trigger, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
