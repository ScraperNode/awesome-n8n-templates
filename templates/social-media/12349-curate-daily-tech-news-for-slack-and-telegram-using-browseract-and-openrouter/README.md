# 📱 Curate daily tech news for Slack and Telegram using BrowserAct and OpenRouter

> ⚡ **79 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Curate daily tech news for Slack and Telegram using BrowserAct & OpenRouter

This workflow automates the creation and delivery of a professional morning tech briefing. It scrapes headlines from major sources like *The Verge* and *Product Hunt*, uses parallel AI agents to format the content specifically for Telegram (HTML) and Slack (Markdown), and broadcasts the updates to your team or community channels.

## Target Audience
Product managers, development teams, community managers, and tech enthusiasts who want a consolidated daily news digest without manual curation.

## How it works
1. **Daily Trigger**: A **Schedule Trigger** starts the workflow every morning at 10:00 AM.
2. **Fetch News**: A **BrowserAct** node executes a background task to scrape the latest headlines and links from defined sources (default: The Verge and Product Hunt).
3. **Parallel Formatting**: The data splits into two paths:
    * **Telegram Path**: The "Telegram Master" AI Agent formats the news into clean HTML, adding emojis and ensuring links work within Telegram's API constraints.
    * **Slack Path**: The "Slack Master" AI Agent formats the same news into Slack-compatible Markdown, prioritizing developer tools and using Slack-specific syntax.
4. **Smart Splitting**: Both AI agents automatically split the content into multiple message parts if the text exceeds the character limits of the respective platforms.
5. **Broadcast**: The workflow iterates through the generated message parts and sends them sequentially to **Telegram** and **Slack**.

## How to set up
1. **Configure Credentials**: Connect your **BrowserAct**, **OpenRouter** (for AI models), **Telegram**, and **Slack** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Automated Multi-Site Morning Brief** template is saved in your BrowserAct account.
3. **Configure Channels**:
    * Open the **Send a text message** (Telegram) node and enter your Chat ID.
    * Open the **Send a message** (Slack) node and select your target channel.
4. **Activate**: Turn on the workflow to start receiving daily briefs.

## Requirements
* **BrowserAct** account with the **Automated Multi-Site Morning Brief** template.
* **OpenRouter** account (or credentials for a specific LLM like Claude or Gemini).
* **Telegram** Bot Token.
* **Slack** account.

## How to customize the workflow
1. **Add News Sources**: Update the **BrowserAct** node inputs to scrape different websites (e.g., Hacker News, TechCrunch).
2. **Change AI Persona**: Modify the system prompts in the **Telegram Master** or **Slack Master** nodes to change the tone from "Professional" to "Casual" or "Sarcastic."
3. **Add More Platforms**: Duplicate one of the formatting branches to create a version for **Discord** or **Microsoft Teams**.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Keep Your Team Updated Automatically 🌅 n8n Morning Brief Workflow](https://youtu.be/MIvUFkpobvc)

## 🔗 Nodes Used

Slack, Telegram, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
