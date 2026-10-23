# 💬 Route farmer SMS intents using OpenAI GPT-4.1-mini classification

> ⚡ **5 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This demo workflow receives an SMS-style request through a webhook, routes common farmer commands while it uses OpenAI for unknown messages. It is designed for African SMS-first farming contexts but can be adapted anywhere.

## How it works
1. Receives an incoming SMS-style request through a webhook.
2. Normalizes the phone number, message text, timestamp, and provider message ID into a consistent format.
3. Passes the request through a demo farmer-lookup step. You can replace this with your own Google Sheets or other database.
4. For registered farmers, the workflow routes exact commands like RAIN, SEEDS, EQUIPMENT, PLANT, HARVEST, and REGISTER to dedicated reply paths.
5. For messages that do not match an exact command, the workflow asks OpenAI to identify the most relevant request type so it can choose the appropriate reply route.
6. Produces a Demo Preview - Not Sent reply. This template does not send real SMS messages or write to a live database.

## Setup
1. Use the Webhook node's test URL to send an SMS-style payload while testing the workflow.
2. Add your OpenAI credential to AI Classify Unknown SMS.
3. Replace the backend nodes such as Lookup Farmer, supplier/rule lookup nodes, and Log nodes with your own Google Sheets or database actions.
4. Replace Send SMS Reply with your SMS provider node or HTTP Request node.
5. Test with messages such as RAIN, SEEDS, PLANT MAIZE, and a natural-language question before using a real farmer data.

## Requirements
- OpenAI credential for the AI fallback classification.
- An SMS provider and farmer database are needed only when adapting the demo for live use.

## Customization
- You should adapt phone normalization, command words, languages, crop guidance, supplier sources, reply templates, and safety wording for your country or region.

## Additional info
This template does not include any live SMS sending, farmer records, or credentials. It is best to review your outputs and safety rules before using it with real farmers.

## 🔗 Nodes Used

Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
