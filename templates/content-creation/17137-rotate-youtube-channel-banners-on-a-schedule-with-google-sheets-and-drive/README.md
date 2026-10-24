# 🎬 Rotate YouTube channel banners on a schedule with Google Sheets and Drive

> ⚡ **40 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily at 8am to rotate a YouTube channel banner based on a schedule stored in Google Sheets, downloading the banner image from Google Drive, applying it via the YouTube API, and updating the sheet to mark the banner as applied.

## How it works
1. Runs every day at 8am on a schedule trigger.
2. Reads the banner rotation plan from Google Sheets, including swap date, Google Drive file ID, label, and status.
3. Filters the sheet rows to keep banners due today or overdue that are not yet marked as Applied, and sorts them oldest-first.
4. Downloads the selected banner image from Google Drive and uploads it as a YouTube channel banner.
5. Fetches the current YouTube channel branding settings and updates the channel to activate the new banner while preserving existing branding fields.
6. Updates the matching Google Sheets row to set Status to Applied and outputs a log record with the swap timestamp, channel ID, and banner details.

## Setup
1. Add Google OAuth credentials for YouTube Data API and connect them to the YouTube nodes.
2. Add Google Sheets and Google Drive credentials and connect them to the respective nodes.
3. Set your YouTube channel ID in the banner configuration step.
4. Update the Google Sheets document ID and sheet/tab name in both Google Sheets steps, and ensure the sheet contains columns named Swap Date, Banner Drive File ID, Label, and Status.

## 🔗 Nodes Used

Google Sheets, Google Drive, YouTube, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
