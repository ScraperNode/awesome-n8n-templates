# 🤝 Monitor WooCommerce daily revenue spikes and send Slack alerts

> ⚡ **35 views** · 🤝 [CRM & Sales Operations](../)

## Description

# WooCommerce Daily Sales & Revenue Spike Monitor → Slack Alert

This workflow automatically checks your WooCommerce store’s last 24 hours of revenue, top-selling products, and cancelled orders on a daily schedule. It sends Slack notifications when sales cross a defined threshold or provides a detailed status update—including cancellation impact—if the target hasn’t been met, helping teams react quickly without manual reporting.

### 🚀 Quick Implementation Steps

* Set up the Schedule Trigger to run daily
* Connect WooCommerce and fetch recent orders
* Filter paid and cancelled orders separately
* Filter both datasets to the last 24 hours
* Calculate revenue, top products, and cancellation impact
* Merge and format sales and cancellation data
* Compare revenue with a configurable threshold
* Send enriched Slack alerts with sales and cancellation insights


## What It Does

This workflow serves as a **daily sales and revenue health monitoring assistant** for your WooCommerce store.

* It runs automatically on a schedule and collects recent order data from WooCommerce via API.
* Only paid orders (Completed / Processing) are considered for revenue calculations.
* Cancelled orders are processed in a separate branch to track revenue loss.
* Orders created within the last 24 hours are filtered for both paid and cancelled orders.
* The workflow calculates **total revenue**, **order count**, **average order value**, and **top-selling products**.
* It also calculates **cancelled order count** and **cancelled revenue** to highlight potential revenue leakage.
* Sales and cancellation data are merged into a single structured object.
* An **IF node** checks whether revenue exceeds a predefined threshold.
* If the threshold is crossed, a **Slack Sales Spike Alert** is sent with cancellation context.
* If the threshold is not reached, a **Slack Status / Pending Alert** is sent showing progress, top products, and cancellation impact—keeping the team informed without noise.

## Who’s It For

* Business owners monitoring daily sales and revenue health
* Sales and marketing teams tracking revenue spikes and losses
* E-commerce managers using WooCommerce
* Operations teams monitoring cancellations and fulfillment risks
* Non-technical users who want actionable insights without dashboards


## Requirements to Use This Workflow

* An active **WooCommerce store**
* **WooCommerce REST API credentials**
* An **n8n instance** (cloud or self-hosted)
* A **Slack workspace** with incoming webhook or Slack credentials
* Permission to read WooCommerce orders and post Slack messages


## How It Works & Set Up

1. **Schedule Trigger**

   * Configure the Schedule Trigger to run once per day at your preferred time.

2. **Fetch Orders from WooCommerce**

   * Use the WooCommerce node to retrieve recent orders from your store.

3. **Filter Paid Orders**

   * Keep only orders with status `Completed` or `Processing`.

4. **Filter Last 24 Hours Orders**

   * A Code node filters paid orders created within the last 24 hours.

5. **Calculate Top Products**

   * A Code node aggregates product quantities sold in the last 24 hours.

6. **Calculate Total Revenue**

   * A Code node calculates total revenue, order count, and average order value.

7. **Fetch & Process Cancelled Orders**

   * A separate WooCommerce branch fetches orders with status `Cancelled`.
   * Cancelled orders are filtered to the last 24 hours using a Code node.
   * A Code node calculates cancelled order count and cancelled revenue.

8. **Merge & Format Sales Data**

   * A Merge node combines sales metrics and cancellation metrics.
   * A Code node formats all results into a single JSON object for Slack.

9. **Threshold Check**

   * An IF node compares total revenue against a fixed threshold.

10. **Send Slack Alerts**

* **TRUE path**: Sends a **Sales Spike Alert** including revenue, top products, and cancellation impact.
* **FALSE path**: Sends a **Status / Pending Alert** showing current performance, top products, and cancellation insights.

11. **Activate Workflow**

* Test once and activate the workflow for daily monitoring.


## How To Customize Nodes

* **Threshold Value**: Update the IF node condition to match your business target
* **Schedule Time**: Change the Schedule Trigger execution time
* **Slack Channels**: Update Slack nodes to post in your desired channels
* **Order Status Logic**: Adjust filters for paid or cancelled orders if needed
* **Time Window**: Modify the 24-hour logic to 12 hours, 48 hours, or weekly
* **Cancellation Sensitivity**: Add conditions to alert on high cancellation volume or revenue impact


## Add-ons (Optional Enhancements)

* Add **cancellation rate (%)** and **net revenue** calculations
* Trigger alerts when **cancellation revenue exceeds a defined percentage**
* Store daily sales and cancellation history in **Google Sheets or a database**
* Add **day-over-day or week-over-week comparisons**
* Send alerts to **Microsoft Teams or Email**
* Attach a **CSV report** with order and cancellation details


## Use Case Examples

* Detect viral product sales quickly
* Monitor flash sale performance
* Identify revenue loss due to cancellations
* Alert leadership on high-revenue or high-risk days
* Track campaign-driven sales spikes and drop-offs
* Support inventory, operations, and customer experience planning

&gt; Many more business scenarios can be addressed based on your store’s needs.


## Troubleshooting Guide

| Issue                              | Possible Cause                   | Solution                                 |
| ---------------------------------- | -------------------------------- | ---------------------------------------- |
| No Slack alert received            | Revenue did not exceed threshold | Check threshold or test with lower value |
| Workflow fails                     | WooCommerce API error            | Verify API credentials and permissions   |
| Revenue or cancellation shows zero | Orders filtered out              | Validate order status and date logic     |
| Slack message not sent             | Wrong Slack credentials          | Reconnect Slack node                     |
| Orders missing                     | Timezone mismatch                | Align WooCommerce and n8n timezone       |


## Need Help?

Need help setting up this workflow or customizing it further?  

Our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) team at WeblineIndia can assist you with implementation, add-ons, performance optimization and building similar n8n automations tailored to your business needs.

👉 Contact **WeblineIndia** today to automate smarter and scale faster.

## 🔗 Nodes Used

Slack, WooCommerce, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
