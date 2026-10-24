# 📊 Monitor TikTok competitors with Scavio AI, Google Sheets, and Gmail alerts

> ⚡ **31 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works

1. Every 6 hours, reads competitor TikTok usernames from a Google Sheet.
2. Resolves each username to a TikTok profile and fetches the 5 most recent posts via the Scavio API.
3. Compares fetched posts against the last known video ID to detect new content.
4. Logs every new post to a **Posts** tab with description, views, likes, comments, shares, and a direct TikTok link.
5. Sends a Gmail alert summarizing what each competitor just posted.
6. Saves `sec_user_id` and `last_video_id` back to the **Competitors** tab so the next run picks up where it left off.

## Set up steps

1. Install the **Scavio** community node (`n8n-nodes-scavio`) from Settings &gt; Community Nodes.
2. Get a free Scavio API key at [dashboard.scavio.dev](https://dashboard.scavio.dev) -- 250 credits/mo on the free tier.
3. Create a Google Sheet with two tabs:
   - **Competitors** -- columns: `username`, `sec_user_id`, `last_video_id`. Add one TikTok username per row (without @). Leave `sec_user_id` and `last_video_id` blank; they are auto-populated.
   - **Posts** -- columns: `username`, `description`, `views`, `likes`, `comments`, `shares`, `link`, `detected_at`.
4. Open each Google Sheets node, attach your Google Sheets OAuth2 credential, and select your spreadsheet and tab.
5. Open the **Alert new posts** Gmail node and set `sendTo` to your email address.
6. Attach your Scavio API credential to the **Get Profile** and **Get Latest Posts** nodes.
7. Activate the workflow.

## Categories

Marketing, Social Media, TikTok, Competitor Analysis

## Cost

Each competitor uses 2 Scavio API credits per run (1 profile lookup + 1 posts fetch). Running 5 competitors every 6 hours uses ~20 credits/day, fitting comfortably within the free tier of 250 credits/month.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
