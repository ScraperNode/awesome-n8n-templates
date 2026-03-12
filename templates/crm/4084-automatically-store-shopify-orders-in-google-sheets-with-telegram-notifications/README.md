# 🤝 Automatically store Shopify orders in Google Sheets with Telegram notifications

> ⚡ **779 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow is designed for **e-commerce store owners, operations managers, and developers** who use Shopify as their e-commerce platform and want an automated way to track and analyze their order data.

It is particularly useful for businesses that:

* Need a centralized view of all Shopify orders
* Want to analyze order trends without logging into Shopify
* Need to share order data with team members who don't have Shopify access
* Want to build custom reports based on order information

---

### What Problem Is This Workflow Solving?

While Shopify provides excellent order management within its platform, many businesses need their order data available in other systems for various purposes:

* **Data accessibility**: Not everyone in your organization may have access to Shopify's admin interface
* **Custom reporting**: Google Sheets allows for flexible analysis and report creation
* **Data integration**: Having orders in Google Sheets makes it easier to combine with other business data
* **Backup**: Creates an additional backup of your critical order information

---

### What This Workflow Does

This n8n workflow creates an automated bridge between your Shopify store and Google Sheets:

* Listens for new order notifications from your Shopify store via webhooks
* Processes the incoming order data and transforms it into a structured format
* Stores each new order in a dedicated Google Sheets spreadsheet
* Sends real-time notifications to Telegram when new orders are received or errors occur

---

### Setup

#### Create a Google Sheet

* Create a new Google Sheet to store your orders
* Add a sheet named `"orders"` with the following columns:

  * `orderId`
  * `orderNumber`
  * `created_at`
  * `processed`
  * `processed_at`
  * `json`
  * `customer`
  * `shippingAddress`
  * `lineItems`
  * `totalPrice`
  * `currency`

#### Set Up Telegram Bot

* Create a Telegram bot using **BotFather** (send `/newbot` to [@BotFather](https://t.me/BotFather))
* Save your bot token for use in n8n credentials
* Start a chat with your bot and get your chat ID (you can use [@userinfobot](https://t.me/userinfobot))

#### Configure the Workflow

* Set your **Google Sheet ID** in the "Edit Variables" node
* Enter your **Telegram chat ID** in the "Edit Variables" node
* Set up your **Telegram API credentials** in n8n

#### Configure Shopify Webhook

* In your Shopify admin, go to:
  `Settings > Notifications > Webhooks`
* Create a new webhook for **"Order creation"**
* Set the URL to your **n8n webhook URL** (from the "Receive New Shopify Order" node)
* Set the format to **JSON**

---

### How to Customize This Workflow to Your Needs

* **Additional data**: Modify the "Transform Order Data to Standard Format" function to extract more Shopify data
* **Multiple sheets**: Duplicate the Google Sheets node to store different aspects of orders in separate sheets
* **Telegram messages**: Customize the text in Telegram nodes to include more details or rich formatting
* **Data processing**: Add nodes to perform calculations or transformations on order data
* **Additional notifications**: Add more channels like Slack, Discord, or SMS
* **Integrations**: Extend the workflow to send order data to other systems like CRMs, ERPs, or accounting software

---

### Final Notes

This workflow serves as a **foundation** that you can build upon to create a **comprehensive order management system** tailored to your specific business needs.

## 🔗 Nodes Used

Function, Google Sheets, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
