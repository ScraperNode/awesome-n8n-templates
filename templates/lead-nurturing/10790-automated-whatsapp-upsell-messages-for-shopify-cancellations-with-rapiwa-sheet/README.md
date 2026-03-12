# 💬 Automated WhatsApp upsell messages for Shopify cancellations with Rapiwa & Sheet

> ⚡ **52 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Who is this for?
This workflow is for Shopify store owners, customer success, and marketing teams who want to automatically check customers’ WhatsApp numbers and send personalized messages with discount codes for canceled orders. It helps recover lost sales by reaching out with special offers.

## What This Workflow Does
* Automatically checks for canceled orders on a schedule
* Fetches canceled orders from Shopify
* Creates personalized recovery messages based on customer data
* Verifies customers’ WhatsApp numbers via Rapiwa
* Logs results in Google Sheets: *“Verified & Sent”* for successful messages, *“Unverified & Not Sent”* for unverified numbers


## Requirements
- Shopify store with API access enabled
- Shopify API credentials with access to orders and customer data
- Rapiwa account and a valid Bearer token
- Google account with Sheets access and OAuth2 credentials

## Setup plan
1. **Add your credentials**
   * **Rapiwa:** Create an HTTP Bearer credential in n8n and paste your token (example name: *Rapiwa Bearer Auth*).
   * **Google Sheets:** Add an OAuth2 credential (example name: *Google Sheets*).

2. **Set up Shopify**
   * Replace **your_shopify_domain** with your real Shopify domain.
   * Replace **your_shop_access-token** with your actual Shopify API token.

3. **Set up Google Sheets**
   * Update the example spreadsheet ID and sheet gid with your own.
   * Make sure your sheet’s column headers match the mapping keys exactly—same spelling, case, and no extra spaces.

4. **Configure the Schedule Trigger**
   * Choose how often you want the workflow to check for canceled orders (daily, weekly, etc.).

5. **Check the HTTP Request nodes**
   * **Verify endpoint:** Should call Rapiwa’s *verifyWhatsAppNumber*.
   * **Send endpoint:** Should use Rapiwa’s send-message API with your template (includes customer name, reorder link, discount code).

## Google Sheet Column Structure
The Google Sheets nodes in the flow append rows with these column. Make sure the sheet headers match exactly.

**A Google Sheet formatted like this** ➤ [sample](https://docs.google.com/spreadsheets/d/1nvrxINR5Cch5SChGydf62W6PcDdTmdDnlqBif6iTgLU/edit?usp=sharing)


| Name         | Number        | Item Name   | Coupon   | Item Link   |  Validity   | Status |
| ------------ | ------------- | ------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------- | ------ |
| Abdul Mannan | 8801322827799 | Samsung Galaxy S24 Ultra 5G 256GB-512GB-1TB | REORDER5 | [Re-order Link](https://your_shopify_domain/94618124606xxxxxthenticatexx/250c6a7d50018140b2ac21741233) |  verified   | sent   |
| Abdul Mannan | 8801322827790 | Samsung Galaxy S24 Ultra 5G 256GB-512GB-1TB | REORDER5 | [Re-order Link](https://your_shopify_domain/94618124606xxxxxthenticatexx/250c6a7d50018140b2ac21741233) | unverified | not sent   |



## Important Notes
- Do not hard-code API keys or tokens; always use n8n credentials.
- Google Sheets column header names must match the mapping keys used in the nodes. Trailing spaces are common accidental problems — trim them in the spreadsheet or adjust the mapping.
- Message templates reference - update templates if you need to reference different data.
- The workflow processes cancelled orders in batches to avoid rate limits. Adjust the batch size if needed.

## Useful Links
- **Install Rapiwa**: [How to install Rapiwa](https://www.npmjs.com/package/n8n-nodes-rapiwa)
- **Dashboard:** [https://app.rapiwa.com](https://app.rapiwa.com/login)
- **Official Website:** [https://rapiwa.com](https://rapiwa.com/)
- **Documentation:** [https://docs.rapiwa.com](https://docs.rapiwa.com/)
- **Shopify API Documentation:** [https://shopify.dev/docs/admin-api](https://shopify.dev/docs/admin-api)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
