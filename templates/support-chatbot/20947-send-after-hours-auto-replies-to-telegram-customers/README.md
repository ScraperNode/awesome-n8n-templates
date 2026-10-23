# 💬 Send after-hours auto-replies to Telegram customers

> ⚡ **2 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Small businesses, freelancers and solo founders who talk to customers on Telegram but can't reply around the clock. If you've ever lost a sale because a message arrived at 11 PM and nobody answered until morning, this template is for you.

## How it works
1. Every message sent to your Telegram bot flows through five steps: a trigger catches it, a config node holds your schedule, a Code node checks the current time against your business hours, an IF node filters out messages that arrive inside working hours, and your bot instantly sends a custom auto-reply to everyone who writes after hours. Customers feel heard immediately, even at 3 AM.

## Setup
1. Create a free Telegram bot with @BotFather (takes 2 minutes) and add its token to the Telegram credentials in n8n.
2. Open the **Set Business Hours Config** node and set your opening hour, closing hour, working days (1 = Monday … 7 = Sunday) and reply text.
3. Activate the workflow and start a chat with your bot. Done.

## Requirements
- A free n8n account (self-hosted or cloud) and a free Telegram bot. No coding needed and no extra monthly costs.

## Customization
- Everything editable lives in the **Set Business Hours Config** node — hours, days and message text, no code required. Want different replies per day or special handling for VIP customers? Duplicate the IF branch and add your own logic. Note: Telegram bots can only reply to people who start the conversation (they tap Start), so this works best for notifications, reminders and existing customers.

## 🔗 Nodes Used

Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
