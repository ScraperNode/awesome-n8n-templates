# 🎣 Qualify and score Telegram leads with OpenAI, Google Sheets and Gmail

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
A Telegram bot that qualifies inbound leads with OpenAI, scores them against your own threshold, logs each one to Google Sheets, and emails your team through Gmail only when a conversation is actually worth a human's time.

## How it works
1. Triggers when your Telegram bot receives a new message.
2. Normalizes the message into a per chat session that tracks history, lead score and state, then routes it to AI scoring, a holding reply, a non text fallback, or a rate limit notice.
3. Sends the conversation and your business details to the OpenAI node, which returns a short reply plus structured lead scoring data.
4. Parses the response, updates the session, and runs a deterministic evidence check so a high score on its own cannot trigger a handoff.
5. On a qualified lead it replies to the visitor, notifies your team chat, appends a row to Google Sheets, and sends an email through Gmail.
6. If the OpenAI call fails, an error branch still answers the visitor instead of dropping the message. Already handed off, rate limited and non text messages each get their own reply.

## Setup
1. Create a Telegram bot with BotFather, then add your Telegram credentials to the Telegram Trigger and Send Telegram Message nodes.
2. Add your OpenAI credentials to the Score Lead with OpenAI node.
3. Open the Workflow Configuration node and set your business details, handoff threshold and team chat ID. To turn on lead logging and team email, replace the Google Sheet ID and team email placeholders there, and add Google Sheets and Gmail credentials to those two nodes. Leave the placeholders as they are and both branches are skipped.

## Requirements
- A Telegram bot token and an OpenAI API key. Google Sheets and Gmail credentials are optional and only needed if you enable those branches.

## Customization
- Raise or lower the handoff threshold to change how strict qualification is, adjust the rate limit window, and edit the scoring prompt in Build AI Request to match how your team defines a qualified lead.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
