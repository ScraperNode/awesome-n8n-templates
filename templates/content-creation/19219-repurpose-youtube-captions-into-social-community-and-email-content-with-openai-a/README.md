# 🎬 Repurpose YouTube captions into social, community, and email content with OpenAI and Notion

> ⚡ **8 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a schedule or manually to fetch your latest YouTube video, download its official captions via the YouTube Data API, and use OpenAI to draft platform-specific marketing copy, saving Facebook, email, Skool, and Udemy drafts into a Notion database for review.

## How it works
1. Runs on a cron schedule (Tuesdays and Fridays at 15:00) or via manual execution.
2. Retrieves the most recent video from the authenticated YouTube channel using the YouTube Data API.
3. Lists available caption tracks for the video and stops if no captions are found.
4. Downloads the first available caption track as an SRT file via the YouTube Data API and converts it into clean plain text.
5. Sends the cleaned transcript and video link to OpenAI to generate a Facebook post, an email campaign draft, a Skool announcement, and a Udemy announcement.
6. Creates a new page in a Notion database with the video title and the four generated content drafts stored in dedicated properties.

## Setup
1. Connect a Google OAuth2 credential with access to the YouTube Data API (including captions) for the HTTP requests.
2. Add an OpenAI API credential for the content generation steps.
3. Add a Notion credential, replace the Notion database ID, and ensure the database has properties named Video Name, Facebook Post, Email Campaign, Skool Announcement, and Udemy Announcement.
4. Replace any [YOUR NAME] placeholders in the OpenAI prompts to match your preferred signature and voice.
5. (Optional) Adjust the cron expression if you want the workflow to run at different times.

## 🔗 Nodes Used

HTTP Request, Notion, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
