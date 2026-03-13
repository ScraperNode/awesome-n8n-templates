# 📱 WhatsApp-to-social-media content generation with GPT-4 & approval workflow

> ⚡ **1,597 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

Send one WhatsApp message → Get AI-optimized content across 7+ social platforms.

## Who It's For
Solopreneur managing multiple platforms on the go (X/Twitter, Instagram, LinkedIn, Facebook, TikTok, Threads, YouTube Shorts).

## What It Solves
Eliminates 80% of manual content creation work while maintaining brand consistency across all channels.

## How It Works

**AI Content Generation**
- GPT-4/Gemini creates platform-specific posts with hashtags, CTAs, and emojis
- Auto-generates images via OpenAI/Pollinations.ai
- SERP API finds relevant trending content

**Approval Workflow**
- HTML email previews for human review
- Double-approval system via Gmail integration

**One-Click Publishing**
- Instagram/Facebook (Graph API)
- X/Twitter (Official API) 
- LinkedIn (Sales Navigator)

## Setup Requirements
- API keys: OpenAI, Gemini, social platform tokens, ImgBB, SERP API
- Gmail and Telegram for notifications
- Replace "your-unique-id" placeholders in API nodes

## Customization
- **Content**: Edit AI prompts for brand voice
- **Approval**: Modify email templates and thresholds
- **Analytics**: Connect Google Sheets for tracking
- **Images**: Switch between AI image generators

## 🔗 Nodes Used

HTTP Request, Facebook Graph API, X (Formerly Twitter), Gmail, LinkedIn, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
