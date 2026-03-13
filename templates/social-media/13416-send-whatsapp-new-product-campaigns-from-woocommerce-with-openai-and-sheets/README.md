# 📱 Send WhatsApp new product campaigns from WooCommerce with OpenAI and Sheets

> ⚡ **11 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

## Who Is This For?
This workflow is perfect for e-commerce store owners using WooCommerce who want to automatically announce new products to their customers through personalized WhatsApp messages. It's ideal for businesses looking to increase product visibility and drive sales without manual outreach efforts.

## What This Workflow Does
This workflow automatically announces new WooCommerce products by extracting product images and converting HTML descriptions into concise, bullet-pointed features using OpenAI. It retrieves and formats customer data, including names, phone numbers, and addresses, and verifies which numbers are registered on WhatsApp via the Rapiwa API. Personalized messages containing product details, images, purchase links, and bullet-point features are sent to verified contacts, while all outreach is logged in Google Sheets, tracking which numbers were verified and messages successfully sent versus unverified or not sent.
## Key Features
* Triggers automatically for new WooCommerce products
* Extracts and processes product images and media
* Converts HTML descriptions into concise AI-powered bullet points
* Verifies WhatsApp numbers before sending
* Sends personalized WhatsApp messages with product info and images
* Updates Google Sheets with verification and delivery status
* Adds delays to prevent API rate limits
* Manages both verified and unverified numbers

## Requirements
* **WooCommerce API Access** (to retrieve product and customer data)
* **Google Sheets OAuth2** (for tracking outreach)
* **OpenAI API** (for processing product descriptions)
* **Rapiwa API** (for WhatsApp verification and messaging)
### . Prepare Your Google Sheet
Create a Google Sheet with columns for: name, number, verify, and status to track customer outreach.
### . Customize the Workflow
* Adjust the **WooCommerce Trigger** to specify which product events should trigger announcements
* Modify the **message template** in the Rapiwa node to match your brand voice
* Update the **Google Sheet ID** in both ""Save data"" nodes to point to your tracking sheet

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, WooCommerce Trigger, WooCommerce, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
