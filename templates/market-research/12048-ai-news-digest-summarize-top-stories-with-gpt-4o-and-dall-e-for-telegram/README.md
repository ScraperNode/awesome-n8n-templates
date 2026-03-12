# 📊 AI news digest: Summarize top stories with GPT-4o and DALL-E for Telegram

> ⚡ **219 views** · 📊 [Market Research & Insights](../)

## Description

**Title:**
Create daily AI news digest and send to Telegram


**Description:**


Stay ahead of the rapidly evolving artificial intelligence landscape without the information overload. This workflow acts as your personal AI news editor, automatically curating, summarizing, and visualizing the top stories of the day, delivered directly to your Telegram.


It goes beyond simple RSS aggregation by using an AI Agent to rewrite headlines and summaries into a digestible format and includes a "Chat Mode" where you can ask follow-up questions about the news directly within the n8n interface.


## Who is it for
- **AI Enthusiasts & Researchers:** Keep up with the latest papers and releases without manually checking multiple sites.
- **Tech Professionals:** Get a morning briefing on industry trends to start your day informed.
- **Content Creators:** Find trending topics for newsletters or social media posts effortlessly.


## How it works
1.  **News Aggregation:** Every morning at 8:00 AM, the workflow fetches RSS feeds from top tech sources (Google News AI, The Verge, and TechCrunch).
2.  **Smart Filtering:** A Code node aggregates the articles, removes duplicates, and ranks them by recency to select the top 5 stories.
3.  **AI Summarization:** An AI Agent (powered by OpenAI) analyzes the selected stories and writes a concise, engaging summary for each.
4.  **Visual Generation:** DALL-E generates a unique, futuristic header image based on the day's news context.
5.  **Delivery:** The digest is formatted with Markdown and emojis, then sent to your specified Telegram chat.
6.  **Interactive Chat:** A separate branch allows you to chat with an AI Agent via the n8n Chat interface to discuss the news or ask general AI questions.


## How to set up
1.  **Configure Credentials:**
    *   Set up your **OpenAI API** credential.
    *   Set up your **Telegram API** credential.
2.  **Get Telegram Chat ID:**
    *   Create a bot with `@BotFather` on Telegram.
    *   Send a message to your bot.
    *   Use `@userinfobot` to find your numeric Chat ID.
3.  **Update Workflow Settings:**
    *   Open the `Workflow Configuration` node.
    *   Paste your Chat ID into the `telegramChatId` value field.
4.  **Activate:** Toggle the workflow to "Active" to enable the daily schedule.


## Requirements
- **n8n Version:** Must support LangChain nodes.
- **OpenAI Account:** API Key with access to GPT-4o-mini (or preferred model) and DALL-E 3.
- **Telegram Account:** To create a bot and receive messages.


## How to customize
- **Change News Sources:** Edit the RSS URLs in the `Workflow Configuration` node to track different topics (e.g., Crypto, Finance, Sports).
- **Adjust Personality:** Modify the system prompt in the `AI News Summarizer Agent` node to change the tone of the summaries (e.g., "explain it like I'm 5" or "highly technical").
- **Change Schedule:** Update the `Daily 8 AM Trigger` node to your preferred time zone and frequency.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
