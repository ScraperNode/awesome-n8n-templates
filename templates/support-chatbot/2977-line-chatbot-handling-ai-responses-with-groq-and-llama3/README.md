# 💬 Line chatbot handling AI responses with Groq and Llama3

> ⚡ **1,647 views** · 💬 [Support Chatbots](../)

## Description

## Workflow overview:
This workflow is designed for dynamic and intelligent conversational capabilities. It incorporates Meta's llama3.3-versatile model for personal assistant. There are no issues when sending simple text to the LINE reply API, so in this workflow you can see how to handle large and complex text sending from AI chat without any errors.

## Workflow description:
1. User uses Line Messaging API to send message to the chatbot, create line business ID from here: [Line Business](https://manager.line.biz/)
2. Set the message from Step 1 to the proper value
3. Send the message to process at Groq using API key that we have created from [Groq](groq.com)
4. Send the reply message from AI Agent back to Line Messaging API account

## Key Features:

* Utilizes Meta's llama 3.3 model for robust conversational capabilities
* Handles large and complex text interactions with ease, ensuring reliable connections to LINE Messaging API
* Demonstrates effective strategies for processing and responding to large and complex text inputs from AI chat

To use this template, you need to be on n8n version 1.79.0 or later.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
