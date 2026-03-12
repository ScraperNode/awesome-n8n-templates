# 🔬 Automate receipt processing for expense tracking with Google Drive, VLM Run & Airtable

> ⚡ **227 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Transform your expense tracking with automated AI receipt processing that extracts data and organizes it instantly.**


## What this workflow does

1. **Monitors Google Drive** for new receipt uploads (images/PDFs)
2. **Downloads and processes** files automatically 
3. **Extracts key data** using verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) (merchant, amount, currency, date)
4. **Saves structured data** to Airtable for easy tracking

## Setup

**Prerequisites:** Google Drive account, Airtable account, VLM Run API credentials, n8n instance.

Install the verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can start using it in your workflows.

**Quick Setup:**
1. Configure Google Drive OAuth2, Airtable OAuth2 
2. Create receipt upload folder
3. Add VLM Run [API credentials](https://app.vlm.run/dashboard) 
4. Create Airtable table with columns: Customer, Merchant, Amount, Currency, Date
5. Update folder/table IDs in workflow nodes
6. Test and activate

## How to customize this workflow to your needs

**Extend functionality by:**
- Adding expense categories and approval workflows
- Connecting to accounting software (QuickBooks, Xero)
- Including Slack notifications for processed receipts
- Adding data validation and duplicate detection

This workflow transforms manual receipt processing into an automated system that saves hours while improving accuracy.
&gt; ⚠️ **Disclaimer:** This workflow requires a **self-hosted n8n setup** because it uses **custom nodes (VLM Run)** that are not available on the managed n8n.cloud service.

## 🔗 Nodes Used

Airtable, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
