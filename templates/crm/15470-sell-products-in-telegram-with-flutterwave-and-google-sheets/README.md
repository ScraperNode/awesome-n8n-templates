# 🤝 Sell products in Telegram with Flutterwave and Google Sheets

> ⚡ **123 views** · 🤝 [CRM & Sales Operations](../)

## Description

Transform your Telegram channel or group into a fully functional, automated e-commerce storefront. This n8n workflow template allows you to sell both physical and digital products directly within Telegram, utilizing Flutterwave for secure checkout and Google Sheets as a lightweight, free database for inventory and order management.

Say goodbye to complex website builders and monthly subscription fees. With this serverless setup, you can launch a store in minutes and manage everything from a simple spreadsheet.
✨ Key Features

   -  🛒 Interactive Shopping Cart: Users can browse products, select quantities, and manage their cart entirely through seamless Telegram inline buttons.
   - 💳 Secure Payments: Direct integration with the Flutterwave API generates unique, secure checkout links for every order.
   - 📦 Smart Fulfillment: Automatically detects if an order is digital or physical. Digital goods (e.g., PDFs, E-books via Google Drive) are delivered instantly upon payment confirmation. Physical orders are marked as “Paid” and queued for shipping.
   - 📊 Free Database (Google Sheets): No SQL required! Manage your product catalog, track active user sessions, and view order history entirely within Google Sheets.
   - 🔍 Order Tracking System: Customers can use the /orders command or search by their unique ORD- ID to view their purchase history, resume pending payments, or track shipped items.
   - ⚙️ Built-in Validation: Includes robust data validation for email addresses (catching common typos like .con) and physical delivery addresses.

🛠 Prerequisites

To run this template, you will need the following accounts:

    1. Telegram: A free Telegram Bot Token (obtained via BotFather).
    2. Flutterwave: A Flutterwave account to receive payments (you will need your Secret Key and hash/Encryption Key).
    3. Google Workspace: A Google account to host the Google Sheets database and Google Drive (if selling digital files).

📝 Setup Instructions
1. Database Setup

    - Create a new Google Sheet (Template; https://docs.google.com/spreadsheets/d/1x58FYmsdo2K2dKNm81LgCSrGvHwhenkJTtjDIxc8-2w/edit?gid=187299608#gid=187299608 with three tabs: Products, Orders, and Session.
    - Products Tab Headers: id, name, price, type (physical/digital), stock, description, file_url (optional, for digital goods).
    - Orders Tab Headers: order_id, reference, user_id, email, address, items_json, total, status, payment_link, tracking, created_at.
    - Session Tab Headers: user_id, chat_id, state, cart_json, selected_product_id, selected_product_name, selected_product_price, selected_product_type, input_quantity, input_email, input_address.

2. n8n Node Configuration

- Import this template into your n8n workspace.
- Update the Google Sheets credentials and replace the Document ID in all sheet nodes with your specific spreadsheet ID.
- Add your Telegram Bot Token via n8n’s credential manager to activate the Telegram Trigger and messaging nodes.
- Locate the nodes containing the YOUR_FLUTTERWAVE_SECRET_KEY placeholder (e.g., Flutterwave Init Transaction) and insert your actual Flutterwave Secret Key.

3. Webhook Activation

    - Double-click the Flutterwave Webhook node.
    - Copy the “Production URL” provided by n8n.
    - Log into your Flutterwave Dashboard, navigate to Settings &gt; Webhooks, and paste the URL. This ensures your bot receives real-time payment confirmations.

💡 Use Cases

- Digital Creators: Sell e-books, courses, templates, or software directly to your Telegram audience with instant file delivery.
- Local Businesses: Automate orders for physical goods, food delivery, or merchandise without needing a dedicated website.
- Dropshipping: Seamlessly collect orders and addresses before forwarding them to suppliers.

🔗 Apps Integrated

   -  Telegram
   - Flutterwave
   - Google Sheets
   - Google Drive (Optional)

You can also test the workflow live on Telegram: [@flutterwave_sell_bot](http://t.me/flutterwave_sell_bot) or **[http://t.me/flutterwave_sell_bot](Bold)**)
👋 Need help or want to customize this workflow?

📺 Contact: [Fiverr](https://www.fiverr.com/sampdiablog/)
📩 Consultation: [Book Apoointment](https://calendly.com/oghenekaroafigo/meeting)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
