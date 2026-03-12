# ⚡ Fetch a YouTube playlist and send new items Raindrop

> ⚡ **3,827 views** · ⚡ [Personal Productivity](../)

## Description

This simple workflow will fetch a YouTube playlist every n minutes and send the new items s to a collection in Raindrop.

![workflow-screenshot](fileId:532)

You can connect any application at the end of the flow.

Make sure to authenticate to YouTube using Google Auth, and to Raindrop using an API.

Update the Playlist ID and the Raindrop collection.

## 🔗 Nodes Used

Cron, Function, Function Item, Start, YouTube, Raindrop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
