# 💬 Build your own counseling chatbot on LINE to support mental health conversations

> ⚡ **6,875 views** · 💬 [Support Chatbots](../)

## Description

Are you looking to create a counseling chatbot that provides emotional support and mental health guidance through the LINE messaging platform ? This guide will walk you through connecting LINE with powerful AI language models like GPT-4 to build a chatbot that supports users in navigating their emotions, offering 24/7 conversational therapy and accessible mental health resources .

By leveraging LINE's webhook integration and Azure OpenAI , this template allows you to design a chatbot that is both empathetic and efficient, ensuring users receive timely and professional responses. Whether you're a developer, counselor, or business owner, this guide will help you create a customizable counseling chatbot tailored to your audience's needs.

## Who Is This Template For?
**Developers** who want to integrate AI-powered chatbots into the LINE platform for mental health applications.
**Counselors & Therapists** looking to expand their reach and provide automated emotional support to clients outside of traditional sessions.
**Businesses & Organizations** focused on improving mental health accessibility and offering innovative solutions to their users.
**Educators & Nonprofits** seeking tools to provide free or low-cost counseling services to underserved communities.

## How this work?
- Line Webhook to receive new message
- Send loading animation in Line
- Check if the input is text or not
- Send the text as prompt in chat model (GPT 4o)
- Reply the message to user (you'll need  'edit field' to format it before reply)

## Pre-Requisites
- You have access to the LINE Developers Console.
- An Azure OpenAI account with necessary credentials.

## Set-up
1. To receive messages from LINE, configure your webhook:
- Set up a webhook in  LINE Developer Console.
- Copy the Webhook URL from the Line Chatbot node and paste it into the LINE Console.
- Ensure to remove any 'test' part when moving to production.
2. The loading animation reassures users that the system is processing their request.
- Authorize using header authorization
3. Message Handling
- Use the Check Message Type IsText? node to verify if the incoming message is text.
If the message type is text, proceed with ChatGPT processing; otherwise, send a reply indicating non-text inputs are not supported.
4. AI Agent Configuration
- Define the system message within the AI Agent node to guide the conversation based on desired interaction principles.
- Connect the Azure OpenAI Chat Model to the AI Agent.
5. Formatting Responses
- Ensure responses are properly formatted before sending them back to the user.
6. Reply Message
- Use the ReplyMessage - Line node to send the formatted response.
- Ensure proper header authorization using Bearer tokens.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
