# 📱 Post daily LinkedIn and Instagram content with Airtable, Claude, OpenAI and Buffer

> ⚡ **2,839 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily and pulls active topics from Airtable, uses Anthropic Claude to write a LinkedIn-style caption, generates a matching illustration with the OpenAI Images API, hosts the image on ImgBB, schedules posts to LinkedIn and Instagram via Buffer, and logs the result back to Airtable.

## How it works
1. Runs every day at 08:00 in the workflow timezone.
2. Reads all active topic ideas from an Airtable “Topics” table and fetches the 14 most recent entries from an Airtable “Posts” history table.
3. Excludes topics used in the last 14 posts, randomly selects a fresh topic, and stops without publishing if no unused topic is available.
4. Sends the selected topic to the Anthropic Messages API (Claude) to generate a Dutch social post caption.
5. Uses the caption and topic to generate a 1024×1024 branded image with the OpenAI Images API, converts the base64 response to a PNG, and uploads it to ImgBB to get a public image URL.
6. Creates/schedules an image post with the caption and ImgBB URL to LinkedIn and then Instagram via Buffer.
7. Logs the topic, caption, and image URL to Airtable so the topic is avoided for the next 14 runs.

## Setup
1. Create Airtable credentials and replace the Airtable base ID and table IDs for the “Topics” and “Posts” tables.
2. Ensure your Airtable schema includes a “Topics” table with fields “Topic” (text) and “Active” (checkbox) and a “Posts” table with a “Date” Created time field plus “Topic”, “Post”, and “Image URL” fields.
3. Add an Anthropic (Claude) API credential and customize the prompt in the Claude request body for your brand, tone, and rules.
4. Add an OpenAI API credential and adjust the image prompt/style settings if needed.
5. Get an ImgBB API key and paste it into the upload request’s `key` query parameter (or swap in another hosting provider).
6. Connect Buffer credentials and set your Buffer organization ID plus the LinkedIn and Instagram channel IDs used for posting.

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
