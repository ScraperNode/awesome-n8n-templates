# 🎬 Multi-user Telegram bot to summarize & repurpose YouTube videos with GPT-4o

> ⚡ **1,096 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## 👤 Who’s it for
This workflow is for content creators, marketers, educators, or anyone who wants to **instantly summarize YouTube videos and repurpose them** into different formats (LinkedIn post, tweet, etc.) via a simple Telegram chatbot.

## ⚙️ How it works
This n8n automation listens for messages in Telegram. If the message contains a YouTube link, it:
- Extracts the video ID
- Fetches the video transcript using RapidAPI
- Cleans the transcript of any special characters
- Sends it to OpenAI to generate a summary

If the message is **not a link**, it simply acts as an AI chatbot using OpenAI with memory support.

✅ Supports follow-up prompts like:
- “Make it shorter”
- “Turn this into a LinkedIn post”
- “Create a tweet thread”

## 🧑‍🤝‍🧑 Multi-User Support

This Telegram bot supports multiple users simultaneously. It tracks memory and context separately for each user using Telegram's unique `chat_id`.

✅ Each user gets personalized AI replies  
✅ Follow-up commands work per user  
✅ No interference between users

## 🛠️ Requirements
- A Telegram bot token (get via [@BotFather](https://t.me/BotFather))
- An OpenAI API Key (from https://platform.openai.com/account/api-keys)
- A RapidAPI Key and Host (typically `youtube-transcript3.p.rapidapi.com`)

&gt; 🚨 API keys must be added manually — they are not included in the template.

## 🧩 How to Set It Up
1. Configure the **Telegram Trigger node** with your bot token.
2. In the **HTTP Request node**, set:
   - `X-RapidAPI-Key`: your RapidAPI key
   - `X-RapidAPI-Host`: your RapidAPI host URL
3. Add your **OpenAI API credentials** to the AI Agent node.

Use the provided sticky notes for guidance inside the workflow itself.

## 🎛️ How to Customize
- Modify AI prompt behavior in the **AI Agent node**
- Change the text formatting in the **Code node**
- Use a different transcript API if preferred
- Add commands like `make it into a blog post`, `summarize in bullet points`, etc.

## 📌 Notes
- All nodes are renamed to reflect their function
- API credentials are removed for security
- Includes colored boxes and sticky notes to guide the user
- Compatible with n8n cloud and self-hosted setups

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
