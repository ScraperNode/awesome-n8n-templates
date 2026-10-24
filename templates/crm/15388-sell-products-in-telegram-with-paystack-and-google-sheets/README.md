# 🤝 Sell products in Telegram with Paystack and Google Sheets

> ⚡ **235 views** · 🤝 [CRM & Sales Operations](../)

## Description

## 🚀 Overview
Transform your Telegram channel or group into a fully functional, automated e-commerce storefront. This n8n workflow template allows you to sell both physical and digital products directly within Telegram, utilizing **Paystack** for secure checkout and **Google Sheets** as a lightweight, free database for inventory and order management.

Say goodbye to complex website builders and monthly subscription fees. With this serverless setup, you can launch a store in minutes and manage everything from a simple spreadsheet.

## ✨ Key Features
* **🛒 Interactive Shopping Cart:** Users can browse products, select quantities, and manage their cart entirely through seamless Telegram inline buttons.
* **💳 Secure Payments:** Direct integration with the Paystack API generates unique, secure checkout links for every order.
* **📦 Smart Fulfillment:** Automatically detects if an order is digital or physical. Digital goods (e.g., PDFs, E-books via Google Drive) are delivered instantly upon payment confirmation. Physical orders are marked as "Paid" and queued for shipping.
* **📊 Free Database (Google Sheets):** No SQL required! Manage your product catalog, track active user sessions, and view order history entirely within Google Sheets.
* **🔍 Order Tracking System:** Customers can use the `/orders` command or search by their unique `ORD-` ID to view their purchase history, resume pending payments, or track shipped items.
* **⚙️ Built-in Validation:** Includes robust data validation for email addresses (catching common typos like `.con`) and physical delivery addresses.

## 🛠 Prerequisites
To run this template, you will need the following accounts:
1. **[Telegram](https://telegram.org/):** A free Telegram Bot Token (obtained via BotFather).
2. **[Paystack](https://paystack.com/):** A Paystack account to receive payments (you will need your Secret Key).
3. **[Google Workspace](https://workspace.google.com/):** A Google account to host the Google Sheets database and Google Drive (if selling digital files).

## 📝 Setup Instructions

### 1. Database Setup
1. Create a new Google Sheet (Template; [https://docs.google.com/spreadsheets/d/1x58FYmsdo2K2dKNm81LgCSrGvHwhenkJTtjDIxc8-2w/edit?gid=187299608#gid=187299608](https://docs.google.com/spreadsheets/d/1x58FYmsdo2K2dKNm81LgCSrGvHwhenkJTtjDIxc8-2w/edit?gid=187299608#gid=187299608) with three tabs: `Products`, `Orders`, and `Session`.
2. **Products Tab Headers:** `id`, `name`, `price`, `type` (physical/digital), `stock`, `description`, `file_url` (optional, for digital goods).
3. **Orders Tab Headers:** `order_id`, `reference`, `user_id`, `email`, `address`, `items_json`, `total`, `status`, `payment_link`, `tracking`, `created_at`.
4. **Session Tab Headers:** `user_id`, `chat_id`, `state`, `cart_json`, `selected_product_id`, `selected_product_name`, `selected_product_price`, `selected_product_type`, `input_quantity`, `input_email`, `input_address`.

### 2. n8n Node Configuration
1. Import this template into your n8n workspace.
2. Update the **Google Sheets** credentials and replace the `Document ID` in all sheet nodes with your specific spreadsheet ID.
3. Add your Telegram Bot Token via n8n's credential manager to activate the **Telegram Trigger** and messaging nodes.
4. Locate the nodes containing the `YOUR_PAYSTACK_SECRET_KEY` placeholder (e.g., `Paystack Init Transaction`) and insert your actual Paystack Secret Key.

### 3. Webhook Activation
1. Double-click the **Paystack Webhook** node.
2. Copy the "Production URL" provided by n8n.
3. Log into your Paystack Dashboard, navigate to **Settings &gt; Webhooks**, and paste the URL. This ensures your bot receives real-time payment confirmations.

## 💡 Use Cases
* **Digital Creators:** Sell e-books, courses, templates, or software directly to your Telegram audience with instant file delivery.
* **Local Businesses:** Automate orders for physical goods, food delivery, or merchandise without needing a dedicated website.
* **Dropshipping:** Seamlessly collect orders and addresses before forwarding them to suppliers.

## 🔗 Apps Integrated
* Telegram
* Paystack
* Google Sheets
* Google Drive (Optional)

**You can also test the workflow live on Telegram: @sellvia_paystack_bot or [https://t.me/sellvia_paystack_bot](https://t.me/sellvia_paystack_bot))**
---
## 👋 Need help or want to customize this workflow?

📺 Contact: [Fiverr](https://www.fiverr.com/sampdiablog/)
📩 Consultation: [Book Appointment](https://calendly.com/oghenekaroafigo/meeting)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
