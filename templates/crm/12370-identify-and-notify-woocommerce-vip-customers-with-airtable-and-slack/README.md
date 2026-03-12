# 🤝 Identify and notify WooCommerce VIP customers with Airtable and Slack

> ⚡ **8 views** · 🤝 [CRM & Sales Operations](../)

## Description

# WooCommerce VIP Customer Automation

This workflow automatically identifies VIP customers from your WooCommerce store based on their total spending and number of completed orders. It pulls new orders on a schedule, filters valid transactions, groups customers, calculates their VIP tier, stores them into Airtable and notifies your team in Slack.It removes all manual checking and ensures your team instantly knows when a high-value customer places an order.

### Quick Start – Implementation Steps

1.  Add your WooCommerce store domain and API credentials inside n8n.
2.  Configure Airtable and Slack credentials.
3.  Adjust VIP rules (lifetime spend or total orders) if needed.
4.  Activate the workflow — it will automatically detect VIPs and alert your team.
    

## What It Does

This workflow fully automates VIP customer detection for WooCommerce stores. Every few minutes, it retrieves new orders via WooCommerce API. It filters only processing or completed orders and extracts essential fields such as customer ID, customer name order total and timestamps.

The workflow then groups orders by customer to ensure duplicate orders don’t inflate metrics. For each customer, it fetches their complete order history, calculates lifetime value, counts total paid orders and assigns a VIP tier (Platinum, Gold or Silver).

Once a customer qualifies, their details are saved into Airtable for tracking. A Slack message is simultaneously sent to inform your team so they can take immediate action — such as providing priority support, follow-up messages or special offers.

This system runs completely on its own and keeps customer insights up-to-date without manual checks.

## Who’s It For

This workflow is ideal for:

*   WooCommerce store owners
*   Customer support teams
*   Marketing teams
*   CRM & retention specialists
*   eCommerce operations teams
*   Businesses wanting automated VIP alerts
    

## Requirements to Use This Workflow

You will need:

*   A running **n8n instance** (cloud or self-hosted)
*   A **WooCommerce store** with API keys
*   A **Slack workspace** with API permissions
*   An **Airtable Base** to store VIP customers
*   Basic understanding of WooCommerce and Airtable fields
    

## How It Works

1.  **Scheduled Trigger** – Runs every few minutes to check for new orders.
2.  **Domain Setup** – Assigns the WooCommerce store domain used across API calls.
3.  **Fetch Orders** – Retrieves all orders from WooCommerce.
4.  **Filter Valid Orders** – Only keeps completed or processing orders.
5.  **Format & Clean Data** – Extracts only key order details.
6.  **Deduplicate Customers** – Only the first order per customer is processed.
7.  **Fetch Order History** – Gets lifetime order history for each customer.
8.  **Calculate VIP Tier** – Determines Platinum/Gold/Silver based on spend or order count.
9.  **Filter VIP Only** – Removes customers who do not qualify.
10.  **Save to Airtable** – Creates/updates VIP records.
11.  **Notify Team on Slack** – Sends VIP alerts instantly.
    

## Setup Steps

1.  Import this workflow JSON into n8n.
2.  Enter your WooCommerce API credentials in the HTTP Request nodes.
3.  Update the **wc\_domain** value in the “Set WooCommerce Domain” node.
4.  Configure Airtable credentials and select your Base + Table.
5.  Set your Slack channel ID inside the Slack node.
6.  Adjust VIP rules inside the “Calculate VIP Tier” code node if needed.
7.  Activate the workflow — it will now run automatically.
    

## How to Customize Nodes

### Adjust VIP Rules

Edit the logic inside **Calculate VIP Tier**:

*   Change Platinum threshold (₹20,000 or your value)
*   Change Gold rule (5 orders or more)
*   Add new VIP tiers

### Customize Airtable Fields

You can modify:

*   Table columns
*   Field naming
*   Additional customer details
    
### Customize Slack Alerts

In the Slack node, change:

*   Message format
*   Channel ID
*   Emoji, headings or urgency indicators
    

## Add-Ons (Optional Enhancements)

You can extend this workflow with:

*   Automatic email to VIP customers
*   Loyalty point calculation
*   Google Sheets export
*   Integration with CRM platforms
*   Send SMS notifications
*   Separate VIP tiers into dedicated Slack channels
    

## Use Case Examples

1.  **Notify support about high-value customers**
2.  **Track customers crossing spending milestones**
3.  **Identify loyal customers with 5+ repeat purchases**
4.  **Automatically sync VIP customers to CRM**
5.  **Trigger loyalty coupon generation**
    

## Troubleshooting Guide

| Issue                     | Possible Cause                                  | Solution                                                     |
|---------------------------|--------------------------------------------------|--------------------------------------------------------------|
| No orders fetched         | Wrong domain or API keys                        | Update WooCommerce credentials                               |
| VIP not detected          | Customer has low spend or low orders            | Verify VIP rules in “Calculate VIP Tier”                     |
| Airtable record not created | Incorrect table schema                        | Match Airtable fields with node mapping                      |
| Slack alert missing       | Wrong Slack channel ID or credentials           | Re-check Slack authentication                                |
| Guest users included      | Missing customer_id filter                     | Ensure customer_id != 0 condition stays in place             |


## Need Help?

If you need assistance integrating this workflow, customizing VIP rules or adding new automations, our automation team at **WeblineIndia** is happy to help.

You can also extend this system with loyalty engines, advanced analytics, multi-store support or any custom automation tailored for your eCommerce business.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
