# 🤝 Sync new Shopify customers to Odoo and notify via Gmail, SMS, WhatsApp and Telegram

> ⚡ **67 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow triggers when a new customer is created in Shopify, creates a matching contact in Odoo if needed, and sends notifications via Gmail, MessageBird SMS, Rapiwa WhatsApp, and Telegram to welcome the customer and alert admins.

## How it works
1. Triggers when a new customer is created in Shopify.
2. Looks up existing contacts in Odoo and evaluates whether the customer already exists.
3. Creates a new contact in Odoo (res.partner) using the Shopify customer’s name, email, and default address details.
4. Sends admin alerts about the new customer via WhatsApp (Rapiwa), Gmail, and Telegram.
5. Sends a welcome email to the customer via Gmail and an SMS confirmation via MessageBird.
6. Verifies the customer’s phone numbers with Rapiwa and sends a welcome WhatsApp message when the number is available on WhatsApp.

## Setup
1. Add Shopify Access Token credentials for the customers/create trigger.
2. Add Odoo API credentials and ensure your Odoo contact fields in res.partner match the workflow’s field mapping.
3. Add Gmail OAuth2, MessageBird, Telegram Bot, and Rapiwa credentials.
4. Replace placeholders like add_your_mail_address, add_your_whatsapp_number, and add_your_number, and set the correct Telegram chat ID behavior for where admin alerts should go.
5. Ensure Shopify customers have a usable phone number (customer phone and/or default address phone) if you want WhatsApp verification and messaging to work.

## 🔗 Nodes Used

Telegram, Shopify Trigger, MessageBird, Gmail, Odoo, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
