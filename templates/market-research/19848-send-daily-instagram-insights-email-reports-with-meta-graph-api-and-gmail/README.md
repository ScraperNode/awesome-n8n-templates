# 📊 Send daily Instagram insights email reports with Meta Graph API and Gmail

> ⚡ **64 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily and pulls an Instagram Business account’s profile, posts, and per-post insights from the Meta Graph API, then compiles a mobile-friendly HTML summary and sends the report to a recipient via Gmail.

## How it works
1. Runs every day at 23:59 based on the schedule trigger.
2. Sets the Instagram Page access token, Page/IG user ID, API version, timezone offset, and the target date derived from the trigger.
3. Fetches the Instagram profile details and up to 100 recent media posts from the Meta Graph API.
4. Filters posts to only those published within the configured local-day window and splits them into individual items (or generates a no-posts placeholder if none match).
5. For each matching post, requests post insights (likes, comments, saves, reach, and additionally views/shares where available) from the Meta Graph API and merges them back into each post.
6. Aggregates totals and breakdowns for photo vs video posts, identifies top-performing posts by key metrics, and generates an HTML email report.
7. Sends the formatted report email through Gmail to the configured recipient.

## Setup
1. Create a Meta/Instagram Graph API access token with permissions to read your Instagram Business account, and set the access token, Instagram Business account (Page/IG user) ID, Graph API version, and timezone offset.
2. Add a Gmail OAuth2 credential and select it in the Gmail email-sending step.
3. Update the recipient email address in the report-building code so the report is delivered to the correct inbox.
4. If needed, adjust the schedule time to match when you want the daily report to run.

## Requirements
- * INSTAGRAM / META CREDENTIALS*
- Instagram Page Access Token (Long-Lived or System User Token)
- Must have these permissions: instagram_basic, instagram_manage_insights, pages_read_engagement, pages_show_list
- Get it from Meta Business Suite → Settings → Advanced → Page Access Tokens, or via Graph API Explorer. Use a System User Token if possible — it never expires. Do NOT paste the token with a leading space.
- Instagram Business Account ID (Page ID)
- A numeric ID like 170000000000000. Find it by calling:
- graph.facebook.com/me?fields=id&access_token=YOUR_TOKEN
- The account must be an Instagram Business or Creator account — personal accounts are not supported by Meta's Graph API.
- *EMAIL CREDENTIALS*
- Gmail OAuth2 Connection inside n8n
- Go to n8n → Credentials → New → Gmail OAuth2 and connect the Gmail account you want to send reports from.
- Also set the recipient email inside the 🎨 Build HTML Email Report node:
- const recipientEmail = 'your@email.com';
- *TIMEZONE*
- Set timezoneOffsetHours in the 📝 Instagram Page Credentials node to your UTC offset.
- Bangladesh = 6, India = 5.5, UAE = 4, UK = 0, USA EST = -5
- n8n INSTANCE
- A running n8n instance (self-hosted or cloud). No extra plugins or packages needed — the workflow uses only built-in n8n nodes.

## Customization
- *INSTAGRAM PAGE*
- Swap in any Instagram Business or Creator account by updating the Access Token and Page ID in the 📝 Instagram Page Credentials node. No other node needs to be touched.
- *REPORT RECIPIENT EMAIL*
- Change who receives the daily report by updating the recipientEmail constant inside the 🎨 Build HTML Email Report node. Any valid email address works.
- *SCHEDULE TIME*
- By default the report runs every day at 23:59. You can change the trigger time inside the Schedule Trigger node — for example, run it at 08:00 for a morning summary instead.
- *TIMEZONE*
- Set your local UTC offset in the 📝 Instagram Page Credentials node (timezoneOffsetHours). This controls which posts are counted as "today's posts" based on your local midnight-to-midnight window.
- *API VERSION*
- The apiVersion field defaults to v19.0. If Meta releases a newer Graph API version, simply update this value in the 📝 Instagram Page Credentials node — no other changes required.
- *EMAIL SENDER ACCOUNT*
- Connect any Gmail account via OAuth2 in the 📧 Send Report Email node. The report will be sent from whichever Gmail account you authenticate.
- *REPORT DATE (Manual Override)*
- Although the target date is pulled automatically from the schedule trigger, you can manually override the targetYear, targetMonth, and targetDay values inside the ⚙️ Config: Page & Date node to re-run a report for any past date.
- *POST LIMIT*
- By default the workflow fetches your latest 100 posts from the Instagram API and filters today's posts from that pool. If your account publishes more than 100 posts per day, increase the limit parameter inside the Get Instagram Media node.
- *INSIGHTS METRICS*
- For photo posts, the workflow tracks: Reach, Likes, Comments, Shares, Saves, Total Interactions.
- For video / reel posts, it additionally tracks: Views.
- You can add or remove metrics by editing the metric parameter inside the 🌐 Get Post Insights node, as long as the metrics are supported by Meta's Graph API for that media type.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
