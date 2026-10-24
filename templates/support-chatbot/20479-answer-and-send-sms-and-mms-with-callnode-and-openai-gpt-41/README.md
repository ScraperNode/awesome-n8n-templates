# 💬 Answer and send SMS and MMS with CallNode and OpenAI GPT-4.1

> ⚡ **1 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow connects CallNode and OpenAI to automatically reply to incoming SMS/MMS with a short AI-generated message, optionally describing attached images and generating requested images, and it also provides an n8n form to send outbound texts (with optional image links) via the CallNode API.

## How it works
1. Receives an incoming message from CallNode via a header-authenticated webhook.
2. If the message includes media URLs, OpenAI analyzes the image(s) and produces a short description to add context for the reply.
3. OpenAI generates a brief, plain-text response using a business-specific system prompt and keeps conversation context per sender/recipient with buffer memory.
4. Returns the response to CallNode as the webhook reply so it is delivered back in the same SMS thread.
5. If the response includes an image request marker, OpenAI generates an image, converts it to base64, and sends it as an MMS through the CallNode Messages API using HMAC-signed headers.
6. Alternatively, a user submits an n8n form with a phone number, message, and optional image URL, and the workflow signs and sends that message via the CallNode Messages API.

## Setup
1. Create a CallNode number with messaging enabled, configure its inbound webhook URL to this workflow’s production webhook URL, and set up the matching custom header name/value used by the webhook authentication.
2. Add OpenAI API credentials for the chat model, image analysis, and image generation steps, and ensure your OpenAI account is enabled for the required image model.
3. In the Settings values, update the business name and edit the assistant’s system prompt to include only the business facts you want it to use.
4. Create a CallNode API key/secret, then fill in the apiKey, apiSecret, and fromNumber values used to sign and send outbound messages and generated pictures.
5. Share or open the n8n form’s production URL if you want to use the built-in “Send a text message” form for outbound SMS/MMS.

## Requirements
- A CallNode account with funds and a phone number that can text (a local number is ready for texting when you buy it; a toll-free number must pass Toll-Free Verification first)
- An OpenAI API key for the replies, picture reading and picture generation (picture generation uses GPT Image 1, which needs a verified OpenAI organization)
- A CallNode live API key and secret, needed only to send generated pictures and messages from the form (answering incoming texts works without one)
- An n8n instance with a public URL, such as n8n Cloud, so CallNode can reach the webhook

## Customization
- Replace the ABOUT YOUR BUSINESS lines in the AI Assistant's system message with your hours, services and common questions
- Swap the OpenAI Chat Model for any chat model n8n supports
- Replace the form with any trigger that provides a phone number and a message, such as a new order or booking
- Delete the PICTURES THEY ASK FOR section of the system message to turn picture generation off

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Simple Memory, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
