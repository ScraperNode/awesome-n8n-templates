# 🤝 Shopify & WooCommerce inventory sync with Google Sheets alerts

> ⚡ **96 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How It Works
A webhook or timer triggers the workflow to automatically fetch inventory data from multiple platforms. Stock levels are compared across stores to identify discrepancies, and any inconsistencies are updated on the respective platforms in real time. All changes and updates are recorded in Google Sheets for easy tracking, and email alerts are sent to notify relevant team members of any exceptions or issues that require attention. This ensures inventory accuracy and timely response to stock mismatches.

## Setup Steps
1. Add Shopify and/or WooCommerce API credentials to enable secure data access.
2. Connect Google Sheets for comprehensive logging of all inventory updates and Gmail for sending timely email alerts.
3. Configure the sync frequency within the Function nodes to control how often inventory data is fetched, compared, and updated.

## Prerequisites
- Shopify/WooCommerce API keys
- Google Sheets access
- Gmail credentials
- n8n instance
- 
## Customization
- Add ERPNext or custom APIs
- Enable Slack notifications
- AI discrepancy detection

## Benefits
- Real-time inventory accuracy
- Automated cross-platform updates
- Centralized audit logging

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
