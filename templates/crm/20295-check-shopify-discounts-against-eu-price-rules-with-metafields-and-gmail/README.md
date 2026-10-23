# 🤝 Check Shopify discounts against EU price rules with metafields and Gmail

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
In the EU, a discount must show as its old price the lowest price of the last 30 days. Shopify does not keep price history, so this workflow keeps it for you and fixes or flags discounts that break the rule.

## How it works
1. It runs every time a product changes in your shop, and once every night as a safety net.
2. It reads each product variant fresh from Shopify: today's price and the crossed-out 'was' price.
3. It keeps a small price diary on each variant inside Shopify itself, so the history stays with your shop and nothing is stored elsewhere.
4. For every discount it works out the lowest price of the 30 days before the sale started.
5. If the 'was' price is higher than that, it lowers it to the real 30-day low. If the 'discount' is not really cheaper, it removes the crossed-out price.
6. If there is not enough history to be sure, it emails you and you choose 'Fix it' or 'Keep it'. One question at a time, no repeat emails while you think it over, and silence is never taken as a yes.
7. Once you trust it, it can make the corrections on its own and send you one email listing every change and why.

## Setup
1. In the Shopify Dev Dashboard, create an app with permission to read and write products, and use the redirect address shown in the n8n Shopify credential.
2. In n8n, connect that Shopify app and your Gmail account.
3. Open 'Price Rules' and enter your shop name (the part before .myshopify.com) and the email address that should receive the questions. Leave automatic fixing off until you have checked a few emails.

## Requirements
- A Shopify store with a Dev Dashboard app, and a Gmail account.

## Customization
- In 'Price Rules' you can turn on automatic fixing, change the 30-day window, limit how many questions are sent per run, and decide what happens when history is missing.

## Additional info
The price history starts the day you switch it on, so for the first 30 days most discounts will come to you as questions. This helps you follow the rule; it is not legal advice.

## 🔗 Nodes Used

HTTP Request, Shopify Trigger, Shopify, Gmail, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
