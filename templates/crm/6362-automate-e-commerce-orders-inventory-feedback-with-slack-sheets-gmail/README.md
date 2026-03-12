# 🤝 Automate e-commerce orders, inventory & feedback with Slack, Sheets & Gmail

> ⚡ **433 views** · 🤝 [CRM & Sales Operations](../)

## Description

### How It Works ⚙️

This workflow acts as a central nervous system for your e-commerce operations, automating three critical areas:

### A. Order Fulfillment Notification
1.  **Webhook: New Order:** 🚀 The workflow is instantly triggered when a new order is placed on your e-commerce platform (e.g., Shopify, WooCommerce) via a webhook. This provides real-time data to initiate fulfillment.
2.  **Extract Order Data (Function):** 🧹 This node parses the incoming JSON data from the new order, extracting crucial details such as Order ID, customer name, email, total amount, products purchased, and shipping address.
3.  **Send Fulfillment Notification (Slack/Email):** 📢 A detailed, formatted notification containing all necessary order information is immediately sent to your designated fulfillment team's Slack channel or email inbox, ensuring prompt order processing.

### B. Low Stock Alert
1.  **Schedule Trigger (Daily Inventory Check):** ⏰ The workflow runs automatically once every 24 hours (or at your configured interval) to regularly monitor your product inventory levels.
2.  **Read Inventory Data (Google Sheets/API):** 📊 It connects to your chosen inventory data source (e.g., a Google Sheet configured with product IDs, names, and stock levels, or an e-commerce platform API) to retrieve current stock data for all products.
3.  **Filter Low Stock (Function):** 🧹 This node processes the retrieved inventory data. It uses a defined threshold (e.g., 10 units) to identify and filter out any products whose current stock level falls below this critical limit.
4.  **If Low Stock Items?:** 🚦 This conditional node checks if the previous step found any products that are low on stock. If yes, it proceeds to send an alert.
5.  **Send Low Stock Alert (Slack/Email):** 🚨 A warning notification is sent to your purchasing or inventory management team via Slack or email, providing details on the low-stock items and prompting them to reorder before stock runs out, preventing lost sales.

### C. Post-Purchase Feedback Request
1.  **Webhook: Order Fulfilled (Delayed):** 📦 This branch is triggered when an order is marked as fulfilled or delivered in your e-commerce system. **Crucially, this webhook should be sent by your e-commerce platform or a separate automation *after a specific delay* (e.g., 3-7 days post-delivery) to ensure the customer has received and experienced the product.**
2.  **Extract Customer Data (Feedback) (Function):** 🧹 This node extracts the customer's name and email address from the fulfilled order data, preparing it for the feedback request.
3.  **Send Feedback Request (Gmail/Email Service):** 📧 A personalized email is sent to the customer. This email thanks them for their purchase and includes a direct link to your chosen customer feedback form (e.g., Google Form, Typeform). This systematic approach encourages valuable insights for continuous business improvement.

---

### How to Set Up 🛠️

Follow these steps carefully to get your "E-commerce Operations Hub" workflow up and running in n8n:

1.  **Import Workflow JSON:**
    * Open your n8n instance.
    * Click on 'Workflows' in the left sidebar.
    * Click the '+' button or 'New' to create a new workflow.
    * Click the '...' (More Options) icon in the top right.
    * Select 'Import from JSON' and paste the entire JSON code for this workflow.

2.  **Configure Webhook: New Order (Branch A):**
    * Locate the 'Webhook: New Order' node (1. Webhook: New Order).
    * Activate the workflow. n8n will provide a unique 'Webhook URL'.
    * **Crucial Step:** Go to your e-commerce platform (Shopify, WooCommerce, etc.) and configure a new webhook. Set it to trigger on 'Order Created' or 'New Order' events, and paste the n8n Webhook URL there. Ensure the data format sent by your platform is JSON (most do by default).

3.  **Configure Extract Order Data (Function - Branch A):**
    * Locate the 'Extract Order Data' node (2. Extract Order Data).
    * **Adjust Field Names:** Review the `functionCode` inside this node. **You MUST adjust the variable assignments (e.g., `orderData.id`, `orderData.customer?.first_name`)** to accurately match the exact field names sent by your e-commerce platform's new order webhook. Use the 'Test Workflow' feature in n8n (after sending a test order webhook from your platform) to inspect the incoming `items[0].json.body` data structure and make precise adjustments.

4.  **Configure Send Fulfillment Notification (Slack - Branch A):**
    * Locate the 'Send Fulfillment Notification (Slack)' node (3. Send Fulfillment Notification (Slack)).
    * **Credentials:** Select your existing Slack API credential or click 'Create New' to set one up. Replace `YOUR_SLACK_CREDENTIAL_ID` with the actual ID or name of your credential from your n8n credentials.
    * **Channel:** Replace `YOUR_FULFILLMENT_SLACK_CHANNEL_ID_OR_NAME` with the exact ID or name of the Slack channel where your fulfillment team receives notifications (e.g., `#order-fulfillment`).
    * **(Optional: Switch to Email for Fulfillment):** Delete this Slack node and add a Gmail or SendGrid node. Configure its credentials, 'To Email', 'Subject' (e.g., `New Order #{{ $json.orderId }}`), and 'HTML' body (e.g., `={{ $json.fulfillmentMessage }}`).

5.  **Configure Schedule Trigger (Daily Inventory Check - Branch B):**
    * Locate the 'Schedule Trigger (Daily Inventory Check)' node (4. Schedule Trigger (Daily Inventory Check)).
    * **Adjust 'interval', 'value', and 'timezone'** to your preferred daily check time (e.g., every 24 hours at 3 AM in your local timezone).

6.  **Configure Read Inventory Data (Google Sheets - Branch B):**
    * Locate the 'Read Inventory Data (Google Sheets)' node (5. Read Inventory Data (Google Sheets)).
    * **Credentials:** Select your existing Google Sheets OAuth2 credential or click 'Create New'. Replace `YOUR_GOOGLE_SHEETS_CREDENTIAL_ID` with the actual ID or name of your credential.
    * **Sheet ID:** Replace `YOUR_INVENTORY_GOOGLE_SHEET_ID` with the actual ID of your Google Sheet where your inventory data is stored.
    * **Range:** Ensure the 'range' (e.g., `Inventory!A:C`) correctly covers your product ID, name, and stock level columns. **Crucially, ensure your Google Sheet has columns with exact names: `ProductID`, `ProductName`, and `StockLevel` (as numbers).**

7.  **Configure Filter Low Stock (Function - Branch B):**
    * Locate the 'Filter Low Stock' node (6. Filter Low Stock).
    * **Set Threshold:** Inside the `functionCode`, adjust `const lowStockThreshold = 10;` to your desired low stock alert level.
    * **Adjust Field Names:** Review the `functionCode` and **adjust the variable assignments (e.g., `product.ProductID`, `product.StockLevel`)** if your Google Sheet uses different column headers.

8.  **Configure Send Low Stock Alert (Slack - Branch B):**
    * Locate the 'Send Low Stock Alert (Slack)' node (8. Send Low Stock Alert (Slack)).
    * **Credentials:** Ensure your Slack API credential is selected (same as in step 4).
    * **Channel:** Replace `YOUR_INVENTORY_SLACK_CHANNEL_ID_OR_NAME` with the exact ID or name of the Slack channel for inventory alerts (e.g., `#inventory-alerts`).
    * **(Optional: Switch to Email for Low Stock):** Delete this Slack node and add a Gmail or SendGrid node. Configure its credentials, 'To Email', 'Subject' (e.g., `Low Stock Alert!`), and 'HTML' body (e.g., `={{ $json.alertMessage }}`).

9.  **Configure Webhook: Order Fulfilled (Delayed) (Branch C):**
    * Locate the 'Webhook: Order Fulfilled (Delayed)' node (10. Webhook: Order Fulfilled (Delayed)).
    * Activate the workflow. n8n will provide a unique 'Webhook URL'.
    * **Crucial Step:** This webhook should be triggered when an order is *fulfilled* or *delivered*. You will need to set up a mechanism in your e-commerce platform or a separate automation tool to send a webhook to this n8n URL **after a specific delay** (e.g., 3-7 days after the order is marked as delivered). This allows customers time to receive their product before being asked for feedback.

10. **Configure Extract Customer Data (Feedback) (Function - Branch C):**
    * Locate the 'Extract Customer Data (Feedback)' node (11. Extract Customer Data (Feedback)).
    * **Adjust Field Names:** Review the `functionCode` and **adjust the variable assignments (e.g., `fulfilledOrderData.customer?.email`)** to accurately match the exact field names sent by your 'Order Fulfilled' webhook.
    * **Set Feedback Form URL:** **Replace `YOUR_GOOGLE_FORM_OR_SURVEY_LINK`** with the actual public URL of your customer feedback survey (e.g., Google Form, Typeform, SurveyMonkey).
    * **Set Store Name:** Replace `[Your Store Name]` in the `emailBody` with your actual store name.

11. **Configure Send Feedback Request (Gmail - Branch C):**
    * Locate the 'Send Feedback Request (Gmail)' node (12. Send Feedback Request (Gmail)).
    * **Credentials:** Select your existing Gmail OAuth2 credential or click 'Create New'. Replace `YOUR_GMAIL_CREDENTIAL_ID` with the actual ID or name of your credential.
    * **From Email:** Replace `YOUR_STORE_EMAIL@example.com` with the email address you want feedback requests to be sent from.
    * The 'To Email', 'Subject', and 'HTML' body fields are dynamically generated by the previous 'Function' node.
    * **(Optional: Switch to another Email Service):** Delete this Gmail node and add a SendGrid or Mailgun node, configuring it similarly.

12. **Review and Activate:**
    * Thoroughly review all node configurations. Ensure all placeholder values (like `YOUR_...`) are replaced and settings are correct.
    * Click the 'Save' button in the top right corner.
    * Finally, toggle the 'Inactive' switch to 'Active' to enable your workflow. 🟢 Your "E-commerce Operations Hub" is now live, ready to automate and optimize your store!

## 🔗 Nodes Used

Function, Google Sheets, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
