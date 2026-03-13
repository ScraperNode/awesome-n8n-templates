# 💬 Automatically send WhatsApp discount codes to Shopify customers using Rapiwa

> ⚡ **73 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automatically Send WhatsApp Discount Codes to Shopify Customers Using Rapiwa

## Who is this for?
This n8n workflow **automatically sends WhatsApp promotional messages to top customers** whenever a new discount code is created in Shopify. It’s perfect for store owners, marketers, sales teams, or support agents who want to engage their best customers effortlessly. The workflow fetches customer data, filters high-spending customers, verifies their WhatsApp numbers using the Rapiwa API, sends discount messages to verified contacts, and logs all activity in Google Sheets. Designed for non-technical users who don’t use the official WhatsApp Business API, this automation simplifies customer outreach and tracking without any manual work.

## What this Workflow Does
This **n8n workflow** connects with a **Google Sheet** that contains a list of contacts. It reads rows marked for processing, cleans the phone numbers, checks their validity using **Rapiwa's WhatsApp validation API**, sends WhatsApp messages to valid numbers, and updates the status of each row accordingly.



## Key Features
- **Runs Every 5 Minutes**: Automatically triggers the workflow
- **Google Sheets Integration**: Reads and writes data from a specific sheet
- **Phone Number Validation**: Confirms if a WhatsApp number is active via Rapiwa API
- **Message Sending**: Sends a message using Rapiwa's `/send-message` endpoint
- **Status Update**: Sheet is updated with success or failure status
- **Safe API Usage**: Delays added between requests to prevent rate limits
- **Batch Limit**: Processes max 60 rows per cycle
- **Conditional Checks**: Skips rows without a "check" value

## Requirements
- A **Google Sheet** with necessary columns
- **Rapiwa account** with active subscription (you can free 200 message)
- Your WhatsApp number connected to Rapiwa
- Valid **Bearer Token**
- **n8n Instance** (self-hosted or cloud)
  - Google Sheets node configured
  - HTTP Request node access


## How to Use
### Step-by-Step Setup

1. **Webhook**
   - Receives Shopify Webhook (discount creation) via HTTP POST request.  
This is triggered when a discount is created in your Shopify store.

1. **Configure Google Sheets in n8n**
   - Use the Google Sheets node with OAuth2 access

2. **Get Rapiwa API Token**
   - Create an account on [Rapiwa](https://rapiwa.com/pricing/)
   - Connect your WhatsApp number
   - Copy your **Bearer Token** from the Rapiwa dashboard

3. **Set Up HTTP Request Nodes**
   - Validate number via: `https://app.rapiwa.com/api/verify-whatsapp`
   - Send message via: `https://app.rapiwa.com/api/send-message`
   - Add your bearer token to the headers

---

## Google Sheet Column Structure
- **A Google Sheet** formatted like this ➤ [Sample](https://docs.google.com/spreadsheets/d/1Zx_WXQW29NsITFPJ-SnjHgOlouvzG_sBNGzSA_B8cSA/edit?usp=sharing)


| discount_code   | created_at                | shop_domain             | name           | number        | verify     | status   |
| -------------------------------------------- | ------- | ------------------------- | ----------------------- | -------------- | ------------- | ---------- | -------- |
| V8ZGVRDFP5TB | 2025-09-25T05:26:40-04:00 | your_shop_domain | Abdul Mannan    | 8801322827798| unverified | not sent |
| V8ZGVRDFP5TB | 2025-09-25T05:26:40-04:00 | your_shop_domain | Abdul Mannan         | 8801322827799| verified   | sent     |


---

## Support & Help
- **Rapiwa Website:** [https://rapiwa.com](https://rapiwa.com/)
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
