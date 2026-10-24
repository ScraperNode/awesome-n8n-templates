# 🎬 Create AI LinkedIn posts with Groq, Tavily, Pollinations, Brevo and Telegram

> ⚡ **40 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What This Workflow Does

This workflow automatically creates AI-powered LinkedIn posts on any topic — complete with a matching AI-generated image — and delivers everything via Email and Telegram. Every post is also logged to a Notion database for your records.

## How It Works

- User submits a topic via an n8n Form
- Groq (LLaMA 3.3 70B) + Tavily researches the topic in real time
- A second Groq agent writes a professional LinkedIn post
- A third Groq agent generates an image prompt based on the post
- Pollinations AI generates a free image from that prompt
- Brevo HTTP API sends an email with the post text + image link
- Telegram bot sends the AI image + post text directly to your phone
- Notion automatically logs every post with timestamp

## Set Up Steps

1. Create a free Groq API account at console.groq.com — get your API key
2. Create a free Tavily account at tavily.com — get your API key  
3. Create a free Brevo account at brevo.com — get your API key
4. Create a Telegram bot via @BotFather — get bot token + your chat ID
5. Create a Notion integration and a database with Title, Content, Image URL, and Date fields
6. Add all credentials in n8n and activate the workflow
7. Open the Form URL and test with any LinkedIn topic

## Tools Used

- **Groq API** (LLaMA 3.3 70B) — AI content generation (free tier)
- **Tavily** — Real-time web research (free tier)
- **Pollinations AI** — Free AI image generation (no API key needed)
- **Brevo** — Email delivery via HTTP API (free tier)
- **Telegram** — Instant mobile delivery (free)
- **Notion** — Auto-logging database (free tier)

## Notes

- All tools used are on free tier — zero cost to run
- Deployed 24/7 on Railway free tier
- Pollinations images may not render inline in Gmail — delivered via Telegram instead
- Keep your API keys in n8n credentials, never hardcoded

## 🔗 Nodes Used

Send Email, HTTP Request, Telegram, Notion, AI Agent, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
