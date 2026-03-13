# 📱 Auto-generate social media posts from URLs with AI, Telegram & multi-platform posting

> ⚡ **1,517 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## How it works

This workflow turns any URL sent to a Telegram bot into ready-to-publish social posts:
	1.	Trigger: Telegram message (checks if it contains a URL).
	2.	Fetch & parse: Downloads the page and extracts readable text + title.
	3.	AI writing: Generates platform-specific copy (Facebook, Instagram, LinkedIn).
	4.	Image: Creates an AI image and stores it in Supabase Storage.
	5.	Publish: Posts to Facebook Pages, Instagram Business, LinkedIn.
	6.	Logging: Updates Google Sheets with post URLs and sends a Telegram confirmation (image + links).

## Setup
	1.	Telegram – create a bot, connect via n8n Telegram credentials.
	2.	OpenAI / Gemini – add API key in n8n Credentials and select it in the AI nodes.
	3.	Facebook/Instagram (Graph API) – create a credential called facebookGraph with:
	•	accessToken (page-scoped or system user)
	•	pageId (for Facebook Page photos)
	•	igUserId (Instagram Business account ID)
	•	optional fbApiVersion (default v19.0)
	4.	LinkedIn – connect with OAuth2 in the LinkedIn node (leave as credential).
	5.	Supabase – credential supabase with url and apiKey. Ensure a bucket exists (default used in the Set node is social-media).
	6.	Google Sheets – replace YOUR_GOOGLE_SHEET_ID and Sheet1. Grant your n8n Google OAuth2 access.

## Notes
	•	No API keys are stored in the template. Everything runs via n8n Credentials.
	•	You can change bucket name, image size/quality, and AI prompts in the respective nodes.
	•	The confirmation message on Telegram includes direct permalinks to the published posts.

## Required credentials
	•	Telegram Bot
	•	OpenAI (or Gemini)
	•	Facebook/Instagram Graph
	•	LinkedIn OAuth2
	•	Supabase (url + apiKey)
	•	Google Sheets OAuth2

## Inputs
	•	A Telegram message that contains a URL.

## Outputs
	•	Social posts published on Facebook, Instagram, LinkedIn.
	•	Row appended/updated in Google Sheets with post URLs and image link.
	•	Telegram confirmation with the generated image + post links.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Telegram, Telegram Trigger, LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
