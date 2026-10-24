# 💬 Answer hotel guest messages with GPT-4o mini, Slack, and Google Sheets

> ⚡ **35 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow receives guest messages via a webhook, uses OpenAI (GPT-4o-mini) to generate multilingual hotel support replies with an escalation flag, notifies the front desk in Slack when needed, logs the interaction to Google Sheets, and returns a JSON acknowledgement to the messaging gateway.

## How it works
1. Receives an inbound guest message through a webhook from a WhatsApp/Viber gateway.
2. Normalizes the incoming payload into a consistent structure (guest ID, channel, guest name, and message text).
3. Uses OpenAI (GPT-4o-mini) to generate a short reply in the guest’s language based on the built-in hotel information and outputs structured JSON with language, reply, category, and an escalate flag.
4. If the message needs human attention, posts the guest details and message to a Slack front-desk channel.
5. Routes the reply based on the reported channel and sends the generated reply text to Slack.
6. Appends the conversation data to Google Sheets and responds to the gateway with a JSON status including the detected language and whether it was escalated.

## Setup
1. Configure the inbound webhook URL in your WhatsApp/Viber gateway so it sends a payload containing at least channel, from, and text/message fields.
2. Add OpenAI API credentials for the GPT-4o-mini model.
3. Add Slack OAuth2 credentials and set the target channels for front-desk notifications and reply delivery.
4. Add Google Sheets OAuth2 credentials and update the spreadsheet/document ID and sheet tab used for logging.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
