# 🧾 Automate Stripe payment to QuickBooks sales receipt sync

> ⚡ **30 views** · 🧾 [Invoice Processing](../)

## Description

Automated Stripe Payment to QuickBooks Sales Receipt

This n8n workflow seamlessly connects Stripe and QuickBooks Online to keep your accounting in perfect sync. Whenever a payment in Stripe succeeds, the workflow automatically checks if the corresponding customer exists in QuickBooks. If found, it instantly creates a Sales Receipt under that customer. If not, it creates the customer first — then logs the sale.

Key Features:

⚡ Real-Time Sync: Automatically triggers when a Stripe payment intent succeeds.

👤 Smart Customer Matching: Searches for existing customers in QuickBooks to prevent duplicates.

🧾 Automated Sales Receipts: Creates accurate sales records for every successful Stripe payment.

🔄 End-to-End Automation: Handles customer creation, receipt generation, and data consistency without manual entry.

Requirements:
A running n8n instance, active Stripe and QuickBooks Online accounts with API access.

## 🔗 Nodes Used

HTTP Request, Stripe Trigger, QuickBooks Online, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
