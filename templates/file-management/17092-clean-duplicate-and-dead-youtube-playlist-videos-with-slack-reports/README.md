# 📁 Clean duplicate and dead YouTube playlist videos with Slack reports

> ⚡ **5 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to scan a YouTube playlist, flagging deleted/unavailable/private videos and duplicate entries, optionally removing them from the playlist, and posting a cleanup report to a Slack channel.

## How it works
1. Runs every week on a schedule trigger.
2. Loads the target YouTube playlist ID, the dry-run toggle, and the Slack channel ID.
3. Retrieves all items from the specified YouTube playlist and looks up each referenced video’s status.
4. Classifies each playlist item as active or dead (deleted/unavailable/private) and flags duplicates by video ID while keeping the first occurrence.
5. If dry run is disabled, deletes the flagged playlist items from YouTube in batches.
6. Builds a summary of what was found/removed and posts the report to the configured Slack channel.

## Setup
1. Connect a YouTube (Google) OAuth2 credential with permissions enabled to read playlists and delete playlist items as needed.
2. Connect a Slack credential with permission enabled to post messages to your chosen channel.
3. Set your `playlistId`, `slackChannelId`, and (optionally) `dryRun` in the workflow options before turning on the workflow.

## Requirements
- A Google account with YouTube access and an OAuth2 credential authorized to read the playlist and delete playlist items.
- A Slack workspace and a Slack credential with permission to post to your target channel.
- A YouTube playlist you own or manage, plus its playlistId.

## Customization
- Change how often it runs by editing the Schedule Trigger, for example daily or monthly instead of weekly.
- Adjust the flagging rules in the Code node, for example to treat unlisted videos as dead too, or to keep the last copy of a duplicate instead of the first.
- Swap Slack for another notification channel such as email, Discord, or Teams.
- Leave dryRun set to true permanently to run it as a read-only monitor that reports but never deletes.

## Additional info
Deleting a playlist item is permanent, so the workflow ships with dryRun set to true and only reports what it would remove until you turn that off in the Set Playlist and Options node. Reads and deletes both count against your daily YouTube Data API quota, roughly one video lookup per playlist item per run, so a very large playlist will consume more of your quota. Unlisted videos are treated as valid and kept; only deleted, unavailable, and private videos are flagged as dead. Deletion is keyed on the playlist item ID rather than the video ID, so only the playlist entry is removed and the underlying video is never affected. The video lookup uses an error output, so a single missing video never stops the run.

## 🔗 Nodes Used

Slack, YouTube, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
