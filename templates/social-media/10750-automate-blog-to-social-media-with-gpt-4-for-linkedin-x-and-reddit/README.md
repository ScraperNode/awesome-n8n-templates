# 📱 Automate blog-to-social media with GPT-4 for LinkedIn, X, and Reddit

> ⚡ **490 views** · 📱 [Social Media & Email Marketing](../)

## Description

Turn your blog into a set-and-forget content engine: every new article is instantly repurposed into channel-specific social posts with visuals, keeping your brand visible on LinkedIn, X, and Reddit without extra copywriting time. Perfect for lean marketing teams who want consistent, always-on distribution from a single source of content.

# How it works
• Watches your blog RSS feed (or receives a single URL) and detects new articles.
• Saves each post in Postgres so every article is only processed once.
• Fetches the article HTML, extracts the main body content and sends it to OpenAI (GPT-4.1).
• OpenAI creates platform-optimized copy: 1 LinkedIn post, 1 X/Twitter post, 1 Reddit post + image prompts.
• Generates on-brand images with OpenAI and publishes everything automatically to LinkedIn, X, and Reddit.
• You can also trigger it manually or via webhook whenever you want to push a specific campaign.

![image1.png](fileId:3287)
![image2.png](fileId:3288)


# Setup Steps
• Time: around 20–40 minutes for someone familiar with n8n and the platforms.
• Create a Postgres table “rss_items” with fields: guid (PRIMARY KEY), title, link, published_at.
• Add credentials in n8n for:
  – Postgres
  – OpenAI
  – LinkedIn OAuth2
  – X/Twitter OAuth2 + OAuth1 (for media upload)
  – Reddit OAuth2
• In the RSS node, set your blog feed URL (for example: https://yourblog.com/feed).
• In the webhook node, confirm the URL/path you want external tools or other workflows to call with a “link” field.
• Run the manual trigger with one test blog URL to verify:
  – Article content is extracted correctly.
  – AI returns LinkedIn/X/Reddit posts and image prompts.
  – Posts and images appear correctly on all social accounts.
• Once tests look good, enable the Schedule Trigger so Blog2Social AI runs automatically at your chosen interval.

## 🔗 Nodes Used

HTTP Request, Postgres, RSS Read, Webhook, X (Formerly Twitter), LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
