# 🎬 Monitor YouTube channels and publish VideoDB AI summaries to Notion

> ⚡ **5 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Screenshot 20260223 at 5.01.02 PM.png](fileId:4511)

This n8n template demonstrates how to monitor YouTube channels and create AI-generated summaries in Notion.
It helps you build a searchable video knowledge base without watching every new upload manually.

## Who’s it for

* Research teams tracking industry content
* PR professionals monitoring brand mentions, product reviews, and industry news for daily press briefings
* Content teams building internal learning libraries

## Good to know

* The workflow uses RSS, so it triggers when new feed items appear.
* Long videos may take more time to process and summarize.
* Make sure your VideoDB account has enough balance before running this workflow. Track usage rates at console.videodb.io/dashboard/usage.

## How it works

* An RSS trigger watches a YouTube channel feed.
* New video links are sent to VideoDB for upload and transcription.
* VideoDB summarizes the transcript into key points.
* n8n creates a Notion database entry with title, link, and summary.
* Your Notion workspace becomes a continuously updated content archive.

## How to use

* Add credentials for VideoDB and Notion.
* Set your target YouTube RSS URL in the trigger node.
* Configure the Notion database ID and field mapping.
* Test with a sample feed item, then activate the workflow.

## Requirements

* VideoDB API key (Get one here)
* Notion workspace with API access
* YouTube channel RSS feed URL ( You can checkout websites such as https://tubepilot.ai/tools/youtube-rss-feed-generator/ for getting the RSS Feed for any YT Channel )
* n8n instance (cloud or self-hosted)

## Customising this workflow

* Track multiple channels by adding more RSS triggers.
* Change the AI prompt for shorter or more detailed summaries.
* Add topic tags or sentiment fields in Notion.
* Send Slack updates when a new summary is created.

### Disclaimer:
This workflow uses VideoDB's Verified Community Node and will only work on self-hosted n8n instances.

## 🔗 Nodes Used

HTTP Request, Notion, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
