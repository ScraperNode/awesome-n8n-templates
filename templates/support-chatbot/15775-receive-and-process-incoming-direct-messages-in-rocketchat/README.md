# 💬 Receive and process incoming direct messages in Rocket.Chat

> ⚡ **30 views** · 💬 [Support Chatbots](../)

## Description

## Description
Use this workflow to automatically check **Rocket.Chat** for unread direct messages, process the latest user message in each thread, and send a response back to the conversation. It is useful for building automated support, AI chat, or message-handling workflows inside Rocket.Chat.

## How it Works
This workflow runs on a schedule and checks Rocket.Chat for new unread direct messages every time-tick using the Schedule Trigger node. It then calls the Rocket.Chat `subscriptions.get` endpoint to retrieve the current message subscriptions and splits the returned updates into individual items for processing. Next, the workflow filters for *unread direct-message* conversations and loops through each matching thread one at a time. For each conversation, it loads the direct messages, extracts the relevant user messages, and selects the latest one to use as the input for the response flow.

Before replying, the workflow includes a **No Operation** step where you can add your own custom logic, such as cleaning the message, passing it to an AI model, applying rules, or formatting the final response. Once processing is complete, the workflow sends the reply back to Rocket.Chat using the Post a message node.

## Setup
Before using this workflow, configure your Rocket.Chat connection and update the placeholder values in the HTTP Request and message nodes. You’ll need valid Rocket.Chat *API credentials*, your Rocket.Chat server URL, and a bot or user account with permission to read direct messages, mark conversations as read, and post replies 
RocketChat.

Update these nodes before publishing:
- `Subscription.get`: set your Rocket.Chat server URL for the subscriptions endpoint 
RocketChat.
- `IM.Messages`: set your Rocket.Chat server URL for the direct message retrieval endpoint 
RocketChat.
- `Mark as Read`: set your Rocket.Chat server URL for the subscriptions read endpoint 
RocketChat.
- `Post a message`: replace the placeholder response text with the message you want the bot to send. 
You should also review the `No Operation, do nothing node` and add your *own processing logic* there if you want to transform the latest user message before replying.

## 🔗 Nodes Used

HTTP Request, RocketChat, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
