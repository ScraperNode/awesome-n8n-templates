# 📱 Sync customer email subscriptions between Shopify and Mautic

> ⚡ **1,552 views** · 📱 [Social Media & Email Marketing](../)

## Description

Having a seamless flow of customer data between your online store and your marketing platform is essential.

By keeping your systems synchronized, you can ensure that your marketing campaigns are accurately targeted and effective. 

The integration between Shopify, a leading e-commerce platform, and Mautic, an open-source marketing automation system, is not available out-of-the-box. 

However, with a n8n workflow you can bridge this gap with.

## This template will help you:

1. enhance accuracy in marketing lists by ensuring that subscription changes in Shopify are instantly updated in Mautic.
2. improve compliance with data protection laws by respecting users' subscription preferences across platforms
3. achieve integration without the need for additional plugins or software, minimizing complexity and potential points of failure.

## This template will demonstrate the follwing concepts in n8n:

- working with Shopify in n8n
- control flow with the IF node
- use Webhooks
- validate Webhooks with the Crypto node
- use the GraphQL node to call the Shopify Admin API

## The template consists of two parts:

1. Sync Email Subscriptions from Shopify to Mautic
2. Sync Email Subscriptions from Mautic to Shopify

## How to get started?

1. Create a custom app in Shopify get the credentials needed to connect n8n to Shopify
This is needed for the Shopify Trigger
2. Create **Shopify Acces Token API** credentials n n8n for the Shopify trigger node
3. Create **Header Auth** credentials: 
Use **X-Shopify-Access-Token** as the name and the Acces-Token from the Shopify App you created as the value.
The Header Auth is neccessary for the GraphQL nodes.
4. Enable the Mautic API under Configuration/API Settings, After the settings are saved you will have an additional entry in your settings menu to create API credentials for n8n
5. Create Mautic credentials in n8n

Please make sure to read the notes in the template. 

For a detailed explanation please check the corresponding video: [https://youtu.be/x63rrh_yJzI](https://youtu.be/x63rrh_yJzI)

## 🔗 Nodes Used

Webhook, GraphQL, Shopify Trigger, Mautic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
