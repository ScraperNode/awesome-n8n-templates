# 🧾 Automate QuickBooks sales receipts & customer creation from Stripe payments

> ⚡ **291 views** · 🧾 [Invoice Processing](../)

## Description

## This n8n template from [Intuz](https://www.intuz.com/) provides a complete solution to automate your accounting by instantly creating QuickBooks sales receipts for every new Stripe payment. 

This workflow automates the process of recording successful payments from Stripe into QuickBooks by creating corresponding Sales Receipts. It ensures payment data is captured accurately, checks whether the customer exists in QuickBooks, and creates a new customer if necessary before generating the receipt. 

This integration streamlines bookkeeping by eliminating manual data entry and ensuring all payment records are synchronized between systems.

## Who's this workflow for?
- Accountants & Bookkeepers
- Small Business Owners
- E-commerce Managers
- Finance Teams

## How it works
**1. Trigger on Successful Payment:** The workflow starts instantly when a payment_intent.succeeded event is received from Stripe via a webhook. This means it only runs after a payment is confirmed.

**2. Get Customer Details:** It uses the customer ID from the payment to fetch the customer's full details (name and email) from Stripe.

**3. Check for Customer in QuickBooks:** The workflow then searches your QuickBooks account to see if a customer with that name already exists.

**4. Create Customer if New:** If the customer is not found in QuickBooks, a new customer record is automatically created using the information from Stripe.

**5. Generate Sales Receipt:** Finally, using the correct customer record (either existing or newly created) and the payment amount, the workflow creates and saves a new sales receipt in QuickBooks, perfectly matching the Stripe transaction.

## Key Requirements to Use This Template
**1. n8n Instance:** An active n8n account (Cloud or self-hosted).
**2. Stripe Account**: An active Stripe account with API access. You must be able to create and manage webhooks.
**3. QuickBooks Online Account:** An active QuickBooks Online account with API access to manage customers and sales receipts.

## Setup Instructions
**1. Configure the Webhook Trigger:**
- Copy the webhook URL from the Capture Payment (Webhook) node in n8n.
- In your Stripe dashboard, go to Developers &gt; Webhooks and add a new endpoint.
- Paste the n8n webhook URL and have it listen for the payment_intent.succeeded event.

**2. Connect Stripe:**
- In the Get a customer node, connect your Stripe account credentials.

**3. Connect QuickBooks:**
- In all three QuickBooks nodes (Find Customer, Create a customer, and Create a payment), connect your QuickBooks Online account using OAuth2 credentials.

**4. Activate Workflow:**
- Save the workflow and toggle the "Active" switch to ON. Your accounting automation is now live!

## Connect with us
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Webhook, QuickBooks Online, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
