# 🎬 Translate and dub YouTube videos using BrowserAct, Telegram, Gemini & ElevenLabs

> ⚡ **50 views** · 🎬 [Content Creation & Video](../)

## Description

# Translate and dub YouTube videos using BrowserAct, Telegrma & Gemini

This workflow transforms any YouTube video into a localized audio experience. It scrapes the video content, translates the transcript into your target language using AI, generates high-quality dubbed audio using ElevenLabs, and delivers the audio files and a summary directly to your Telegram chat.

## Target Audience
Content creators, language learners, and educators looking to make video content accessible in multiple languages.

## How it works
1. **Receive Link**: You send a YouTube video link to your **Telegram** bot.
2. **Extract URL**: An **AI Agent** extracts the clean YouTube URL from your message.
3. **Scrape Content**: **BrowserAct** executes a background task to fetch the video's transcript, description, and metadata.
4. **Translate & Script**: A specialized **AI Agent** (using Google Gemini) translates the transcript into your chosen target language (e.g., Spanish). It also segments the text into logical parts for dubbing.
5. **Generate Audio**: **ElevenLabs** synthesizes the translated text segments into natural-sounding speech.
6. **Deliver**: The workflow sends the dubbed audio files and a translated summary post to your **Telegram** chat.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **BrowserAct**, **ElevenLabs**, and **Google Gemini** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **YouTube Translator & Auto Dubber** template is saved in your BrowserAct account.
3. **Configure Telegram**: Ensure your bot is created via BotFather and the API token is added to the Telegram credentials.
4. **Set Language**: Open the **Define Language** node to set your desired target language (default is "Spanish").
5. **Activate**: Turn on the workflow.
6. **Test**: Send a YouTube link to your bot to start the dubbing process.

## Requirements
* **BrowserAct** account with the **YouTube Translator & Auto Dubber** template.
* **ElevenLabs** account.
* **Telegram** account (Bot Token).
* **Google Gemini** account.

## How to customize the workflow
1. **Change Voice**: Open the **Convert text to speech** node and select a different **ElevenLabs** voice model.
2. **Add More Languages**: Add logic to the **Define Language** node to let the user select a language via a Telegram menu.
3. **Change Output**: Replace the Telegram output with a **Google Drive** node to save the audio files for later use.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [One-Click YouTube Translator: Auto-Dub Your YouTube Videos with n8n & ElevenLabs 🌍](https://youtu.be/vGJ2TdfGMpk)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
