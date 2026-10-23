# ⚡ Run a multi-tool Telegram AI assistant with Groq Llama 3.3

> ⚡ **69 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow turns a Telegram bot into a personal assistant J.A.R.V.I.S - powered by Groq (Llama 3.3 70B) and a LangChain agent with chat memory, using tools for web search, weather, news, Wikipedia lookups, calculations, date/time, jokes, and URL reading.

## How it works
1. Triggers when a new Telegram message is received by your bot.
2. Sends the message text to a LangChain agent running on Groq’s chat model, using the Telegram chat ID to keep a rolling memory of the conversation.
3. When needed, the agent calls external tools such as Tavily (web search), OpenWeatherMap (weather), NewsAPI (news), Wikipedia, JokeAPI, and a URL fetcher to gather or summarize information.
4. For math and date/time questions, the agent runs built-in code tools to compute results or return the current date and time.
5. Returns the agent’s final response to the same Telegram chat.

## Setup
1. Create a Telegram bot with @BotFather, add a Telegram API credential in n8n, and select it in both the Telegram Trigger and Telegram send-message step.
2. Add a Groq credential in n8n and ensure the Groq chat model is selected in the workflow.
3. Replace placeholders with your API keys: YOUR_TAVILY_API_KEY (Tavily), YOUR_OPENWEATHERMAP_API_KEY (OpenWeatherMap), and YOUR_NEWSAPI_KEY (NewsAPI).
4. Activate the workflow and message your Telegram bot to test replies, tool usage, and multi-turn memory.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Code Tool, Wikipedia

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
