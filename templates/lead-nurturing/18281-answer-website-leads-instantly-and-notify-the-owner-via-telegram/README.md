# 💬 Answer website leads instantly and notify the owner via Telegram

> ⚡ **43 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives website form submissions via a webhook, normalizes the lead details, scores the message intent and urgency with rule-based logic, sends high-priority leads to Telegram, and immediately returns a tailored JSON reply for the visitor to display on the website.

## How it works
1. Receives a POST request from your website form through an n8n webhook.
2. Cleans and validates the submitted fields (name, email, phone, message, and source) and flags missing contact details or empty messages.
3. Uses rule-based keyword matching to classify the enquiry (for example emergency, quote, booking, service, or junk) and calculates a lead score and missing details.
4. Generates a customer-facing reply and an owner-facing alert message based on validity, intent, urgency, and what information is missing.
5. If the lead is valid and not classified as junk, sends the alert to the specified Telegram chat.
6. Responds to the original webhook request with a JSON payload containing an OK flag, the reply text, and any missing fields to request from the visitor.

## Setup
1. Configure your form to POST to the webhook production URL for the “new-lead” endpoint and ensure it sends fields like name, email, phone, message, and optional source.
2. Add a Telegram bot credential in n8n and set your Telegram chat ID (or pass it in the request as `chat_id`) for where alerts should be delivered.
3. Edit the keyword rules and thresholds in the scoring code to match your industry, and set your business name and optional phone number in the reply/alert generation code.

## Requirements
- A Telegram bot token and a chat id. Nothing else: no AI account, no paid API, no cost per message.

## Customization
- The trade word list, the score threshold and the wording of the reply are plain lists at the top of the code nodes. Adding a trade is a line, not a rebuild.

## 🔗 Nodes Used

Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
