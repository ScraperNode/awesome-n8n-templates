# 🤝 Process Shopify new orders with Zoho CRM and Harvest

> ⚡ **4,831 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow is triggered when a new order is created in Shopify. Then:
- the order information is stored in Zoho CRM,
- an invoice is created in Harvest and stored in Trello,
- if the order value is above 50, an email with a discount coupon is sent to the customer and they are added to a MailChimp campaign for high-value customers; otherwise, only a "thank you" email is sent to the customer.

Note that you need to replace the *List ID* in the *Trello node* with your own ID (see [instructions in our docs](https://docs.n8n.io/nodes/n8n-nodes-base.trello/#example-usage)). Same goes for the *Account ID* in the *Harvest node* (see [instructions here](https://docs.n8n.io/credentials/harvest/#using-access-token)).

## 🔗 Nodes Used

Trello, Mailchimp, Shopify Trigger, Harvest, Zoho CRM, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
