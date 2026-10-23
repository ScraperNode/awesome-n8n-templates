# 🎬 Create and publish AI carousel posts from Telegram to Instagram, Facebook and TikTok with OpenAI, APITemplate.io and Blotato

> ⚡ **579 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

Content creators, social media managers, and solopreneurs who want to automate carousel post creation and multi-platform publishing from a single Telegram message.

## What this workflow does

This workflow turns a Telegram message or voice note into a fully designed carousel post published simultaneously to Instagram, Facebook, and TikTok. An AI agent drafts quotes and captions, you approve via chat, and the rest happens automatically -- image generation, publishing, and status tracking.

## How it works

1. **Telegram input** -- Send a topic or idea to the Telegram bot as a text message or voice note.
2. **Voice transcription** -- If a voice note is detected, OpenAI Whisper transcribes it to text.
3. **AI drafting** -- An AI Agent (OpenAI GPT with conversation memory and structured output) generates a short script, 5 carousel quotes, and a social media caption with hashtags.
4. **Review loop** -- The draft is sent back to Telegram. You can request changes -- the agent refines until you approve.
5. **Data logging** -- Approved quotes and the caption are saved to a Google Sheets spreadsheet for reference.
6. **Image generation** -- Each of the 5 quotes is rendered as a styled carousel slide using your APITemplate.io template.
7. **Multi-platform publishing** -- The carousel is posted to Instagram, Facebook (with page selection), and TikTok via Blotato.
8. **Status monitoring** -- Each platform's publish status is polled in a retry loop. You receive a Telegram confirmation on success or an error notification if something fails.

## Setup steps

1. **Telegram Bot** -- Create a bot via [@BotFather](https://t.me/BotFather) and add the API token as a Telegram credential in n8n.
2. **OpenAI** -- Add your API key as an OpenAI credential. Used for both the AI Agent and Whisper transcription.
3. **Google Sheets** -- Create an OAuth2 credential. Set up a spreadsheet with columns: `run_id`, `quote1`–`quote5`, `social_media_text`. Update the Sheet ID and tab in the Google Sheets node.
4. **APITemplate.io** -- Create an account and design a carousel slide template. Set the template ID in the five image generation nodes.
5. **Blotato** -- Connect your Instagram, Facebook, and TikTok accounts in Blotato. Add the Blotato API credential in n8n. Update the account and page IDs in the three publishing nodes.

## Requirements

- **Community node:** [`@blotato/n8n-nodes-blotato`](https://www.npmjs.com/package/@blotato/n8n-nodes-blotato) -- **self-hosted n8n only**
- OpenAI API key
- Google Sheets OAuth2 credentials
- APITemplate.io account and template
- Blotato account with connected social media profiles
- Telegram Bot token

## How to customize

- **AI prompt** -- Edit the system message in the "AI: Draft & Revise Post" node to change tone, quote count, or output structure.
- **Carousel design** -- Modify or replace the APITemplate.io template ID to use your own visual design.
- **Platforms** -- Remove or add publishing nodes if you only need some platforms (e.g., Instagram only).
- **Approval flow** -- Adjust the approval keywords in the AI prompt (currently: "approved", "ok", "looks good", "ship it").
- **Retry timing** -- Change the wait durations in the status-check loops to match your preferred polling interval.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, APITemplate.io, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
