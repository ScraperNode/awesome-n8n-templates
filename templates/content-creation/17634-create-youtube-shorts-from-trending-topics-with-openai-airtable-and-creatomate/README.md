# 🎬 Create YouTube Shorts from trending topics with OpenAI, Airtable and Creatomate

> ⚡ **167 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow discovers trending topics from YouTube Most Popular and Google Trends, uses OpenAI to rank and draft Shorts-ready angles, stores items for review in Airtable, then sends approved records to Creatomate to render a video and writes the render status and URL back to Airtable.

## How it works
1. Runs on a schedule (three times daily for discovery and every minute for approvals) or via manual triggers for testing.
2. Pulls YouTube Most Popular videos via the YouTube Data API and reads the Google Trends RSS feed for the configured region.
3. Normalizes, deduplicates, and packages the combined trend signals, then asks OpenAI to select up to five high-scoring commentary opportunities with a hook and short script.
4. Creates an Airtable review record for each selected opportunity with rights status and metadata set for human approval.
5. Polls Airtable for records with Status set to Approved, validates required fields and an approved rights status, and marks valid records as Queued (or Failed with an error).
6. Sends the approved record payload to an n8n webhook that submits a render to Creatomate using a template with dynamic Hook and Supporting_Text fields.
7. Polls Creatomate until the render succeeds or the retry limit is reached, then updates the Airtable record with Rendered/Failed, the render job ID, and the final render URL.

## Setup
1. Create credentials for OpenAI API, Airtable HTTP Header Auth (Bearer token), and Creatomate HTTP Header Auth (Bearer API key).
2. In the three configuration nodes, replace all YOUR_… placeholders with your YouTube API key, Airtable base/table IDs, Creatomate template ID, and polling limits.
3. In Creatomate, copy or create a template that exposes dynamic elements named Hook and Supporting_Text.
4. Copy the render webhook URL from the renderer branch and paste it into the approval branch’s renderer_webhook_url setting.
5. Ensure your Airtable table has the fields used by the workflow (for example Status, Rights_Status, Hook, Script, Render_Job_ID, Render_URL, and Error_Log) and only set Status to Approved after human rights review.

## 🔗 Nodes Used

HTTP Request, RSS Read, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
