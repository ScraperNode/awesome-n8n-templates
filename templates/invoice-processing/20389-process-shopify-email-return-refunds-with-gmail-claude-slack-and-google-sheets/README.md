# 🧾 Process Shopify email return refunds with Gmail, Claude, Slack, and Google Sheets

> ⚡ **3 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors a Gmail label for Shopify return-request emails, uses Anthropic Claude to extract key details, checks eligibility against a JavaScript return policy, calculates the refund in Shopify, requests approval in Slack, replies via Gmail, and logs each outcome to Google Sheets.

## How it works
1. Triggers every minute when a new unread Gmail message arrives with the `returns` label (or runs a manual test with a built-in sample request).
2. Uses Anthropic Claude to extract the order number, return items, reason, and requested resolution from the email text.
3. If no order number is provided, posts a Slack note for staff, replies asking the customer for the order number, and logs the request to Google Sheets.
4. If an order number is provided, verifies Gmail DMARC pass, fetches the matching order from Shopify via GraphQL, and applies return-policy checks (ownership, status, delivery window, final-sale tags, and item matching) to decide whether it can proceed.
5. For eligible returns, asks Shopify to calculate the suggested refund for the selected line items (and optional shipping), then sends a Slack approval message that waits up to 48 hours for an approver to approve or decline.
6. If approved, creates the refund in Shopify (or simulates it in dry-run/test mode), then posts the result to Slack, optionally replies to the customer in Gmail, and appends a row to a Google Sheets “Returns log”.

## Setup
1. Connect Gmail OAuth2 credentials for reading labeled emails, checking Authentication-Results headers, and sending reply emails.
2. In the Shopify Dev Dashboard, create and install an app for your store with scopes read_orders, read_all_orders, write_orders and read_products, and request access to the order email field. In n8n, add a Custom Auth credential with {"body": {"client_id": "...", "client_secret": "..."}} and select it in Get Shopify token and Refresh Shopify token.
3. Connect Slack and Anthropic credentials. Enable Slack interactivity for the approval buttons (Interactivity URL and signing secret, per n8n's Slack approvals docs), then set the channel and, optionally, the approver Slack user IDs in Store settings.
4. Connect Google Sheets credentials, paste your spreadsheet ID, and create a sheet/tab named “Returns log” with the expected columns.
5. Update the “Store settings” values (shop domain, API version, return windows, final-sale tags, restocking fee rules, and customer reply templates) and create a Gmail label named `returns` with a filter that applies it to return-request emails.

## Requirements
- Shopify store with a Dev Dashboard app (read_orders, read_all_orders, write_orders, read_products, order email access; Grow plan or higher for protected customer data)
- Gmail account with OAuth2 credentials in n8n
- Slack workspace with an app that has interactivity enabled for approval buttons
- Google Sheets spreadsheet with a "Returns log" tab
- Anthropic API key (Claude)

## Customization
- Change the return window, faulty-item window and shipping grace days in Store settings
- Choose which reasons count as faulty and which carry a restocking fee, and set the fee percent
- Set the product tags that mark final-sale items
- Restock returned items by setting restockType to RETURN and a location ID
- Rewrite the four customer reply templates in your store's voice
- Limit who can approve refunds with a comma-separated list of Slack user IDs
- Swap Claude for another chat model in the extraction step

## Additional info
Every eligibility rule runs in a Code node, not in the model: Claude only extracts details from the email. Refund amounts come from Shopify's suggestedRefund, and refundCreate runs only after a Slack approval, with an idempotency key so a retry cannot refund twice. Runs started from the editor are dry runs that never refund or email customers. Exchanges, store credit, not-received claims, multi-currency orders and senders that fail DMARC go to a person. The workflow refunds money but does not create a Shopify Return, so approve once the item is back or when you accept refunding first. The canvas is laid out left to right in seven labelled sections, with every early exit and failed step collected in one lane before the final Slack post, reply and log.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Gmail Trigger, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
