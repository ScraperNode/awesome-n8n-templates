# 🎬 Create an AI image remix and design bot for Telegram with BrowserAct and Gemini

> ⚡ **183 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# AI Image Remix & Design Bot for Telegram with BrowserAct & Gemini 

This workflow transforms your Telegram bot into an intelligent creative assistant. It can chat conversationally, fetch trending image prompts from PromptHero for inspiration, or perform a deep "remix" of any photo you upload by analyzing its composition and regenerating it with high-fidelity prompt engineering.

## Target Audience

Digital artists, designers, content creators, and hobbyists looking for AI-assisted inspiration and image generation.

## How it works

1. **Traffic Control**: The workflow starts with a **Telegram Trigger** and immediately splits traffic: new messages go one way, while interactive button clicks (like "Regenerate") go another.
2. **Intent Classification**: An **AI Agent** analyzes text inputs to decide if the user wants to "Chat" (small talk) or "Start" a creative session (fetch inspiration).
3. **Inspiration Mode**: If "Start" is detected, **BrowserAct** scrapes trending prompts from PromptHero and saves them to a Google Sheet.
4. **Visual Forensics**: If the user uploads an image, an **AI Vision Agent** (using OpenRouter/Gemini) analyzes it in extreme detail (lighting, composition, subjects) and saves the description.
5. **Master Prompt Engineering**: Specialized AI Agents expand these inputs (either scraped prompts or image descriptions) into massive, detailed prompts using the "Rule of Multiplication."
6. **Production**: **Google Gemini** generates the new image, which is sent back to Telegram with interactive buttons to "Regenerate" or move to the "Next" idea.

## ⚠️ Complex Workflow

This workflow is complex.

Please **proceed using the tutorial video**.

## How to set up

1. **Configure Credentials**: Connect your **Telegram**, **Google Sheets**, **BrowserAct**, **Google Gemini**, and **OpenRouter** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Image Remix & Design Bot** template is saved in your BrowserAct account.
3. **Setup Google Sheet**: Create a Google Sheet with four tabs: `PromptHero`, `Current State`, `UserImage`, and `Current Image`.
4. **Connect Sheet**: Open all **Google Sheets** nodes in the workflow and paste your spreadsheet ID.
5. **Configure Telegram**: Ensure your bot is created via BotFather and the API token is added to the Telegram credentials.
6. **Activate**: Turn on the workflow.

## Requirements

* **BrowserAct** account with the **Image Remix & Design Bot** template.
* **Telegram** account (Bot Token).
* **Google Sheets** account.
* **Google Gemini** account.
* **OpenRouter** account (or compatible LLM credentials).

## How to customize the workflow

1. **Change Art Style**: Modify the system prompt in the **Generate Image** agents to enforce a specific style (e.g., "Cyberpunk," "Watercolor," or "Photorealistic").
2. **Add More Sources**: Update the **BrowserAct** template to scrape prompts from other sites like Civitai or Midjourney feed.
3. **Switch Image Model**: Replace the Gemini image generation node with **Stable Diffusion** or **DALL-E 3** if you prefer different aesthetics.

## Need Help?

* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [How To create stateful n8n Workflows | AI Image Remix Bot with n8n & BrowserAct & Telegram 🎨](https://youtu.be/GqeKd9aYjW4)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
