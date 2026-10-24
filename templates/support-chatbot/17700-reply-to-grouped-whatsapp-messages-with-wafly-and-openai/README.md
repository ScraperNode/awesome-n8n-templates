# 💬 Reply to grouped WhatsApp messages with Wafly and OpenAI

> ⚡ **31 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives WhatsApp webhooks from Wafly, groups rapid-fire messages into a single question (and optionally transcribes voice notes), then uses an OpenAI-powered agent with per-contact memory to generate a short reply and sends it back to the user on WhatsApp.

## How it works
1. Receives an incoming WhatsApp event via a webhook endpoint exposed by n8n.
2. Normalizes the payload so either typed text or a voice-note transcription becomes a single `question` field.
3. Filters out non-customer events such as echoes from your own number, group messages, and empty messages.
4. Sends the customer’s question to an AI agent backed by an OpenAI chat model and a per-phone-number memory window.
5. Sends the agent’s reply back to the customer as a WhatsApp text message using Wafly.

## Setup
1. Self-host n8n and install the community node `n8n-nodes-wafly` (this template does not work on n8n Cloud).
2. Create a [Wafly account](https://wafly.com.br/signup?utm_source=n8n&utm_medium=workflow_template&utm_campaign=n8n_17700_grouped_replies&utm_content=setup_signup), connect your number by QR code, and configure Wafly API credentials in n8n. Replace the placeholder Wafly credential references in the Wafly nodes.
3. Create an OpenAI API credential in n8n and select it in the OpenAI Chat Model node.
4. Run the manual setup sequence to enable Wafly message buffering (and optionally voice-note transcription by pasting your OpenAI key into Wafly’s transcription settings).
5. Copy the webhook Production URL from the webhook trigger and register it as the Wafly “received” webhook URL for your instance (using the provided curl request and your instance/token values). See the [Wafly API documentation](https://wafly.com.br/api-docs?utm_source=n8n&utm_medium=workflow_template&utm_campaign=n8n_17700_grouped_replies&utm_content=setup_docs) for API and webhook details.

## Requirements
- Self-hosted n8n. This template uses a community node and does not run on n8n Cloud.

## Customization
- Edit the AI Agent system message, tune the 8s silence window and 30s ceiling in the buffer setup node, or swap the memory node for a database.

## Additional info
### Setup links

- [Create a Wafly account and connect your WhatsApp number](https://wafly.com.br/signup?utm_source=n8n&utm_medium=workflow_template&utm_campaign=n8n_17700_grouped_replies&utm_content=setup_signup). Use the Client-Token, instance name and instance token from your dashboard to configure the Wafly credential.
- [Wafly API documentation](https://wafly.com.br/api-docs?utm_source=n8n&utm_medium=workflow_template&utm_campaign=n8n_17700_grouped_replies&utm_content=setup_docs) covers the API and webhook setup.

Wafly uses a non-official WhatsApp connection via QR code, not the Meta WhatsApp Cloud API. This workflow requires self-hosted n8n and the community node `n8n-nodes-wafly`; it is not compatible with n8n Cloud. OpenAI API usage is billed separately by OpenAI. Test with your own number before enabling customer replies, and do not use it for unsolicited bulk messages.

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
