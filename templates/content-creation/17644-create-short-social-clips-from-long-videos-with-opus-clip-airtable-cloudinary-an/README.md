# 🎬 Create short social clips from long videos with Opus Clip, Airtable, Cloudinary and Buffer

> ⚡ **50 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow pulls queued long-form video URLs from Airtable, sends them to Opus Clip to generate short clips, uploads finished clips to Cloudinary for public hosting, stores them back in Airtable, and posts one clip per slot to Instagram Reels and TikTok via Buffer.

## How it works
1. Runs weekly (or on manual trigger) to find up to two Airtable Concepts records with Status set to Todo.
2. Marks each selected Concepts record as Processed in Airtable and sends its Video URL to the Opus Clip API to start a clip project with a webhook callback.
3. Receives Opus Clip’s completion callback via a webhook, responds immediately, and waits one hour before continuing.
4. Fetches the exportable clips for the completed Opus project, filters out clips without an export URL, and limits processing to 10 clips.
5. Downloads each clip, uploads it to Cloudinary to get a public video URL, and creates a new Airtable Content record with Title, Video URL, and Status set to Ready to Post.
6. Runs on two daily schedules, selects one random Airtable Content record with Status Ready to Post, and publishes it as an Instagram Reel and a TikTok post through Buffer.
7. Marks the posted Airtable Content record as Posted to prevent reposting the same clip.

## Setup
1. Create credentials for Airtable, Cloudinary, Buffer, and an HTTP Header Auth credential for the Opus Clip API.
2. In Airtable, create a base with a Concepts table (Video URL, Status) and a Content table (Title, Video URL, Status) and set the Status option values used by the workflow.
3. Replace the Airtable base ID and table IDs in all Airtable nodes with your own.
4. Copy the production webhook URL from the Opus callback webhook and paste it into the WEBHOOK URL field in the Opus Clip API request body.
5. Set your Buffer organization ID plus the Instagram and TikTok channel IDs in the Buffer posting steps, and adjust the schedules and Opus clip template/duration settings as needed.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
