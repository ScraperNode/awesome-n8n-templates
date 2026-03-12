# 🎯 Daily digest generator for Telegram groups with Gemini 2.5 Flash

> ⚡ **937 views** · 🎯 [AI Summarization & Classification](../)

## Description

This workflow acts as an AI assistant for your Telegram groups, automatically creating a "Daily Digest" of all conversations so you can catch up without scrolling through hundreds of messages.

It's perfect for **community managers, project teams, or groups of friends** who want to stay updated without the noise.

## How it works

This workflow runs on a simple, high-level process:

1.  **Fetches Messages:** Once every 24 hours, it automatically fetches all new messages from any group your bot is a member of.
2.  **Generates AI Summary:** It sends the chat transcript to Google's Gemini 1.5 Flash AI, which intelligently creates a structured summary including key topics, shared links, and unanswered questions.
3.  **Posts the Digest:** The clean, formatted summary is posted back into the correct Telegram group for everyone to see.

*For more detailed explanations of each specific node, please refer to the sticky notes included on the workflow canvas.*

## Set up steps

Setup should take about **5-10 minutes**.

### **Prerequisites**

* **Telegram Bot Token:** You can get this by talking to the `@BotFather` on Telegram.
* **Google Gemini API Key:** You can get a free API key from the [Google AI Studio](https://ai.google.dev/).

### **Configuration**

1.  **Add Credentials & Token**
    * In the `Get Telegram Updates` node, paste your Telegram bot token into the URL.
    * In the `Generate Summary with Gemini` and `Post Digest to Telegram` nodes, select your Google Gemini and Telegram credentials from the dropdown menus.
2.  **Configure Your Telegram Bot**
    * Using `@BotFather` in Telegram, make sure **Group Privacy Mode is turned OFF** for your bot. This is required for the bot to read messages.
    * Add your bot as a member to any group you want it to summarize.
3.  **Activate the Workflow**
    * In the n8n editor, click the "Inactive" toggle at the top of the screen to set the workflow to **Active**.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
