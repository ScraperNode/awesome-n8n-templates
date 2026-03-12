# 💬 Advanced Telegram bot, ticketing system, liveChat, user management, broadcasting

> ⚡ **25,123 views** · 💬 [Support Chatbots](../)

## Description

A robust n8n workflow designed to enhance Telegram bot functionality for user management and broadcasting. It facilitates automatic support ticket creation, efficient user data storage in Redis, and a sophisticated system for message forwarding and broadcasting.

![7Yscd9l4gN.png](fileId:729)

### How It Works

1. **Telegram Bot Setup**: Initiate the workflow with a Telegram bot configured for handling different chat types (private, supergroup, channel).
2. **User Data Management**: Formats and updates user data, storing it in a Redis database for efficient retrieval and management.
3. **Support Ticket Creation**: Automatically generates chat tickets for user messages and saves the corresponding topic IDs in Redis.
4. **Message Forwarding**: Forwards new messages to the appropriate chat thread, or creates a new thread if none exists.
5. **Support Forum Management**: Handles messages within a support forum, differentiating between various chat types and user statuses.
6. **Broadcasting System**: Implements a broadcasting mechanism that sends channel posts to all previous bot users, with a system to filter out blocked users.
7. **Blocked User Management**: Identifies and manages blocked users, preventing them from receiving broadcasted messages.
8. **Versatile Channel Handling**: Ensures that messages from verified channels are properly managed and broadcasted to relevant users.

### Set Up Steps

* **Estimated Time**: Around 30 minutes.
* **Requirements**: A Telegram bot, a Redis database, and Telegram group/channel IDs are necessary.
* **Configuration**: Input the Telegram bot token and relevant group/channel IDs. Configure message handling and user data processing according to your needs.
* **Detailed Instructions**: Sticky notes within the workflow provide extensive setup information and guidance.

![kes0xxJdTb.png](fileId:728)
### **Live Demo Workflow**
**Bot**: [Telegram Bot Link (Click here)](https://TheLiveChatBot.t.me)
**Support Group**: [Telegram Group Link (Click here)](https://t.me/+-8BELbd0GDYxMTEx)
**Broadcasting Channel**: [Telegram Channel Link (Click here)](https://broadcasting_channel.t.me)


**Keywords**: n8n workflow, Telegram bot, chat ticket system, Redis database, message broadcasting, user data management, support forum automation

## 🔗 Nodes Used

HTTP Request, Redis, Telegram, Telegram Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
