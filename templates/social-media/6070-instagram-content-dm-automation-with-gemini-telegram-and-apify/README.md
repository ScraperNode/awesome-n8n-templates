# 📱 Instagram content & DM automation with Gemini, Telegram, and Apify

> ⚡ **4,564 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

# 🤖 Instagram Automation Suite: AI Chatbot & Content Powerhouse

## Workflow Overview

This cutting-edge n8n workflow is a comprehensive automation solution designed to streamline various Instagram operations. It combines an intelligent AI chatbot for direct message management, automated user following, and an advanced content generation system, all integrated to enhance your Instagram presence and efficiency.

This workflow automatically:

  * **Manages Instagram Direct Messages via Telegram Chatbot**:
      * Listens for new messages on **Telegram**.
      * Routes messages from a specific Instagram user (`Wolf23000`) for processing.
      * Utilizes an **AI agent (powered by OpenRouter's cutting-edge models)** to determine the intent of the message (e.g., chat back, run an Instagram-related action like getting profile info, posting, or following).
      * Sends AI-generated responses back to the user via **Telegram**.
  * **Automates Instagram User Following**:
      * Scheduled to run at regular intervals (hourly).
      * Processes a list of usernames (likely from a Google Sheet, though not explicitly shown in the provided JSON, it's a common pattern for "Auto Follow users from sheet" sticky note).
      * Initiates following actions on Instagram for the specified users.
  * **Generates & Schedules Instagram Posts**:
      * Scheduled to run monthly.
      * Leverages an **AI agent (powered by OpenRouter)** to generate **30 or 31 Instagram post ideas** for the current month, based on a predefined "Instagram personality profile."
      * Each post idea includes an `imagePrompt` (for AI image generation), a `caption` with emojis and hashtags, and a `scheduledDate`.
      * Refines these post ideas by enhancing the `imagePrompt` to be more vivid and detailed for AI image generation, and polishing the `caption` for optimal engagement.
      * Updates a Google Sheet ("posts generation plan") with the generated content, including the enhanced image prompts and the resulting image URLs (presumably from a separate image generation step not fully detailed in the provided JSON, but implied by `image_url` updates).

-----

## Key Benefits

  * **Intelligent DM Management**: Automate responses and actions for Instagram direct messages, ensuring timely and relevant interactions without manual effort.
  * **Effortless Audience Growth**: Automatically follow target users, expanding your reach and potential engagement on Instagram.
  * **AI-Powered Content Creation**: Generate a full month's worth of diverse, engaging Instagram post ideas tailored to a specific personality, complete with image prompts and captions.
  * **Content Optimization**: Automatically enhance image prompts for better AI image generation and refine captions for maximum impact.
  * **Time-Saving**: Significantly reduce the manual workload associated with Instagram management, from direct messages to content planning and execution.
  * **Consistent Brand Voice**: Maintain a consistent and engaging presence on Instagram with AI-generated content aligned with your defined personality.

-----

## Setup Requirements

To set up and run this workflow, you'll need the following:

  * **n8n Installation**:
      * Install n8n (cloud or self-hosted). The latest stable version, as of July 2025, is **v1.101.1**.
      * Import the workflow configuration.
      * Configure API credentials for all integrated services.
      * Set up scheduling preferences for continuous operation.
      * **System Requirements for Self-Hosting**: A modern multi-core processor (2 cores minimum, 4 recommended), 2 GB RAM (4 GB or more recommended), and 20 GB of free SSD storage. Node.js version 16 or later (18.x LTS recommended) is required. PostgreSQL is the recommended database for production.
  * **Telegram API Access**:
      * Create a Telegram bot via BotFather and obtain your API token.
      * Configure the **Telegram Trigger** node with your bot's API credentials to receive messages.
      * **Pricing**: Telegram's API is free to use.
  * **OpenRouter API Access**:
      * Create an OpenRouter account and generate an API key.
      * This key (`{{your open router api key }}` as seen in the code) is used to access their chat models (e.g., `google/gemini-2.5-flash-preview`) for AI agent operations.
      * **Pricing**: OpenRouter offers a variety of models with different pricing structures, including some free models like DeepSeek R1. Most models operate on a pay-per-usage basis, with costs clearly displayed for each model and prompt.
  * **Instagram Session ID**:
      * You'll need a valid Instagram session ID (`{{ your instagram session ID }}` as seen in the code) for the workflow to interact with Instagram. This usually involves extracting it from your browser's cookies after logging into Instagram.
      * **Caution**: Instagram's terms of service generally prohibit automated interactions, and using session IDs for scraping or automation can lead to account suspension. Use with extreme caution and at your own risk.
  * **Apify token setup**:
        *You'll need to replace `{{ your apify token }}` with you apify token in https requests
  * **Google Sheets Credentials**:
      * A Google Cloud API key with access to Google Sheets.
      * Set up OAuth2 authentication in n8n for read/write access to your "posts generation plan" spreadsheet (Document ID: `1XHNwAXR4USThaAzX1Y6M5PF2P8WqCBU8mi34FBLkV6M`). This sheet is used to store and manage generated post ideas.
      * **Pricing**: The Google Sheets API is generally free for most common use cases, with generous per-minute quotas (300 read and 300 write requests per minute per project, 60 per user per project). No additional charges are incurred for exceeding these limits.
        [https://docs.google.com/spreadsheets/d/1Ze5SC1g6Q5VzMAKYx0zmqlT00Db1HOchUth1jrPyM2Y/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1Ze5SC1g6Q5VzMAKYx0zmqlT00Db1HOchUth1jrPyM2Y/edit?usp=sharing)
        [https://docs.google.com/spreadsheets/d/1XHNwAXR4USThaAzX1Y6M5PF2P8WqCBU8mi34FBLkV6M/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1XHNwAXR4USThaAzX1Y6M5PF2P8WqCBU8mi34FBLkV6M/edit?usp=sharing)
  * **Predefined Instagram Personality JSON**:
      * The workflow relies on a detailed JSON object defining an "Instagram personality" (e.g., `user_id`, `username`, `full_name`, `bio`, `content_preferences`, `personality_traits`, `unfulancer_attributes`). This JSON needs to be correctly set within the **Code** nodes (`Variables`, `Variables1`, `Variables2`) to guide the AI content generation.

-----

## Workflow Architecture

```
[Telegram New Message Trigger]
    ⬇️
[Variables (Set OpenRouter API Key, Instagram Personality, Session ID)]
    ⬇️
[Switch (Filter messages from 'Wolf23000' and ensure message text exists)]
    ⬇️
[Edit Fields (Extract message text)]
    ⬇️
[AI Agent (Determine action based on message intent)]
    ⬇️
[Structured Output Parser (Parse AI agent's JSON output)]
    ⬇️
[Switch1 (Route based on AI agent's determined action: chat_back, run_agent, get_instagram_profile)]
    ⬇️
    ┌─────────────┬─────────────┬─────────────┐
    │             │             │             │
    ▼             ▼             ▼             ▼
[Send a text message1 (Chat back)] [Send a text message (Run agent confirmation)] [Send a text message2 (Get profile confirmation)]
    ▲
    │
[Schedule Trigger (Hourly for Instagram follow)]
    ⬇️
[Variables (Set OpenRouter API Key, Instagram Personality, Session ID)]
    ⬇️
[Code (Prepare usernames for following)]
    ⬇️
[Code1 (Process followed usernames)]
    ⬇️
[Schedule Trigger2 (Monthly for Instagram post generation)]
    ⬇️
[AI Agent1 (Generate monthly Instagram post ideas)]
    ⬇️
[OpenRouter Chat Model (AI Model for content generation)]
    ⬇️
[Code2 (Parse AI agent's JSON output)]
    ⬇️
[Schedule Trigger3 (Daily for post generation refinement and auto-posting)]
    ⬇️
[AI Agent2 (Enhance image prompts and captions)]
    ⬇️
[OpenRouter Chat Model2 (AI Model for prompt refinement)]
    ⬇️
[Update row in sheet1 (Update Google Sheet with enhanced content)]
    ⬇️
[Get row(s) in sheet2 (Retrieve data from Google Sheet)]
```


-----

## Connect With Me

Exploring AI-Powered Social Media Automation?
📧 **Email**: mohamedgb00714@gmail.com
💼 **LinkedIn**: [Mohamed el Hadi Msaid](https://www.linkedin.com/in/mohamed-el-hadi-m-said-1a9a5095/)

**Supercharge your Instagram presence with intelligent automation and AI-driven content\!** 🚀

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
