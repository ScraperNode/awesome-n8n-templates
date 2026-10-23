# 💬 Reply to LINE inquiries with Claude Haiku 4.5 and Gmail staff approval

> ⚡ **1 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives LINE Messaging API webhooks, drafts customer replies with Anthropic Claude using n8n Data Tables for stock and visit availability, and emails the draft to staff in Gmail for approval before sending the approved response back to the customer on LINE.

## How it works
1. Receives incoming LINE webhook events, verifies the request signature, splits batched events, and ignores redelivered events.
2. Extracts key message fields, accepts only text and image messages, and immediately replies via the LINE Reply API with an acknowledgment message.
3. If the message is an image, downloads it from LINE and uses Anthropic Claude to describe the photo so it can be handled like a text inquiry.
4. Uses Anthropic Claude to classify the inquiry as a stock inquiry, a store visit request, or other.
5. For stock inquiries, extracts the product category, looks up matching items in an n8n Data Table, and uses Anthropic Claude to draft a reply based only on the returned stock data.
6. For store visit requests, extracts the desired date/time, looks up available visit slots in an n8n Data Table, and uses Anthropic Claude to draft a reply based only on the returned slot data.
7. Emails the draft to staff via Gmail for Send/Don’t send approval, then either pushes the approved reply to the customer via the LINE Push API or emails staff a timeout reminder (and routes “other” inquiries directly to staff by email).

## Setup
1. Create a LINE Official Account Messaging API channel, enable webhooks, disable auto-replies, and configure the workflow’s production webhook URL in the LINE Developers console.
2. Add credentials for LINE API HTTP Header Auth (Authorization: Bearer <channel access token>) and Crypto HMAC SHA-256 using your LINE channel secret.
3. Add an Anthropic credential and ensure the Claude model selection matches what your Anthropic account supports.
4. Add a Gmail OAuth2 credential and set the staff email address, acknowledgment text, timezone, currency, and approval timeout in the Config values.
5. Create and select two n8n Data Tables for product stock and visit slots (including the category/slot_date fields used for lookups) and populate them with your store data.

## Requirements
- LINE Official Account with the Messaging API enabled
- Anthropic API key (tested with Claude Haiku 4.5)
- Gmail account for the staff approval emails
- n8n reachable over HTTPS so LINE can deliver webhooks. Set WEBHOOK_URL if staff approve from a phone

## Customization
- Change the product categories in "Extract product category" to match your catalog
- Edit the reply rules in "Draft stock reply" and "Draft visit reply"
- Change the acknowledgment text, timezone, currency, and approval wait time in the Config node

## Additional info
AI drafts can still include promises that are not in your data, so read each draft before you approve it. A write-up of how this template was built and tested, with screenshots (in Japanese): https://outsidernotes.com/n8n-template-line-approval-reply/

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, Filter, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
