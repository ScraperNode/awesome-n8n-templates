# 📱 Post and queue TikTok, Reels and Shorts with PostWire and an n8n form

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects a vertical video via an n8n form, uploads it to PostWire, generates platform-specific captions for TikTok, Instagram Reels, and YouTube Shorts, lets the uploader review edits, then publishes immediately or schedules to the next queue slot and logs results to Google Sheets.

## How it works
1. Receives a submission from an n8n Form with a video file, a description, target networks, and a posting time choice.
2. Uploads the video to PostWire to get a public media URL that social platforms can access.
3. Uses PostWire to generate draft captions for each selected platform, including a YouTube title.
4. Presents a review form where the uploader edits captions and either confirms Publish or selects Cancel.
5. If publishing is confirmed, sends the edited drafts to PostWire to either publish now or schedule for the next available queue slot.
6. Aggregates the publishing/scheduling results, appends a summary row to Google Sheets, and displays the resulting links or status message on the final form page.

## Setup
1. Install the PostWire community node, create a PostWire account, connect your TikTok/Instagram/YouTube channels in PostWire, and add your PostWire API credential in n8n.
2. Add a Google Sheets credential, select the target spreadsheet and sheet, and ensure it has columns for date, about, networks, when, and result.
3. Activate the workflow and share the n8n form production URL with uploaders, and confirm your n8n instance supports file uploads for the form trigger.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
