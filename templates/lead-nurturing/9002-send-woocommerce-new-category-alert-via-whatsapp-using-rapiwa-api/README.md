# 💬 Send WooCommerce new category alert via WhatsApp using Rapiwa API

> ⚡ **229 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Send WooCommerce New Category Alert via WhatsApp Using Rapiwa API

This n8n automation listens for the creation of a new WooCommerce product category, fetches all WooCommerce customers, cleans and formats their phone numbers, verifies them using the Rapiwa WhatsApp validation API, sends a WhatsApp message to verified numbers with the new category info, and logs each interaction into a Google Sheet (separately for verified and unverified customers).

## Who this is for

You have a WooCommerce store and want to:

- Send a promotional message when a new product category is added,  
- Verify customer WhatsApp numbers in bulk,  
- Keep a clear log in Google Sheets of which numbers are verified or not.

## What it does (high level)

1. Webhook is triggered when a new WooCommerce category is created.  
2. Fetches all WooCommerce customers via API.  
3. Limits processing to the first 10 customers (for performance/testing).  
4. Cleans phone numbers (removes `+`, spaces, and non-digits).  
5. Verifies each number via Rapiwa WhatsApp Verify API.  
6. If verified: sends WhatsApp message with new category info, logs as `Verification = verified`, `Status = sent`.  
7. If not verified: logs as `Verification = unverified`, `Status = not sent`.  
8. Processes users in batches with delays to avoid rate limiting.

## How it works (step-by-step)

- **Trigger**: Webhook node is triggered by WooCommerce category creation.  
- **Format Data**: Category details (name, slug, description) are parsed.  
- **Get Customers**: Fetch all WooCommerce customers using the WooCommerce API.  
- **Limit**: Only the first 10 are processed.  
- **Loop & Clean**: Loop over each customer, clean phone numbers and extract info.  
- **Verify Number**: Send HTTP POST to `https://app.rapiwa.com/api/verify-whatsapp`.  
- **Decision Node**: Use `If` node to check if `exists == true`.  
- **Send Message**: If verified, send WhatsApp message with category details.  
- **Append to Sheet**: Log verified and unverified customers separately in Google Sheets.  
- **Wait + Batch Control**: Use `Wait` and `SplitInBatches` nodes to control flow and prevent throttling.

### Example verify body (HTTP Request node):

```json
{
  ""number"": ""{{ $json['WhatsApp No'] }}""
}
```

## Google Sheet Column Reference

| name        | number        | email                        | address                                              | catagoris   | description                                                                                         | status     |
|-------------|---------------|------------------------------|------------------------------------------------------|-------------|-------------------------------------------------------------------------------------------------|------------|
| Abdul Mannan | 8801322827799 | contact@spagreen.net   |  mirpur dohs  | Electronics | SShop top-braxxxxrable tech. | unverified |
| Abdul Mannan | 8801322827799 | contact@spagreen.net | mirpur dohs   | Electronics | Shop top-braxxxxrable tech. | verified   |
| Abdul Mannan  | 8801322827799 | contact@spagreen.net | mirpur doh  | Electronics | Shop top-braxxxxrable tech. | verified   |


## Customization ideas

- Send images, videos, or template messages if supported by Rapiwa.  
- Personalize messages using name or category data.  
- Increase delay or reduce batch size to minimize risk of rate limits.  
- Add a second sheet to log full API responses for debugging and auditing.

## Best practices

- Test on small batches before scaling.  
- Only send messages to users who opted in.  
- Store API credentials securely using n8n’s credentials manager.  
- Ensure your Google Sheet column headers match exactly with what's expected.
---

### Key Improvements Made

- Clarified the **trigger source** as a _Webhook from WooCommerce category creation_.  
- Fixed inconsistency in the **""What it does""** section (originally referenced reading from Google Sheets, but your workflow starts from WooCommerce, not Sheets).  
- Standardized terminology to match n8n nodes: Webhook, Loop, HTTP Request, etc.  
- Aligned the flow exactly with your nodes:  
  - Webhook → Format → Get Customers → Limit → Loop → Clean → Verify → If → Send/Log → Wait → Repeat

---
 ## Useful Links
- **Dashboard:** [https://app.rapiwa.com](https://app.rapiwa.com/login)
- **Official Website:** [https://rapiwa.com](https://rapiwa.com/)
- **Documentation:** [https://docs.rapiwa.com](https://docs.rapiwa.com/)

## Support

- WhatsApp Support: [Chat Now](https://wa.me/8801322827799)  
- Discord: [Join SpaGreen Community](https://discord.gg/SsCChWEP)  
- Facebook Group: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)  
- Website: [https://spagreen.net](https://spagreen.net)  
- Developer Portfolio: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)
"

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, WooCommerce

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
