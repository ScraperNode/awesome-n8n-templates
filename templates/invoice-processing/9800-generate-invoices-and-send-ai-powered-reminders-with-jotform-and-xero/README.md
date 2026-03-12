# 🧾 Generate invoices and send AI-powered reminders with Jotform and Xero

> ⚡ **269 views** · 🧾 [Invoice Processing](../)

## Description

## Generate Invoices and Send Reminders for Customers with Jotform and Xero
This workflow automates the entire process of receiving a product/service order, checking or creating a customer in **Xero**, generating an invoice, emailing it — all triggered by a form submission (via **Jotform**), and sending invoice reminders.

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

5. **Store The Invoice In DB**
- Stores the needed invoice details in the DB.

6. **Send Reminders**
- Every day at 8 AM, the automation checks each invoice to decide whether to:
    * send a reminder email,
    * skip and send it later, or
    * delete the invoice from the DB (if it's paid or all reminders have been sent).

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
- Email setup, update email nodes (`Send email` & `Send reminder email` & `Send reminders sent summary`)
- Create data table with the following columns:
    * invoiceId (string)
    * remainingAmount (number)
    * currency (string)
    * remindersSent (number)
    * lastSentAt (date time)
- Update `Add reminders config` node so update the data table id and intervals in days (default is after 2 days, then after 3 days and finally after 5 days )
- LLM model credentials

## 🔗 Nodes Used

Send Email, Webhook, Xero, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
