# 📱 Automate Telegram channel post reactions with bot rotation & GPT-5-mini

> ⚡ **406 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 📋 WORKFLOW OVERVIEW

**Automate reactions for Telegram Channel Posts** - Automated Telegram reaction system for specific posts
##
**Flow:**

1. User sends message to a receiver bot
2. AI parses request (emoji type & quantity)
3. Code processes and validates data
4. Loop sends reactions one by one
5. User receives confirmation

##
**Key Features:**
- Natural language processing by sending a message to a chat bot to react to a post on a different channel
- Reiterates through bot token rotation. This means that if you use 100 bots then you will be able to have 100 reactions per post of your choice
- Rate limit protection
- Error handling with helpful messages
##
You will need to first add the bots that you personally own which can be acquired from BotFather to the channel that you would want them to react posts to and allow it to manage messages.
##
Required Bot Permissions:
1. Bot Must Be an Administrator
The bot needs to be added as an admin to the channel (regular member status won't work for reactions).
2. Specific Admin Rights Needed:
When adding the bot as admin, you need to enable:
✅ "Post Messages" - This is actually the key permission needed
✅ "Add Subscribers" (optional, but sometimes required depending on channel settings)
##
Credentials needed are:
Target Channel ID, Bot tokens, Bot Receiver token, OpenAI API
##
**Example Usage:**
- "https://t.me/channel/123 needs 10 hearts and 10 fire reactions

##
If in need of help contact me at:
elijahmamuri@gmail.com

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
