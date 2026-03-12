# 💬 Abandoned cart recovery for Shopify via Gmail, Google Sheets & Twilio (no-code)

> ⚡ **1,296 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Who is this for?

This template is ideal for solo store owners, eCommerce marketers, automation beginners, or anyone using **Shopify** and **Gmail** who wants to recover lost revenue without coding.

## What problem does this solve?

Customers often leave items in their cart without completing the purchase. Manually chasing those sales is inefficient and inconsistent. This workflow automates the recovery process by sending emails (and optionally SMS) based on Shopify checkout activity.

## What this workflow does:

- ✅ Detects when a Shopify checkout is created but not completed,
- ⏳ Waits 1 hour, then checks if the cart was abandoned,
- 🧾 Pulls cart contents and applies a fallback discount,
- 📧 Sends a recovery email via Gmail,
- 🕓 After 24 hours, you can optionally send an SMS or WhatsApp reminder via Twilio,
- 📊 Logs each interaction to Google Sheets for tracking.

## Setup:

1. Create Shopify, Gmail, Google Sheets, and Twilio credentials in your n8n instance,
2. Import the JSON workflow file
3. Replace the Shopify trigger with your store's webhook (set to “Checkout Create”),
4. Set your wait time (default: 1 hour),
5. Link your Gmail account and customize the email message,
6. (Optional) Link Twilio to add a multi-channel reminder,
7. Update the Google Sheets node with your own Sheet ID and headers.

## 🗒 Color-coded workflow notes:

To make customization easier, this template includes **a visual sticky note system** inside the n8n canvas.

You’ll find:

- 🟩 **Green Notes** → Main Steps  
  Clear, essential stages of the automation (e.g. wait, check cart status, send email),

- 🟦 **Blue Notes** → Personalization Tips  
  Small tweaks you can make to match your tone, store brand, or logic (e.g. email copy, discount logic),

- 🟨 **Yellow Notes** → Optional / Advanced  
  Features that you can explore setting up:  
  Twilio SMS, Airtable logging, human approval steps, etc.

👉 Look around each key node for quick tips, setup instructions, and TO-DO items.

This system helps you understand and modify the workflow at a glance — whether you're a beginner or scaling a pro setup.

## How to customize this workflow?

- 🎯 Swap Shopify for WooCommerce or Stripe by replacing the trigger and cart-check logic,
- 💬 Localize and personalize each email message or add multilingual support via AI,
- 📈 Upgrade logging from Google Sheets to Airtable for CRM-style features,
- 🤝 Add manual approval steps for high-value discounts,
- 💡 Want a one-time unique code per user? Let us build that logic for you → [velebit@innovatio.design](mailto:velebit@innovatio.design)

## Final notes

*This template was designed by Velebit from Innovatio. External links in the workflow (e.g. support or upgrade options) are optional and purely informative, while only leading to the official company webiste with no affiliate or similar links included in the template itself.*

*A separate license applies to the paid version on Gumroad, which includes additional modules and commercial use rights.*

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Twilio, Webhook, Shopify Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
