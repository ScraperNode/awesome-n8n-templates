# 🔬 Route rental payment and receipt messages with Telegram and OpenAI GPT-4.1

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This demo workflow listens for Telegram rental messages, routes receipt-related commands, uses OpenAI to classify payments, costs, and booking summaries, then replies with parsed details and a sample receipt flow.

## How it works
1. Triggers when a new Telegram message is received.
2. Routes the message into one of four paths: full /receipt command, receipt request, receipt date reply, or general rental tracking.
3. If a full /receipt command is provided, it parses client, property, stay dates, amount, and transaction details and replies in Telegram with the extracted fields.
4. If the user sends a receipt request, it looks up the last saved payment for that Telegram chat and either prompts the user for stay dates or returns an error if no payment is stored.
5. If the user replies with stay dates during a pending receipt flow, it combines those dates with the stored payment to build receipt details and replies with either a “ready to generate” summary or an error message.
6. For all other messages, it sends the text to OpenAI to classify it as payment, cost, or booking summary, normalizes the JSON result, and replies in Telegram with the parsed output.
7. When a payment is detected, it extracts basic M-Pesa fields from the SMS text and stores the last payment per chat to support the receipt request flow.

## Setup
1. Add a Telegram Bot credential in n8n and connect it to the Telegram Trigger and Telegram send-message steps.
2. Add an OpenAI credential for the OpenAI model step used to classify rental messages.
3. Update the OpenAI model selection and system prompt rules to match your property names, currency, country, and payment-message format.
4. Test the receipt flow by sending a payment SMS, replying "receipt", and then sending stay dates such as "24 Jun 2026 to 28 Jun 2026".

## Customization
- For production use, replace the demo Telegram replies with HTTP Request nodes connected to your Google Sheet, Apps Script, database, CRM, or receipt generator backend.

## 🔗 Nodes Used

Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
