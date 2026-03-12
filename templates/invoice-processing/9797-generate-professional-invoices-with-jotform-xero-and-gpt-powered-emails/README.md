# 🧾 Generate professional invoices with Jotform, Xero, and GPT-powered emails

> ⚡ **200 views** · 🧾 [Invoice Processing](../)

## Description

## Generate Invoices for Customers with Jotform, Xero and Gmail
This workflow automates the entire process of receiving a product/service order, checking or creating a customer in **Xero**, generating an invoice, and emailing it — all triggered by a form submission (via **Jotform**).

## How It Works
1. **Receive Submission**
- Triggered when a user submits a form.
- Collects data like customer details, selected product/service, etc.

2. **Create/Update The Customer**
- Creates/Updates the customer.

3. **Create The Invoice**
- Generates a new invoice for the customer using the item selected.

4. **Send The Invoice**
- Automatically sends the invoice via email to the customer.

## Who Can Benefit from This Workflow?
* **Freelancers**
* **Service Providers**
* **Consultants & Coaches**
* **Small Businesses**
* **E-commerce or Custom Product Sellers**

## Requirements
- Jotform webhook setup, more info [here](https://www.jotform.com/help/245-how-to-setup-a-webhook-with-jotform/)
- Xero credentials, more info [here](https://docs.n8n.io/integrations/builtin/credentials/xero)
- Make sure that products/services values in Jotform are exactly the same as your item `Code` in your Xero account
- Email setup, update email node (`Send email`), more info about Gmail setup [here](https://docs.n8n.io/integrations/builtin/credentials/google)
- LLM model credentials

## 🔗 Nodes Used

Webhook, Xero, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
