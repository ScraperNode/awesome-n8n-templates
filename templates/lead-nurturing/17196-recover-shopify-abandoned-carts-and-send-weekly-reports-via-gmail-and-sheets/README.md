# 💬 Recover Shopify abandoned carts and send weekly reports via Gmail and Sheets

> ⚡ **11 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This template automates Shopify abandoned cart recovery with a 3-email Gmail sequence, tracks recoveries in Google Sheets via Shopify “order paid” webhooks, and sends a weekly HTML performance report every Monday using data aggregated from the same spreadsheet.

## How it works
1. Receives a Shopify “checkout created” webhook, verifies the checkout includes an email address, and skips customers who already have an active recovery sequence logged in Google Sheets.
2. Logs the abandoned checkout details to Google Sheets and waits one hour before checking Shopify Orders for a paid purchase by the same email.
3. If no paid order exists, sends the first recovery email via Gmail and updates the Google Sheets row to mark Email 1 as sent.
4. After another 23 hours, checks Shopify Orders again and, if still unpaid, sends the second recovery email via Gmail and updates Google Sheets.
5. After another 48 hours, checks Shopify Orders again and, if still unpaid, creates a unique one-time Shopify discount (price rule + discount code) and sends the third email via Gmail, then stores the discount code and Email 3 status in Google Sheets.
6. Receives a Shopify “order paid” webhook, looks up the customer in Google Sheets, and if an unrecovered cart exists it marks the row as recovered with revenue, timestamp, and which email likely triggered the purchase.
7. Runs every Monday at 9:00 AM, reads all Google Sheets rows, calculates last-7-days recovery and revenue stats, and emails the merchant a formatted weekly report via Gmail.

## Setup
1. Create a Shopify Admin API connection (including `write_discounts` scope) and add Shopify webhooks for “Checkout creation” and “Order payment” pointing to the two n8n webhook URLs.
2. Create a Google Sheets OAuth2 connection and ensure your spreadsheet’s Sheet1 contains the required columns (checkout_token, customer_email, email1_sent/email2_sent/email3_sent, recovered, recovery_revenue, recovered_via, recovered_at, and related cart fields).
3. Create a Gmail OAuth2 connection for sending customer emails and the weekly report.
4. Update the Google Sheets document ID/sheet reference if you are not using the included spreadsheet, and replace `REPLACE_WITH_MERCHANT_EMAIL` in the weekly report email node with the merchant’s address.
5. Verify the Shopify shop domain/API base URL used in the Shopify Orders and discounts HTTP requests matches your store, then activate all workflows.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
