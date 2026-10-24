# 📱 Schedule Instagram posts and reels from Google Sheets with PostWire

> ⚡ **34 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow uses Google Sheets as a content calendar to schedule Instagram posts and Reels via PostWire, updates each row with scheduling and publishing results, and sends Gmail alerts when scheduling or publishing fails.

## How it works
1. Runs every 15 minutes on a schedule.
2. Reads Google Sheets rows where the status column is set to `ready`.
3. Filters out rows missing a valid https media URL, a publish time, or a caption.
4. Schedules each valid item in PostWire for the row’s `publish_at` timestamp and target platforms from the `networks` column (defaulting to Instagram).
5. Updates the Google Sheets row as `scheduled` with the PostWire schedule ID, or marks it as `error` and emails the fix details via Gmail.
6. Listens for PostWire events when a post is published or fails on a social platform.
7. Writes back to Google Sheets with `published` and the live post URL, or marks the row `failed` and emails the failure reason via Gmail.

## Setup
1. Install and configure the PostWire community nodes, create a PostWire account, connect your social networks, and add a PostWire API credential in n8n.
2. Add Google Sheets credentials and select the target spreadsheet and sheet in all Google Sheets nodes.
3. Create a sheet with the required columns (at minimum `publish_at`, `caption`, `media_url`, `status`, and a unique `row_number`, plus `networks`, `schedule_id`, `post_url`, and `note` for write-backs).
4. Add a Gmail credential and set the notification email address in the Settings node and the “Email me what failed” node.
5. Ensure `media_url` values are publicly accessible https file URLs (not a Google Drive share page) and set rows to `ready` to be picked up.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
