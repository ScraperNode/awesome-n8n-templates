# 📱 Send Shopify order and customer updates to WhatsApp via WOZTELL

> ⚡ **122 views** · 📱 [Social Media & Email Marketing](../)

## Description

## ✨ What this template does
This workflow automatically sends WhatsApp notifications from Shopify using WOZTELL. It listens for Shopify events such as order paid, customer created, or fulfillment created, then sends a pre approved WhatsApp template to the customer.

Use this to replace or support email notifications with faster WhatsApp updates.

## 👷 Who it’s for
Designed for ecommerce businesses that want to automatically send WhatsApp order and fulfillment updates to customers. Suitable for store owners or agencies managing Shopify automation.

## ⚙️ How it works
1. Shopify triggers the workflow when a selected event happens.
2. The workflow checks if a phone number exists.
3. If yes, it sends a WhatsApp template through WOZTELL.

## 🧭 How to use
1. Import this template into n8n.
2. Connect your Shopify account using OAuth.
3. Connect your WOZTELL account using an access token.
4. Select your WhatsApp template.
5. Map Shopify fields into template variables.
6. Activate the workflow.
7. In Shopify, switch the webhook from Test URL to Production URL.

## 🧩 Requirements
- Shopify store admin access
- n8n account
- WOZTELL paid account with WhatsApp Business Platform activated
- An approved WhatsApp message template created in WOZTELL

## 🧠 Customization ideas
- Change the Shopify trigger events (order created, paid, fulfilled, etc.)
- Add more conditions in the IF node
- Use different WhatsApp templates for each event
- Add extra nodes for internal alerts (Slack/email) or CRM updates
- Replace the Shopify trigger with another e commerce platform trigger such as WooCommerce, Magento, or a custom webhook

## 📘 New here? Follow the step-by-step guide
Don’t know how to set up credentials? We prepared a step-by-step guide covering Shopify webhooks, credentials, and publishing the workflow, plus copy-paste message templates and ready-to-use variable mappings. 

Read the text guide [here](https://woztell.com/connect-shopify-whatsapp-n8n/).

Watch the video guide [here](https://www.youtube.com/watch?v=Av5mVz21D28)

## 🤖About WOZTELL
This template uses WOZTELL to connect n8n with the official WhatsApp Business Platform, allowing you to send and receive WhatsApp messages through approved templates and automation workflows.

You can create a WOZTELL account and register a WhatsApp Business API account for free.

1. Sign up [here](
https://platform.woztell.com/signup?lang=en&utm_campaign=plugin-n8n&utm_medium=plugin-n8n&utm_source=N8N)
2. Verify your email and complete your account setup.
3. Follow the WhatsApp Business API [setup guide](
https://doc.woztell.com/docs/procedures/basic-whatsapp-chatbot-setup/standard-procedures-wa-connect-waba/)

Once your WhatsApp Business account is connected and message templates are approved, you can activate this workflow.

## 🚀 More templates
We’re continuously building more WOZTELL n8n templates. Check our n8n profile to explore the latest workflows.

## 🔗 Nodes Used

Shopify Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
