# 💬 Answer Telegram messages with GPT-5, Perplexity, Wikipedia, and memory

> ⚡ **48 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow turns a Telegram bot into a conversational assistant that answers incoming chat messages using an OpenAI chat model, with optional tool use for Perplexity web search, Wikipedia lookups, and calculations, while keeping short-term per-chat memory.

## How it works
1. Triggers when a new Telegram message is received by your bot.
2. Loads the assistant configuration (system prompt, OpenAI model, Perplexity model, memory window, and max reply length) and continues only if the message contains text.
3. Sends the user’s text to an OpenAI-powered agent that can call Perplexity for real-time web search, Wikipedia for background info, and a calculator for arithmetic while using per-chat memory.
4. Truncates the generated answer if it exceeds the configured maximum length.
5. Sends the final reply back to the same Telegram chat with web previews disabled.

## Setup
1. Create a Telegram bot with @BotFather and add its token as a Telegram credential used by both the Telegram Trigger and Send Reply steps.
2. Add an OpenAI API credential and select the model you want to use in the configuration values.
3. Add a Perplexity API credential and select the Perplexity model for web search.
4. Review and edit the system prompt, memory context window size, and maximum reply length in the Configuration step to match your preferred behavior.

## Additional info
# Answer Telegram messages with an AI agent using GPT-5, Perplexity and Wikipedia
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Answer-Telegram-messages-with-an-AI-agent-using-GPT-5-Perplexity-and-Wikipedia-3a03d6550fd98169bd84c742dbdcc1e0)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Telegram, Telegram Trigger, Filter, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
