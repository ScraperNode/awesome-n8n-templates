# 📱 Monitor YouTube video publishing status with Google Sheets and Slack

> ⚡ **15 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow checks your YouTube channel every 30 minutes, syncs each video’s privacy status to a Google Sheets tracking sheet, and sends Slack notifications when a video is private (needs setup) or public (ready to promote).

## How it works
1. Runs every 30 minutes on a schedule.
2. Uses the YouTube Data API (via Google OAuth) to find the authenticated channel’s uploads playlist and fetch the 10 most recent videos with snippet and status details.
3. Processes each video and checks whether it was published within the last 30 minutes.
4. For newly uploaded videos, routes by YouTube privacy status (private vs public), updates the matching Google Sheets row by Video ID, and sends the corresponding Slack alert.
5. For older videos, looks up the video in Google Sheets by Video ID and compares the stored Status with the latest YouTube privacy status.
6. If the status changed, updates the Status in Google Sheets and sends the appropriate Slack notification; otherwise, it takes no action.

## Setup
1. Create or select a Google Sheet for tracking and ensure it includes columns named Video ID and Status.
2. Add a Google OAuth2 credential with access to the YouTube Data API and Google Sheets, and connect it to the HTTP Request and Google Sheets steps.
3. Add a Slack OAuth2 credential and set the target Slack channel ID in each Slack message step.
4. Replace REPLACE_WITH_VIDEO_TRACKING_SHEET_ID with your Google Sheets document ID and confirm the workflow points to the correct sheet tab (gid=0 by default).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
