# 💬 Auto-reply to Telegram messages using BrowserAct and Google Gemini

> ⚡ **20 views** · 💬 [Support Chatbots](../)

## Description

# Auto-reply to Telegram messages using BrowserAct & Google Gemini

This workflow acts as a smart, 24/7 personal assistant for your Telegram chats. It runs on a schedule to monitor your message history, uses AI to decide if a reply is necessary, drafts a personalized response, and sends it back to the user, all while handling delivery verification and potential CAPTCHA challenges via BrowserAct.

## Target Audience
Community managers, busy professionals, and customer support teams who need to manage Telegram communications efficiently.

## How it works
1. **Scheduled Check**: Every 15 minutes, the workflow triggers **BrowserAct** to fetch the latest chat history.
2. **Analysis**: An **AI Agent** (using Google Gemini) reviews the conversation. It determines if the last message requires a response (e.g., a question) or if the chat is idle.
3. **Drafting**: If a reply is needed, the AI drafts a personalized message that includes the user's name and a standard footer disclaimer.
4. **Formatting**: A Code node cleans up the text to ensure proper line breaks and formatting for Telegram.
5. **Delivery**: **BrowserAct** executes the task to send the drafted reply. The workflow loops to check the task status, ensuring the message is delivered successfully.

## How to set up
1. **Configure Credentials**: Connect your **BrowserAct** and **Google Gemini** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Telegram Personal Assistant** template is saved in your BrowserAct account.
3. **Set Schedule**: The default trigger interval is 15 minutes. Adjust the **Schedule Trigger** node if you need a different frequency.
4. **Activate**: Turn on the workflow to start monitoring your chats.

## Requirements
* **BrowserAct** account with the **Telegram Personal Assistant** template.
* **Google Gemini** account.
* **Telegram** account (accessed via BrowserAct).

## How to customize the workflow
1. **Change AI Persona**: Modify the system prompt in the **Chatting & Answering AI** agent to change the tone from "Professional Support" to "Casual Assistant" or "Sales Representative."
2. **Adjust Frequency**: Change the **Schedule Trigger** interval to run every 5 minutes for faster responses or hourly for less urgency.
3. **Add Notification**: Add a **Slack** or **Email** node after the delivery step to get notified whenever the bot sends a reply.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Telegram Personal Assistant: Auto-Read Chats & Auto-Reply them with n8n](https://youtu.be/iTp4LhhjCiQ)

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
