# 🤝 Automate Shopify inventory reordering with predictive analytics and Google Sheets

> ⚡ **394 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow automates inventory management and predictive reordering for Shopify stores. It integrates Shopify, Google Sheets, and Slack to monitor inventory levels, calculate dynamic reorder points based on sales velocity, and automate supplier communication. The workflow helps prevent stockouts, reduces overstock, and streamlines the purchase order process with minimal manual intervention.

---

## Key Features

- **Automated Inventory Monitoring:** Fetches real-time inventory, product, and order data from Shopify and Google Sheets.
- **Predictive Reordering:** Calculates sales velocity and dynamic reorder points for each SKU.
- **Supplier Communication:** Automatically generates and sends purchase orders (POs) to suppliers via email or API.
- **Multi-Warehouse Logic:** Checks for possible stock redistribution before triggering new orders.
- **Business Rule Enforcement:** Applies custom rules (MOQ, budget, business days, approval thresholds).
- **Real-Time Alerts:** Notifies stakeholders via Slack about critical stock risks and slow-moving products.
- **Comprehensive Logging:** Updates purchase order logs and analytics dashboards for full traceability.

---

## How to Configure

1. **Shopify Integration**
   - Create a [Shopify Private App](https://shopify.dev/docs/apps/auth) and obtain your API credentials (API key, password, and store URL).
   - In n8n, set up Shopify credentials using these details.

2. **Google Sheets Integration**
   - Prepare three Google Sheets:
     - **Inventory Master:** Contains SKU, product details, and ideal stock levels.
     - **Suppliers:** Contains supplier contact information and SKU mapping.
     - **Purchase Order Log:** Tracks all generated POs.
   - Share these sheets with the Google account connected to n8n and set up Google Sheets credentials.

3. **Slack Integration**
   - Create a [Slack Incoming Webhook](https://api.slack.com/messaging/webhooks) for the channel where you want to receive alerts and summaries.
   - Add the webhook URL to the relevant Slack nodes in the workflow.

4. **Supplier Communication**
   - For email: Configure the Email node with your SMTP credentials and supplier email addresses.
   - For API: Set up HTTP Request nodes with supplier API endpoints and authentication as required.

5. **Workflow Parameters**
   - Adjust configuration nodes to set business rules such as:
     - Reorder point multipliers
     - Safety stock days
     - Budget limits
     - Minimum order quantities (MOQ)
     - Approval thresholds

6. **Scheduling**
   - The workflow is set to run hourly by default. Adjust the trigger node as needed.

7. **Testing**
   - Run the workflow manually with test data to ensure all integrations and logic work as expected before enabling automation.

---

## How It Works

1. **Trigger:** Runs automatically on an hourly schedule.
2. **Configuration:** Sets business parameters (Shopify URL, reorder multipliers, safety stock days, budget, etc.).
3. **Data Collection:** Retrieves inventory, product details, and recent orders from Shopify. Reads inventory master, supplier list, and PO log from Google Sheets.
4. **Data Merging:** Combines all sources into a unified SKU-level dataset.
5. **Sales Velocity Calculation:** Computes 7/30-day sales velocity for each SKU.
6. **Dynamic Reorder Point:** Calculates reorder points based on sales velocity, lead time, and safety stock.
7. **Reorder Check:** Identifies SKUs below their reorder point.
8. **Stockout Risk Assessment:** Flags SKUs at high risk of stockout and sends Slack alerts.
9. **Warehouse Redistribution:** Attempts to balance stock between warehouses before reordering.
10. **Supplier Data Enrichment:** Adds supplier info and checks availability.
11. **Business Rule Checks:** Validates business day, MOQ, promotional periods, budget, and approval needs.
12. **Order Calculation:** Determines optimal order quantities and prioritizes by profitability.
13. **PO Structuring:** Prepares PO line items and context for supplier communication.
14. **PO Dispatch:** Sends PO via email or API to the supplier.
15. **PO Confirmation & Logging:** Waits for confirmation and updates the PO log in Google Sheets.
16. **Slow-Mover Detection:** Identifies slow-selling SKUs and sends actionable Slack suggestions.
17. **Inventory Update:** Syncs inventory changes back to Shopify.
18. **Analytics & Reporting:** Updates dashboards, scenario planning sheets, and accounting systems.
19. **Daily Summary:** Aggregates and sends a daily activity summary to Slack.

---

## Example Use Case

A Shopify retailer uses this workflow to automate inventory management. Every hour, the workflow checks current stock and sales trends, predicts which products are at risk of running out, and automatically creates purchase orders for suppliers. If a product is selling slowly, the system notifies the team with suggestions for discounts or bundling. All actions are logged and summarized daily, ensuring the team stays informed and inventory is always optimized.

---

## Prerequisites

- Shopify account with API access
- Google Sheets with inventory, supplier, and PO log sheets
- Slack workspace and webhook for notifications
- Supplier email/API endpoints for PO dispatch

---

## Limitations & Notes

- Customization may be required for specific business rules or supplier integrations.
- Ensure API credentials and sheet structures match the workflow’s configuration.
- Multi-warehouse logic assumes accurate warehouse-level inventory data.

---

If you need further customization or have specific requirements for your business logic, adjust the configuration and node parameters accordingly.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Shopify, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
