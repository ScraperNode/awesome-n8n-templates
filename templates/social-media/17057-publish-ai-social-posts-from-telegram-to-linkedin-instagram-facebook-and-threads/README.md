# 📱 Publish AI social posts from Telegram to LinkedIn, Instagram, Facebook and Threads with OpenAI and Blotato

> ⚡ **147 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow listens for a Telegram message or voice note, uses OpenAI to turn it into a cross-platform social caption and matching AI image, publishes the post via Blotato to LinkedIn, Instagram, Facebook, and Threads, then sends a confirmation back to Telegram.

## How it works
1. Triggers when a new Telegram message is received by your bot.
2. Routes the input as voice or text, downloading voice notes from Telegram and transcribing them with OpenAI.
3. Sends the resulting text to an OpenAI chat model to generate a single ready-to-publish caption plus an image prompt.
4. Generates an image with OpenAI (gpt-image-1) using the returned image prompt.
5. Uploads the generated image to **[Blotato](https://blotato.com/?ref=firas)** to get a hosted media URL.
6. Publishes the caption and image to LinkedIn, Instagram, Facebook Pages, and Threads through Blotato.
7. Sends a Telegram message confirming publication and includes the posted caption.

## Setup
1. Create a Telegram bot in @BotFather, add the bot token as a Telegram credential in n8n, and activate the Telegram Trigger.
2. Add an OpenAI API credential for audio transcription, caption generation, and image generation, and (optionally) adjust the model, language, image size, and quality in the configuration values.
3. Install and configure the **[Blotato](https://blotato.com/?ref=firas)** community node, connect a Blotato API credential, and select your LinkedIn/Instagram/Threads accounts plus the Facebook account and Page ID in the publish steps.

## Additional info
## Publish AI social posts from a Telegram message to LinkedIn, Instagram, Facebook and Threads

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Publish-AI-social-posts-from-a-Telegram-message-to-LinkedIn-Instagram-Facebook-and-Thread-39b3d6550fd981aab729c41790b2dc63)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
