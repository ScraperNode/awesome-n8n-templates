# 📊 Auto-track YouTube stats & channel data in Notion database

> ⚡ **320 views** · 📊 [Market Research & Insights](../)

## Description

## **Who it's for**
YouTube creators, content marketers, and anyone who wants to automatically enrich YouTube links added to a Notion database.

## **What it does**
Automatically extracts important video and channel data — including title, views, likes, comments, thumbnail, channel name, subscribers, and a custom viral score — whenever a new YouTube URL is added to Notion.

## **How it works**
1. A Notion Trigger fires when a new page is added to your database.  
2. The workflow extracts the YouTube video ID from the provided URL.  
3. A YouTube API request retrieves video details (title, views, likes, comments, thumbnail).  
4. A second YouTube API request retrieves channel information (name and subscriber count).  
5. Both sets of data are cleaned and formatted.  
6. The enriched data is written back to the same Notion page.

## **Requirements**
- YouTube Data API (OAuth2 recommended)  
- Notion integration connected to your workspace  
- This Notion template (includes all required fields):  
  https://lunar-curler-d17.notion.site/2a71d9a77486807a9006d048aa512d16?v=2a71d9a7748680eda620000ca9c112a4

## **Setup steps**
1. Duplicate the Notion template linked above.  
2. Connect your Notion credentials in n8n.  
3. Create and connect a YouTube OAuth2 credential.  
4. Assign your credential to the YouTube API nodes.  
5. Test once with a manual execution.

## 🔗 Nodes Used

YouTube, Notion, Notion Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
