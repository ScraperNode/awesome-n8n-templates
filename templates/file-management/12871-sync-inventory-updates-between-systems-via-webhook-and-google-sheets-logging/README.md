# 📁 Sync inventory updates between systems via webhook and Google Sheets logging

> ⚡ **32 views** · 📁 [File Management](../)

## Description

# (Retail Automation) Transfer Inventory Updates Across Systems

This workflow automatically synchronizes inventory quantity updates between systems using a webhook-driven approach. When an inventory update is received, the workflow validates the source, prepares a clean payload, sends the update to a secondary system via an HTTP API and logs the update into Google Sheets for tracking and auditing.

### Quick Implementation Steps

1. Import the workflow JSON into n8n.
2. Configure the Webhook URL in your source system.
3. Update the HTTP Request node with the secondary system API endpoint.
4. Connect Google Sheets and select the target spreadsheet.
5. Activate the workflow.


## What It Does

This workflow listens for inventory update events sent from an external system such as an online store, POS, ERP or warehouse platform. Once an update is received, the workflow normalizes the incoming data by extracting key fields like product ID, SKU, stock quantity, source system and modification timestamp.

To avoid circular synchronization issues, the workflow validates the origin of the update and ensures that updates originating from the secondary system are not reprocessed. Valid inventory updates are then transformed into a clean, API-ready payload and sent to a secondary system using an HTTP Request node.

After the inventory update is successfully pushed to the secondary system, the workflow logs the inventory details into Google Sheets. This provides a simple audit trail for tracking inventory movements and troubleshooting sync issues.


## Who’s It For

This workflow is suitable for:
- Retail businesses managing inventory across multiple systems
- Teams using WooCommerce, POS, ERP or warehouse tools
- Operations teams requiring inventory audit logs
- Developers building middleware-based inventory synchronization
- Businesses aiming to reduce overselling and manual stock corrections


## Prerequisites

To use this workflow, you need:
- An active n8n instance (self-hosted or cloud)
- A source system capable of sending inventory updates via webhook
- SKU-based inventory management
- Access to a secondary system API endpoint
- Google Sheets account with edit permissions
- A Google Sheet with predefined column headers


## How to Use & Setup

1. Import the workflow JSON into your n8n instance.
2. Copy the Webhook URL from the **Inventory Webhook** node.
3. Configure your source system to send inventory updates to this Webhook URL.
4. Review the **Normalize Inventory Data** node to ensure required fields are mapped correctly.
5. Verify the **Check Sync Origin** node to match your source system naming.
6. Update the **Send Inventory To Secondary API** node with the correct API endpoint.
7. Configure the **Log Inventory Sync To Google Sheet** node with your target spreadsheet.
8. Save and activate the workflow.

Once activated, the workflow runs automatically whenever an inventory update is received.


## How To Customize Nodes

- **Normalize Inventory Data**
  - Add or remove inventory-related fields as needed.
  - Adjust field names to match your source system payload.
- **Check Sync Origin**
  - Modify the source comparison value to prevent loops in your setup.
- **Prepare Inventory Payload**
  - Change payload structure to match the secondary system API requirements.
- **Send Inventory To Secondary API**
  - Add authentication headers or modify HTTP method if required.
- **Google Sheets Logging**
  - Add additional columns such as execution ID or API response status.


## Add-ons (Optional Enhancements)

This workflow can be extended to:
- Add retry logic for failed API requests
- Log failed sync attempts into a separate Google Sheet
- Send Slack or email alerts on sync failures
- Perform scheduled inventory reconciliation between systems
- Support bi-directional inventory synchronization


## Use Case Examples

1. Sync inventory changes from WooCommerce to an ERP system.
2. Push POS stock deductions to a warehouse management system.
3. Maintain a centralized inventory audit log in Google Sheets.
4. Prevent overselling across multiple sales channels.
5. Monitor and troubleshoot inventory sync issues efficiently.

There can be many more use cases depending on business requirements.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|---------------|----------|
| Workflow not triggering | Webhook URL not configured | Verify Webhook URL and HTTP method |
| Inventory not syncing | Source validation blocking flow | Check source value in payload |
| API request failing | Invalid endpoint or payload | Validate API URL and request body |
| Google Sheet not updating | Incorrect sheet configuration | Verify sheet permissions and headers |
| Duplicate updates | Missing source control | Ensure sync origin logic is correct |


## Need Help?

If you need assistance setting up, customizing or extending this workflow or want to build similar automation workflows tailored to your business, feel free to contact [n8n automation experts](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia**.

Our team can help you design, optimize and deploy robust n8n automation solutions.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
