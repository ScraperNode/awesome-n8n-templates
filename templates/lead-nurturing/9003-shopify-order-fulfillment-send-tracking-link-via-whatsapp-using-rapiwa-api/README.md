# 💬 Shopify order fulfillment & send tracking link via WhatsApp using Rapiwa API

> ⚡ **503 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Shopify Order Fulfillment & Send Tracking Link via WhatsApp Using Rapiwa API

## Who is this for?
This **n8n workflow** automatically sends **WhatsApp notifications** to customers when their **Shopify orders are fulfilled**. It extracts order details, validates customer phone numbers for WhatsApp compatibility using the **Rapiwa API**, sends tracking information via WhatsApp, and logs all interactions in **Google Sheets** with appropriate verification status.

---

## What this Workflow Does
This **n8n workflow** listens for new **order fulfillments** on Shopify and automatically sends a **WhatsApp message** with tracking details to customers. It uses the **Rapiwa API** to verify if the customer's number is on WhatsApp, formats all the data, sends a message, and logs everything to **Google Sheets** for tracking and auditing purposes.

---

## Key Features
- **Webhook-Triggered**: Activates on new Shopify fulfillment events
- **Phone Number Validation**: Uses Rapiwa to check WhatsApp compatibility
- **Tracking Message Automation**: Sends real-time tracking messages via WhatsApp
- **Data Cleaning**: Formats phone numbers and customer data
- **Smart Branching**: Separates verified and unverified WhatsApp users
- **Google Sheets Logging**: Stores data with status labels for all messages
- **Rate-Limit Protection**: `Wait` node helps space API calls
- **Dual Sheet Logging**: Maintains separate records for verified and unverified numbers

## Requirements
### Tools & Services
- An **n8n instance** (self-hosted or cloud)
- A **Shopify store** with REST API access enabled
- A **Rapiwa.com account** with:
  - Valid Bearer Token
  - Connected and verified WhatsApp number
- A **Google Sheet** with the following columns:
   - Like this [Sample Sheet](https://docs.google.com/spreadsheets/d/1vxocktoY-y-PYBZNxmUDuQv02b5F8QKhbQ0yLHjwjBY/edit?usp=sharing)
- **Google Sheets OAuth2 credentials** set up in n8n
- **Shopify API credentials** added to n8n
- **Rapiwa Bearer Token** added as `httpBearerAuth` credentials

---

## How to Use
### Step-by-step Setup
1. **Connect Shopify to n8n**
   - Use the **Shopify Trigger** node
   - Set event to `fulfillments/create` to capture new fulfillment events

2. **Extract Webhook Data**
   - Use a **Code Node** to format the webhook response
   - Capture order, customer, and tracking details

3. **Fetch Complete Order Information**
   - Add an **HTTP Request Node** using Shopify Admin API
   - Include the order ID to retrieve customer phone, email, and product details

4. **Clean the Phone Number**
   - Use a **Code Node** to:
     - Remove non-numeric characters
     - Format number to international standard
     - Combine customer first and last name

5. **Batch Process Orders**
   - Use the **Split In Batches** node to handle customers one-by-one

6. **Validate WhatsApp Number**
   - Use Rapiwa’s `/verify-whatsapp` endpoint with a Bearer Token
   - Check if number exists on WhatsApp

7. **Conditional Branching**
   - Use an **If Node**:
     - If `data.exists === "true"` → Verified path
     - Else → Unverified path

8. **Send WhatsApp Message**
   - Send tracking info with a personalized message:
     ```
     Hi [Customer Name],
     Good news! Your order has just been fulfilled.
     Tracking Number: [Tracking Number]
     Track your package here: [Tracking URL]
     Thank you for shopping with us.
     -Team SpaGreen Creative
     ```

9. **Log Data to Google Sheets**
   - Log verified and unverified entries in **separate sheets**
   - Include all relevant customer and tracking data

10. **Add Delay Between Messages**
    - Use the **Wait Node** to avoid rate limits on Rapiwa API

---

## Requirements
- A **Shopify store** with API access enabled
- A **Google Sheet** with required column like this ➤ [Sample](https://docs.google.com/spreadsheets/d/1vxocktoY-y-PYBZNxmUDuQv02b5F8QKhbQ0yLHjwjBY/edit?usp=sharing)
- **Rapiwa API account**:
  - Connected WhatsApp number
  - Valid Bearer Token
- **n8n** with:
  - Shopify API credentials
  - Rapiwa Bearer Token
  - Google Sheets OAuth2 credentials

---

## Google Sheet Column Reference
**A Google Sheet** formatted like this ➤ [Sample](https://docs.google.com/spreadsheets/d/1vxocktoY-y-PYBZNxmUDuQv02b5F8QKhbQ0yLHjwjBY/edit?usp=sharing)

| customer_id   | name            | email                          | number        | tracking_company | tracking_number | tracking_url                                | product_title                          | status     |
|---------------|-----------------|--------------------------------|---------------|------------------|-----------------|---------------------------------------------|----------------------------------------|------------|
| 8986XXXX06 | Abdul Mannan | contact@spagreen.net  | 8801322827799 | Amazon Logistics | SG-OT-02        | https://traxxxG-OT-02 | S25 Ultra 5G Smartphone     | verified   |
| 883XXX7982 | Abdul Mannan     | contact@spagreen.net             | 8801322827799 | Amazon Logistics | SG-OT-N03       | https://traxxxGOT-N03| Samsung Galaxy S24 Ultra  | verified   |

---

## Workflow Logic Summary
1. **Shopify Webhook Trigger**: On order fulfillment
2. **Extract Webhook Payload**
3. **Fetch Order + Customer Details**
4. **Clean and Format Phone Number**
5. **Split into Single-Item Batch**
6. **Check WhatsApp Validity via Rapiwa**
7. **If Verified:**
   - Send WhatsApp Message
   - Log to verified sheet
8. **If Not Verified:**
   - Skip message
   - Log to unverified sheet
9. **Add Delay with Wait Node**
10. **Repeat for Next Fulfillment**

---

## Customization Ideas
- Modify WhatsApp message to include delivery date or store contact
- Send different messages for different product categories
- Use `product_type` or `shipping_zone` to trigger separate workflows
- Add admin alerts for unverified numbers
- Store message delivery status (e.g., success, failed)

---

## Notes & Warnings
- Rapiwa is an **unofficial WhatsApp API** — delivery reliability is not guaranteed
- The **Google Sheet column `name ` must include the space at the end**
- **Wait node** may need longer delay for high-volume stores
- Always format phone numbers in **international format** (e.g., `8801XXXXXXXXX`)
- Shopify API version used is `2025-07` — update as newer versions release
- You must comply with WhatsApp terms and data privacy laws when messaging users

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

## 🔗 Nodes Used

Google Sheets, HTTP Request, Shopify Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
