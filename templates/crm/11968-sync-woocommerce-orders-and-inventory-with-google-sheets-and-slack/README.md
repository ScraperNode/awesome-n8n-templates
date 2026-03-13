# 🤝 Sync WooCommerce orders and inventory with Google Sheets and Slack

> ⚡ **111 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Automate order fulfillment and inventory sync from WooCommerce to Google Sheets and Slack


This workflow provides a robust, end-to-end automated pipeline for managing e-commerce orders. It bridges the gap between your storefront and your fulfillment team by handling inventory validation, multi-channel notifications, and centralized data logging.


## Who’s it for?
This template is designed for e-commerce business owners and operations managers using **WooCommerce** who want to eliminate manual order processing. It is ideal for teams that need real-time updates on stock availability and automated communication with both customers and warehouse staff.


## How it works
1.  **Order Capture**: The workflow triggers via a WooCommerce Webhook (real-time) or a Schedule Trigger (hourly sync).
2.  **Data Extraction**: It parses complex order JSON into a clean, usable format.
3.  **Inventory Check**: The system iterates through each line item to verify stock levels.
4.  **Fulfillment Logic**: It determines if an order is "Ready" or "Backordered" and calculates estimated shipping priorities.
5.  **Multi-Channel Notification**:
    *   **In-Stock**: Sends a confirmation email to the customer and alerts the fulfillment team on Slack.
    *   **Backordered**: Sends a delay notice to the customer and alerts the inventory manager on Slack.
6.  **Data Logging**: Every order is appended to a Google Sheet for long-term analytics and tracking.


## Requirements
*   **WooCommerce**: REST API access and Webhook setup.
*   **Gmail**: OAuth2 credentials for sending automated emails.
*   **Slack**: A Bot Token with permissions to post in `#fulfillment` and `#alerts` channels.
*   **Google Sheets**: A spreadsheet prepared with headers matching the order data.


## How to set up
1.  **Credentials**: Connect your WooCommerce, Gmail, Slack, and Google Sheets accounts in the respective nodes.
2.  **WooCommerce Webhook**: Copy the Webhook URL from the first node and paste it into your WooCommerce Webhook settings (Topic: Order Created).
3.  **Inventory Logic**: The "Check Inventory" node currently uses a simulated Code node. Replace this logic with a lookup to your actual inventory database or ERP system.
4.  **Google Sheets**: Open the "Log Order to Sheets" node and select your specific Spreadsheet ID and Sheet Name.


## How to customize
*   **Shipping Rates**: Modify the "Process Order Logic" node to include your specific carrier rates or integrate a shipping API (like ShipStation).
*   **Priority Rules**: Adjust the logic to flag "High Value" orders or specific VIP customers for faster processing.
*   **Messaging**: Customize the Gmail and Slack message templates to match your brand's voice.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
