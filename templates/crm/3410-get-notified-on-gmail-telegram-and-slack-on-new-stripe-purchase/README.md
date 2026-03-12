# 🤝 Get notified on Gmail, Telegram and Slack on new Stripe purchase

> ⚡ **1,039 views** · 🤝 [CRM & Sales Operations](../)

## Description

Get notified when a customer completes a Stripe checkout — including all products they purchased in a single checkout session.

![image.png](fileId:1080)

Using the Stripe API can be tricky, especially when you're selling **multiple products**, **order bumps**, or **recommended add-ons** in one checkout. This workflow solves that for you.

### How it works

The template listens for successful Stripe checkout events. When a payment is completed, it retrieves **all items from the session**, including main products, bumps, and extras — and sends a full breakdown straight to your chosen app.

![image.png](fileId:1081)

You can receive the notification on:

- **Telegram**
- **WhatsApp**
- **Gmail**
- Or any other chat/notification service you prefer (Slack, Outlook etc. )

### Who is this template for?

Creators, marketers, and online sellers who:

- Use Stripe Checkout
- Want to track what customers are buying in real time
- Prefer to get notifications instantly instead of digging through Stripe logs

### How to set up

1. Connect your Stripe account and choose where you want to receive notifications.
2. Adjust the notification text for your preference, and you are done!

Everything else is already configured in the template.

### Check out my other templates

👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 🔗 Nodes Used

HTTP Request, Telegram, Stripe Trigger, Gmail, WhatsApp Business Cloud, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
