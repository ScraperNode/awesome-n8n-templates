# 💬 Enhance customer chat by buffering messages with Twilio and Redis

> ⚡ **10,785 views** · 💬 [Support Chatbots](../)

## Description

This n8n workflow demonstrates a simple approach to improve chat UX by staggering an AI Agent's reply for users who send in a sequence of partial messages and in short bursts.

## How it works
* Twilio webhook receives user's messages which are recorded in a message stack powered by Redis.
* The execution is immediately paused for 5 seconds and then another check is done against the message stack for the latest message.
* The purpose of this check lets use know if the user is sending more messages or if they are waiting for a reply.
* The execution is aborted if the latest message on the stack differs from the incoming message and continues if they are the same.
* For the latter, the agent receives the buffered messages up to that point and is able to respond to them in a single reply.

## Requirements
* A Twilio account and SMS-enabled phone number to receive messages.
* Redis instance for the messages stack.
* OpenAI account for the language model.

## Customising the workflow

This workflow should work for other common messaging platforms such as Whatsapp and Telegram.

5 seconds too long or too short? Adjust the wait threshold to suit your customers.

## 🔗 Nodes Used

Redis, Twilio, AI Agent, OpenAI Chat Model, Simple Memory, Chat Memory Manager

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
