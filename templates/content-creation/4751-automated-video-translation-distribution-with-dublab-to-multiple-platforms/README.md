# 🎬 Automated video translation & distribution with DubLab to multiple platforms

> ⚡ **1,974 views** · 🎬 [Content Creation & Video](../)

## Description

**Automated** n8n workflow: Receives videos via form, dubs/translates them to the selected languages, and—upon completion—uploads them to multiple social media channels and cloud drives, including Box, Dropbox, and YouTube, Telegram, Postiz (Facebook, Instagram, Tiktok, Reddit etc.)

### Workflows
----------
 1. Via n8n form select files to dub for desired languages.
 2. Listen webhook and whenever dubbing finishes upload to desired platforms

### Used Stacks
-------------
 - DubLab App (ApiKey, Webhook Setup Required)
#### Optional (Upload)
 - Telegram (Token Required)
 - Box (Oauth2 Required)
 - Dropbox (Oauth2 Required)
 - Youtube (Oauth2 Required)
 - Postiz (ApiKey Required)

## 🔗 Nodes Used

Dropbox, HTTP Request, Webhook, Telegram, Box, YouTube

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
