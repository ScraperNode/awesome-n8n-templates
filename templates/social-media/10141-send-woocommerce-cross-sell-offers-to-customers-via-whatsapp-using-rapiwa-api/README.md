# 📱 Send WooCommerce cross-sell offers to customers via WhatsApp using Rapiwa API

> ⚡ **259 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who Is This For?
This n8n workflow enables **automated cross-selling** by identifying each **WooCommerce customer's** most frequently purchased product, **finding a related product to recommend**, and **sending a personalized WhatsApp message** using the **Rapiwa API**. It also verifies whether the user's number is WhatsApp-enabled before sending, and logs both successful and unsuccessful attempts to Google Sheets for tracking.


## What This Workflow Does
- Retrieves all paying customers from your WooCommerce store  
- Identifies each customer's most purchased product  
- Finds the latest product in the same category as their most purchased item  
- Cleans and verifies customer phone numbers for WhatsApp compatibility  
- Sends personalized WhatsApp messages with product recommendations  
- Logs all activities to Google Sheets for tracking and analysis  
- Handles both verified and unverified numbers appropriately  

## Key Features
- **Customer Segmentation:** Automatically identifies paying customers from your WooCommerce store  
- **Product Analysis:** Determines each customer's most purchased product  
- **Smart Recommendations:** Finds the latest products in the same category as customer favorites  
- **WhatsApp Integration:** Uses Rapiwa API for message delivery  
- **Phone Number Validation:** Verifies WhatsApp numbers before sending messages  
- **Dual Logging System:** Tracks both successful and failed message attempts in Google Sheets  
- **Rate Limiting:** Uses batching and wait nodes to prevent API overload  
- **Personalized Messaging:** Includes customer name and product details in messages  

## Requirements
- WooCommerce store with API access  
- Rapiwa account with API access for WhatsApp verification and messaging  
- Google account with Sheets access  
- Customer phone numbers in WooCommerce (stored in `billing.phone` field)  

## How to Use — Step-by-Step Setup
### 1. Credentials Setup
 - **WooCommerce API:** Configure WooCommerce API credentials in n8n (e.g., "WooCommerce (get customer)" and "WooCommerce (get customer data)")  
 - **Rapiwa Bearer Auth:** Create an HTTP Bearer credential with your Rapiwa API token  
 - **Google Sheets OAuth2:** Set up OAuth2 credentials for Google Sheets access  

### 2. Configure Google Sheets
 - Ensure your sheet has the required columns as specified in the **Google Sheet Column Structure** section  

### 3. Verify Code Nodes
 - **Code (get paying_customer):** Filters customers to include only those who have made purchases  
 - **Get most buy product id & Clear Number:** Identifies the most purchased product and cleans phone numbers  

### 4. Configure HTTP Request Nodes
 - **Get customer data:** Verify the WooCommerce API endpoint for retrieving customer orders  
 - **Get specific product data:** Verify the WooCommerce API endpoint for product details  
 - **Get specific product recommend latest product:** Verify the WooCommerce API endpoint for finding latest products by category  
 - **Check valid WhatsApp number Using Rapiwa:** Verify the Rapiwa endpoint for WhatsApp number validation  
 - **Rapiwa Sender:** Verify the Rapiwa endpoint for sending messages  

## Google Sheet Required Columns
You’ll need two Google Sheets (or two tabs in one spreadsheet):
**A Google Sheet formatted like this** ➤ [sample](https://docs.google.com/spreadsheets/d/1yTxkAM1kq2udndvG5M2jUuQCY8SkvoLgrspQ100LvKs/edit?usp=sharing)
The workflow uses a Google Sheet with the following columns to track coupon distribution:
Both must have the following headers (match exactly):

| name       | number      | email  | address1    | price | suk | title   | product link   | validity   | staus    |
| ---------- | ------------- | ----------------------------------------------- | ----------- | ----- | --- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | -------- |
| Abdul Mannan | 8801322827799 | [contact@spagreen.net](mailto:contact@spagreen.net) | mirpur dohs | 850   |     | Sharp Most Demanding Hoodie x Nike |  [https://your_shop_domain/p-img-nike](https:your_shop_domain/p-img-nike-3/)  | verified   | sent     |
| Abdul Mannan | 8801322827799 | [contact@spagreen.net](mailto:contact@spagreen.net) | mirpur dohs | 850   |     | Sharp Most Demanding Hoodie x Nike | [https://your_shop_domain/p-img-nike](https:your_shop_domain/p-img-nike-3/) | unverified | not sent |
| Abdul Mannan | 8801322827799 | [contact@spagreen.net](mailto:contact@spagreen.net) | mirpur dohs | 850   |     | Sharp Most Demanding Hoodie x Nike | [https://your_shop_domain/p-img-nike](https:your_shop_domain/p-img-nike-3/) | verified   | sent     |


## Important Notes
- **Phone Number Format:** The workflow cleans phone numbers by removing all non-digit characters. Ensure your WooCommerce phone numbers are in a compatible format.  
- **API Rate Limits:** Rapiwa and WooCommerce APIs have rate limits. Adjust batch sizes and wait times accordingly.  
- **Data Privacy:** Ensure compliance with data protection regulations when sending marketing messages.  
- **Error Handling:** The workflow logs unverified numbers but doesn't have extensive error handling. Consider adding error notifications for failed API calls.  
- **Product Availability:** The workflow recommends the latest product in a category, but doesn't check if it's in stock. Consider adding stock status verification.  
- **Testing:** Always test with a small batch before running the workflow on your entire customer list.  

## Useful Links
- **Dashboard:** [https://app.rapiwa.com](https://app.rapiwa.com/login)
- **Official Website:** [https://rapiwa.com](https://rapiwa.com/)
- **Documentation:** [https://docs.rapiwa.com](https://docs.rapiwa.com/)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, WooCommerce, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
