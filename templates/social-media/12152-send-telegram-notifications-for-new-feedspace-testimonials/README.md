# 📱 Send Telegram notifications for new Feedspace testimonials

> ⚡ **22 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow sends instant Telegram notifications whenever a new testimonial is submitted through Feedspace, helping you respond quickly to customer feedback and share positive reviews.

## Who is this for?

- Businesses collecting testimonials via Feedspace
- Marketing teams who want instant alerts for new reviews
- Customer success teams monitoring feedback
- Anyone wanting to automate testimonial notifications

## What problem does it solve?

It removes the need to manually check Feedspace by instantly notifying your team on Telegram, so they can quickly review, respond to, and share new testimonials as soon as they’re submitted.


## What it does

When a customer submits a testimonial on your Feedspace form, this workflow:
1. Receives the webhook payload from Feedspace
2. Extracts the customer's name and public review URL
3. Sends a formatted Telegram message
4. Returns a success/error response to Feedspace


## Requirements

- **Feedspace account** with webhook integration enabled
- **Telegram Bot** (create via [@BotFather](https://t.me/BotFather))
- **Your Telegram Chat ID** (get via [@userinfobot](https://t.me/userinfobot))

## Setup steps

1. **Create a Telegram Bot**
   - Open Telegram and message @BotFather
   - Send `/newbot` and follow the prompts
   - Save the API token you receive
   - Use it to connect to Telegram account

2. **Get Your Chat ID**
   - Message @userinfobot on Telegram
   - Send /start 
   - Copy your numeric Chat ID

3. **Configure the Workflow**
   - Import this template into n8n
   - Add your Telegram Bot credentials
   - Set your Chat ID (via n8n variable or directly in the node)

4. **Connect to Feedspace**
   - Activate the workflow and copy the Production webhook URL
   - Go to Feedspace → Automations → Webhooks
   - Paste the webhook URL and activate it
   - See https://www.feedspace.io/help/automation/ for more information

## 🔗 Nodes Used

Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
