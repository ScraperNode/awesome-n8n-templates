# 📱 Auto-generate & post social media content with GPT-4, Notion & Instagram API

> ⚡ **1,870 views** · 📱 [Social Media & Email Marketing](../)

## Description

**How It Works**

This workflow automates social media content creation and posting. It starts by receiving raw text input through a Webhook (for example, from LINE Bot) and saves the content into a Notion database for centralized storage. Next, GPT-4 generates platform-specific captions for Instagram, Threads, X/Twitter, and Blog. Instagram captions are prepared for automatic publishing, while Threads, X, and Blog drafts are stored in Notion for later review and manual posting.

The workflow then fetches book cover images or other visuals from external APIs such as Google Books, OpenBD, or OpenLibrary. The chosen image is uploaded to Cloudinary to generate a secure, optimized URL. Finally, the Instagram Graph API is used to create a media container and publish the post automatically with the caption and image. This way, the workflow provides both automation for Instagram and reusable drafts for other platforms.

**Requirements**

- Notion account with a database configured for text and captions
- Cloudinary account for image hosting
- Instagram Business account connected to the Meta Developer Platform
- GPT-4 (via OpenAI or LangChain node in n8n)

**Setup Instructions**

1. Configure the Webhook node to capture text input.
2. Update the Notion database ID and property keys to match your schema.
3. Add Cloudinary credentials (【cloud_name】, 【upload_preset】) in the HTTP Request node.
4. Set 【IG_ACCESS_TOKEN】 as an environment variable.
5. Activate the workflow and test with a sample input.

**Customization**

- Adjust caption prompts for style, hashtags, or character limits.
- Add additional GPT nodes for more platforms.
- Replace or extend image sources as needed.
- Integrate a scheduler (Cron node) to post at specific times.

## 🔗 Nodes Used

HTTP Request, Webhook, Notion, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
