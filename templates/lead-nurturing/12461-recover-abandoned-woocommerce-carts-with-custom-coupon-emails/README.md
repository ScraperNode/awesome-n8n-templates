# 💬 Recover abandoned WooCommerce carts with custom coupon emails

> ⚡ **85 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**Stop paying for expensive plugins to recover your valuable revenue from abandoned carts on your WooCommerce store**

## How It Works?
1. When a product is added to a user's cart on your store, it fetches the cart contents via webhook & it utilises the code provided in the red sticky note to fetch the required info.
2. It waits for a specified time to allow the user to place an order.
3. It checks if the order has been placed or not.
4. It creates the HTML with dynamic information fetched from previous nodes.
5. It sends the email to the user via configured SMTP credentials.

## Setup Steps (20 minutes):
1. Set up your WooCommerce Account Credentials in n8n
2. Set up webhook in n8n & WooCommerce
3. Add the provided code in functions.php or as a PHP snippet via a plugin onto your website
4. Customize the coupon code's phrase according to your needs
5.  Customize the email's HTML code according to your needs


## Requirements

- **WooCommerce Store**: With REST API access enabled.

- **SMTP Credentials**: For sending recovery emails.

For any queries, you can ping me on [X](https://x.com/matta_kshitij)

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, WooCommerce

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
