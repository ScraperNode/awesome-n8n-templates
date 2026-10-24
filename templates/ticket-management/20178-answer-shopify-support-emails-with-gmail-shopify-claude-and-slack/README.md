# 🎫 Answer Shopify support emails with Gmail, Shopify, Claude and Slack

> ⚡ **42 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Answer Shopify support emails from the order record, not from guesswork. Claude drafts each reply from the Shopify order and your store policies; your code decides whether it sends, waits as a Gmail draft for review, or goes to Slack. The model never refunds, cancels or picks the route.

## How it works
1. Polls Gmail every minute for unread emails in the Inbox.
2. Normalizes the sender, subject and message text (quoted replies stripped), finds an order reference like #1042 in the subject or body, and falls back to searching by the sender's email address when there isn't one.
3. Gets a fresh 24-hour token from your Shopify app, then makes one GraphQL Admin API call for the order's status, fulfillment, carrier, tracking, delivery estimate, line items and the email on the order.
4. Sends the email, the order record and your store facts to Claude (Anthropic Messages API) and gets back JSON that matches a fixed schema: intent, language, confidence, whether a person is needed, a one-line summary and the reply.
5. A Code node applies your rules: the intent must be on your send list, clear the confidence bar and, for order questions, the email on the order must match the sender. Replies inside an existing thread and anything unclear go to a person.
6. Send: Gmail replies in the thread with your disclosure line. Draft: Gmail saves a reply in the thread and Slack tells the team why it is waiting. Escalate: Slack gets the summary, the reason and the thread link. Spam ends at a node that does nothing.

## Setup
1. Select your Gmail credential on the trigger and on both Gmail nodes. The trigger reads unread mail in the inbox every minute; add a label filter if support shares the mailbox.
2. In Shopify, create an app in the Dev Dashboard with the read_orders scope, release it and install it on your store. On Get a Shopify token, add a Custom Auth credential with the JSON {"body": {"client_id": "your client ID", "client_secret": "your secret"}}.
3. Create an HTTP Header Auth credential named x-api-key with your Anthropic API key as the value, and attach it to Classify and draft with Claude.
4. Select your Slack credential on Ask the team to review and Escalate to a person. The channel name comes from Settings.
5. Edit Settings: store name, shop subdomain, return window, shipping promise, brand voice, the intents allowed to send, the confidence bar, signature and disclosure line. Then click Test workflow: a sample email is pinned, so you can run it end to end before a real customer writes in.

## Requirements
- Gmail, Slack, an Anthropic API key and a Shopify app from the Dev Dashboard with the read_orders scope. Core nodes only (Gmail, HTTP Request, Code, Switch, Slack), so it runs on n8n Cloud or self-hosted.

## Customization
- Add a class to the send list in Settings once a fortnight of drafts shows the model gets it right, and raise or lower the confidence bar (0.8 by default). To use another model, change the URL, headers and body of the Claude node and keep the JSON schema so the routing code still works. For WooCommerce, replace the two Shopify HTTP nodes with one order lookup. Refunds, credits, cancellations and address changes are always drafted for a person, never sent.

## Additional info
Built by Amplence. The cost per email, the send-or-draft threshold and the reasoning behind each node are explained in the companion article: https://amplence.com/blog/n8n-shopify-customer-support-workflow

Want it running on your store? We set up and maintain n8n workflows: https://amplence.com/services/n8n-automation-services
All our free templates as JSON on GitHub: https://github.com/muneeb-ashraf/n8n-workflow-templates

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
