# 🔬 Track bank SMS expenses with Google Sheets, Telegram and Claude

> ⚡ **27 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow captures bank SMS alerts via a secured webhook, parses them into structured transactions, and stores them in Google Sheets, while also running a Telegram bot powered by Anthropic Claude to answer spending questions using the ledger and a review queue.

## How it works
1. Receives forwarded bank SMS messages through an authenticated webhook request.
2. Parses and normalizes the SMS text to extract fields like amount, debit/credit, date, merchant, payment method, reference ID, and account last 4, while rejecting OTPs and non-allowlisted senders.
3. If the SMS is a complete, valid transaction, upserts it into the Google Sheets Expenses ledger and returns a 200 JSON confirmation to the sender.
4. If the SMS is incomplete but not rejected, upserts it into a Google Sheets Review_Queue tab and returns a 200 JSON response indicating manual review is needed.
5. If the SMS is rejected (for example OTP or unknown sender), returns a 422 JSON rejection response.
6. Triggers on incoming Telegram messages and sends the user’s question to a LangChain agent using Anthropic Claude with short-term conversation memory.
7. The agent reads transactions and the review queue from Google Sheets (and uses a calculator tool for exact math) and sends a plain-text reply back to the same Telegram chat.

## Setup
1. Create a Google Sheets spreadsheet with Expenses and Review_Queue tabs (with columns matching the workflow fields) and connect a Google Sheets OAuth2 credential, then select the correct document and sheet in all Google Sheets nodes/tools.
2. Create an HTTP Header Auth credential for the webhook and configure your Android SMS forwarder to POST to the webhook URL with the required header plus message, sender, event_id, and sent_at in the request body.
3. Update the allowedSenders list in the parsing code to include your bank’s sender IDs so legitimate alerts are accepted.
4. Create a Telegram bot with BotFather, add your Telegram credential in n8n, and enable the Telegram trigger and reply nodes for your bot.
5. Add an Anthropic credential (or AI Gateway-managed access) for the Claude chat model used by the agent.

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Telegram Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
