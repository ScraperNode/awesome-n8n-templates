# 📱 Promote YouTube uploads to social channels with DeepSeek and Posta

> ⚡ **133 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow fetches the latest video from a YouTube channel feed, generates platform-specific promo captions with DeepSeek, and creates draft promotion posts in Posta for active social media accounts. You can automatically promote your videos to all your social media.  Add a "publish" at the end for auto-post.

## How it works
1. Runs manually when you click “Execute workflow”.
2. Fetches your YouTube channel RSS feed over HTTP, parses the XML, and extracts the latest video’s title, description, thumbnail URL, and link.
3. Downloads the video thumbnail and uploads it to Posta to create a reusable media asset.
4. Retrieves your social accounts from Posta, keeps only active accounts, and de-duplicates them to one account per platform.
5. Combines the latest video data with each target platform and asks DeepSeek (via an n8n LangChain LLM chain) to write a tailored promotional caption per platform.
6. Tags each generated caption with its platform and merges it back to the matching Posta social account.
7. Creates a draft Posta post per selected account, attaching the uploaded thumbnail and the platform-specific caption and video link.
8. (Optional) Add a "publish a post" at the end to automatically post to the social media channels (If you are feeling brave and trust the LLM),

## Setup
1. Add a Posta API credential and select it in the Posta nodes that list accounts, upload media, and create posts.
2. Add a DeepSeek API credential and select it in the DeepSeek Chat Model node.
3. Update the YouTube channel feed URL (channel_id) in the HTTP request that downloads the YouTube feed.
4. Review your Posta social accounts to ensure the intended accounts are marked active and have the correct platform values for de-duplication.

## Additional info
Video explanation: https://youtu.be/tTWaYb71YyA

## 🔗 Nodes Used

HTTP Request, Filter, Basic LLM Chain, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
