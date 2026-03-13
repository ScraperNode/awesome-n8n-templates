# 🎬 Generate audio documentaries from web articles with ElevenLabs and BrowserAct

> ⚡ **52 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Generate audio documentaries from web articles to Telegram with ElevenLabs & BrowserAct

This workflow transforms any web article or blog post into a high-production-value audio documentary. It automates the entire production chain—from scraping content and writing an engaging narrative script to generating realistic voiceovers—delivering a listenable MP3 file directly to your Telegram chat.

## Target Audience
Commuters, podcast enthusiasts, content creators, and researchers who prefer listening to content over reading.

## How it works
1. **Analyze Intent**: The workflow receives a message via **Telegram**. An **AI Agent** (using Google Gemini) classifies the input to determine if it is a casual chat or a request to process a URL.
2. **Scrape Content**: If a valid link is detected, **BrowserAct** executes a background task to visit the webpage and extract the raw text.
3. **Write Script**: A **Scriptwriter Agent** (using Claude via OpenRouter) converts the dry article text into a dramatic, narrative-driven script optimized for audio, including cues for pacing and tone.
4. **Generate Audio**: **ElevenLabs** synthesizes the script into high-fidelity speech using a specific voice model (e.g., "Liam").
5. **Deliver Output**: The workflow sends the generated MP3 file and a formatted HTML summary caption back to the user on **Telegram**.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **ElevenLabs**, **OpenRouter**, **Google Gemini**, and **BrowserAct** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **AI Summarization & Eleven Labs Podcast Generation** template is saved in your BrowserAct account.
3. **Select Voice**: Open the **Convert text to speech** node and select your preferred **ElevenLabs** voice model.
4. **Configure Model**: Open the **OpenRouter** node to confirm the model selection (e.g., Claude Haiku) or switch to a different LLM for scriptwriting.
5. **Activate**: Turn on the workflow and send a link to your Telegram bot to test it.

## Requirements
* **BrowserAct** account with the **AI Summarization & Eleven Labs Podcast Generation** template.
* **ElevenLabs** account.
* **OpenRouter** account (or access to an LLM like Claude).
* **Google Gemini** account.
* **Telegram** account (Bot Token).

## How to customize the workflow
1. **Change the Persona**: Modify the system prompt in the **Scriptwriter** node to change the narrative style (e.g., from "Documentary Host" to "Comedian" or "News Anchor").
2. **Switch Output Channel**: Replace the Telegram output node with a **Google Drive** or **Dropbox** node to archive the generated audio files for a podcast feed.
3. **Multi-Voice Support**: Add logic to split the script into multiple parts and use different **ElevenLabs** voices to simulate a conversation between two hosts.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://docs.browseract.com)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [How to Build an AI Podcast Generator: n8n, BrowserAct & Eleven Labs](https://youtu.be/YuxjfB87F0E)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
