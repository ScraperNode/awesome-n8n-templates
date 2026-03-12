# 🤝 Sync retail product prices between Shopify and WooCommerce with alerts

> ⚡ **43 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Retail Price Sync Automation for Shopify & WooCommerce

This workflow automates the synchronization of product prices across Shopify and WooCommerce platforms to ensure retail consistency. It triggers when a price change is detected in either system, applies platform-specific pricing rules (such as psychological rounding) and updates the secondary platform. The workflow also includes a threshold-based alerting system via Gmail for major price drops and logs every change to a Google Sheets master file for auditing.

### Quick Implementation Steps

1.  Set the `priceChangeThreshold` in the Shopify Configuration and WooCommerce Configuration nodes.
2.  Connect your Shopify Access Token credentials to the Shopify trigger and update nodes.
3.  Connect your WooCommerce API credentials to the WooCommerce trigger and update nodes.
4.  Link your Google Sheets OAuth2 and Gmail OAuth2 credentials for logging and notifications.
5.  Specify the `documentId` for your pricing log in the Log Price Changes node.


## What It Does

This workflow acts as a bridge between two major e-commerce platforms, ensuring that a price update in one is intelligently reflected in the other. It goes beyond simple mirroring by:

1.  **Threshold Monitoring:** Detecting if a price change exceeds a set limit (e.g., $150 or $500) to trigger immediate management alerts.
2.  **Platform-Specific Logic:** Automatically formatting prices for different environments—for example, rounding WooCommerce prices to the nearest `.99` for psychological pricing while using standard rounding for Shopify.
3.  **Audit Trail Creation:** Maintaining a centralized record of all price migrations in Google Sheets, including SKUs, old vs. new prices and timestamps.
4.  **Team Communication:** Sending automated email notifications to ensure the team is aware of successful syncs or critical price volatility.


## Who’s It For

- Multi-Channel Retailers who need to keep pricing in sync across Shopify and WooCommerce storefronts.
- Inventory Managers looking to automate price adjustments without manual data entry.
- Finance & Operations Teams requiring an automated audit log of all pricing modifications.

## Technical Workflow Breakdown

### Entry Points (Triggers)

1.  Shopify Price Update: Triggers on the `orders/updated` topic (or product updates) to capture new price data from Shopify.
2.  WooCommerce Price Update: Triggers on `product.updated` to capture changes originating from the WooCommerce store.

### Processing & Logic

1.  Configuration Nodes: Define the source system and set the specific threshold for what constitutes a "major" price change.
2.  Apply Platform-Specific Rules: A custom code block that calculates psychological pricing (e.g., forcing a `.99` ending) and ensures prices never drop below a minimum safety floor (e.g., `$1.00`).
3.  Check Price Change Threshold: An internal filter that routes the workflow based on the magnitude of the price shift.

### Output & Integrations

1.  Update Nodes: Pushes the formatted price data to the target platform (Shopify or WooCommerce).
2.  Log Price Changes: Appends a new row to a Google Sheet with detailed metadata.
3.  Notifications: Uses Gmail to send high-priority alerts for major drops and routine confirmations for successful syncs.

## Customization

### Adjust Pricing Strategy

Modify the Apply Platform-Specific Rules (Code Node) to change rounding logic, add currency conversion factors or implement different psychological pricing tiers.

### Change Alert Thresholds

Update the `priceChangeThreshold` value in the Shopify Configuration or WooCommerce Configuration nodes to make alerts more or less sensitive.

### Expand Logging

The Log Price Changes node is set to `autoMapInputData`. You can add custom columns to your Google Sheet and the workflow will automatically attempt to fill them if the data exists in the workflow.

## Troubleshooting Guide

| Issue                                    | Possible Cause                       | Solution                                                                                                           |
| :--------------------------------------- | :----------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| **Sync Not Triggering**                  | Webhook not registered correctly.    | Check the `webhookId` in the Shopify/WooCommerce trigger nodes and ensure the apps have permission to send events. |
| **Google Sheets Error**                  | Sheet ID or Column names mismatched. | Verify the `documentId` and ensure the `id` column exists in your Sheet for matching.                              |
| **Prices Not Rounding Correct/Expected** | Code node logic error.               | Review the JavaScript in Apply Platform-Specific Rules to ensure the `Math` functions match your strategy.         |
| **Emails Not Sending**                   | Gmail OAuth2 expired.                | Re-authenticate your Gmail credentials in the n8n settings.                                                        |

## Need Help?

If you need assistance adjusting the psychological pricing code, adding more platforms (like Amazon or eBay) or setting up advanced Slack notifications, please reach out to our [n8n automation experts](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia. We can help scale this workflow to manage thousands of SKUs with high precision.

## 🔗 Nodes Used

Google Sheets, Shopify Trigger, WooCommerce Trigger, WooCommerce, Shopify, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
