# ⚡ Spotify to YouTube playlist synchronization

> ⚡ **3,462 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Spotify to YouTube Playlist Synchronization
## A workflow that maintains a YouTube playlist in sync with a Spotify playlist, featuring smart video matching and persistent synchronization.

## Key Features
- **One-way Sync**: Spotify playlist → YouTube playlist (additions and deletions)
- **Continuous Monitoring**: Automatic synchronization (every hour by default, but you can put any time you want)
- **Smart Video Matching**: Considers video length and content relevance
- **Auto-Recovery**: Automatically handles deleted YouTube videos
- **Database Backup**: Persistent storage using Supabase

## Prerequisites

1. Supabase project with the following table structure:
```sql
CREATE TABLE IF NOT EXISTS musics (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    duration INT8 NOT NULL,
    youtube_video_id TEXT,
    to_delete BOOLEAN DEFAULT FALSE
);
```
2. Empty YouTube playlist (recommended as duplicates are not handled)
3. Configured credentials for YouTube, Spotify, and Supabase APIs
4. Properly set variables in all "variables" nodes (variables, variables1, variables2, variables3, variables4 (all the same))
5. Activate the workflow !

## 🔗 Nodes Used

Discord, Spotify, YouTube, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
