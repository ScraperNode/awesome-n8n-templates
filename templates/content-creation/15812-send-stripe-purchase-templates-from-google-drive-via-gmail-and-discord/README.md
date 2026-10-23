# 🎬 Send Stripe purchase templates from Google Drive via Gmail and Discord

> ⚡ **14 views** · 🎬 [Content Creation & Video](../)

## Description

## Who it's for

This workflow is for indie creators, automation agencies, and digital product sellers who sell n8n workflow templates (or any downloadable file) through Stripe and want to automate post-purchase delivery and team notifications.

## How it works

1. The Stripe Trigger fires when a `checkout.session.completed` event is detected — a payment has been completed.
2. An HTTP Request node fetches the full line items from the Stripe Checkout Session using the Stripe API.
3. In parallel, a Discord notification is sent to a dedicated channel with the customer's name, email, product name, and amount paid.
4. Simultaneously, Google Drive is searched for a document template whose name matches the purchased product description.
5. The matching template file is downloaded from Google Drive.
6. A branded HTML email is sent to the customer via Gmail, with the downloaded template attached as a `.json` file.

## How to set up

- [ ] Connect your Stripe API credentials to both the Stripe Trigger and HTTP Request nodes
- [ ] Configure the Discord bot credential and set the target guild and channel IDs
- [ ] Connect a Google OAuth2 credential with Drive read access to both Google Drive nodes
- [ ] Set the Google Drive folder ID where your templates are stored
- [ ] Connect a Gmail OAuth2 credential to the Gmail node

## Requirements

- Stripe account with API key
- Discord bot with permissions to post in a channel
- Google Drive with template files named after your products
- Gmail account with OAuth2 access

## How to customize

- Adapt the Discord message to include additional order details such as coupon codes or quantity.
- Replace the Gmail step with another email provider (SendGrid, SMTP) for higher sending volumes.
- Add a Google Sheets logging step after the Stripe trigger to keep a record of all purchases.

## 🔗 Nodes Used

HTTP Request, AI Agent, Anthropic Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
