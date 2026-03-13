# 📊 Collect viral Instagram AI art with GPT-4 analysis and Telegram delivery

> ⚡ **60 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?

This template is perfect for:
- **AI art enthusiasts** who want to stay updated on trending AI-generated artwork
- **Content curators** looking to automate art discovery
- **Japanese-speaking users** who want translated captions
- **Social media managers** tracking AI art trends across platforms

## What this workflow does

This workflow automatically collects viral AI art posts from Instagram and delivers them to your Telegram with Japanese translations. It runs daily and filters only high-engagement posts to ensure quality content.

**Key Features:**
- 📸 Collects from 4 AI art hashtags (#AIart, #midjourney, #stablediffusion, #aiartwork)
- 🔥 Filters viral posts only (100+ likes threshold)
- 🇯🇵 Auto-translates captions to Japanese via DeepL
- ⚠️ Sends error alerts to Telegram if something goes wrong
- ⏱️ Built-in rate limiting to avoid API blocks

## How it works

1. **Schedule Trigger** - Runs daily at 18:00
2. **Instagram Scraping** - Apify collects posts from multiple AI art hashtags
3. **Viral Filter** - Only posts with 100+ likes and valid captions pass through
4. **Translation** - DeepL translates captions from English to Japanese
5. **Image Download** - Fetches the post image
6. **Telegram Delivery** - Sends photo with translated caption, likes count, and source link
7. **Rate Limiting** - 3-second delay between posts to avoid API limits

## Setup Requirements

- **Apify account** - Sign up at [apify.com](https://apify.com) for Instagram scraping
- **DeepL API key** - Get free API access at [deepl.com/pro-api](https://www.deepl.com/pro-api)
- **Telegram Bot** - Create via [@BotFather](https://t.me/botfather) and get your Chat ID

## How to set up

1. Import this workflow into n8n
2. Set up credentials:
   - Connect your Apify account
   - Add your DeepL API key
   - Configure Telegram Bot token
3. Replace `YOUR_TELEGRAM_CHAT_ID` with your actual Chat ID in both Telegram nodes
4. (Optional) Adjust the viral threshold in the Filter node
5. (Optional) Modify hashtags in the Apify node
6. Activate the workflow

## How to customize

- **Change hashtags:** Edit the `directUrls` array in the Apify node
- **Adjust viral threshold:** Change the `100` value in the Filter node
- **Change schedule:** Modify the trigger time in the Schedule Trigger node
- **Change language:** Update the `translateTo` parameter in the DeepL node
- **Modify caption format:** Edit the caption template in the Telegram node
```

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, DeepL, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
