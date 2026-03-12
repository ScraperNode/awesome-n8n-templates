# 🤝 Sync NetSuite inventory items between NetSuite and Salesforce products

> ⚡ **38 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Short Description

Automatically exports inventory items records from NetSuite and syncs them into Salesforce — creating or updating Products.

## Who is this for / Use case

This template is designed for businesses and integration developers who:

- Use NetSuite as their ERP or CRM system.
- Need to automatically sync products data into Salesforce.
- Want a reliable, scalable solution that supports pagination and upserts.
- Prefer a ready-to-use, easily customizable workflow built on n8n.

## How it works

Initialize pagination offset.
1. Fetch Salesforce Pricebook values data.
2. Initialize pagination offset.
3. Fetch NetSuite list of Inventory Items.
4. Split the retrieved array into individual items.
5. Get details for each Inventory Item from NetSuite.
6. Find certain price value fetched from NetSuite
7. Upserts Product into Salesforce
8. Repeat until all records are processed, then end the workflow.

## Setup / Configuration

1. Import the workflow into your n8n instance.
2. Set your NetSuite and Salesforce credentials.
3. Ensure your Salesforce Account/Contact objects have a matching External ID field.
4. (Optional) Adjust mapping fields or filters to your data needs.
5. Execute manually or trigger on a schedule (e.g., daily sync).

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
