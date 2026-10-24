# 📊 Audit YouTube video metadata changes with Google Sheets and Slack

> ⚡ **21 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily to fetch all videos from a YouTube channel, compare key metadata fields against a prior snapshot stored in Google Sheets, log any differences, and optionally post a summary to Slack.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Reads your YouTube channel’s uploads playlist and retrieves each video’s current title, description, tags, privacy status, and category.
3. Loads the previous snapshot from Google Sheets and compares the tracked fields to detect added, removed/hidden, or changed metadata.
4. When changes are found, appends each changed field (old value vs new value) to a Google Sheets change log.
5. Clears and rewrites the snapshot in Google Sheets with the latest metadata so the next run compares against today’s baseline.
6. Posts a summary to a Slack channel when changes are detected (or when alwaysNotify is enabled).

## Setup
1. Add a YouTube (Google) OAuth2 credential and set your target channel ID in the audit options.
2. Add a Google Sheets credential, set the spreadsheet ID, and ensure your spreadsheet has a Snapshot tab and a Change Log tab mapped in the Google Sheets steps.
3. Add a Slack credential and set the target Slack channel ID for the summary message.
4. (Optional) Enable alwaysNotify to post to Slack even when no changes are detected, and adjust the daily schedule time if needed.

## 🔗 Nodes Used

Google Sheets, Slack, YouTube, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
