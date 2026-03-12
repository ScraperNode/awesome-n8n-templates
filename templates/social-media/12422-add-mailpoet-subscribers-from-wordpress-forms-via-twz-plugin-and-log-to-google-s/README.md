# 📱 Add MailPoet subscribers from WordPress forms via TWZ plugin and log to Google Sheets

> ⚡ **4 views** · 📱 [Social Media & Email Marketing](../)

## Description

What Is TWZ n8n MailPoet Integration?

This workflow adds subscribers to MailPoet using n8n by bridging WordPress through a custom REST API and logging results in Google Sheets.

MailPoet is a popular WordPress email marketing plugin, but it does not provide a public REST API. Because of this limitation, n8n cannot connect to MailPoet directly using native nodes or standard integrations.

This workflow demonstrates a practical and production-ready solution for connecting n8n → WordPress → MailPoet using a custom WordPress REST API plugin called [TWZ N8N MailPoet](https://themewizz.com/product/twz-n8n-mailpoet-add-subscriber-api/).

🚧 Problem This Workflow Solves

❌ MailPoet has no public REST API
❌ n8n cannot add MailPoet subscribers natively
❌ External forms and automations cannot push data into MailPoet

✅ Solution Architecture

This workflow solves the problem by:

Creating a secure REST API endpoint inside WordPress

Using an n8n HTTP Request node to send subscriber data

Adding subscribers directly to MailPoet

Preventing duplicate subscribers

Logging subscribers in Google Sheets for visibility

This creates a reliable bridge between n8n and MailPoet, enabling automation workflows that were previously not possible.

🔌 How It Works (High Level)

📥 n8n receives form submission data
🔍 The workflow checks if the subscriber already exists
📧 The subscriber is added to MailPoet via the custom REST API
📊 Subscriber data is logged in Google Sheets
✅ The workflow returns a success or error response

🎯 Why This Workflow Is Useful

Works around MailPoet’s missing API

Enables full automation from external tools

Uses standard n8n nodes (HTTP Request, IF, Google Sheets)

Secure and reusable integration pattern

Ideal for WordPress-based businesses

🧩 About the TWZ n8n MailPoet Plugin

TWZ n8n MailPoet is a free, lightweight WordPress plugin designed to provide a simple and reliable integration between n8n (or any external service) and MailPoet.

It implements a single MailPoet API operation:
➡ Add Subscriber

This keeps the plugin lightweight, fast, and focused.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
