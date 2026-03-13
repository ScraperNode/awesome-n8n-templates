# 🎬 Transform articles into kids’ audiobooks and comics with Telegram, BrowserAct, Gemini and ElevenLabs

> ⚡ **49 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Transform articles into children's audiobooks and comics via Telegram & BrowserAct

This workflow acts as an AI Storyteller. Send an article link to your Telegram bot, and it will rewrite the content into an engaging children's story, generate a multi-panel comic book visualization, produce a narrated audiobook using ElevenLabs, and deliver the entire multimedia package back to your chat.

## Target Audience
Parents, educators, and content creators looking to repurpose existing articles into kid-friendly, engaging formats.

## How it works
1. **Analyze Intent**: The workflow receives a message via **Telegram**. An **AI Agent** classifies it: is it a casual chat or a story request (a link)?
2. **Fetch Content**: If a link is detected, **BrowserAct** scrapes the text from the target webpage.
3. **Creative Production**: A "Scriptwriter" AI Agent (using OpenRouter/Gemini) rewrites the article into a whimsical children's story, generates scene descriptions for a comic book, and drafts a social media caption.
4. **Generate Audio**: **ElevenLabs** converts the story text into a narrated MP3 file.
5. **Generate Visuals**: The workflow loops through the AI-generated scene descriptions, using **Google Gemini** to create comic book-style images for each part of the story.
6. **Deliver**: The bot sends the audiobook, the comic panels, and the story text to your **Telegram** chat.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **BrowserAct**, **ElevenLabs**, **Google Gemini**, and **OpenRouter** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Children’s Book Storytelling & Illustration** template is saved in your BrowserAct account.
3. **Configure Telegram**: Ensure your bot is created via BotFather and the API token is added to the Telegram credentials.
4. **Select Voice**: Open the **Convert text to speech** node and choose a suitable narrator voice from ElevenLabs.
5. **Activate**: Turn on the workflow.
6. **Test**: Send an article link to your bot to start the storytelling process.

## Requirements
* **BrowserAct** account with the **Children’s Book Storytelling & Illustration** template.
* **ElevenLabs** account.
* **Telegram** account (Bot Token).
* **Google Gemini** & **OpenRouter** accounts.

## How to customize the workflow
1. **Change Art Style**: Modify the system prompt in the **Scriptwriter** agent to request a different visual style (e.g., "Watercolor," "Pixel Art," or "Disney Style").
2. **Adjust Story Tone**: Update the **Scriptwriter** prompt to change the target age group or genre (e.g., "Spooky Ghost Story" or "Sci-Fi Adventure").
3. **Add PDF Export**: Add a **PDF** node to compile the text and images into a downloadable eBook file.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
