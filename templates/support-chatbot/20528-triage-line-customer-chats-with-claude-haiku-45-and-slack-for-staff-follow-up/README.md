# 💬 Triage LINE customer chats with Claude Haiku 4.5 and Slack for staff follow-up

> ⚡ **2 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives customer messages from LINE, uses Anthropic Claude to auto-answer common questions from your shop data, and routes everything else to a Slack thread for staff to handle, syncing staff replies back to LINE and tracking conversations in n8n Data Tables.

## How it works
1. Receives incoming LINE webhook events, verifies the request signature, and ignores invalid or redelivered events.
2. Extracts the user ID, reply token, and message content, then processes only text and image messages.
3. For image messages, downloads the image from LINE and uses Anthropic Claude to describe the furniture so it can be treated as a stock inquiry.
4. Classifies each inquiry with Anthropic Claude as shop info, stock, visit availability, or needs staff, then consults n8n Data Tables to draft a reply from the allowed data (shop information, products, or visit slots).
5. If the drafted reply is answerable, sends it back to the customer via the LINE Messaging API and logs the AI response for staff visibility.
6. If the inquiry needs staff or can’t be answered from the available data, sends an acknowledgment to LINE and posts the inquiry into Slack, creating or updating a per-customer Slack thread tracked in a Data Table.
7. When staff reply in the Slack thread, forwards the message to the customer via the LINE Messaging API, reacts on success, updates the thread status in the Data Table, and reports failures back into the thread.

## Setup
1. Create and select credentials for LINE Messaging API (HTTP Header Auth with `Authorization: Bearer <channel access token>`), Crypto HMAC (LINE channel secret), Anthropic, and Slack (bot token and signing secret).
2. Create and select three n8n Data Tables: `products` (sku, name, category, color, width_cm, price, stock, note), `visit_slots` (slot_date, slot_time, capacity, booked), and `line_slack_threads` (line_user_id, slack_ts, status, last_inquiry).
3. Choose the target Slack channel in all Slack nodes and invite the Slack bot to that channel.
4. Update the Config values (timezone, currency, acknowledgment message, and shop information) since AI answers are generated only from this content and the Data Tables.
5. Register the LINE webhook URL in the LINE Developers console and the Slack trigger URL in your Slack app’s Event Subscriptions (enable `message.channels`), then publish the workflow.

## Requirements
- LINE Official Account with the Messaging API (channel secret and channel access token)
- Slack workspace and a Slack app with the bot scopes chat:write, channels:read, channels:history, reactions:write
- Anthropic API key
- n8n reachable over HTTPS (for the LINE and Slack webhooks)

## Customization
- Change the categories in "Can the AI answer?" and "Extract product category"
- Edit the shop information in the Config node. The AI answers only from it
- Edit the rules in the three "Answer from ..." nodes
- Replace the sample Data Tables with your own products and visit slots

## Additional info
LINE push messages (staff replies) count against your monthly LINE quota; AI answers and acknowledgments use the free reply API. Each customer message used about 3 workflow executions in testing, because Slack also triggers the workflow for the bot's own posts. A date with no rows in visit_slots is answered as a day with no visits. The acknowledgment text in Config is fixed, so write it in your customers' language. Messages starting with // in a Slack thread are internal notes and are not sent. A write-up with screenshots and the problems found (in Japanese): https://outsidernotes.com/n8n-template-line-slack-handoff/

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Filter, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
