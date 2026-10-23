# 📱 Engage with relevant Instagram posts using OpenAI and Postgres

> ⚡ **27 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This scheduled workflow pulls Instagram influencers from Postgres, fetches each creator’s latest post via Unipile, evaluates caption and image relevance with OpenAI, and—when qualified—generates and publishes a like and comment through Unipile while updating the influencer record in Postgres.

## How it works
1. Runs daily on a schedule.
2. Reads Instagram influencer records from a Postgres database and processes them one by one.
3. Uses the Unipile API to fetch up to five recent posts per influencer and selects the latest post, skipping creators with no recent post or posts that were already commented on.
4. Analyzes the post caption with OpenAI to determine language, category, sentiment, and a relevance score, and analyzes the preview image with OpenAI vision.
5. Combines the text and image evaluations and continues only when OpenAI recommends engaging and the creator relevance score is at least 70.
6. Generates a 15–30 word professional comment with OpenAI, checks that the post has not already been processed, then likes the post and publishes the comment via the Unipile API.
7. Updates the influencer record in Postgres with the post URL, last commented post ID, and timestamp.

## Setup
1. Add Postgres credentials and ensure your database contains an `_influencer` table with the fields used in the workflow (including `username`, `influncrerProviderId`, and `lastCommentedPostId`).
2. Add a Unipile API credential (HTTP Header Auth) and replace the hard-coded `account_id` values with your own Unipile Instagram account IDs.
3. Add OpenAI credentials for both the text-generation models and the vision-capable model used for image analysis.
4. Confirm the schedule trigger time (timezone Asia/Kolkata) matches when you want the agent to run.

## 🔗 Nodes Used

HTTP Request, Postgres, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
