# 🧾 Generate invoices for customers with Jotform and QuickBooks

> ⚡ **109 views** · 🧾 [Invoice Processing](../)

## Description

## Generate Invoices for Customers with Jotform and QuickBooks 
This workflow automates the entire process of receiving a product/service order, checking or creating a customer in **QuickBooks Online (QBO)**, generating an invoice, and emailing it — all triggered by a form submission (via **Jotform**).

## How It Works
1. **Receive Submission**
* Triggered when a user submits a form.
* Collects data like customer details, selected product/service, etc.

2. **Check If Customer Exists**
* Searches QBO to determine if the customer already exists.
* **If Customer Exists:** **Update** customer details (e.g., billing address).
* **If Customer Doesn’t Exist:** **Create** a new customer in QBO.

3. **Get The Item**
* Retrieves the selected product or service from QBO.

4. **Create The Invoice**
* Generates a new invoice for the customer using the item selected.

5. **Send The Invoice**
* Automatically sends the invoice via email to the customer.

## Who Can Benefit from This Workflow?
* **Freelancers**
* **Service Providers**
* **Consultants & Coaches**
* **Small Businesses**
* **E-commerce or Custom Product Sellers**

## Requirements
- Jotform webhook setup, more info [here](https://www.jotform.com/help/245-how-to-setup-a-webhook-with-jotform/)
- QuickBooks Online credentials, more info [here](https://developer.intuit.com/app/developer/qbo/docs/get-started/get-client-id-and-client-secret)

## 🔗 Nodes Used

Webhook, QuickBooks Online

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
