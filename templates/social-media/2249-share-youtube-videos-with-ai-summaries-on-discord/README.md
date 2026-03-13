# 📱 Share YouTube videos with AI summaries on Discord

> ⚡ **10,200 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Boost engagement on your Discord server by automatically sharing new YouTube videos along with AI generated summaries of their content. This workflow is ideal for content creators and community managers looking to provide value and spark interest through summarized content, making it easier for community members to decide if a video is of interest to them. [Watch this video tutorial](https://mrc.fm/ai2d) to learn more about the template.

## How it works

- **RSS Feed Trigger**: Monitors your YouTube channel for new uploads using the RSS feed.
- **Video Captions Retrieval**: Fetches video captions using the YouTube API to get detailed content data.
- **AI Summary Generation**: Uses an AI model to generate concise summaries from the video captions, highlighting key points.
- **Discord Notification**: Posts video announcements along with their AI generated summaries to a specified Discord channel using a webhook.

## Set up steps

1. **Configure YouTube RSS Feed**: Set up the RSS feed node to detect new video uploads. Add your [YouTube channel ID](https://www.youtube.com/account_advanced) to the URL in the first node: `https://www.youtube.com/feeds/videos.xml?channel_id=YOUR_CHANNEL_ID`.
2. **Connect OpenAI Account**: To enable AI summary generation, connect your OpenAI account in n8n.
3. **Set Up Discord Webhook**: Create a webhook in your Discord server and configure it in the Discord node.
4. **Design the Message**: Format the Discord message as you like to include the video title, link, and the AI generated summary.

## Example

![discordpost.png](fileId:791)

This template empowers you to maintain a highly engaging Discord community, ensuring members receive not only regular updates but also valuable insights into each video's content without needing to watch immediately.

## 🔗 Nodes Used

HTTP Request, Discord, RSS Feed Trigger, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
