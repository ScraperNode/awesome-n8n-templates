# 🎬 Create validated social content for Instagram, TikTok, Shorts and Threads with Telegram and OpenAI

> ⚡ **144 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns a Telegram bot into a multi-platform content assistant by generating Instagram, TikTok, YouTube Shorts, and Threads copy with OpenAI, validating it against strict platform rules, and sending the final content pack (or a failure report) back to the same Telegram chat.

## How it works
1. Triggers when a Telegram user sends a message to your bot and extracts the topic text and chat ID.
2. Validates the input (non-command text with at least 10 characters) and sends a Telegram usage message if the topic is invalid.
3. Uses OpenAI to generate platform-specific captions/titles/descriptions based on the topic and predefined tone, audience, language, brand voice, CTA, emoji, and hashtag settings.
4. Parses the OpenAI response into structured fields for Instagram, TikTok, YouTube Shorts (title and description), and Threads.
5. Scores the content against quality rules (required fields, character limits, emoji/hashtag settings, and cross-platform duplication) and, if needed, asks OpenAI to regenerate content using the detected issues (up to two retries).
6. Enforces strict final validation of character and hashtag limits and builds a structured report for either the successful content pack or the failed-after-retries outcome.
7. Formats the report into a readable Telegram message and sends it back to the originating Telegram chat.

## Setup
1. Create a Telegram bot with BotFather, add your Telegram credentials in the Telegram trigger and both Telegram send steps, and activate the workflow to register the bot webhook.
2. Add an OpenAI credential for the two OpenAI generation steps and confirm the selected model is available in your OpenAI account.
3. Customize the default content settings (tone, target audience, language, brand voice, call to action, emojis, hashtags) to match your needs before enabling the workflow.

## Requirements
- Telegram bot created with BotFather
- Telegram API credentials configured in n8n
- OpenAI API credential with access to the selected model

## Customization
- Customize tone, target audience, language, brand voice, and call to action in Set Content Preferences.
- Enable or disable emojis and hashtags.
- Adjust platform character limits, hashtag rules, quality scoring, and retry limits in the Code and IF nodes.
- Edit the Telegram help message and final content-pack formatting to match your brand.

## Additional info
This workflow does not automatically publish content to social media platforms. It creates a validated content pack for Instagram, TikTok, YouTube Shorts, and Threads and sends the final result back to the originating Telegram chat.

Invalid Telegram inputs such as /start or very short messages are handled without calling OpenAI. If generated content fails quality checks, the workflow can automatically regenerate it before returning the final result.

Credentials are not included in the template. Users must connect their own Telegram and OpenAI accounts after importing the workflow.

## 🔗 Nodes Used

Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
