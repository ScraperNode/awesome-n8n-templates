# 📊 Send 24-hour Hacker News trends to Telegram with OpenRouter AI translation

> ⚡ **22 views** · 📊 [Market Research & Insights](../)

## Description

Stay ahead of the curve with this smart Hacker News monitor. Unlike simple RSS feeds, this workflow uses a custom "Gravity Score" algorithm to identify rising trends and filter out noise, pushing a clean, summarized digest to your Telegram.

## ✨ Key Features
- 🧠 Smart Algorithms:

	- Gravity Score: Calculates popularity based on points, comments, and time (velocity), ensuring you see trending stories, not just old ones.

	- Noise Filtering: Automatically discards "infancy" posts (new posts with zero engagement) to keep your feed high-quality.

- 🤖 Optional AI Translation: Includes an AI Agent (via OpenRouter/LLM) to translate titles and summaries into your local language (e.g., Chinese, Spanish, French).

&gt; Don't need translation? Simply delete the `Translate` node and connect the `Filter` node directly to the `Combine message templates` node.

- 📱 Beautiful Telegram Format: Delivers a clean HTML-formatted digest with clickable links, stats (Points/Comments), and story previews.

## ⚙️ How It Works
1. Schedule: Runs every 4 hours (configurable) to fetch data from the past 24 hours via the Algolia API.

2. Analyze: Calculates the velocity score for each post and filters out low-quality entries.

3. Translate (Optional): Uses an LLM to translate the content. You can customize the target language in the AI Agent's system prompt.

4. Format & Send: Combines the data into a structured message and pushes it to your Telegram Chat/Channel.

## 📝 Setup Instructions
1. Telegram Credentials:

- Create a bot via `@BotFather`.

- Add the Bot Token to the Telegram node credentials.

- Get Chat ID.

2. AI Configuration (Optional):

- Configure your LLM credentials (e.g., OpenRouter, OpenAI).

- In the "Translate" (AI Agent) node, edit the System Prompt to change the target language (Default is set to translate to Chinese).

## 👀 Output Example
```html
🚨 Hacker News 24H Trending Alert
📉 Top stories captured: 5

🔥 Ask HN: How can we solve the loneliness epidemic?
📈 16.39 | 💬 796 | ⭐️ 482
🕒 Posted 12.7 hours ago
&gt; Countless voiceless people sit alone every day...

🔥 Show HN: Gambit, an open-source agent harness
📈 2.20 | 💬 11 | ⭐️ 58
🕒 Posted 5.3 hours ago
&gt; Wanted to show our open source agent harness...
```

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Filter, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
