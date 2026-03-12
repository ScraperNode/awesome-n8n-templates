# 🧾 Create QuickBooks Online customers with sales receipts for new Stripe payments

> ⚡ **2,846 views** · 🧾 [Invoice Processing](../)

## Description

Streamline your accounting by automatically creating QuickBooks Online customers and sales receipts whenever a successful Stripe payment is processed. Ideal for businesses looking to reduce manual data entry and improve accounting efficiency.

## How it works

1. **Trigger**: The workflow is triggered when a new successful payment intent event is received from Stripe.
2. **Retrieve Customer Data**: Fetches customer details from Stripe associated with the payment.
3. **Check QuickBooks Customer**: Searches QuickBooks Online to see if the customer already exists using their email address.
4. **Create or Use Existing Customer**: If the customer doesn't exist in QuickBooks, they are created; otherwise, the existing customer is used.
5. **Generate Sales Receipt**: A sales receipt is created in QuickBooks Online with payment details, including item descriptions, amounts, and currency.

## Set up steps

1. **Connect Accounts**: Authenticate both your QuickBooks Online and Stripe accounts in n8n.
2. **Webhook Setup**: Configure the Stripe webhook to send `payment_intent.succeeded` events to this workflow.
3. **Test the Workflow**: Trigger a test payment in Stripe to validate the integration.
4. **Customize Details**: Adjust item descriptions or other fields in the QuickBooks sales receipt JSON body as needed.

This workflow requires basic familiarity with n8n, but setup can be completed in under 15 minutes for most users.

## 🔗 Nodes Used

HTTP Request, Stripe Trigger, QuickBooks Online, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
