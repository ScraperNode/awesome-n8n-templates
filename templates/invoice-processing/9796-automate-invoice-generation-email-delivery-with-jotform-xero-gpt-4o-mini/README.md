# 🧾 Automate invoice generation & email delivery with Jotform, Xero & GPT-4o-mini

> ⚡ **157 views** · 🧾 [Invoice Processing](../)

## Description

## Generate Invoices for Customers with Jotform, Xero and Slack
This workflow automates the entire process of receiving a product/service order, checking or creating a customer in **Xero**, generating an invoice, emailing it, and notifying the sales team for example (via **Slack**)  — all triggered by a form submission (via **Jotform**).

## How It Works
1. **Receive Submission**
* Triggered when a user submits a form.
* Collects data like customer details, selected product/service, etc.

2. **Check If Customer Exists**
* Searches Xero to determine if the customer already exists.
* ✅ **If Customer Exists:** **Update** customer details.
* ❌ **If Customer Doesn’t Exist:** **Create** a new customer in Xero.

3. **Create The Invoice**
* Generates a new invoice for the customer using the item selected.

4. **Send The Invoice**
* Automatically sends the invoice via email to the customer.

5. **Notify The Team**
* Notifies the sales team for example via Slack about the new invoice.

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
- Email setup, update email node (`Send email`)
- LLM model credentials
- Slack credentials, more info [here](https://docs.n8n.io/integrations/builtin/credentials/slack)

## 🔗 Nodes Used

Send Email, Slack, Webhook, Xero, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
