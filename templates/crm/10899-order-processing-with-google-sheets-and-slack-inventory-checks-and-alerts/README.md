# 🤝 Order processing with Google Sheets and Slack: inventory checks and alerts

> ⚡ **345 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Overview
A cornerstone of your Order Management System, this workflow ensures seamless inventory control through fully automated stock checks, leading to a direct reduction in operational costs. It provides real-time alerts to the responsible personnel, enabling proactive issue detection and resolution to eliminate the financial damages associated with unexpected stock-outs.

## How it works
### Order Webhook
Receives orders from external sources (e.g., website, form, or app) via API.

### Check Order Request
Checks the validity of the order (e.g., complete product, valid customer details)

### Check Inventory
Retrieve inventory information and compare it with the order request.

### Notifications
- Generate a notification to Slack for the manager indicating a successful order or an out-of-stock situation.

### Logging
- Log the process details to a Google Sheet for tracking.

## Set up steps

### Webhook 
- Create a JSON request with the following format to call the Webhook Url

```
{
  "id": "ORDER1001",
  "customer": {
    "name": "Customer",
    "email": "customer@example.com"
  },
  "items": [
    {
      "sku": "SKU001",
      "quantity": 2,
      "name": "Product A",
      "price": 5000
    },
    {
      "sku": "SKU002",
      "quantity": 2,
      "name": "Product C",
      "price": 10000
    }
  ],
  "total": 30000
}
```

- Define the greater than or less than conditions on the inventory level to enter the corresponding branches.

### Google Sheet 
- Clone the file to your Google Drive. ([WMS Data Demo](https://docs.google.com/spreadsheets/d/1sgTaHwbTWrVCDiSwuvqFVJr0-Ez2t3LTlJaLU4cBcuU/edit?usp=sharing))
- Replace your credentials and connect.
- Access permission must be granted to n8n.

### Slack 
- Replace your credentials and connect.
- A channel named "warehouse" needs to be prepared to receive notifications (if using a different name, you must update the Slack node).

## 🔗 Nodes Used

Function, Google Sheets, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
