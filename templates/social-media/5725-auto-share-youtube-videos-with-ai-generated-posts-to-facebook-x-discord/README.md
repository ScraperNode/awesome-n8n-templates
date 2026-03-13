# 📱 Auto-share YouTube videos with AI-generated posts to Facebook, X & Discord

> ⚡ **1,378 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## Auto-Share YouTube Videos with AI-Generated Posts to Facebook, X and Notify in Discord

This n8n template demonstrates how to use a LLM like DeepSeek to generate a post and share to Facebook page and X automatically whenever a new video is published to a YouTube channel.

### How it works
* We first define RSS with a polling schedule to pull YouTube videos from a specified channel
* Prompt AI agent to generate a post with proper url and hash tags based on the video metadata
* Then automatically create a new post in Facebook and X via their APIs
* Post a new message in Discord channel via Webhook

### How to use
* Simply setup a RSS polling trigger to automatically trigger the workflow

### Requirements
* Facebook API setup, see [step by step tutorials](https://developers.facebook.com/ads/blog/post/v2/2018/11/01/marketing-api-setup-101/#:~:text=Step%201:%20Create%20a%20Facebook,7:%20Generate%20an%20access%20token.)
* X v2 API setup, see [step by step tutorials](https://developer.x.com/en/docs/tutorials/step-by-step-guide-to-making-your-first-request-to-the-twitter-api-v2)
* Discord channel webhook, see [step by step tutorials](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)


### Need Help?
Contact me via [My Blog](https://fans-ai-lab.com/contact) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

## 🔗 Nodes Used

HTTP Request, Discord, X (Formerly Twitter), AI Agent, RSS Feed Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
