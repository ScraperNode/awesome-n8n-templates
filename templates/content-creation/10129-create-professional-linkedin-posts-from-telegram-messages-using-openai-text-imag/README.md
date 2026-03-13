# 🎬 Create professional LinkedIn posts from Telegram messages using OpenAI text & image

> ⚡ **1,418 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Create LinkedIn Post from Telegram Voice or Text Message with AI Image

## Who's it for

This workflow is perfect for busy professionals, content creators, and marketers who want to publish polished LinkedIn posts without spending time on formatting or design. Send a quick text or voice message via Telegram, and get a fully formatted LinkedIn post with a relevant AI-generated image, post it immediately on LinkedIn.

**Example use cases:**
- Entrepreneurs sharing business insights on the go without opening LinkedIn
- Marketers creating consistent content during commutes or between meetings
- Thought leaders turning quick voice notes into professional posts with visuals

## How it works / What it does

- Receive text or voice messages through a Telegram bot.
- Transcribe voice messages using OpenAI's audio transcription.
- Transform raw input into a professional LinkedIn post using AI formatting (proper structure, tone, and character limits).
- Generate a relevant image prompt based on post content.
- Create an AI image that matches the post topic.
- Automatically publish the complete post (text + image) to LinkedIn.

## How to set up

1. Create a Telegram bot via @BotFather and obtain your API token.
2. **For self-hosted n8n users:** Create a LinkedIn app at [developer.linkedin.com](https://developer.linkedin.com) to get OAuth credentials (Client ID and Client Secret).
3. Add the OpenAI API key, LinkedIn OAuth credentials, and Telegram API to n8n.
4. Assign your credentials to the Telegram, OpenAI, and LinkedIn nodes.
5. Deploy and activate the workflow.
6. Send a text or voice message to your Telegram bot and watch it create and post to LinkedIn!

## Requirements

- Telegram Bot Token
- OpenAI API Key
- LinkedIn OAuth credentials
- n8n instance (cloud or self-hosted)

## How to customize the workflow

- Modify the LinkedIn Post Text prompt to match your personal writing style or brand voice.
- Adjust image generation settings (model, size, style) in the Create Image node.
- Add approval steps by routing posts to Google Sheets, Airtable, or Notion before publishing.
- Create a second workflow to schedule approved posts for specific times.

## Limitations and Usage Tips

- **Input Clarity**: Voice messages should be clear and well-articulated for accurate transcription.
- **LinkedIn Character Limits**: The AI formatter optimizes posts for 1,242-2,500 characters.
- **API Costs**: Each post generation uses OpenAI API calls for transcription (if voice), text formatting, image prompt creation, and image generation. Monitor your usage to manage costs.
- **LinkedIn Rate Limits**: LinkedIn API has posting frequency limits. Avoid bulk posting in short time periods to prevent rate limiting.

## 🔗 Nodes Used

Telegram, Telegram Trigger, LinkedIn, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
