# 💬 Send Rapiwa WhatsApp apology & reorder link when Shopify order is cancelled

> ⚡ **136 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

# Who Is This For?
This **n8n workflow** listens for order cancellations in Shopify, extracts relevant customer and order data, checks if the customer’s phone number is registered on WhatsApp via the **Rapiwa API**, and sends a personalised apology message with a re-order link. It also logs successful and unsuccessful attempts in **Google Sheets** for tracking.

## What This Workflow Does
- Listens for cancelled orders in your Shopify store  
- Extracts customer details and order information  
- Generates a personalised apology message including a reorder link  
- Sends the message to customers via WhatsApp using a messaging API (e.g., Twilio or Rapiwa)  
- Logs the communication results for tracking purposes  

## Key Features
- **Real-Time Cancellation Detection:** Automatically triggers when an order is cancelled  
- **Personalised Messaging:** Includes customer name, order details, and a direct reorder link  
- **WhatsApp Integration:** Sends messages via WhatsApp for higher engagement  
- **Error Handling:** Logs successful and failed message deliveries  
- **Reorder Link:** Provides a convenient link for customers to reorder with one click  

## Requirements
- n8n instance with nodes: Shopify Trigger, HTTP Request (for WhatsApp API), Code, Google Sheets (optional)  
- Shopify store with API access  
- WhatsApp messaging provider account with API access  
- Valid customer phone numbers stored in Shopify orders  

## How to Use — Step-by-Step Setup
1. **Credentials Setup**  
   - Shopify API: Configure Shopify API credentials in n8n to listen for order cancellations  
   - WhatsApp API: Set up WhatsApp messaging credentials (e.g., Twilio, Rapiwa, or any supported provider)  
   - Google Sheets (Optional): Configure Google Sheets OAuth2 if you want to log communications  

3. **Configure Trigger**  
   Set the workflow to trigger on Shopify order cancellation events  

4. **Customize Message Content**  
   Modify the apology message template to include your store branding and tone  
   Ensure the reorder link dynamically includes the customer's cancelled order info  

5. **Set Up WhatsApp Node**  
   Connect your WhatsApp API credentials  
   Ensure the phone numbers are formatted correctly for WhatsApp delivery  



## Google Sheet Required Columns
You’ll need two Google Sheets (or two tabs in one spreadsheet):
**A Google Sheet formatted like this** ➤ [sample](https://docs.google.com/spreadsheets/d/12zMJod9s3Ov0RZh-7-ZoqTvJr4yMIqOeAQKTBeZlrRk/edit?usp=sharing)
The workflow uses a Google Sheet with the following columns to track coupon distribution:

| **Name**       | **Number**    | **Email**  | **Address**       | **Price**   | **Title**      | **Re-order Link**        | **Validity** | **Status** |
| -------------- | ------------- | --------------------------------------------------- | ----------------- | ----------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ---------- |
| Abdul Mannan         | 8801322827799 | [contact@spagreen.net](mailto:contact@spagreen.net) | Dhaka, Bangladesh | BDT 1955.00 | Pakistani Lawn | [Link 🔗](https://yourdomain.myshopify.com/94xxxxxx32ecd063) | unverified   | not sent   |
| Abdul Mannan         | 8801322827799 | [contact@spagreen.net](mailto:contact@spagreen.net) | Dhaka, Bangladesh | BDT 1955.00 | Pakistani Lawn | [Link 🔗](https://yourdomain.myshopify.com/94xxxxxx32ecd064) | verified     | sent       |


## Important Notes
- **Phone Number Validation:** Ensure customer phone numbers are WhatsApp-enabled and formatted properly  
- **API Rate Limits:** Respect your WhatsApp provider’s API limits to avoid throttling  
- **Data Privacy:** Always comply with privacy laws when messaging customers  
- **Error Handling:** Monitor logs regularly to handle failed message deliveries  
- **Testing:** Test thoroughly with dummy data before activating the workflow live  


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

Google Sheets, Shopify Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
