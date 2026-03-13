# 📱 Generate platform-optimized social media content across 6 platforms with GPT-4o

> ⚡ **2,136 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

Who’s it for
This workflow is ideal for marketers, content creators, agencies, and small businesses that want to streamline the process of creating and publishing platform-optimized posts across multiple social media channels.

How it works / What it does
From a single user prompt, the workflow uses a custom system prompt and schema to generate tailored social media content for LinkedIn, Instagram, Facebook, Twitter (X), Threads, and YouTube Shorts. It creates platform-specific captions, hashtags, calls to action, and even AI-generated image suggestions, then routes the content to the correct publishing channel.

How to set up
Connect your social media platform credentials in n8n.

Add your Google Docs links for the system prompt and content schema.

Configure the IMGBB_API_KEY and any other required API credentials.

Optionally connect Gmail and Telegram for approval workflows and notifications.

Requirements
n8n instance (self-hosted or cloud)

API credentials for desired platforms

Google Docs and Google Drive accounts

How to customize the workflow
Edit the system prompt and schema in Google Docs to adjust tone, style, and content format for each platform. Modify routing logic or add new platform integrations as needed.

## 🔗 Nodes Used

HTTP Request, Telegram, Google Drive, Facebook Graph API, X (Formerly Twitter), Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
