# 🤝 Followup Stripe checkouts with Gmail receipts, internal Slack, and Sheets logs

> ⚡ **136 views** · 🤝 [CRM & Sales Operations](../)

## Description

**This n8n template demonstrates how to automate the followup when your customer completes a checkout in Stripe by emailing a receipt, logging the transaction, and sending an internal notification.**

See the [video](https://youtu.be/qgPrX6vawnc?si=U3krqzSqXaoCMzv6).

## Who it's for
This workflow is for small to medium sized organizations using Stripe for payment processing and looking for a simple way to automate communication and logging that needs to happen post-checkout.

## How it works
The workflow is triggered when a Stripe checkout is completed and again when Stripe creates an invoice.  Checkout and invoice details are logged to a Google Sheet. A Slack message is sent to a channel where RevOps receive notifications about new sales. Lastly, a personalized email is sent to the customer with a link for downloading their receipt.

## How to set up
Edit the two Stripe trigger nodes to enter your credentials. Create a Google Sheet named *Payments* with two tabs: *transactions* and *invoices* and the columns as shown in [this example](https://docs.google.com/spreadsheets/d/11PjbycgdLufk3MbsO6Cp-e84qzwvnut4xhK3g2pu0vc/edit?usp=sharing). Edit the three Google Sheets nodes to enter your credentials.  The Gmail node also needs the credentials of the account that you want emails to come from.  Lastly, enter credentials into the Slack node for the user that you want to be shown as posting Stripe transaction notifications.  The Slack node is configured to send notifications to the *revops* channel, but you can change that to be whatever channel you want to use.

Use your Stripe [sandbox](https://docs.stripe.com/sandboxes) to test the workflow. In your sandbox, create a [payment link](https://docs.stripe.com/payment-links) that you can use to create the checkouts that will trigger the workflow.  Make sure that your payment link has the option checked to create a [post-payment invoice PDF](https://docs.stripe.com/payment-links/post-payment).  This will trigger the Invoice Created node.

## Requirements
- Stripe Account
- Google Workspace Account (Sheets, Mail)
- Slack Account

## 🔗 Nodes Used

Google Sheets, Slack, Stripe Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
