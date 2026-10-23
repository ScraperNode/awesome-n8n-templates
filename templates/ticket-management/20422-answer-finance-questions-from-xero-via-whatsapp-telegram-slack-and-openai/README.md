# 🎫 Answer finance questions from Xero via WhatsApp, Telegram, Slack, and OpenAI

> ⚡ **20 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow answers finance questions received on WhatsApp (via WAHA) or Telegram by fetching data from Xero, drafting a validated response with OpenAI, optionally posting the result to Slack, and persisting conversation state in an n8n Data Table.

## How it works
1. Receives an incoming message from WhatsApp via a WAHA webhook (with HMAC verification) or from a Telegram bot trigger.
2. Normalizes the incoming message into a consistent format, applies workflow configuration, and blocks unauthorized senders based on an allowed-users list.
3. Loads the prior conversation state from an n8n Data Table and decides whether the message is a Slack-share follow-up (Yes/No/post) or a new finance request.
4. For new requests, uses OpenAI to classify the intent (accounts receivable, cash position, or bills due this week) and replies with help text if the intent is unknown.
5. Retrieves the connected Xero organisations, selects the correct Xero tenant, and queries the relevant Xero endpoints to build a canonical text summary for the requested report.
6. Uses OpenAI to rewrite the canonical Xero summary as a concise chat response and validates it against the canonical numbers before asking whether to post the update to Slack.
7. Saves the updated conversation state and sends the reply back to the originating channel (WhatsApp via WAHA or Telegram), posting the previous answer to Slack if the user confirms.

## Setup
1. Connect credentials for Xero OAuth2, OpenAI, Slack, and Telegram, and add HTTP Header Auth credentials for the WAHA send API.
2. Configure WAHA to send message events to the workflow’s webhook URL and set the matching HMAC SHA-512 secret and WAHA base URL.
3. Create an n8n Data Table named “Finance Bot Conversation State” with columns for stateKey, userId, channel, chatId, lastIntent, lastResponse, and pendingSlackConfirmation.
4. Update the workflow configuration values for allowed users, the Slack channel ID, and (if you have multiple Xero organisations) the Xero tenant ID.

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
