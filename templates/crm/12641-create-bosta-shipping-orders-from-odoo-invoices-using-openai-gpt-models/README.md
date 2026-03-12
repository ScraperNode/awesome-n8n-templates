# 🤝 Create Bosta shipping orders from Odoo invoices using OpenAI GPT models

> ⚡ **43 views** · 🤝 [CRM & Sales Operations](../)

## Description

## What Problem Does It Solve?
- **Manual Data Entry Bottlenecks:** Moving shipping data from Odoo to Bosta manually is slow and prone to errors, especially during high-volume periods.
- **Address Mismatches:** Odoo stores addresses as unstructured text, while Bosta requires strict Zone/District IDs. Mismatches lead to failed deliveries and returns.
- **Messy Labels:** Long ERP product names look unprofessional on shipping labels.
- **This workflow solves these by:**
  - Instantly creating the shipping order in Bosta when an Odoo invoice is confirmed.
  - Using an **AI Agent** to intelligently parse raw addresses and map them to the exact Bosta ID.
  - Ensuring the high operational standards required by automating data cleaning and COD rounding.

## How to Configure It
### 1. Odoo Setup
- Create an Automation Rule in Odoo that sends a POST request to this workflow's Webhook URL when an invoice state changes to "Confirmed".

### 2. Credentials
- Connect your **Odoo**, **OpenAI**, and **Telegram** accounts in the respective n8n nodes.
- Add your **Bosta API Key** in the Header parameters of the `Create Bosta Order` node.

### 3. Product Mapping
- Open the `Summarize Items` code node and update the `NAME_MAP` object to link your Odoo product names to short shipping labels.

### 4. Data Table
- Ensure the `Fetch Zones` node is connected to your Bosta Zones/Districts data table in n8n.

## How It Works
- **Trigger:** The workflow starts automatically when an invoice is confirmed in Odoo.
- **Fetch & Process:** It pulls customer details and invoice items, then aggregates quantities (e.g., turning 3 lines of "Shampoo" into "Shampoo (3)").
- **AI Analysis:** The AI Agent cross-references the raw address with the official Bosta zones list to strictly select the correct IDs.
- **Execution:** The order is created in Bosta. If successful, the process is complete.
- **Error Handling:** If any step fails, a Telegram message is sent immediately with the invoice number to alert the **operations team**.

## Customization Ideas
- **Write Back:** Add a node to update the Odoo invoice with the generated Bosta tracking number.
- **Multi-Courier:** Add a switch node to route orders to different couriers (e.g., Aramex, Mylerz) based on the city.
- **Campaign Logging:** Log successful shipments to a spreadsheet to track fulfillment metrics.
- **Notification Channels:** Change the error alert from Telegram to Slack or Email.

If you need any help [Get in Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram, Odoo, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
