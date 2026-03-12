# 🤝 Track Shopify orders in Google Sheets and send Discord notifications

> ⚡ **767 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow tracks new Shopify orders in real-time and logs them to a Google Sheet, while also sending a structured order summary to a Discord channel. Perfect for keeping your team and records updated without checking your Shopify admin manually.

### ✅ Features:
- **Trigger**: Listens to `orders/create` event via the **Shopify Trigger** node
- **Authentication**: Uses **Shopify Access Token**, generated via a [custom/private Shopify app](https://docs.n8n.io/integrations/builtin/credentials/shopify/#using-access-token)
- **Google Sheets Logging**: Automatically appends order details to a sheet with the following columns:
  - `Order Number`
  - `Customer Email`
  - `Customer Name`
  - `City`
  - `Country`
  - `Order Total`
  - `Currency`
  - `Subtotal`
  - `Tax`
  - `Financial Status`
  - `Payment Gateway`
  - `Order Date`
  - `Line Item Titles`
  - `Line Item Prices`
  - `Order Link`
- **Discord Alerts**: Sends a clean and formatted summary to your Discord server
- **Line Item Extraction**: Breaks down item titles and prices into readable format using code
- **Multi-currency Compatible**: Displays currency type dynamically (not hardcoded)

---

### 🧩 Nodes Used:
- Shopify Trigger (Access Token)
- Code — extract `line_item_titles` and `line_item_prices`
- Google Sheets — Append row
- Code (JavaScript) — Format Discord message
- Discord — Send message

---

📒 **Sticky Notes**:
- 🛠️ _Use your own Google Sheet link and Discord webhook_
- 🔄 _You can duplicate and adapt this for `orders/updated` or `refunds/create` events_
- 🔐 _No hardcoded API keys — credentials managed via UI_

---

### 🖼️ **Sample Outputs**

#### 📄 Google Sheet Entry

| Order Number | Customer Email   | Customer Name | City      | Country  | Order Total | Currency | Subtotal | Tax    | Financial Status | Payment Gateway | Order Date                  | Line Item Titles                                                                                  | Line Item Prices                | Order Link |
|--------------|------------------|----------------|-----------|----------|--------------|----------|----------|--------|-------------------|------------------|------------------------------|----------------------------------------------------------------------------------------------------|----------------------------------|------------|
| 1003         | abc123@gmail.com | test name     | test city | Pakistan | 2522.77      | PKR      | 2174.8   | 347.97 | paid              | bogus           | 2025-07-31T13:45:35-04:00     | Selling Plans Ski Wax, The Complete Snowboard, The Complete Snowboard, The Collection Snowboard: Liquid | 24.95, 699.95, 699.95, 749.95 | [View Order](https://test101-1q.myshopify.com/76700090592/orders/b439505f12f06c44d61aa466d2d7a77e/authenticate?key=bc87db8d3b0213fcd5eac32177fac310) |

#### 💬 Discord Message Preview

![image.png](fileId:1930)

---

&gt; _Tested with Shopify's "Bogus" gateway — works without real card info in a development store._

## 🔗 Nodes Used

Google Sheets, Discord, Shopify Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
