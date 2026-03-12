# 🔬 Sync Shopify and WooCommerce sales into a Google Sheets accounting ledger

> ⚡ **17 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# (Retail) Auto-Sync Transactions to Accounting Tools

This workflow automates the collection and standardization of sales data from Shopify and WooCommerce into a centralized Google Sheets ledger. It triggers on new orders, normalizes disparate platform data, distinguishes between sales and refunds, and formats the information for accounting readiness. This eliminates manual data entry and ensures real-time financial tracking across multiple storefronts.


### Quick Implementation Steps

- **Connect Triggers:** Authenticate your Shopify and WooCommerce accounts in the respective "Order Events" nodes.
- **Set Webhooks:** Add the generated n8n Webhook URLs to your Shopify and WooCommerce notification settings.
- **Configure Sheets:** Select your target spreadsheet and sheet name in the "Log to Google Sheets" node.
- **Map Credentials:** Ensure Google Sheets OAuth2 is connected to authorize the "Append or Update" action.
- **Verify Fields:** Test the workflow to ensure platform-specific keys map correctly to your sheet columns.


## What It Does

The workflow acts as a bridge between e-commerce storefronts and financial reporting tools:

- **Multi-Source Ingestion:** Listens for real-time webhooks from both Shopify (orders/create) and WooCommerce (order.created).
- **Data Normalization:** Translates platform-specific JSON (like current_total_price vs total) into a single internal schema.
- **Smart Routing:** Evaluates the transaction type to determine if the record is a standard sale or a refund.
- **Accounting Formatting:** Structures data into financial-ready blocks, including calculated line items, tax details, and audit notes.
- **Centralized Logging:** Records all activity in Google Sheets, using an "Append or Update" logic to prevent duplicate entries.


## Who's It For

- E-commerce Business Owners managing multiple stores who need a single "source of truth" for daily revenue.
- Accountants & Bookkeepers who require standardized transaction data without manual export/import tasks.
- Operations Managers looking to monitor multi-platform sales performance in real-time within a shared spreadsheet.


## Technical Workflow Breakdown

### Entry Points (Triggers)

- **Shopify Order Events:** Listens for the orders/create topic to capture new Shopify transactions.
- **WooCommerce Order Events:** Monitors the order.created event for new WooCommerce sales.


### Processing & Logic

- **Platform Configuration:** Separate nodes for Shopify and WooCommerce that map native fields to standardized internal keys.
- **Merge Platform Data:** Consolidates the two distinct platform paths into a single unified stream.
- **Format Transaction Data:** A "Set" node that builds the final data object, creating a "description" string and assigning global statuses.
- **Check Transaction Type:** An "If" node that routes data based on whether the transactionType equals "sale".


### Output & Integrations

- **Format Sale/Refund Entry:** Logic-specific nodes that prepare line-item details (e.g., setting ItemRef to "Sales" or "Refund") and handle currency formatting.
- **Google Sheets (Log Data):** Appends the final formatted record to the "Price_Changes_Log" spreadsheet, including date, customer, amount, and document numbers.


## Customization

### Add New Platforms

You can extend this workflow by adding a new Trigger node (e.g., Magento or Amazon) and connecting it to a new Configuration node before the Merge node.

### Adjust Tax/Fee Logic

Modify the "Format Sale Entry" node expressions to calculate net revenue after marketplace fees or to separate regional tax codes into different columns.

### Change Log Destination

Swap the Google Sheets node for an ERP or Accounting node (like QuickBooks or Xero) to push data directly into professional accounting software.


## Troubleshooting Guide

| Issue                  | Possible Cause                           | Solution                                                                                           |
| :--------------------- | :--------------------------------------- | :------------------------------------------------------------------------------------------------- |
| Webhook Not Triggering | Incorrect Webhook URL in Store settings. | Copy the Production Webhook URL from n8n and update your Shopify/WooCommerce settings.             |
| Missing Data Fields    | Platform API version mismatch.           | Check the "Configuration" nodes to ensure JSON keys match the current platform payload.            |
| Sheets Sync Failure    | Column headers don't match.              | Ensure your Google Sheet has headers matching the keys in the "Log to Google Sheets" node.         |
| Duplicate Records      | "Append" mode used instead of "Update".  | Set the Google Sheets operation to "Append or Update" and select a unique identifier like orderId. |


## Need Help?

If you need help mapping additional custom fields from your store or connecting this to a professional accounting suite like QuickBooks, we're here to help. Feel free to contact our n8n developers at WeblineIndia.

## 🔗 Nodes Used

Google Sheets, Shopify Trigger, WooCommerce Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
