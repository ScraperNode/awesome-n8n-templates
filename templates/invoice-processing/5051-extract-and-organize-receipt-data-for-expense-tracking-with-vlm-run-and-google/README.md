# 🧾 Extract and organize receipt data for expense tracking with VLM Run and Google

> ⚡ **1,386 views** · 🧾 [Invoice Processing](../)

## Description

**Transform your expense tracking with automated AI receipt processing that extracts data and organizes it instantly.**


## What this workflow does

1. **Monitors Google Drive** for new receipt uploads (images/PDFs)
2. **Downloads and processes** files automatically 
3. **Extracts key data** using verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) (merchant, amount, currency, date)
4. **Saves structured data** to Google Sheets for easy tracking

## Setup

**Prerequisites:** Google Drive/Sheets accounts, VLM Run API credentials, n8n instance.

Install the verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can start using it in your workflows.

**Quick Setup:**
1. Configure Google Drive OAuth2 and create receipt upload folder
2. Add VLM Run [API credentials](https://app.vlm.run/dashboard) 
3. Create Google Sheets with columns: Customer, Merchant, Amount, Currency, Date
4. Update folder/sheet IDs in workflow nodes
5. Test and activate

## How to customize this workflow to your needs

**Extend functionality by:**
- Adding expense categories and approval workflows
- Connecting to accounting software (QuickBooks, Xero)
- Including Slack notifications for processed receipts
- Adding data validation and duplicate detection

This workflow transforms manual receipt processing into an automated system that saves hours while improving accuracy.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
