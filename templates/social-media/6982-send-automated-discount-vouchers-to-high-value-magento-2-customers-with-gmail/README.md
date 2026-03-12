# 📱 Send automated discount vouchers to high-value Magento 2 customers with Gmail

> ⚡ **78 views** · 📱 [Social Media & Email Marketing](../)

## Description

### This workflow analyses completed orders from the past 3 months to identify high-value customers, generates unique voucher codes for each, and sends them a professionally designed promotional email.

![Automated Workflow for Customer Rewards.png](fileId:1939)

This n8n template helps Magento 2 merchants automatically send customised, beautifully branded coupon emails to high-value customers. 

The workflow connects to Magento 2’s REST API to retrieve your store logo and secure base URL. It either generates a coupon code and then crafts a visually appealing HTML email with dynamic customer details and branding.

You can integrate this flow as part of loyalty campaigns or customer milestone automations. All styling is mobile-responsive and minimal to reduce the chance of spam filtering while still delivering a modern user experience.

#### 🔍 What It Does:
1. Authenticates and connects to your Magento 2 store.
2. Fetches store logo and base media URL using API calls.
3. Processes High valued customers.
4. Generates coupons for each customers
3. Dynamically injects customer name and unique coupon code.
4. Sends a fully branded and styled HTML email.

⚙️ Technical Highlights:
1. Uses rest/all/V1/store/storeConfigs to retrieve logo and configuration data.
2. HTML email styled with CSS media queries for prefers-color-scheme.
3. Gradient background with fallbacks and proper semantic structure.
4. Works with Gmail, Apple Mail, Outlook (Mac), and others.
5. Uses n8n expressions to handle personalization logic without external scripts.

#### ✅ Ideal For:
- Magento 2 store owners.
- Digital marketers targeting loyal or VIP customers.
- CRM/email marketing automation professionals.
- Agencies building Magento-based growth funnels.

#### 📈 Why This Matters in the Current Market:
- Modern customers expect personalized, premium communication — and inbox competition is tougher than ever. 
- This workflow enables eCommerce merchants to deliver clean, brand-consistent emails using automation — all without plugins or frontend code changes. 

####  🔧 Modules Used:
- HTTP Request – Fetch Magento logo and config via REST API.
- Set – Store customer name and coupon values.
- Email or SMTP – Sends the composed HTML email.
- DateTime – To handle expiration display (optional).
- HTML Template – Responsive MJML-like styling with fallback-safe design.

####  💼 Use Cases:
- Loyalty program campaigns
- Seasonal or holiday discount blasts
- Surprise reward drops for top spenders
- Post-purchase thank-you automation
- Reactivation flows for high-valuee users

#### 🔒 Credentials Required:
- Magento 2 Admin API Token
- (Optional) SMTP credentials or Email node configuration

#### 📂 Category
E-commerce → Magento 2 (Adobe Commerce)

💬 Need Help?
💡 Having trouble setting it up or want to customize this workflow further?
Feel free to reach out — I’m happy to help with setup, customization, or Magento 2 API integration issues.

Contact: Author

#### 👤 Author
Kanaka Kishore Kandregula
Certified Magento 2 Developer
https://gravatar.com/kmyprojects
https://www.linkedin.com/in/kanakakishore

## 🔗 Nodes Used

Cron, HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
