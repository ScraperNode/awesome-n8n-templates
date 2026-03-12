# 📁 Track WooCommerce inventory and send reorder alerts via Gmail and Slack

> ⚡ **22 views** · 📁 [File Management](../)

## Description

# WooCommerce Inventory Reorder Automation with n8n, Gmail & Slack Alerts

**Automatically track product sales and inventory levels in WooCommerce and trigger reorder notifications when stock runs low or sales spike.**  

This n8n workflow runs daily, analyzes all WooCommerce orders to calculate SKU-wise sales, compares them with current product stock, calculates an optimal reorder quantity and sends automated alerts via **Email (Gmail)** and **Slack** when a product meets reorder conditions.

### Quick Implementation Steps (Get Started Fast)

1. Import the workflow JSON into your n8n instance.
2. Connect WooCommerce, Gmail and Slack credentials.
3. Set the Schedule Trigger to run daily.
4. Update email recipients and Slack channel.
5. Activate the workflow.


## What It Does  

This workflow automates inventory monitoring and reorder decision-making for WooCommerce stores. On a daily schedule, it fetches **all orders** from WooCommerce and calculates how many units of each SKU were sold. This gives you a clear picture of recent sales velocity without manual reporting.

The workflow then retrieves live product inventory data from WooCommerce, including current stock levels and low-stock thresholds. Sales data and product data are merged using SKU matching and evaluated using logical conditions to determine whether a product should be reordered.

When a product meets the reorder criteria, the workflow calculates an optimal reorder quantity using average daily sales, supplier lead time and safety stock logic. It then automatically notifies the purchasing team via **email and Slack**, ensuring no critical stock replenishment is missed.


## Who’s It For  

This workflow is ideal for:

- WooCommerce store owners
- Inventory and supply chain managers
- E-commerce operations teams
- Businesses looking to reduce stockouts
- Teams that want proactive, automated purchase alerts


## Requirements to Use This Workflow  

To use this workflow, you will need:

- An active **n8n** instance
- A **WooCommerce store** with:
  - Products using SKUs
  - Stock management enabled
- WooCommerce API credentials with access to:
  - Orders
  - Products
- A **Gmail account** connected to n8n (OAuth2)
- A **Slack workspace** with bot permissions
- Basic understanding of n8n nodes and credentials


## How It Works & How To Set Up  

### Step-by-Step Workflow Logic

1. **Schedule Trigger (Daily)**
   - The workflow runs automatically once per day.
2. **Fetch All WooCommerce Orders**
   - Retrieves all available orders from WooCommerce.
   - No status or date filtering is applied.
3. **Calculate Sales per SKU**
   - A JavaScript Code node loops through order line items.
   - Quantities sold are aggregated per SKU.
4. **Fetch All WooCommerce Products**
   - Retrieves product inventory data including:
     - Stock quantity
     - Low stock threshold
     - Product name
5. **Merge Sales & Product Data**
   - Sales data and product inventory data are merged using SKU matching.
6. **Reorder Eligibility Filter**
   - A product qualifies if **either** condition is met:
     - Current stock ≤ low-stock threshold  
     - OR recent sales quantity ≥ 1.5× low-stock threshold
7. **Reorder Quantity Calculation**
   - Uses:
     - Average daily sales
     - Fixed lead time (7 days)
     - Safety stock (5 units)
   - Calculates recommended reorder quantity.
8. **Email Notification**
   - Sends a formatted HTML email with reorder details.
9. **Slack Notification**
   - Sends a real-time alert to a specified Slack channel.


## How To Customize Nodes  

You can easily adapt this workflow to your business needs:

- **Schedule Trigger**
  - Change execution frequency (daily, weekly, etc.).
- **Sales Calculation Code**
  - Modify logic to:
    - Ignore certain SKUs
    - Add time-based filtering
    - Apply weighted averages
- **Filter Conditions**
  - Adjust reorder rules:
    - Change sales multiplier
    - Use AND logic instead of OR
- **Reorder Formula**
  - Update lead time or safety stock values.
  - Integrate supplier-specific rules.
- **Email & Slack Nodes**
  - Replace recipients and channels.
  - Customize message formatting or branding.


## Add-ons (Extend the Workflow)  

You can enhance this workflow with:

- Automatic **purchase order creation** in ERP systems
- Google Sheets logging for reorder history
- Vendor-specific reorder logic
- Forecast-based inventory planning
- Approval workflows before notifications
- Webhook integration with procurement tools


## Use Case Examples  

Primary use cases include:

1. Preventing stockouts in fast-moving WooCommerce stores
2. Automating daily inventory monitoring
3. Supporting purchasing teams with data-driven reorder alerts
4. Replacing manual stock checks and spreadsheets
5. Improving response time to sudden sales spikes  

There are many more variations of this workflow that can be adapted to different industries and store sizes.


## Troubleshooting Guide  

| Issue | Possible Cause | Solution |
|-----|---------------|----------|
| No emails sent | Gmail credentials not connected | Reconnect Gmail OAuth2 |
| No Slack alerts | Wrong channel ID or permissions | Update channel and Slack app scopes |
| Reorder triggered too often | Filter logic too sensitive | Adjust threshold values |
| Missing sales data | Products without SKUs | Ensure all products have SKUs |
| Workflow fails | WooCommerce API limits | Reduce frequency or paginate data |


## Need Help?  

Need assistance setting up this workflow or customizing it for your business?  

Our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) team at **WeblineIndia** specializes in building advanced n8n automations, WooCommerce integrations and end-to-end business process workflows.

Whether you need enhancements, add-ons or a completely custom automation solution, our experts are here to help you streamline operations and scale efficiently.

**Contact WeblineIndia** to get started with smarter automation today.

## 🔗 Nodes Used

Slack, WooCommerce, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
