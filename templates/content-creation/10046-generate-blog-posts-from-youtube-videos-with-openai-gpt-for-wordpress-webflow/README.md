# 🎬 Generate blog posts from YouTube videos with OpenAI GPT for WordPress & Webflow

> ⚡ **1,113 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# Description

**Who's it for:** Content creators, marketers, and businesses who publish on both YouTube and blog platforms.

**What it does:** Monitors your YouTube channel for new videos and automatically creates SEO-optimized blog posts using AI, then publishes to WordPress or Webflow.

**How it works:**
1. RSS Feed Trigger polls YouTube videos (every X amount of time)
2. Extracts video metadata (title, description, thumbnail)
3. YouTube node extracts full description for extra context
4. Uses OpenAI (you can choose any model) to generate 600-800 word blog post
5. Publishes to WordPress AND/OR Webflow with error handling
6. Sends notifications to Telegram if publishing fails

**Requirements:**
- YouTube channel ID (avoid tutorial channels for better results)
- OpenAI API key (or similar)
- WordPress OR Webflow credentials
- Telegram bot (optional, for error notifications)

**Setup steps:**
1. Replace `YOUR_CHANNEL_ID` in RSS Feed Trigger
2. Add OpenAI credentials in AI generation node
3. Configure WordPress and/or Webflow credentials
4. Add Telegram bot for error notifications (optional). If you choose to set up   Telegram, you need to input your channel ID.
5. Test with manual execution first

**Customization:**
- Modify AI prompt for different content styles
- Adjust polling frequency (30-60 minutes recommended)
- Add more CMS platforms
- Add content verification (is content larger than 600 characters? if not, improve)

## 🔗 Nodes Used

RSS Read, Telegram, Wordpress, YouTube, Webflow, Markdown

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
