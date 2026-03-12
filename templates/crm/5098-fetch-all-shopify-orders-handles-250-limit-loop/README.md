# 🤝 Fetch All Shopify Orders (Handles 250-Limit Loop)

> ⚡ **950 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Who Is This For?  
E-commerce managers, data analysts, and n8n beginners who need a hands-off way to pull **all** Shopify orders—even stores with thousands of orders—into Google Sheets for reporting or BI.

## What Problem Does It Solve?  
Shopify’s GraphQL API only returns up to 250 orders per call, forcing you to manually manage cursors and loops. This template handles the “get next 250” logic for you, so you never miss an order.

## What This Workflow Does  
1. **Schedule Trigger** – Runs at your chosen cadence (daily, hourly, or manual).  
2. **Set Date Range** – Defines `startDay` and `endDay` based on `$now`.  
3. **GraphQL Loop** – Fetches orders 250 at a time, using `pageInfo.hasNextPage` and `endCursor` until complete.  
4. **Code Node** – Flattens orders into line-item rows and summarizes by SKU/vendor.  
5. **Google Sheets** – Appends results to your sheet for easy analysis.

## 🔗 Nodes Used

Google Sheets, GraphQL, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
