# 💬 Answer WhatsApp shop messages with Claude, Twilio, Google Sheets and Gmail

> ⚡ **0 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives incoming WhatsApp messages from Twilio, uses Anthropic Claude to classify and draft replies in your shop’s voice, and logs orders, complaints, and review items to Google Sheets while alerting the owner about complaints via Gmail.

## How it works
1. Receives a Twilio WhatsApp inbound message via an n8n webhook and optionally verifies the request signature using your Twilio Auth Token.
2. Extracts the sender, recipient, profile name, message text, and timestamp, then uses Anthropic Claude Haiku to classify the intent as order, question, complaint, social, or other.
3. For orders, Claude extracts structured order details, the workflow appends the order to the Google Sheets Orders tab, and Claude drafts an order confirmation reply.
4. For questions, the workflow reads the Google Sheets FAQ tab and Claude drafts a reply using only the FAQ content.
5. For complaints, the workflow appends the issue to the Google Sheets Complaints tab, Claude drafts an apology with a same-day follow-up promise, and Gmail emails the owner with the complaint details.
6. For social messages, Claude drafts a short friendly reply, and for other messages the workflow logs them to the Google Sheets Review tab for manual follow-up.
7. Sends the drafted reply back to the customer via Twilio WhatsApp and returns an empty TwiML response to acknowledge the webhook.

## Setup
1. Connect credentials for Twilio, Anthropic (Claude), Google Sheets, and Gmail.
2. Create a Google Sheet with tabs named Orders, FAQ, Complaints, and Review, and add the expected header columns in row 1 (as listed in each Google Sheets node note).
3. Update the Settings values, including your shop details, owner email, and the Google Sheet ID.
4. Copy the production webhook URL into your Twilio WhatsApp number (or WhatsApp Sandbox) as the incoming message webhook for HTTP POST.
5. (Optional) Set your Twilio Auth Token and public webhook URL in Settings to enforce Twilio signature verification and reject unsigned requests.

## Requirements
- Anthropic API key, Google account, Twilio account with WhatsApp.

## Customization
- Edit the FAQ tab to change answers. Add categories in the classifier prompt and Switch.

## 🔗 Nodes Used

Google Sheets, Twilio, Webhook, Gmail, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
