# 💬 Connect AI to any chats in Kommo

> ⚡ **3,455 views** · 💬 [Support Chatbots](../)

## Description

Entrust customer service to AI using n8n and Kommo!
Using this workflow, you can make the AI agent answer customer questions for your managers.
See how it works in the [video](https://youtu.be/yFqkp-HrCeY).

## Advantages of integration
- Works with any message channel that is connected to Kommo (telegram, whatsapp, facebook)
- Understands voice and text messages
- You can stop for a specific transaction or contact if you need a person's help.
- It is possible to supplement the AI agent with additional tools to suit your needs

## Where it can be useful
- In customer support
- In the qualification of clients
- When invoicing

## How it works
1) Any incoming message to the Kommo chats is sent by the webhook to n8n
2) n8n processes the webhook according to the specified logic
3) n8n sends a reply message to the Kommo chat

## Installation Steps
1) Install workflow
2) Follow the instructions to connect the kommo to the n8n
3) Set up Credentials for OpenAI
4) Fill in the Credentials as shown in the workflow notes
5) Activate Workflow
6) Write your first message as client

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
