# ⚡ 🎵 Sync YouTube and Spotify music playlists

> ⚡ **2,761 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Workflow Overview

This workflow automates the process of updating a Spotify playlist with tracks from a YouTube playlist, ensuring no duplicates are added.

## Key Components

1. **Manual Trigger**: Starts the workflow when you click ‘Test workflow’.
   
2. **Spotify Integration**: Retrieves tracks from a specified Spotify playlist.

3. **YouTube Integration**: Fetches tracks from a designated YouTube playlist.

4. **Batch Processing**: Processes tracks in batches to handle multiple items efficiently.

5. **Track Search**: Searches for YouTube tracks on Spotify to find corresponding IDs.

6. **Comparison**: Compares existing Spotify tracks with YouTube tracks to identify which ones to add.

7. **Track Addition**: Adds new Spotify tracks to the playlist that are not already included.

If you have any questions or need clarification, feel free to ask!

## 🔗 Nodes Used

Spotify, YouTube

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
