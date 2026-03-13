# 📱 Monitor YouTube channels and send daily updates to Discord via RSS (no API key)

> ⚡ **263 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Automatically track your favorite YouTube creators and get a daily summary of new videos delivered to Discord.

Unlike complex YouTube API integrations, this workflow uses efficient RSS feeds, meaning **you don't need a Google Cloud API Key** or worry about quota limits.

## How it works
The workflow is scheduled to run daily (default 8:30 AM) to:
1. **Define Channels:** It takes a list of "Channel IDs" you want to monitor.
2. **Fetch RSS:** It retrieves the latest video feed for each channel.
3. **Filter:** It applies a strict date filter to pass only videos published in the last 24 hours.
4. **Notify:** Sends a notification to your Discord server with the Video Title, Date, and Link.

## Setup steps
### 1. Add your Channels
1. Open the node named **"Define Channel IDs"**.
2. Replace the example IDs with the Channel IDs you want to track.
   * *Note: The template comes pre-loaded with some Spanish AI channels as a demo. Feel free to remove them!*
   * *Tip: If you don't know a Creator's Channel ID (e.g. UC...), use a free online "YouTube Channel ID Finder".*

### 2. Connect Discord
1. Create a Webhook in your Discord Server (Server Settings &gt; Integrations &gt; Webhooks).
2. Open the **"Discord Notification"** node.
3. Create a new credential and paste your Webhook URL.

*Note: This template is a lightweight alternative to database-backed trackers. It relies on the daily trigger frequency to avoid duplicates.*

## 🔗 Nodes Used

RSS Read, Discord, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
