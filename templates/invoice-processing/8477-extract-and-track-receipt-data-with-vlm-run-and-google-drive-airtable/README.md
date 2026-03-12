# 🧾 Extract and track receipt data with VLM Run and Google Drive + Airtable

> ⚡ **133 views** · 🧾 [Invoice Processing](../)

## Description

**Simplify expense tracking with AI-powered automation that extracts receipt data and organizes it instantly.**

## What this workflow does

1. **Watches Google Drive** for new receipt uploads (images/PDFs)
2. **Automatically downloads and prepares** files for processing
3. **Parses key details** using the trusted [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) (merchant, customer, amount, currency, date)
4. **Stores structured records** in Airtable for real-time tracking

## Setup

**Prerequisites:** Google Drive & Airtable accounts, VLM Run API credentials, n8n instance.

Install the verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can start using it in your workflows.

**Quick Setup:**

1. Configure Google Drive OAuth2 and create a receipt upload folder
2. Add VLM Run [API credentials](https://app.vlm.run/dashboard)
3. Create an Airtable base with fields: Customer, Merchant, Amount, Currency, Date
4. Update folder/base IDs in workflow nodes
5. Test and activate

## How to customize this workflow to your needs

**Extend functionality by:**

* Adding categories, budgets, or approval steps
* Syncing with accounting tools (QuickBooks, Xero)
* Sending Slack or email alerts for processed receipts
* Enabling error handling and duplicate checks

This workflow eliminates manual data entry and creates a seamless, automated system that saves time and improves accuracy.

## 🔗 Nodes Used

Airtable, Webhook, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
